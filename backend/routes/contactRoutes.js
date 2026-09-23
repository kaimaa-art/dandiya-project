const express = require("express");
const { sendContactMessage } = require("../controllers/emailController");

const router = express.Router();

// ================= CONTACT FORM =================

router.post("/", async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            message,
        } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }

        if (!/^[6-9]\d{9}$/.test(String(phone))) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit mobile number.",
            });
        }

        await sendContactMessage({
            name,
            email,
            phone,
            message,
        });

        return res.status(200).json({
            success: true,
            message: "Your message has been sent successfully.",
        });

    } catch (error) {
        console.error(
            "❌ CONTACT ROUTE ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again.",
        });
    }
});

module.exports = router;