const express = require("express");

const {
    adminLogin,
} = require("./adminController");

const adminAuth = require("./adminMiddleware");

const router = express.Router();

// ================= ADMIN LOGIN =================

router.post("/login", adminLogin);

// ================= CHECK ADMIN AUTH =================

router.get("/verify", adminAuth, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Admin authenticated.",
        admin: req.admin,
    });
});

module.exports = router;