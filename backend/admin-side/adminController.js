const jwt = require("jsonwebtoken");

// ================= ADMIN LOGIN =================

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ================= VALIDATION =================

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        const cleanEmail = String(email)
            .trim()
            .toLowerCase();

        const adminEmail = String(
            process.env.ADMIN_EMAIL || ""
        )
            .trim()
            .toLowerCase();

        const adminPassword = String(
            process.env.ADMIN_PASSWORD || ""
        );

        // ================= ENV CHECK =================

        if (!adminEmail || !adminPassword) {
            console.error(
                "❌ ADMIN CREDENTIALS NOT CONFIGURED"
            );

            return res.status(500).json({
                success: false,
                message: "Admin credentials are not configured.",
            });
        }

        if (!process.env.JWT_SECRET) {
            console.error(
                "❌ JWT_SECRET NOT CONFIGURED"
            );

            return res.status(500).json({
                success: false,
                message: "JWT secret is not configured.",
            });
        }

        // ================= CHECK LOGIN =================

        if (
            cleanEmail !== adminEmail ||
            password !== adminPassword
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials.",
            });
        }

        // ================= CREATE TOKEN =================

        const token = jwt.sign(
            {
                email: adminEmail,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "12h",
            }
        );

        console.log(
            "🔐 ADMIN LOGIN SUCCESS:",
            adminEmail
        );

        return res.status(200).json({
            success: true,
            message: "Admin login successful.",
            token,
            admin: {
                email: adminEmail,
                role: "admin",
            },
        });

    } catch (error) {
        console.error(
            "❌ ADMIN LOGIN ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Admin login failed.",
        });
    }
};

module.exports = {
    adminLogin,
};