const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const { createTickets } = require("../controllers/ticketController");
const { sendTicketEmails } = require("../controllers/emailController");

const router = express.Router();

// ================= RAZORPAY =================

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ================= CREATE ORDER =================

router.post("/create-order", async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount || Number(amount) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Valid amount is required",
            });
        }

        const options = {
            amount: Math.round(Number(amount) * 100),
            currency: "INR",
            receipt: `DANDIYA_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return res.status(200).json({
            success: true,
            order,
        });

    } catch (error) {
        console.error("❌ CREATE ORDER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create payment order",
        });
    }
});

// ================= VERIFY PAYMENT =================

router.post("/verify-payment", async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,

            // Customer details
            customerName,
            phone,
            email,
            address,

            // Cart items
            items,
        } = req.body;

        // ================= VALIDATION =================

        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {
            return res.status(400).json({
                success: false,
                message: "Payment details are missing",
            });
        }

        if (!customerName || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: "Customer details are missing",
            });
        }

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart items are missing",
            });
        }

        // ================= VERIFY RAZORPAY SIGNATURE =================

        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                `${razorpay_order_id}|${razorpay_payment_id}`
            )
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {
            console.error("❌ INVALID RAZORPAY SIGNATURE");

            return res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }

        console.log("✅ RAZORPAY SIGNATURE VERIFIED");

        // ================= FETCH RAZORPAY ORDER =================

        const order = await razorpay.orders.fetch(
            razorpay_order_id
        );

        if (!order) {
            return res.status(400).json({
                success: false,
                message: "Razorpay order not found",
            });
        }

        console.log("✅ RAZORPAY ORDER FETCHED:", order.id);

        // ================= CREATE TICKETS =================

        const tickets = await createTickets({
            customerName,
            phone,
            email,
            address,
            items,

            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
        });

        console.log(
            `🎟️ ${tickets.length} TICKET(S) CREATED SUCCESSFULLY`
        );

        // ================= SEND EMAILS =================

        await sendTicketEmails({
            customerName,
            customerEmail: email,
            phone,
            address,
            tickets,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
        });

        console.log("📧 CUSTOMER + ADMIN EMAIL PROCESS COMPLETED");

        // ================= SUCCESS RESPONSE =================

        return res.status(200).json({
            success: true,
            message: "Payment verified and ticket created successfully",

            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,

            tickets: tickets.map((ticket) => ({
                ticketId: ticket.ticketId,
                customerName: ticket.customerName,
                email: ticket.email,
                phone: ticket.phone,
                address: ticket.address,

                passType: ticket.passType,
                quantity: ticket.quantity,
                price: ticket.price,
                amount: ticket.amount,

                qrToken: ticket.qrToken,
                qrCode: ticket.qrCode,

                ticketStatus: ticket.ticketStatus,
                paymentStatus: ticket.paymentStatus,
            })),
        });

    } catch (error) {
        console.error(
            "❌ PAYMENT VERIFICATION / TICKET ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Payment verified but ticket creation failed",
            error: error.message,
        });
    }
});

module.exports = router;