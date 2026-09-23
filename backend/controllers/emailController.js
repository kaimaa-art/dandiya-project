// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//     service: "gmail",

//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
// });

// const sendTicketEmails = async ({
//     customerName,
//     customerEmail,
//     phone,
//     address,
//     tickets,
//     paymentId,
//     orderId,
// }) => {
//     const totalAmount = tickets.reduce(
//         (total, ticket) => total + Number(ticket.amount || 0),
//         0
//     );

//     const ticketRows = tickets
//         .map(
//             (ticket) => `
//                 <div style="
//                     border:1px solid #ddd;
//                     border-radius:12px;
//                     padding:20px;
//                     margin-bottom:20px;
//                 ">
//                     <h2 style="margin-top:0;">
//                         ${ticket.passType}
//                     </h2>

//                     <p><b>Ticket ID:</b> ${ticket.ticketId}</p>
//                     <p><b>Quantity:</b> ${ticket.quantity}</p>
//                     <p><b>Amount:</b> ₹${ticket.amount}</p>

//                     <div style="text-align:center;margin-top:20px;">
//                         <img
//                             src="${ticket.qrCode}"
//                             alt="Entry QR"
//                             width="220"
//                         />
//                     </div>

//                     <p style="text-align:center;color:#777;">
//                         Show this QR at the entry gate.
//                     </p>
//                 </div>
//             `
//         )
//         .join("");

//     const html = `
//         <div style="
//             font-family:Arial,sans-serif;
//             max-width:700px;
//             margin:auto;
//             color:#222;
//         ">

//             <h1 style="color:#f97316;">
//                 🎉 Dandiya Night Booking Confirmed!
//             </h1>

//             <p>
//                 Hi <b>${customerName}</b>,
//             </p>

//             <p>
//                 Your payment was successfully verified and
//                 your Dandiya Night passes have been generated.
//             </p>

//             <hr>

//             <h3>Customer Details</h3>

//             <p><b>Name:</b> ${customerName}</p>
//             <p><b>Phone:</b> ${phone}</p>
//             <p><b>Email:</b> ${customerEmail}</p>
//             <p><b>Address:</b> ${address || "N/A"}</p>

//             <h3>Payment Details</h3>

//             <p><b>Payment ID:</b> ${paymentId}</p>
//             <p><b>Order ID:</b> ${orderId}</p>
//             <p><b>Total Amount:</b> ₹${totalAmount}</p>

//             <hr>

//             <h3>Your Passes</h3>

//             ${ticketRows}

//             <p style="color:#777;">
//                 Please keep these QR codes safe.
//                 Each QR can be used only once at the entry gate.
//             </p>

//         </div>
//     `;

//     // CUSTOMER EMAIL
//     // await transporter.sendMail({
//     //     from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//     //     to: customerEmail,
//     //     subject: "🎟️ Dandiya Night — Booking Confirmed",
//     //     html,
//     // });

//     // ADMIN EMAIL
//     // await transporter.sendMail({
//     //     from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//     //     to: process.env.ADMIN_EMAIL,
//     //     subject: `🎟️ New Booking — ${customerName}`,
//     //     html,
//     // });

//     // console.log("📧 Customer + Admin emails sent successfully");

//     const customerMail = await transporter.sendMail({
//         from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//         to: customerEmail,
//         subject: "🎟️ Dandiya Night — Booking Confirmed",
//         html,
//     });

//     console.log("📧 Customer mail sent:", customerMail.messageId);
//     console.log("📬 Customer accepted:", customerMail.accepted);
//     console.log("📭 Customer rejected:", customerMail.rejected);


//     // ADMIN EMAIL
//     const adminMail = await transporter.sendMail({
//         from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//         to: process.env.ADMIN_EMAIL,
//         subject: `🎟️ New Booking — ${customerName}`,
//         html,
//     });

//     console.log("📧 Admin mail sent:", adminMail.messageId);
//     console.log("📬 Admin accepted:", adminMail.accepted);
//     console.log("📭 Admin rejected:", adminMail.rejected);
// };

// module.exports = {
//     sendTicketEmails,
// };
























































// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // const transporter = nodemailer.createTransport({
// //     service: "gmail",
// //     auth: {
// //         user: process.env.MAIL_USER,
// //         pass: process.env.MAIL_PASS,
// //     },
// // });

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,

//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },

//     tls: {
//         rejectUnauthorized: false,
//     },
// });

// const sendTicketEmails = async ({
//     customerName,
//     customerEmail,
//     phone,
//     address,
//     tickets,
//     paymentId,
//     orderId,
// }) => {
//     try {
//         const totalAmount = tickets.reduce(
//             (total, ticket) => total + Number(ticket.amount || 0),
//             0
//         );

//         // ================= QR ATTACHMENTS =================

//         const attachments = tickets.map((ticket) => {
//             const base64Data = ticket.qrCode.replace(
//                 /^data:image\/png;base64,/,
//                 ""
//             );

//             return {
//                 filename: `${ticket.ticketId}.png`,
//                 content: base64Data,
//                 encoding: "base64",
//                 cid: `qr-${ticket.ticketId}`,
//             };
//         });

//         // ================= TICKET HTML =================

//         const ticketRows = tickets
//             .map(
//                 (ticket) => `
//                     <div style="
//                         border:1px solid #dddddd;
//                         border-radius:14px;
//                         padding:20px;
//                         margin-bottom:20px;
//                         background:#ffffff;
//                     ">

//                         <h2 style="margin-top:0;">
//                             ${ticket.passType}
//                         </h2>

//                         <p>
//                             <b>Ticket ID:</b>
//                             ${ticket.ticketId}
//                         </p>

//                         <p>
//                             <b>Quantity:</b>
//                             ${ticket.quantity}
//                         </p>

//                         <p>
//                             <b>Amount:</b>
//                             ₹${ticket.amount}
//                         </p>

//                         <div style="
//                             text-align:center;
//                             margin-top:20px;
//                         ">
//                             <img
//                                 src="cid:qr-${ticket.ticketId}"
//                                 alt="Entry QR"
//                                 width="220"
//                                 style="
//                                     display:block;
//                                     margin:auto;
//                                     border:10px solid white;
//                                 "
//                             />
//                         </div>

//                         <p style="
//                             text-align:center;
//                             color:#777777;
//                             font-size:13px;
//                         ">
//                             Show this QR code at the entry gate.
//                         </p>

//                     </div>
//                 `
//             )
//             .join("");

//         // ================= COMMON HTML =================

//         const html = `
//             <div style="
//                 font-family:Arial,Helvetica,sans-serif;
//                 max-width:700px;
//                 margin:auto;
//                 color:#222222;
//                 background:#fafafa;
//                 padding:25px;
//             ">

//                 <h1 style="
//                     color:#f97316;
//                     margin-bottom:10px;
//                 ">
//                     🎉 Dandiya Night Booking Confirmed!
//                 </h1>

//                 <p>
//                     Hi <b>${customerName}</b>,
//                 </p>

//                 <p>
//                     Your payment has been successfully verified.
//                     Your Dandiya Night passes are ready.
//                 </p>

//                 <hr>

//                 <h3>Customer Details</h3>

//                 <p>
//                     <b>Name:</b> ${customerName}
//                 </p>

//                 <p>
//                     <b>Phone:</b> ${phone}
//                 </p>

//                 <p>
//                     <b>Email:</b> ${customerEmail}
//                 </p>

//                 <p>
//                     <b>Address:</b> ${address || "N/A"}
//                 </p>

//                 <h3>Payment Details</h3>

//                 <p>
//                     <b>Payment ID:</b> ${paymentId}
//                 </p>

//                 <p>
//                     <b>Order ID:</b> ${orderId}
//                 </p>

//                 <p>
//                     <b>Total Amount:</b> ₹${totalAmount}
//                 </p>

//                 <hr>

//                 <h3>Your Passes</h3>

//                 ${ticketRows}

//                 <p style="
//                     color:#666666;
//                     margin-top:25px;
//                 ">
//                     ⚠️ Each QR code can be used only once
//                     at the entry gate.
//                 </p>

//                 <p>
//                     Thank you for booking with
//                     <b>Dandiya Night</b> ❤️
//                 </p>

//             </div>
//         `;

//         // ==================================================
//         // CUSTOMER EMAIL
//         // ==================================================

//         console.log("📤 Sending customer email to:", customerEmail);

//         try {
//             // const customerMail = await transporter.sendMail({
//             //     from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//             //     to: customerEmail,
//             //     subject: "🎟️ Dandiya Night — Booking Confirmed",
//             //     html,
//             //     attachments,
//             // });

//             const customerMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: customerEmail,

//                 envelope: {
//                     from: process.env.MAIL_USER,
//                     to: customerEmail,
//                 },

//                 subject: "🎟️ Dandiya Night — Booking Confirmed",

//                 html,

//                 attachments,
//             });

//             customerEmail = String(customerEmail || "")
//                 .trim()
//                 .toLowerCase();

//             const adminEmail = String(process.env.ADMIN_EMAIL || "")
//                 .trim()
//                 .toLowerCase();

//             console.log(
//                 "✅ Customer email sent:",
//                 customerMail.messageId
//             );

//             console.log(
//                 "📬 Customer accepted:",
//                 customerMail.accepted
//             );

//             console.log(
//                 "📭 Customer rejected:",
//                 customerMail.rejected
//             );
//         } catch (customerError) {
//             console.error(
//                 "❌ CUSTOMER EMAIL ERROR:",
//                 customerError
//             );
//         }

//         // ==================================================
//         // ADMIN EMAIL
//         // ==================================================

//         console.log(
//             "📤 Sending admin email to:",
//             process.env.ADMIN_EMAIL
//         );

//         try {
//             // const adminMail = await transporter.sendMail({
//             //     from: `"Dandiya Night" <${process.env.MAIL_USER}>`,
//             //     to: process.env.ADMIN_EMAIL,
//             //     subject: `🎟️ New Dandiya Booking — ${customerName}`,
//             //     html,
//             //     attachments,
//             // });


//             const adminMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: process.env.ADMIN_EMAIL,

//                 envelope: {
//                     from: process.env.MAIL_USER,
//                     to: process.env.ADMIN_EMAIL,
//                     // to: adminEmail,
//                 },

//                 subject: `🎟️ New Dandiya Booking — ${customerName}`,

//                 html,

//                 attachments,
//             });

//             console.log(
//                 "✅ Admin email sent:",
//                 adminMail.messageId
//             );

//             console.log(
//                 "📬 Admin accepted:",
//                 adminMail.accepted
//             );

//             console.log(
//                 "📭 Admin rejected:",
//                 adminMail.rejected
//             );
//         } catch (adminError) {
//             console.error(
//                 "❌ ADMIN EMAIL ERROR:",
//                 adminError
//             );
//         }

//         console.log("📧 Email process completed");

//     } catch (error) {
//         console.error(
//             "❌ Email Controller Error:",
//             error
//         );

//         throw error;
//     }
// };

// module.exports = {
//     sendTicketEmails,
// };







































































































































// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // ================= EMAIL TRANSPORTER =================

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,

//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
// });

// // ================= SEND TICKET EMAILS =================

// const sendTicketEmails = async ({
//     customerName,
//     customerEmail,
//     phone,
//     address,
//     tickets,
//     paymentId,
//     orderId,
// }) => {
//     try {
//         // ================= CLEAN EMAILS FIRST =================

//         const cleanCustomerEmail = String(customerEmail || "")
//             .trim()
//             .toLowerCase();

//         const cleanAdminEmail = String(process.env.ADMIN_EMAIL || "")
//             .trim()
//             .toLowerCase();

//         console.log("📧 CUSTOMER EMAIL:", cleanCustomerEmail);
//         console.log("📧 ADMIN EMAIL:", cleanAdminEmail);

//         // ================= TOTAL AMOUNT =================

//         const totalAmount = tickets.reduce(
//             (total, ticket) =>
//                 total + Number(ticket.amount || 0),
//             0
//         );

//         // ================= QR ATTACHMENTS =================

//         const attachments = tickets.map((ticket) => {
//             const base64Data = ticket.qrCode.replace(
//                 /^data:image\/png;base64,/,
//                 ""
//             );

//             return {
//                 filename: `${ticket.ticketId}.png`,
//                 content: base64Data,
//                 encoding: "base64",
//                 cid: `qr-${ticket.ticketId}`,
//             };
//         });

//         // ================= TICKET HTML =================

//         const ticketRows = tickets
//             .map(
//                 (ticket) => `
//                 <div style="
//                     border:1px solid #dddddd;
//                     border-radius:14px;
//                     padding:20px;
//                     margin-bottom:20px;
//                     background:#ffffff;
//                 ">

//                     <h2 style="margin-top:0;">
//                         ${ticket.passType}
//                     </h2>

//                     <p>
//                         <b>Ticket ID:</b>
//                         ${ticket.ticketId}
//                     </p>

//                     <p>
//                         <b>Quantity:</b>
//                         ${ticket.quantity}
//                     </p>

//                     <p>
//                         <b>Amount:</b>
//                         ₹${ticket.amount}
//                     </p>

//                     <div style="
//                         text-align:center;
//                         margin-top:20px;
//                     ">

//                         <img
//                             src="cid:qr-${ticket.ticketId}"
//                             alt="Entry QR"
//                             width="220"
//                             style="
//                                 display:block;
//                                 margin:auto;
//                                 border:10px solid white;
//                             "
//                         />

//                     </div>

//                     <p style="
//                         text-align:center;
//                         color:#777777;
//                         font-size:13px;
//                     ">
//                         Show this QR code at the entry gate.
//                     </p>

//                 </div>
//             `
//             )
//             .join("");

//         // ================= COMMON EMAIL HTML =================

//         const html = `
//             <div style="
//                 font-family:Arial,Helvetica,sans-serif;
//                 max-width:700px;
//                 margin:auto;
//                 color:#222222;
//                 background:#fafafa;
//                 padding:25px;
//             ">

//                 <h1 style="
//                     color:#f97316;
//                     margin-bottom:10px;
//                 ">
//                     🎉 Dandiya Night Booking Confirmed!
//                 </h1>

//                 <p>
//                     Hi <b>${customerName}</b>,
//                 </p>

//                 <p>
//                     Your payment has been successfully verified.
//                     Your Dandiya Night passes are ready.
//                 </p>

//                 <hr>

//                 <h3>Customer Details</h3>

//                 <p>
//                     <b>Name:</b> ${customerName}
//                 </p>

//                 <p>
//                     <b>Phone:</b> ${phone}
//                 </p>

//                 <p>
//                     <b>Email:</b> ${cleanCustomerEmail}
//                 </p>

//                 <p>
//                     <b>Address:</b> ${address || "N/A"}
//                 </p>

//                 <h3>Payment Details</h3>

//                 <p>
//                     <b>Payment ID:</b> ${paymentId}
//                 </p>

//                 <p>
//                     <b>Order ID:</b> ${orderId}
//                 </p>

//                 <p>
//                     <b>Total Amount:</b> ₹${totalAmount}
//                 </p>

//                 <hr>

//                 <h3>Your Passes</h3>

//                 ${ticketRows}

//                 <p style="
//                     color:#666666;
//                     margin-top:25px;
//                 ">
//                     ⚠️ Each QR code can be used only once
//                     at the entry gate.
//                 </p>

//                 <p>
//                     Thank you for booking with
//                     <b>Dandiya Night</b> ❤️
//                 </p>

//             </div>
//         `;

//         // ==================================================
//         // CUSTOMER EMAIL
//         // ==================================================

//         console.log(
//             "📤 Sending CUSTOMER email to:",
//             cleanCustomerEmail
//         );

//         try {
//             const customerMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: cleanCustomerEmail,

//                 replyTo: process.env.MAIL_USER,

//                 subject:
//                     "🎟️ Dandiya Night — Booking Confirmed",

//                 html,

//                 text: `
// Dandiya Night Booking Confirmed!

// Name: ${customerName}
// Phone: ${phone}
// Email: ${cleanCustomerEmail}

// Payment ID: ${paymentId}
// Order ID: ${orderId}

// Total Amount: ₹${totalAmount}

// Your Dandiya Night passes are attached with QR codes.

// Each QR code can be used only once at the entry gate.
//                 `,

//                 attachments,
//             });

//             console.log(
//                 "✅ CUSTOMER MAIL SENT:",
//                 customerMail.messageId
//             );

//             console.log(
//                 "📬 CUSTOMER ACCEPTED:",
//                 customerMail.accepted
//             );

//             console.log(
//                 "📭 CUSTOMER REJECTED:",
//                 customerMail.rejected
//             );

//         } catch (customerError) {

//             console.error(
//                 "❌ CUSTOMER EMAIL ERROR:",
//                 customerError
//             );
//         }

//         // ==================================================
//         // ADMIN EMAIL
//         // ==================================================

//         console.log(
//             "📤 Sending ADMIN email to:",
//             cleanAdminEmail
//         );

//         try {
//             const adminMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: cleanAdminEmail,

//                 replyTo: process.env.MAIL_USER,

//                 subject:
//                     `🎟️ New Dandiya Booking — ${customerName}`,

//                 html,

//                 text: `
// New Dandiya Night Booking

// Customer Name: ${customerName}
// Phone: ${phone}
// Email: ${cleanCustomerEmail}

// Payment ID: ${paymentId}
// Order ID: ${orderId}

// Total Amount: ₹${totalAmount}

// Passes and QR codes are attached.
//                 `,

//                 attachments,
//             });

//             console.log(
//                 "✅ ADMIN MAIL SENT:",
//                 adminMail.messageId
//             );

//             console.log(
//                 "📬 ADMIN ACCEPTED:",
//                 adminMail.accepted
//             );

//             console.log(
//                 "📭 ADMIN REJECTED:",
//                 adminMail.rejected
//             );

//         } catch (adminError) {

//             console.error(
//                 "❌ ADMIN EMAIL ERROR:",
//                 adminError
//             );
//         }

//         console.log("📧 EMAIL PROCESS COMPLETED");

//     } catch (error) {

//         console.error(
//             "❌ EMAIL CONTROLLER ERROR:",
//             error
//         );

//         throw error;
//     }
// };

// module.exports = {
//     sendTicketEmails,
// };



































































































// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // ================= EMAIL TRANSPORTER =================

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,

//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
// });

// // ======================================================
// // SEND CONTACT MESSAGE TO ADMIN
// // ======================================================

// const sendContactMessage = async ({
//     name,
//     email,
//     phone,
//     message,
// }) => {
//     try {
//         const cleanName = String(name || "").trim();
//         const cleanEmail = String(email || "").trim().toLowerCase();
//         const cleanPhone = String(phone || "").trim();
//         const cleanMessage = String(message || "").trim();

//         const cleanAdminEmail = String(process.env.ADMIN_EMAIL || "")
//             .trim()
//             .toLowerCase();

//         console.log("📩 CONTACT MESSAGE");
//         console.log("👤 NAME:", cleanName);
//         console.log("📧 USER EMAIL:", cleanEmail);
//         console.log("📱 PHONE:", cleanPhone);
//         console.log("📧 ADMIN EMAIL:", cleanAdminEmail);

//         if (!cleanName || !cleanEmail || !cleanMessage) {
//             throw new Error("Name, email and message are required.");
//         }

//         if (!cleanAdminEmail) {
//             throw new Error("ADMIN_EMAIL is not configured.");
//         }

//         const adminMail = await transporter.sendMail({
//             from: `"Dandiya Night Contact" <${process.env.MAIL_USER}>`,

//             to: cleanAdminEmail,

//             // Admin can directly reply to the user
//             replyTo: cleanEmail,

//             subject: `📩 New Contact Message — ${cleanName}`,

//             html: `
//                 <div style="
//                     font-family:Arial,Helvetica,sans-serif;
//                     max-width:700px;
//                     margin:auto;
//                     background:#fafafa;
//                     padding:30px;
//                     color:#222;
//                 ">

//                     <div style="
//                         background:#0b0b0b;
//                         padding:25px;
//                         border-radius:16px;
//                         color:white;
//                     ">

//                         <h1 style="
//                             margin:0;
//                             color:#f97316;
//                         ">
//                             📩 New Contact Message
//                         </h1>

//                         <p style="
//                             color:#aaaaaa;
//                             margin-top:8px;
//                         ">
//                             Someone has contacted Dandiya Night.
//                         </p>

//                     </div>

//                     <div style="
//                         background:white;
//                         margin-top:20px;
//                         padding:25px;
//                         border-radius:16px;
//                         border:1px solid #eeeeee;
//                     ">

//                         <h2 style="
//                             margin-top:0;
//                             color:#f97316;
//                         ">
//                             User Details
//                         </h2>

//                         <p>
//                             <b>👤 Name:</b>
//                             ${cleanName}
//                         </p>

//                         <p>
//                             <b>📧 Email:</b>
//                             ${cleanEmail}
//                         </p>

//                         <p>
//                             <b>📱 Phone:</b>
//                             ${cleanPhone || "Not provided"}
//                         </p>

//                         <hr style="
//                             border:none;
//                             border-top:1px solid #eeeeee;
//                             margin:25px 0;
//                         ">

//                         <h2 style="
//                             color:#f97316;
//                         ">
//                             💬 Message
//                         </h2>

//                         <div style="
//                             background:#f7f7f7;
//                             padding:18px;
//                             border-radius:12px;
//                             line-height:1.7;
//                             white-space:pre-wrap;
//                         ">
//                             ${cleanMessage}
//                         </div>

//                     </div>

//                     <p style="
//                         text-align:center;
//                         color:#888;
//                         font-size:13px;
//                         margin-top:25px;
//                     ">
//                         📩 This message was sent from the Dandiya Night
//                         Contact Form.
//                     </p>

//                 </div>
//             `,

//             text: `
// New Contact Message — Dandiya Night

// Name: ${cleanName}
// Email: ${cleanEmail}
// Phone: ${cleanPhone || "Not provided"}

// Message:
// ${cleanMessage}
//             `,
//         });

//         console.log(
//             "✅ CONTACT ADMIN MAIL SENT:",
//             adminMail.messageId
//         );

//         console.log(
//             "📬 CONTACT ADMIN ACCEPTED:",
//             adminMail.accepted
//         );

//         console.log(
//             "📭 CONTACT ADMIN REJECTED:",
//             adminMail.rejected
//         );

//         return adminMail;

//     } catch (error) {

//         console.error(
//             "❌ CONTACT EMAIL ERROR:",
//             error
//         );

//         throw error;
//     }
// };


// // ================= SEND TICKET EMAILS =================

// const sendTicketEmails = async ({
//     customerName,
//     customerEmail,
//     phone,
//     address,
//     tickets,
//     paymentId,
//     orderId,
// }) => {
//     try {
//         // ================= CLEAN EMAILS FIRST =================

//         const cleanCustomerEmail = String(customerEmail || "")
//             .trim()
//             .toLowerCase();

//         const cleanAdminEmail = String(process.env.ADMIN_EMAIL || "")
//             .trim()
//             .toLowerCase();

//         console.log("📧 CUSTOMER EMAIL:", cleanCustomerEmail);
//         console.log("📧 ADMIN EMAIL:", cleanAdminEmail);

//         // ================= TOTAL AMOUNT =================

//         const totalAmount = tickets.reduce(
//             (total, ticket) =>
//                 total + Number(ticket.amount || 0),
//             0
//         );

//         // ================= QR ATTACHMENTS =================

//         const attachments = tickets.map((ticket) => {
//             const base64Data = ticket.qrCode.replace(
//                 /^data:image\/png;base64,/,
//                 ""
//             );

//             return {
//                 filename: `${ticket.ticketId}.png`,
//                 content: base64Data,
//                 encoding: "base64",
//                 cid: `qr-${ticket.ticketId}`,
//             };
//         });

//         // ================= TICKET HTML =================

//         const ticketRows = tickets
//             .map(
//                 (ticket) => `
//                 <div style="
//                     border:1px solid #dddddd;
//                     border-radius:14px;
//                     padding:20px;
//                     margin-bottom:20px;
//                     background:#ffffff;
//                 ">

//                     <h2 style="margin-top:0;">
//                         ${ticket.passType}
//                     </h2>

//                     <p>
//                         <b>Ticket ID:</b>
//                         ${ticket.ticketId}
//                     </p>

//                     <p>
//                         <b>Quantity:</b>
//                         ${ticket.quantity}
//                     </p>

//                     <p>
//                         <b>Amount:</b>
//                         ₹${ticket.amount}
//                     </p>

//                     <div style="
//                         text-align:center;
//                         margin-top:20px;
//                     ">

//                         <img
//                             src="cid:qr-${ticket.ticketId}"
//                             alt="Entry QR"
//                             width="220"
//                             style="
//                                 display:block;
//                                 margin:auto;
//                                 border:10px solid white;
//                             "
//                         />

//                     </div>

//                     <p style="
//                         text-align:center;
//                         color:#777777;
//                         font-size:13px;
//                     ">
//                         Show this QR code at the entry gate.
//                     </p>

//                 </div>
//             `
//             )
//             .join("");

//         // ================= COMMON EMAIL HTML =================

//         const html = `
//             <div style="
//                 font-family:Arial,Helvetica,sans-serif;
//                 max-width:700px;
//                 margin:auto;
//                 color:#222222;
//                 background:#fafafa;
//                 padding:25px;
//             ">

//                 <h1 style="
//                     color:#f97316;
//                     margin-bottom:10px;
//                 ">
//                     🎉 Dandiya Night Booking Confirmed!
//                 </h1>

//                 <p>
//                     Hi <b>${customerName}</b>,
//                 </p>

//                 <p>
//                     Your payment has been successfully verified.
//                     Your Dandiya Night passes are ready.
//                 </p>

//                 <hr>

//                 <h3>Customer Details</h3>

//                 <p>
//                     <b>Name:</b> ${customerName}
//                 </p>

//                 <p>
//                     <b>Phone:</b> ${phone}
//                 </p>

//                 <p>
//                     <b>Email:</b> ${cleanCustomerEmail}
//                 </p>

//                 <p>
//                     <b>Address:</b> ${address || "N/A"}
//                 </p>

//                 <h3>Payment Details</h3>

//                 <p>
//                     <b>Payment ID:</b> ${paymentId}
//                 </p>

//                 <p>
//                     <b>Order ID:</b> ${orderId}
//                 </p>

//                 <p>
//                     <b>Total Amount:</b> ₹${totalAmount}
//                 </p>

//                 <hr>

//                 <h3>Your Passes</h3>

//                 ${ticketRows}

//                 <p style="
//                     color:#666666;
//                     margin-top:25px;
//                 ">
//                     ⚠️ Each QR code can be used only once
//                     at the entry gate.
//                 </p>

//                 <p>
//                     Thank you for booking with
//                     <b>Dandiya Night</b> ❤️
//                 </p>

//             </div>
//         `;

//         // ==================================================
//         // CUSTOMER EMAIL
//         // ==================================================

//         console.log(
//             "📤 Sending CUSTOMER email to:",
//             cleanCustomerEmail
//         );

//         try {
//             const customerMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: cleanCustomerEmail,

//                 replyTo: process.env.MAIL_USER,

//                 subject:
//                     "🎟️ Dandiya Night — Booking Confirmed",

//                 html,

//                 text: `
// Dandiya Night Booking Confirmed!

// Name: ${customerName}
// Phone: ${phone}
// Email: ${cleanCustomerEmail}

// Payment ID: ${paymentId}
// Order ID: ${orderId}

// Total Amount: ₹${totalAmount}

// Your Dandiya Night passes are attached with QR codes.

// Each QR code can be used only once at the entry gate.
//                 `,

//                 attachments,
//             });

//             console.log(
//                 "✅ CUSTOMER MAIL SENT:",
//                 customerMail.messageId
//             );

//             console.log(
//                 "📬 CUSTOMER ACCEPTED:",
//                 customerMail.accepted
//             );

//             console.log(
//                 "📭 CUSTOMER REJECTED:",
//                 customerMail.rejected
//             );

//         } catch (customerError) {

//             console.error(
//                 "❌ CUSTOMER EMAIL ERROR:",
//                 customerError
//             );
//         }

//         // ==================================================
//         // ADMIN EMAIL
//         // ==================================================

//         console.log(
//             "📤 Sending ADMIN email to:",
//             cleanAdminEmail
//         );

//         try {
//             const adminMail = await transporter.sendMail({
//                 from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

//                 to: cleanAdminEmail,

//                 replyTo: process.env.MAIL_USER,

//                 subject:
//                     `🎟️ New Dandiya Booking — ${customerName}`,

//                 html,

//                 text: `
// New Dandiya Night Booking

// Customer Name: ${customerName}
// Phone: ${phone}
// Email: ${cleanCustomerEmail}

// Payment ID: ${paymentId}
// Order ID: ${orderId}

// Total Amount: ₹${totalAmount}

// Passes and QR codes are attached.
//                 `,

//                 attachments,
//             });

//             console.log(
//                 "✅ ADMIN MAIL SENT:",
//                 adminMail.messageId
//             );

//             console.log(
//                 "📬 ADMIN ACCEPTED:",
//                 adminMail.accepted
//             );

//             console.log(
//                 "📭 ADMIN REJECTED:",
//                 adminMail.rejected
//             );

//         } catch (adminError) {

//             console.error(
//                 "❌ ADMIN EMAIL ERROR:",
//                 adminError
//             );
//         }

//         console.log("📧 EMAIL PROCESS COMPLETED");

//     } catch (error) {

//         console.error(
//             "❌ EMAIL CONTROLLER ERROR:",
//             error
//         );

//         throw error;
//     }
// };


// // ================= EXPORT =================

// module.exports = {
//     sendTicketEmails,
//     sendContactMessage,
// };












































































































const nodemailer = require("nodemailer");
require("dotenv").config();

// ================= EMAIL TRANSPORTER =================

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// ================= SEND CONTACT MESSAGE TO ADMIN =================

const sendContactMessage = async ({
    name,
    email,
    phone,
    message,
}) => {
    try {
        const cleanName = String(name || "").trim();
        const cleanEmail = String(email || "").trim().toLowerCase();
        const cleanPhone = String(phone || "").trim();
        const cleanMessage = String(message || "").trim();

        const cleanAdminEmail = String(
            process.env.ADMIN_EMAIL || ""
        )
            .trim()
            .toLowerCase();

        console.log("📩 CONTACT MESSAGE");
        console.log("👤 NAME:", cleanName);
        console.log("📧 USER EMAIL:", cleanEmail);
        console.log("📱 PHONE:", cleanPhone);
        console.log("📧 ADMIN EMAIL:", cleanAdminEmail);

        if (!cleanName || !cleanEmail || !cleanMessage) {
            throw new Error(
                "Name, email and message are required."
            );
        }

        if (!cleanAdminEmail) {
            throw new Error(
                "ADMIN_EMAIL is not configured."
            );
        }

        const adminMail = await transporter.sendMail({
            from: `"Dandiya Night Contact" <${process.env.MAIL_USER}>`,

            to: cleanAdminEmail,

            // Admin can directly reply to user
            replyTo: cleanEmail,

            subject: `📩 New Contact Message — ${cleanName}`,

            html: `
                <div style="
                    font-family:Arial,Helvetica,sans-serif;
                    max-width:700px;
                    margin:auto;
                    background:#fafafa;
                    padding:30px;
                    color:#222;
                ">

                    <div style="
                        background:#0b0b0b;
                        padding:25px;
                        border-radius:16px;
                        color:white;
                    ">

                        <h1 style="
                            margin:0;
                            color:#f97316;
                        ">
                            📩 New Contact Message
                        </h1>

                        <p style="
                            color:#aaaaaa;
                            margin-top:8px;
                        ">
                            Someone has contacted Dandiya Night.
                        </p>

                    </div>

                    <div style="
                        background:white;
                        margin-top:20px;
                        padding:25px;
                        border-radius:16px;
                        border:1px solid #eeeeee;
                    ">

                        <h2 style="
                            margin-top:0;
                            color:#f97316;
                        ">
                            User Details
                        </h2>

                        <p>
                            <b>👤 Name:</b>
                            ${cleanName}
                        </p>

                        <p>
                            <b>📧 Email:</b>
                            ${cleanEmail}
                        </p>

                        <p>
                            <b>📱 Phone:</b>
                            ${cleanPhone || "Not provided"}
                        </p>

                        <hr style="
                            border:none;
                            border-top:1px solid #eeeeee;
                            margin:25px 0;
                        ">

                        <h2 style="
                            color:#f97316;
                        ">
                            💬 Message
                        </h2>

                        <div style="
                            background:#f7f7f7;
                            padding:18px;
                            border-radius:12px;
                            line-height:1.7;
                            white-space:pre-wrap;
                        ">
                            ${cleanMessage}
                        </div>

                    </div>

                    <p style="
                        text-align:center;
                        color:#888;
                        font-size:13px;
                        margin-top:25px;
                    ">
                        📩 This message was sent from the Dandiya Night
                        Contact Form.
                    </p>

                </div>
            `,

            text: `
New Contact Message — Dandiya Night

Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone || "Not provided"}

Message:
${cleanMessage}
            `,
        });

        console.log(
            "✅ CONTACT ADMIN MAIL SENT:",
            adminMail.messageId
        );

        console.log(
            "📬 CONTACT ADMIN ACCEPTED:",
            adminMail.accepted
        );

        console.log(
            "📭 CONTACT ADMIN REJECTED:",
            adminMail.rejected
        );

        return adminMail;

    } catch (error) {
        console.error(
            "❌ CONTACT EMAIL ERROR:",
            error
        );

        throw error;
    }
};

// ======================================================
// SEND TICKET EMAILS
// ======================================================

const sendTicketEmails = async ({
    customerName,
    customerEmail,
    phone,
    address,
    tickets,
    paymentId,
    orderId,
}) => {
    try {
        // ================= CLEAN DATA =================

        const cleanCustomerName = String(
            customerName || ""
        ).trim();

        const cleanCustomerEmail = String(
            customerEmail || ""
        )
            .trim()
            .toLowerCase();

        const cleanPhone = String(
            phone || ""
        ).trim();

        const cleanAddress = String(
            address || ""
        ).trim();

        const cleanAdminEmail = String(
            process.env.ADMIN_EMAIL || ""
        )
            .trim()
            .toLowerCase();

        // ================= VALIDATION =================

        if (!cleanCustomerEmail) {
            console.error(
                "❌ CUSTOMER EMAIL IS MISSING"
            );
        }

        if (!cleanAdminEmail) {
            console.error(
                "❌ ADMIN_EMAIL IS MISSING IN .ENV"
            );
        }

        if (!Array.isArray(tickets) || tickets.length === 0) {
            throw new Error(
                "No tickets available for email."
            );
        }

        console.log(
            "📧 CUSTOMER EMAIL:",
            cleanCustomerEmail
        );

        console.log(
            "📧 ADMIN EMAIL:",
            cleanAdminEmail
        );

        // ================= TOTAL AMOUNT =================

        const totalAmount = tickets.reduce(
            (total, ticket) =>
                total + Number(ticket.amount || 0),
            0
        );

        // ================= QR ATTACHMENTS =================

        const attachments = tickets
            .filter((ticket) => ticket.qrCode)
            .map((ticket) => {

                const base64Data = ticket.qrCode.replace(
                    /^data:image\/png;base64,/,
                    ""
                );

                return {
                    filename: `${ticket.ticketId}.png`,
                    content: base64Data,
                    encoding: "base64",
                    cid: `qr-${ticket.ticketId}`,
                };
            });

        // ================= TICKET HTML =================

        const ticketRows = tickets
            .map(
                (ticket) => `
                    <div style="
                        border:1px solid #dddddd;
                        border-radius:14px;
                        padding:20px;
                        margin-bottom:20px;
                        background:#ffffff;
                    ">

                        <h2 style="margin-top:0;">
                            ${ticket.passType}
                        </h2>

                        <p>
                            <b>Ticket ID:</b>
                            ${ticket.ticketId}
                        </p>

                        <p>
                            <b>Quantity:</b>
                            ${ticket.quantity}
                        </p>

                        <p>
                            <b>Amount:</b>
                            ₹${ticket.amount}
                        </p>

                        ${ticket.qrCode
                        ? `
                                    <div style="
                                        text-align:center;
                                        margin-top:20px;
                                    ">

                                        <img
                                            src="cid:qr-${ticket.ticketId}"
                                            alt="Entry QR"
                                            width="220"
                                            style="
                                                display:block;
                                                margin:auto;
                                                border:10px solid white;
                                            "
                                        />

                                    </div>

                                    <p style="
                                        text-align:center;
                                        color:#777777;
                                        font-size:13px;
                                    ">
                                        Show this QR code at the entry gate.
                                    </p>
                                `
                        : `
                                    <p style="
                                        color:#cc0000;
                                        font-size:13px;
                                    ">
                                        QR code unavailable.
                                    </p>
                                `
                    }

                    </div>
                `
            )
            .join("");

        // ================= COMMON EMAIL HTML =================

        const html = `
            <div style="
                font-family:Arial,Helvetica,sans-serif;
                max-width:700px;
                margin:auto;
                color:#222222;
                background:#fafafa;
                padding:25px;
            ">

                <h1 style="
                    color:#f97316;
                    margin-bottom:10px;
                ">
                    🎉 Dandiya Night Booking Confirmed!
                </h1>

                <p>
                    Hi <b>${cleanCustomerName}</b>,
                </p>

                <p>
                    Your payment has been successfully verified.
                    Your Dandiya Night passes are ready.
                </p>

                <hr>

                <h3>Customer Details</h3>

                <p>
                    <b>Name:</b>
                    ${cleanCustomerName}
                </p>

                <p>
                    <b>Phone:</b>
                    ${cleanPhone}
                </p>

                <p>
                    <b>Email:</b>
                    ${cleanCustomerEmail}
                </p>

                <p>
                    <b>Address:</b>
                    ${cleanAddress || "N/A"}
                </p>

                <h3>Payment Details</h3>

                <p>
                    <b>Payment ID:</b>
                    ${paymentId}
                </p>

                <p>
                    <b>Order ID:</b>
                    ${orderId}
                </p>

                <p>
                    <b>Total Amount:</b>
                    ₹${totalAmount}
                </p>

                <hr>

                <h3>Your Passes</h3>

                ${ticketRows}

                <p style="
                    color:#666666;
                    margin-top:25px;
                ">
                    ⚠️ Each QR code can be used only once
                    at the entry gate.
                </p>

                <p>
                    Thank you for booking with
                    <b>Dandiya Night</b> ❤️
                </p>

            </div>
        `;

        // ==================================================
        // CUSTOMER EMAIL
        // ==================================================

        let customerMail = null;
        let customerEmailError = null;

        if (cleanCustomerEmail) {
            try {
                console.log(
                    "📤 Sending CUSTOMER email to:",
                    cleanCustomerEmail
                );

                customerMail =
                    await transporter.sendMail({
                        from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

                        to: cleanCustomerEmail,

                        replyTo: process.env.MAIL_USER,

                        subject:
                            "🎟️ Dandiya Night — Booking Confirmed",

                        html,

                        text: `
Dandiya Night Booking Confirmed!

Name: ${cleanCustomerName}
Phone: ${cleanPhone}
Email: ${cleanCustomerEmail}

Payment ID: ${paymentId}
Order ID: ${orderId}

Total Amount: ₹${totalAmount}

Your Dandiya Night passes are attached with QR codes.

Each QR code can be used only once at the entry gate.
                        `,

                        attachments,
                    });

                console.log(
                    "✅ CUSTOMER MAIL SENT:",
                    customerMail.messageId
                );

                console.log(
                    "📬 CUSTOMER ACCEPTED:",
                    customerMail.accepted
                );

                console.log(
                    "📭 CUSTOMER REJECTED:",
                    customerMail.rejected
                );

            } catch (error) {
                customerEmailError = error;

                console.error(
                    "❌ CUSTOMER EMAIL ERROR:",
                    error
                );
            }
        }

        // ==================================================
        // ADMIN EMAIL
        // ==================================================

        let adminMail = null;
        let adminEmailError = null;

        if (cleanAdminEmail) {
            try {
                console.log(
                    "📤 Sending ADMIN email to:",
                    cleanAdminEmail
                );

                adminMail =
                    await transporter.sendMail({
                        from: `"Dandiya Night" <${process.env.MAIL_USER}>`,

                        to: cleanAdminEmail,

                        replyTo: cleanCustomerEmail ||
                            process.env.MAIL_USER,

                        subject:
                            `🎟️ New Dandiya Booking — ${cleanCustomerName}`,

                        html,

                        text: `
New Dandiya Night Booking

Customer Name: ${cleanCustomerName}
Phone: ${cleanPhone}
Email: ${cleanCustomerEmail}

Payment ID: ${paymentId}
Order ID: ${orderId}

Total Amount: ₹${totalAmount}

Passes and QR codes are attached.
                        `,

                        attachments,
                    });

                console.log(
                    "✅ ADMIN MAIL SENT:",
                    adminMail.messageId
                );

                console.log(
                    "📬 ADMIN ACCEPTED:",
                    adminMail.accepted
                );

                console.log(
                    "📭 ADMIN REJECTED:",
                    adminMail.rejected
                );

            } catch (error) {
                adminEmailError = error;

                console.error(
                    "❌ ADMIN EMAIL ERROR:",
                    error
                );
            }
        }

        // ==================================================
        // FINAL EMAIL STATUS
        // ==================================================

        console.log(
            "📧 EMAIL PROCESS COMPLETED"
        );

        return {
            customerMail,
            adminMail,
            customerEmailError,
            adminEmailError,
        };

    } catch (error) {
        console.error(
            "❌ EMAIL CONTROLLER ERROR:",
            error
        );

        throw error;
    }
};

// ================= EXPORT =================

module.exports = {
    sendTicketEmails,
    sendContactMessage,
};