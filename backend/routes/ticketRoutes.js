const express = require("express");

const {
    scanTicket,
} = require("../controllers/ticketController");

const adminAuth = require("../admin-side/adminMiddleware");

const router = express.Router();

// ================= SCAN QR =================

router.post(
    "/scan",
    adminAuth,
    async (req, res) => {
        try {
            const { qrToken } = req.body;

            if (!qrToken) {
                return res.status(400).json({
                    success: false,
                    valid: false,
                    message: "QR token is required.",
                });
            }

            const result = await scanTicket(
                qrToken
            );

            return res.status(200).json({
                success: true,
                ...result,
            });

        } catch (error) {
            console.error(
                "❌ QR SCAN ROUTE ERROR:",
                error
            );

            return res.status(500).json({
                success: false,
                valid: false,
                message: "Unable to verify QR code.",
            });
        }
    }
);

module.exports = router;