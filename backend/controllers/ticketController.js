// const crypto = require("crypto");
// const QRCode = require("qrcode");
// const Ticket = require("../models/ticketModel");

// // ================= CREATE TICKET =================

// const createTicket = async ({
//     customerName,
//     phone,
//     email,
//     address,
//     items,
//     passType,
//     quantity,
//     amount,
//     razorpayOrderId,
//     razorpayPaymentId,
// }) => {
//     try {
//         // Unique Ticket ID
//         const ticketId = `DND-${crypto
//             .randomBytes(5)
//             .toString("hex")
//             .toUpperCase()}`;

//         // Secure random QR token
//         const qrToken = crypto.randomBytes(32).toString("hex");
//         const qrCode = await QRCode.toDataURL(qrToken);

//         const ticket = await Ticket.create({
//             ticketId,
//             customerName,
//             phone,
//             email,
//             address,
//             items,
//             passType,
//             quantity,
//             amount,
//             razorpayOrderId,
//             razorpayPaymentId,
//             paymentStatus: "PAID",
//             qrToken,
//             qrCode,
//             ticketStatus: "ACTIVE",
//         });

//         return ticket;
//     } catch (error) {
//         console.error("❌ Ticket Creation Error:", error);
//         throw error;
//     }
// };

// module.exports = {
//     createTicket,
// };









// const crypto = require("crypto");
// const QRCode = require("qrcode");
// const Ticket = require("../models/ticketModel");

// // ================= CREATE MULTIPLE TICKETS =================

// const createTickets = async ({
//     customerName,
//     phone,
//     email,
//     address,
//     items,
//     razorpayOrderId,
//     razorpayPaymentId,
// }) => {
//     try {
//         const createdTickets = [];

//         for (const item of items) {
//             // Ignore invalid / zero quantity items
//             if (!item || !item.quantity || item.quantity <= 0) {
//                 continue;
//             }

//             // Unique ticket ID
//             const ticketId = `DND-${crypto
//                 .randomBytes(5)
//                 .toString("hex")
//                 .toUpperCase()}`;

//             // Unique QR token
//             const qrToken = crypto.randomBytes(32).toString("hex");

//             // Generate QR
//             const qrCode = await QRCode.toDataURL(qrToken);

//             // Price of this pass
//             const price = Number(item.price || 0);

//             // Total amount for this pass type
//             const amount = price * Number(item.quantity);

//             // Create ONE ticket for ONE unique pass type
//             const ticket = await Ticket.create({
//                 ticketId,

//                 customerName,
//                 phone,
//                 email,
//                 address,

//                 passType:
//                     item.name ||
//                     item.title ||
//                     "Dandiya Pass",

//                 quantity: Number(item.quantity),

//                 price,

//                 amount,

//                 razorpayOrderId,
//                 razorpayPaymentId,

//                 paymentStatus: "PAID",

//                 qrToken,
//                 qrCode,

//                 ticketStatus: "ACTIVE",
//             });

//             createdTickets.push(ticket);
//         }

//         return createdTickets;
//     } catch (error) {
//         console.error("❌ Multiple Ticket Creation Error:", error);
//         throw error;
//     }
// };

// module.exports = {
//     createTickets,
// };














































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

// ================= EXPORT =================

module.exports = {
    createTickets,
};