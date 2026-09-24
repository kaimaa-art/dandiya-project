const mongoose = require("mongoose");

// ================= TICKET ITEM SCHEMA =================

const ticketItemSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            default: "",
        },

        title: {
            type: String,
            default: "",
        },

        type: {
            type: String,
            default: "",
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    {
        _id: false,
    }
);

// ================= TICKET SCHEMA =================

const ticketSchema = new mongoose.Schema(
    {
        ticketId: {
            type: String,
            required: true,
            unique: true,
        },

        customerName: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
            match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number."],
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        address: {
            type: String,
            default: "",
            trim: true,
        },

        // ================= CART ITEMS =================

        items: {
            type: [ticketItemSchema],
            required: true,
        },

        // ================= PASS DETAILS =================

        // One QR = one pass type / cart item
        passType: {
            type: String,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },

        // ================= RAZORPAY =================

        razorpayOrderId: {
            type: String,
            required: true,
        },

        razorpayPaymentId: {
            type: String,
            required: true,
        },

        // ================= PAYMENT STATUS =================

        paymentStatus: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED"],
            default: "PAID",
        },

        // ================= QR CODE =================

        qrToken: {
            type: String,
            required: true,
            unique: true,
        },

        qrCode: {
            type: String,
            required: true,
        },

        // ================= TICKET STATUS =================

        ticketStatus: {
            type: String,
            enum: ["ACTIVE", "USED", "CANCELLED"],
            default: "ACTIVE",
        },

        usedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// ================= MODEL =================

module.exports = mongoose.model("Ticket", ticketSchema);