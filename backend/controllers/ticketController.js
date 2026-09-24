const crypto = require("crypto");
const QRCode = require("qrcode");
const Ticket = require("../models/ticketModel");

// ================= CREATE MULTIPLE TICKETS =================

const createTickets = async ({
    customerName,
    phone,
    email,
    address,
    items,
    razorpayOrderId,
    razorpayPaymentId,
}) => {
    try {
        // ================= VALIDATION =================

        if (!customerName || !phone || !email) {
            throw new Error(
                "Customer name, phone and email are required."
            );
        }

        if (!Array.isArray(items) || items.length === 0) {
            throw new Error(
                "No valid cart items found."
            );
        }

        if (!razorpayOrderId || !razorpayPaymentId) {
            throw new Error(
                "Razorpay payment details are missing."
            );
        }

        const createdTickets = [];

        // ================= CREATE TICKET FOR EACH ITEM =================

        for (const item of items) {

            // Ignore invalid / zero quantity items
            if (
                !item ||
                !item.id ||
                !item.quantity ||
                Number(item.quantity) <= 0
            ) {
                continue;
            }

            // ================= ITEM DATA =================

            const quantity = Number(item.quantity);
            const price = Number(item.price || 0);

            if (price < 0) {
                continue;
            }

            // Total amount for this pass type
            const amount = price * quantity;

            // ================= UNIQUE TICKET ID =================

            const ticketId = `DND-${crypto
                .randomBytes(5)
                .toString("hex")
                .toUpperCase()}`;

            // ================= UNIQUE QR TOKEN =================

            const qrToken = crypto
                .randomBytes(32)
                .toString("hex");

            // ================= GENERATE QR =================

            const qrCode = await QRCode.toDataURL(
                qrToken,
                {
                    errorCorrectionLevel: "H",
                    type: "image/png",
                    margin: 2,
                    width: 500,
                }
            );

            // ================= PASS TYPE =================

            const passType =
                item.name ||
                item.title ||
                "Dandiya Pass";

            // ================= SAVE TICKET =================

            const ticket = await Ticket.create({
                ticketId,

                customerName,
                phone,
                email,
                address: address || "",

                // Save original cart item
                items: [
                    {
                        id: String(item.id),

                        name: item.name || "",

                        title: item.title || "",

                        type: item.type || "",

                        price,

                        quantity,
                    },
                ],

                // Pass details
                passType,

                quantity,

                price,

                amount,

                // Razorpay details
                razorpayOrderId,
                razorpayPaymentId,

                // Payment is already verified
                paymentStatus: "PAID",

                // QR details
                qrToken,
                qrCode,

                // Entry status
                ticketStatus: "ACTIVE",
            });

            createdTickets.push(ticket);

            console.log(
                `🎟️ TICKET CREATED: ${ticket.ticketId} | ${passType} | Qty: ${quantity}`
            );
        }

        // ================= FINAL VALIDATION =================

        if (createdTickets.length === 0) {
            throw new Error(
                "No valid tickets could be created."
            );
        }

        console.log(
            `✅ TOTAL TICKETS CREATED: ${createdTickets.length}`
        );

        return createdTickets;

    } catch (error) {
        console.error(
            "❌ MULTIPLE TICKET CREATION ERROR:",
            error
        );

        throw error;
    }
};


// ================= SCAN / VERIFY TICKET =================

const scanTicket = async (qrToken) => {
    try {

        // ================= VALIDATE QR TOKEN =================

        if (!qrToken) {
            return {
                valid: false,
                message: "QR token is required.",
            };
        }

        // ================= FIND TICKET =================

        const ticket = await Ticket.findOne({
            qrToken: qrToken,
        });

        // ================= INVALID QR =================

        if (!ticket) {
            return {
                valid: false,
                message: "Invalid QR code. Ticket not found.",
            };
        }

        // ================= ALREADY USED =================

        if (ticket.ticketStatus === "USED") {
            return {
                valid: false,
                message: "Ticket already used.",
                ticket: {
                    ticketId: ticket.ticketId,
                    customerName: ticket.customerName,
                    passType: ticket.passType,
                    quantity: ticket.quantity,
                    usedAt: ticket.usedAt,
                },
            };
        }

        // ================= CANCELLED TICKET =================

        if (ticket.ticketStatus === "CANCELLED") {
            return {
                valid: false,
                message: "Ticket has been cancelled.",
                ticket: {
                    ticketId: ticket.ticketId,
                    customerName: ticket.customerName,
                    passType: ticket.passType,
                    quantity: ticket.quantity,
                },
            };
        }

        // ================= VALID ACTIVE TICKET =================

        if (ticket.ticketStatus === "ACTIVE") {

            // Mark ticket as USED
            ticket.ticketStatus = "USED";
            ticket.usedAt = new Date();

            await ticket.save();

            console.log(
                `✅ TICKET VERIFIED: ${ticket.ticketId} | ${ticket.passType}`
            );

            return {
                valid: true,
                message: "Valid ticket. Entry allowed.",
                ticket: {
                    ticketId: ticket.ticketId,
                    customerName: ticket.customerName,
                    phone: ticket.phone,
                    email: ticket.email,
                    passType: ticket.passType,
                    quantity: ticket.quantity,
                    amount: ticket.amount,
                    ticketStatus: ticket.ticketStatus,
                    usedAt: ticket.usedAt,
                },
            };
        }

        // ================= UNKNOWN STATUS =================

        return {
            valid: false,
            message: "Ticket status is invalid.",
        };

    } catch (error) {

        console.error(
            "❌ SCAN TICKET ERROR:",
            error
        );

        throw error;
    }
};


// ================= EXPORT =================

module.exports = {
    createTickets,
    scanTicket,
};