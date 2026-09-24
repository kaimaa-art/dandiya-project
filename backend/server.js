const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const paymentRoutes = require("./routes/paymentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./admin-side/adminRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// ================= MIDDLEWARE =================

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ================= ROUTES =================

app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ticket", ticketRoutes);

// ================= HOME =================

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Dandiya Backend is Running 🔥",
    });
});

// ================= 404 =================

app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// ================= ERROR HANDLER =================

app.use((error, req, res, next) => {
    console.error("❌ SERVER ERROR:", error);

    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
});

// ================= PORT =================

const PORT = process.env.PORT || 5000;

// ================= MONGODB CONNECTION =================

const startServer = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error(
                "MONGO_URI is missing in .env file"
            );
        }

        if (!process.env.RAZORPAY_KEY_ID) {
            throw new Error(
                "RAZORPAY_KEY_ID is missing in .env file"
            );
        }

        if (!process.env.RAZORPAY_KEY_SECRET) {
            throw new Error(
                "RAZORPAY_KEY_SECRET is missing in .env file"
            );
        }

        if (!process.env.MAIL_USER) {
            throw new Error(
                "MAIL_USER is missing in .env file"
            );
        }

        if (!process.env.MAIL_PASS) {
            throw new Error(
                "MAIL_PASS is missing in .env file"
            );
        }

        console.log("⏳ Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("🍃 MongoDB Connected");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error(
            "❌ SERVER STARTUP ERROR:",
            error.message
        );

        process.exit(1);
    }
};

// ================= START SERVER =================

startServer();