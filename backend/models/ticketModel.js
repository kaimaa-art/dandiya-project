// const mongoose = require("mongoose");

// const ticketSchema = new mongoose.Schema(
//     {
//         ticketId: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         customerName: {
//             type: String,
//             required: true,
//         },

//         phone: {
//             type: String,
//             required: true,
//         },

//         email: {
//             type: String,
//             required: true,
//         },

//         address: {
//             type: String,
//             default: "",
//         },

//         items: {
//             type: [
//                 {
//                     id: String,
//                     name: String,
//                     title: String,
//                     type: String,
//                     price: Number,
//                     quantity: Number,
//                 },
//             ],
//             required: true,
//         },

//         passType: {
//             type: String,
//             required: true,
//         },

//         quantity: {
//             type: Number,
//             required: true,
//         },

//         amount: {
//             type: Number,
//             required: true,
//         },

//         razorpayOrderId: {
//             type: String,
//             required: true,
//         },

//         razorpayPaymentId: {
//             type: String,
//             required: true,
//         },

//         paymentStatus: {
//             type: String,
//             enum: ["PENDING", "PAID", "FAILED"],
//             default: "PENDING",
//         },

//         qrToken: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         qrCode: {
//             type: String,
//             required: true,
//         },

//         ticketStatus: {
//             type: String,
//             enum: ["ACTIVE", "USED", "CANCELLED"],
//             default: "ACTIVE",
//         },

//         usedAt: {
//             type: Date,
//             default: null,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = mongoose.model("Ticket", ticketSchema);




































// const mongoose = require("mongoose");

// const ticketItemSchema = new mongoose.Schema(
//     {
//         id: {
//             type: String,
//             required: true,
//         },

//         name: {
//             type: String,
//             default: "",
//         },

//         title: {
//             type: String,
//             default: "",
//         },

//         type: {
//             type: String,
//             default: "",
//         },

//         price: {
//             type: Number,
//             required: true,
//         },

//         quantity: {
//             type: Number,
//             required: true,
//         },
//     },
//     { _id: false }
// );

// const ticketSchema = new mongoose.Schema(
//     {
//         ticketId: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         customerName: {
//             type: String,
//             required: true,
//         },

//         phone: {
//             type: String,
//             required: true,
//         },

//         email: {
//             type: String,
//             required: true,
//         },

//         address: {
//             type: String,
//             default: "",
//         },

//         items: {
//             type: [ticketItemSchema],
//             required: true,
//         },

//         passType: {
//             type: String,
//             required: true,
//         },

//         quantity: {
//             type: Number,
//             required: true,
//         },

//         amount: {
//             type: Number,
//             required: true,
//         },

//         razorpayOrderId: {
//             type: String,
//             required: true,
//         },

//         razorpayPaymentId: {
//             type: String,
//             required: true,
//         },

//         paymentStatus: {
//             type: String,
//             enum: ["PENDING", "PAID", "FAILED"],
//             default: "PENDING",
//         },

//         qrToken: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         qrCode: {
//             type: String,
//             required: true,
//         },

//         ticketStatus: {
//             type: String,
//             enum: ["ACTIVE", "USED", "CANCELLED"],
//             default: "ACTIVE",
//         },

//         usedAt: {
//             type: Date,
//             default: null,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = mongoose.model("Ticket", ticketSchema);






























// const mongoose = require("mongoose");

// const ticketSchema = new mongoose.Schema(
//     {
//         ticketId: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         customerName: {
//             type: String,
//             required: true,
//         },

//         phone: {
//             type: String,
//             required: true,
//         },

//         email: {
//             type: String,
//             required: true,
//         },

//         address: {
//             type: String,
//             default: "",
//         },

//         // ONE QR = ONE PASS TYPE / CART ITEM
//         passType: {
//             type: String,
//             required: true,
//         },

//         quantity: {
//             type: Number,
//             required: true,
//             min: 1,
//         },

//         price: {
//             type: Number,
//             required: true,
//         },

//         amount: {
//             type: Number,
//             required: true,
//         },

//         razorpayOrderId: {
//             type: String,
//             required: true,
//         },

//         razorpayPaymentId: {
//             type: String,
//             required: true,
//         },

//         paymentStatus: {
//             type: String,
//             enum: ["PENDING", "PAID", "FAILED"],
//             default: "PENDING",
//         },

//         // Unique QR token
//         qrToken: {
//             type: String,
//             required: true,
//             unique: true,
//         },

//         // QR image
//         qrCode: {
//             type: String,
//             required: true,
//         },

//         // Entry status
//         ticketStatus: {
//             type: String,
//             enum: ["ACTIVE", "USED", "CANCELLED"],
//             default: "ACTIVE",
//         },

//         usedAt: {
//             type: Date,
//             default: null,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = mongoose.model("Ticket", ticketSchema);








































































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