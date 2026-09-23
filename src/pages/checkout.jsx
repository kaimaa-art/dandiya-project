// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//     User,
//     Phone,
//     Mail,
//     MapPin,
//     ArrowLeft,
//     CreditCard,
//     ShoppingBag,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../context/cartContext";
// import Swal from "sweetalert2";

// function Checkout() {
//     const { cartItems, totalPrice } = useCart();

//     const navigate = useNavigate();

//     // ================= FORM STATE =================

//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//     });

//     // ================= PROCESSING STATE =================

//     const [isProcessing, setIsProcessing] = useState(false);

//     // ================= CART CHECK =================

//     const hasProducts = cartItems.some(
//         (item) => item.type === "product"
//     );

//     const hasPasses = cartItems.some(
//         (item) => item.type === "pass"
//     );

//     // ================= FORM CHANGE =================

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         if (name === "phone") {
//             const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

//             setFormData({
//                 ...formData,
//                 phone: onlyNumbers,
//             });

//             return;
//         }

//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // ================= SWEET ALERT STYLE =================

//     const swalConfig = {
//         background: "#0b0b0b",
//         color: "#ffffff",
//         confirmButtonColor: "#f97316",
//     };

//     const handleCheckout = async (e) => {
//         e.preventDefault();

//         // 1️⃣ Required details check
//         if (!formData.name || !formData.phone || !formData.email) {
//             await Swal.fire({
//                 ...swalConfig,
//                 icon: "warning",
//                 title: "Missing Details",
//                 text: "Please fill all required details!",
//                 confirmButtonText: "Okay",
//             });
//             return;
//         }

//         // 2️⃣ Phone number validation — MUST come after required check
//         if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//             await Swal.fire({
//                 ...swalConfig,
//                 icon: "warning",
//                 title: "Invalid Phone Number",
//                 text: "Please enter a valid 10-digit mobile number.",
//                 confirmButtonText: "Okay",
//             });
//             return;
//         }

//         // 3️⃣ Address validation
//         if (hasProducts && !formData.address) {
//             await Swal.fire({
//                 ...swalConfig,
//                 icon: "warning",
//                 title: "Address Required",
//                 text: "Please enter your delivery address!",
//                 confirmButtonText: "Okay",
//             });
//             return;
//         }

//         // 👇 Baaki tumhara existing Razorpay code yahin se continue hoga
//         try {
//             // existing code...
//         } catch (error) {
//             // existing error handling...
//         };

//     try {
//         // ================= SAVE CUSTOMER DETAILS =================

//         localStorage.setItem(
//             "customerDetails",
//             JSON.stringify(formData)
//         );

//         // ================= CREATE RAZORPAY ORDER =================

//         const response = await fetch(
//             "http://192.168.31.122:5000/api/payment/create-order",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json",
//                 },

//                 body: JSON.stringify({
//                     amount: totalPrice,
//                 }),
//             }
//         );

//         const data = await response.json();

//         if (!data.success) {
//             await Swal.fire({
//                 ...swalConfig,
//                 icon: "error",
//                 title: "Unable to Start Payment",
//                 text:
//                     data.message ||
//                     "Unable to create payment order.",
//             });

//             return;
//         }

//         const order = data.order;

//         // ================= RAZORPAY OPTIONS =================

//         const options = {
//             key: import.meta.env.VITE_RAZORPAY_KEY_ID,

//             amount: order.amount,

//             currency: order.currency,

//             name: "Dandiya Night",

//             description: "Dandiya Event Booking",

//             order_id: order.id,

//             prefill: {
//                 name: formData.name,
//                 email: formData.email,
//                 contact: formData.phone,
//             },

//             theme: {
//                 color: "#f97316",
//             },

//             // =================================================
//             // PAYMENT SUCCESS
//             // =================================================

//             handler: async function (paymentResponse) {
//                 // ================= START LOADER =================

//                 setIsProcessing(true);

//                 try {
//                     // ================= VERIFY PAYMENT =================

//                     const verifyResponse = await fetch(
//                         "http://192.168.31.122:5000/api/payment/verify-payment",
//                         {
//                             method: "POST",

//                             headers: {
//                                 "Content-Type": "application/json",
//                             },

//                             body: JSON.stringify({
//                                 ...paymentResponse,

//                                 // ================= CUSTOMER DETAILS =================

//                                 customerName: formData.name,
//                                 phone: formData.phone,
//                                 email: formData.email,
//                                 address: formData.address,

//                                 // ================= COMPLETE CART =================

//                                 items: cartItems.map((item) => ({
//                                     id: item.id,
//                                     name: item.name || "",
//                                     title: item.title || "",
//                                     type: item.type || "",
//                                     price: item.price,
//                                     quantity: item.quantity,
//                                 })),
//                             }),
//                         }
//                     );

//                     const verifyData =
//                         await verifyResponse.json();

//                     // ================= VERIFICATION FAILED =================

//                     if (!verifyData.success) {
//                         console.error(
//                             "❌ BACKEND VERIFY RESPONSE:",
//                             verifyData
//                         );

//                         setIsProcessing(false);

//                         await Swal.fire({
//                             ...swalConfig,
//                             icon: "error",
//                             title: "Verification Failed",
//                             text:
//                                 verifyData.message ||
//                                 "Payment verification failed!",
//                         });

//                         return;
//                     }

//                     // ================= SAVE PAYMENT DETAILS =================

//                     localStorage.setItem(
//                         "paymentDetails",
//                         JSON.stringify(verifyData)
//                     );

//                     // ================= STOP LOADER =================

//                     setIsProcessing(false);

//                     // ================= SUCCESS POPUP =================

//                     await Swal.fire({
//                         ...swalConfig,
//                         icon: "success",
//                         title: "Booking Confirmed! 🎉",
//                         text:
//                             "Your Dandiya passes have been generated and sent to your email.",
//                         confirmButtonText: "View My Passes",
//                         confirmButtonColor: "#f97316",
//                         allowOutsideClick: false,
//                     });

//                     // ================= SUCCESS PAGE =================

//                     navigate("/success");

//                 } catch (error) {
//                     console.error(
//                         "Verification Error:",
//                         error
//                     );

//                     setIsProcessing(false);

//                     await Swal.fire({
//                         ...swalConfig,
//                         icon: "error",
//                         title: "Something Went Wrong",
//                         text:
//                             "Payment was completed, but we couldn't verify your booking. Please contact support.",
//                     });
//                 }
//             },

//             // ================= RAZORPAY MODAL =================

//             modal: {
//                 ondismiss: function () {
//                     console.log(
//                         "Razorpay checkout closed"
//                     );
//                 },
//             },
//         };

//         // ================= OPEN RAZORPAY =================

//         const razorpay =
//             new window.Razorpay(options);

//         // ================= PAYMENT FAILED =================

//         razorpay.on(
//             "payment.failed",
//             async function (response) {
//                 console.error(
//                     "Payment Failed:",
//                     response.error
//                 );

//                 setIsProcessing(false);

//                 await Swal.fire({
//                     ...swalConfig,
//                     icon: "error",
//                     title: "Payment Failed",
//                     text:
//                         response.error?.description ||
//                         "Payment failed. Please try again.",
//                 });
//             }
//         );

//         razorpay.open();

//     } catch (error) {
//         console.error(
//             "Checkout Error:",
//             error
//         );

//         setIsProcessing(false);

//         await Swal.fire({
//             ...swalConfig,
//             icon: "error",
//             title: "Something Went Wrong",
//             text:
//                 "Something went wrong while starting payment.",
//         });
//     }
// };

// // ============================================================
// // ========================= UI ===============================
// // ============================================================

// return (
//     <div className="min-h-screen bg-[#050505] px-5 py-12 text-white sm:px-10 lg:px-16">

//         {/* =====================================================
//                 PROCESSING LOADER
//             ====================================================== */}

//         {isProcessing && (
//             <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-6 backdrop-blur-md">

//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         scale: 0.9,
//                         y: 20,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         scale: 1,
//                         y: 0,
//                     }}
//                     transition={{
//                         duration: 0.35,
//                     }}
//                     className="w-full max-w-md rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-8 text-center shadow-[0_0_80px_rgba(249,115,22,0.15)]"
//                 >

//                     {/* ================= LOADER ICON ================= */}

//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10">

//                         <motion.div
//                             animate={{
//                                 rotate: 360,
//                             }}
//                             transition={{
//                                 duration: 1.2,
//                                 repeat: Infinity,
//                                 ease: "linear",
//                             }}
//                             className="h-10 w-10 rounded-full border-4 border-white/10 border-t-orange-400"
//                         />

//                     </div>

//                     {/* ================= TITLE ================= */}

//                     <h2 className="mt-7 text-2xl font-bold">
//                         Finalizing Your Booking
//                     </h2>

//                     <p className="mt-3 text-sm leading-6 text-white/50">
//                         Your payment has been received.
//                         <br />
//                         We're generating your passes and
//                         sending them to your email.
//                     </p>

//                     {/* ================= PROCESS STEPS ================= */}

//                     <div className="mt-7 space-y-3 text-left">

//                         {/* PAYMENT */}

//                         <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3">

//                             <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10 text-sm text-green-400">
//                                 ✓
//                             </span>

//                             <span className="text-sm text-white/70">
//                                 Payment received
//                             </span>

//                         </div>

//                         {/* VERIFY */}

//                         <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3">

//                             <span className="flex h-7 w-7 items-center justify-center">

//                                 <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

//                             </span>

//                             <span className="text-sm text-white/70">
//                                 Verifying payment
//                             </span>

//                         </div>

//                         {/* GENERATE */}

//                         <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3">

//                             <span className="flex h-7 w-7 items-center justify-center">

//                                 <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

//                             </span>

//                             <span className="text-sm text-white/70">
//                                 Generating your passes
//                             </span>

//                         </div>

//                         {/* EMAIL */}

//                         <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3">

//                             <span className="flex h-7 w-7 items-center justify-center">

//                                 <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

//                             </span>

//                             <span className="text-sm text-white/70">
//                                 Sending tickets to your email
//                             </span>

//                         </div>

//                     </div>

//                     {/* ================= WARNING ================= */}

//                     <div className="mt-7 border-t border-white/10 pt-5">

//                         <p className="text-xs text-white/35">
//                             Please don't close or refresh this page.
//                         </p>

//                     </div>

//                 </motion.div>

//             </div>
//         )}

//         {/* =====================================================
//                 MAIN CONTENT
//             ====================================================== */}

//         <div className="mx-auto max-w-7xl">

//             {/* ================= HEADER ================= */}

//             <Link
//                 to="/cart"
//                 className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-orange-400"
//             >
//                 <ArrowLeft size={17} />

//                 Back to Cart
//             </Link>

//             <motion.div
//                 initial={{
//                     opacity: 0,
//                     y: 25,
//                 }}
//                 animate={{
//                     opacity: 1,
//                     y: 0,
//                 }}
//                 transition={{
//                     duration: 0.5,
//                 }}
//                 className="mt-8"
//             >

//                 <p className="text-sm font-semibold tracking-[0.4em] text-orange-400">
//                     CHECKOUT
//                 </p>

//                 <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">

//                     Complete Your{" "}

//                     <span className="text-orange-400">
//                         Booking
//                     </span>

//                 </h1>

//                 <p className="mt-4 text-white/60">
//                     Enter your details and proceed to secure payment.
//                 </p>

//             </motion.div>

//             {/* ================= MAIN CONTENT ================= */}

//             <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_400px]">

//                 {/* ================= CUSTOMER FORM ================= */}

//                 <motion.form
//                     initial={{
//                         opacity: 0,
//                         x: -25,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     transition={{
//                         duration: 0.6,
//                     }}
//                     onSubmit={handleCheckout}
//                     className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-8"
//                 >

//                     <h2 className="text-2xl font-bold">
//                         Your Details
//                     </h2>

//                     <p className="mt-2 text-sm text-white/50">
//                         Please provide accurate information for your booking.
//                     </p>

//                     {/* ================= NAME ================= */}

//                     <div className="mt-8">

//                         <label className="mb-3 block text-sm font-medium text-white/70">
//                             Full Name *
//                         </label>

//                         <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-orange-400/60">

//                             <User
//                                 size={19}
//                                 className="text-orange-400"
//                             />

//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Enter your full name"
//                                 className="w-full bg-transparent py-4 outline-none placeholder:text-white/25"
//                             />

//                         </div>

//                     </div>

//                     {/* ================= PHONE ================= */}

//                     <div className="mt-6">

//                         <label className="mb-3 block text-sm font-medium text-white/70">
//                             Phone Number *
//                         </label>

//                         <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-orange-400/60">

//                             <Phone
//                                 size={19}
//                                 className="text-orange-400"
//                             />

//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 inputMode="numeric"
//                                 maxLength={10}
//                                 placeholder="Enter 10-digit mobile number"
//                                 required
//                                 className="w-full bg-transparent py-4 outline-none placeholder:text-white/25"
//                             />

//                         </div>

//                     </div>

//                     {/* ================= EMAIL ================= */}

//                     <div className="mt-6">

//                         <label className="mb-3 block text-sm font-medium text-white/70">
//                             Email Address *
//                         </label>

//                         <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-orange-400/60">

//                             <Mail
//                                 size={19}
//                                 className="text-orange-400"
//                             />

//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Enter your email address"
//                                 className="w-full bg-transparent py-4 outline-none placeholder:text-white/25"
//                             />

//                         </div>

//                     </div>

//                     {/* ================= ADDRESS ================= */}

//                     {hasProducts && (
//                         <div className="mt-6">

//                             <label className="mb-3 block text-sm font-medium text-white/70">
//                                 Delivery Address *
//                             </label>

//                             <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-orange-400/60">

//                                 <MapPin
//                                     size={19}
//                                     className="mt-4 shrink-0 text-orange-400"
//                                 />

//                                 <textarea
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleChange}
//                                     placeholder="Enter your complete delivery address"
//                                     rows="4"
//                                     className="w-full resize-none bg-transparent py-4 outline-none placeholder:text-white/25"
//                                 />

//                             </div>

//                             <p className="mt-2 text-xs text-white/40">
//                                 Required because your Dandiya items need to be delivered.
//                             </p>

//                         </div>
//                     )}

//                     {/* ================= INFO BOX ================= */}

//                     {hasPasses && (
//                         <div className="mt-8 rounded-2xl border border-orange-400/20 bg-orange-500/5 p-5">

//                             <div className="flex gap-4">

//                                 <div className="text-2xl">
//                                     🎟️
//                                 </div>

//                                 <div>

//                                     <h3 className="font-semibold text-orange-300">
//                                         Digital Event Pass
//                                     </h3>

//                                     <p className="mt-1 text-sm leading-6 text-white/55">
//                                         After successful payment, your unique booking code
//                                         and QR code will be generated for event entry.
//                                     </p>

//                                 </div>

//                             </div>

//                         </div>
//                     )}

//                     {/* ================= PAYMENT BUTTON ================= */}

//                     <button
//                         type="submit"
//                         disabled={isProcessing}
//                         className={`group mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 font-bold text-black transition-all duration-300 ${isProcessing
//                             ? "cursor-not-allowed opacity-50"
//                             : "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
//                             }`}
//                     >

//                         <CreditCard size={20} />

//                         Proceed to Payment

//                     </button>

//                 </motion.form>

//                 {/* ================= ORDER SUMMARY ================= */}

//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         x: 25,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     transition={{
//                         duration: 0.6,
//                     }}
//                     className="h-fit rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-7 lg:sticky lg:top-24"
//                 >

//                     <div className="flex items-center gap-3">

//                         <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">

//                             <ShoppingBag size={21} />

//                         </div>

//                         <h2 className="text-xl font-bold">
//                             Order Summary
//                         </h2>

//                     </div>

//                     <div className="my-7 space-y-4 border-b border-white/10 pb-7">

//                         {cartItems.map((item) => (

//                             <div
//                                 key={item.id}
//                                 className="flex justify-between gap-4"
//                             >

//                                 <div>

//                                     <p className="font-medium">
//                                         {item.name || item.title}
//                                     </p>

//                                     <p className="mt-1 text-sm text-white/45">
//                                         Quantity: {item.quantity}
//                                     </p>

//                                 </div>

//                                 <p className="font-semibold text-orange-300">
//                                     ₹{item.price * item.quantity}
//                                 </p>

//                             </div>

//                         ))}

//                     </div>

//                     <div className="flex items-center justify-between">

//                         <span className="text-lg text-white/60">
//                             Total Amount
//                         </span>

//                         <span className="text-3xl font-bold text-orange-400">
//                             ₹{totalPrice}
//                         </span>

//                     </div>

//                     <div className="mt-7 rounded-xl border border-white/10 bg-black/20 p-4">

//                         <p className="text-center text-xs leading-6 text-white/45">
//                             🔒 Your payment will be processed securely through Razorpay.
//                         </p>

//                     </div>

//                 </motion.div>

//             </div>

//         </div>

//     </div>
// );
// }

// export default Checkout;



































































































































































































































































































































import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Phone,
    Mail,
    MapPin,
    ArrowLeft,
    CreditCard,
    ShoppingBag,
    ShieldCheck,
    Ticket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import Swal from "sweetalert2";

function Checkout() {
    const { cartItems, totalPrice } = useCart();
    const navigate = useNavigate();

    // ================= FORM STATE =================

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    // ================= PROCESSING STATE =================

    const [isProcessing, setIsProcessing] = useState(false);

    // ================= CART CHECK =================

    const hasProducts = cartItems.some(
        (item) => item.type === "product"
    );

    const hasPasses = cartItems.some(
        (item) => item.type === "pass"
    );

    // ================= FORM CHANGE =================

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const onlyNumbers = value
                .replace(/\D/g, "")
                .slice(0, 10);

            setFormData((prev) => ({
                ...prev,
                phone: onlyNumbers,
            }));

            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ================= SCROLL TOP =================

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    // ================= SWEET ALERT STYLE =================

    const swalConfig = {
        background: "#0b0b0b",
        color: "#ffffff",
        confirmButtonColor: "#f97316",
    };

    // ================= CHECKOUT =================

    const handleCheckout = async (e) => {
        e.preventDefault();

        // ================= REQUIRED DETAILS =================

        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.email.trim()
        ) {
            await Swal.fire({
                ...swalConfig,
                icon: "warning",
                title: "Missing Details",
                text: "Please fill all required details!",
                confirmButtonText: "Okay",
            });

            return;
        }

        // ================= PHONE VALIDATION =================

        if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            await Swal.fire({
                ...swalConfig,
                icon: "warning",
                title: "Invalid Phone Number",
                text: "Please enter a valid 10-digit mobile number.",
                confirmButtonText: "Okay",
            });

            return;
        }

        // ================= EMAIL VALIDATION =================

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            await Swal.fire({
                ...swalConfig,
                icon: "warning",
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                confirmButtonText: "Okay",
            });

            return;
        }

        // ================= ADDRESS VALIDATION =================

        if (hasProducts && !formData.address.trim()) {
            await Swal.fire({
                ...swalConfig,
                icon: "warning",
                title: "Address Required",
                text: "Please enter your delivery address!",
                confirmButtonText: "Okay",
            });

            return;
        }

        // ================= START PROCESSING =================

        setIsProcessing(true);

        try {
            // ================= SAVE CUSTOMER DETAILS =================

            localStorage.setItem(
                "customerDetails",
                JSON.stringify(formData)
            );

            // ================= CREATE RAZORPAY ORDER =================

            const response = await fetch(
                "http://192.168.31.122:5000/api/payment/create-order",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        amount: totalPrice,
                    }),
                }
            );

            const data = await response.json();

            // ================= ORDER CREATION FAILED =================

            if (!response.ok || !data.success) {
                setIsProcessing(false);

                await Swal.fire({
                    ...swalConfig,
                    icon: "error",
                    title: "Unable to Start Payment",
                    text:
                        data.message ||
                        "Unable to create payment order.",
                });

                return;
            }

            const order = data.order;

            // ================= RAZORPAY OPTIONS =================

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,

                amount: order.amount,

                currency: order.currency,

                name: "Dandiya Night",

                description: "Dandiya Event Booking",

                order_id: order.id,

                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },

                theme: {
                    color: "#f97316",
                },

                // =================================================
                // PAYMENT SUCCESS
                // =================================================

                handler: async function (paymentResponse) {
                    setIsProcessing(true);

                    try {
                        // ================= VERIFY PAYMENT =================

                        const verifyResponse = await fetch(
                            "http://192.168.31.122:5000/api/payment/verify-payment",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type": "application/json",
                                },

                                body: JSON.stringify({
                                    ...paymentResponse,

                                    // ================= CUSTOMER DETAILS =================

                                    customerName: formData.name,
                                    phone: formData.phone,
                                    email: formData.email,
                                    address: formData.address,

                                    // ================= COMPLETE CART =================

                                    items: cartItems.map((item) => ({
                                        id: item.id,
                                        name: item.name || "",
                                        title: item.title || "",
                                        type: item.type || "",
                                        price: item.price,
                                        quantity: item.quantity,
                                    })),
                                }),
                            }
                        );

                        const verifyData =
                            await verifyResponse.json();

                        // ================= VERIFICATION FAILED =================

                        if (
                            !verifyResponse.ok ||
                            !verifyData.success
                        ) {
                            console.error(
                                "❌ BACKEND VERIFY RESPONSE:",
                                verifyData
                            );

                            setIsProcessing(false);

                            await Swal.fire({
                                ...swalConfig,
                                icon: "error",
                                title: "Verification Failed",
                                text:
                                    verifyData.message ||
                                    "Payment verification failed!",
                            });

                            return;
                        }

                        // ================= SAVE PAYMENT DETAILS =================

                        localStorage.setItem(
                            "paymentDetails",
                            JSON.stringify(verifyData)
                        );

                        // ================= STOP LOADER =================

                        setIsProcessing(false);

                        // ================= SUCCESS POPUP =================

                        await Swal.fire({
                            ...swalConfig,
                            icon: "success",
                            title: "Booking Confirmed! 🎉",
                            text:
                                "Your Dandiya passes have been generated and sent to your email.",
                            confirmButtonText:
                                "View My Passes",
                            confirmButtonColor: "#f97316",
                            allowOutsideClick: false,
                        });

                        // ================= SUCCESS PAGE =================

                        scrollToTop();
                        navigate("/success");
                    } catch (error) {
                        console.error(
                            "Verification Error:",
                            error
                        );

                        setIsProcessing(false);

                        await Swal.fire({
                            ...swalConfig,
                            icon: "error",
                            title: "Something Went Wrong",
                            text:
                                "Payment was completed, but we couldn't verify your booking. Please contact support.",
                        });
                    }
                },

                // ================= RAZORPAY MODAL =================

                modal: {
                    ondismiss: function () {
                        console.log(
                            "Razorpay checkout closed"
                        );

                        setIsProcessing(false);
                    },
                },
            };

            // ================= CHECK RAZORPAY =================

            if (!window.Razorpay) {
                setIsProcessing(false);

                await Swal.fire({
                    ...swalConfig,
                    icon: "error",
                    title: "Payment System Unavailable",
                    text:
                        "Razorpay could not be loaded. Please refresh the page and try again.",
                });

                return;
            }

            // ================= OPEN RAZORPAY =================

            const razorpay =
                new window.Razorpay(options);

            // ================= PAYMENT FAILED =================

            razorpay.on(
                "payment.failed",
                async function (response) {
                    console.error(
                        "Payment Failed:",
                        response.error
                    );

                    setIsProcessing(false);

                    await Swal.fire({
                        ...swalConfig,
                        icon: "error",
                        title: "Payment Failed",
                        text:
                            response.error?.description ||
                            "Payment failed. Please try again.",
                    });
                }
            );

            razorpay.open();

            // Razorpay modal is now handling the payment.
            // Do not keep the full-screen loader active here.
            setIsProcessing(false);
        } catch (error) {
            console.error(
                "Checkout Error:",
                error
            );

            setIsProcessing(false);

            await Swal.fire({
                ...swalConfig,
                icon: "error",
                title: "Something Went Wrong",
                text:
                    error?.message ||
                    "Something went wrong while starting payment.",
            });
        }
    };

    // ============================================================
    // ========================= UI ================================
    // ============================================================

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#050505] px-4 py-8 text-white sm:px-6 sm:py-12 md:px-10 lg:px-16">

            {/* =====================================================
                    PROCESSING LOADER
                ====================================================== */}

            {isProcessing && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md">

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="w-full max-w-md rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-6 text-center shadow-[0_0_80px_rgba(249,115,22,0.15)] sm:p-8"
                    >

                        {/* ================= LOADER ICON ================= */}

                        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 sm:h-20 sm:w-20">

                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="h-9 w-9 rounded-full border-4 border-white/10 border-t-orange-400 sm:h-10 sm:w-10"
                            />

                        </div>

                        {/* ================= TITLE ================= */}

                        <h2 className="mt-6 text-xl font-bold sm:mt-7 sm:text-2xl">
                            Finalizing Your Booking
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-white/50">
                            Your payment has been received.
                            <br />
                            We're generating your passes and
                            sending them to your email.
                        </p>

                        {/* ================= PROCESS STEPS ================= */}

                        <div className="mt-6 space-y-3 text-left sm:mt-7">

                            {/* PAYMENT */}

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 sm:px-4">

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-sm text-green-400">
                                    ✓
                                </span>

                                <span className="text-xs text-white/70 sm:text-sm">
                                    Payment received
                                </span>

                            </div>

                            {/* VERIFY */}

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 sm:px-4">

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center">

                                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

                                </span>

                                <span className="text-xs text-white/70 sm:text-sm">
                                    Verifying payment
                                </span>

                            </div>

                            {/* GENERATE */}

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 sm:px-4">

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center">

                                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

                                </span>

                                <span className="text-xs text-white/70 sm:text-sm">
                                    Generating your passes
                                </span>

                            </div>

                            {/* EMAIL */}

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 sm:px-4">

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center">

                                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

                                </span>

                                <span className="text-xs text-white/70 sm:text-sm">
                                    Sending tickets to your email
                                </span>

                            </div>

                        </div>

                        {/* ================= WARNING ================= */}

                        <div className="mt-6 border-t border-white/10 pt-5 sm:mt-7">

                            <p className="text-[11px] text-white/35 sm:text-xs">
                                Please don't close or refresh this page.
                            </p>

                        </div>

                    </motion.div>

                </div>
            )}

            {/* =====================================================
                    MAIN CONTENT
                ====================================================== */}

            <div className="mx-auto max-w-7xl">

                {/* ================= BACK TO CART ================= */}

                <Link
                    to="/cart"
                    onClick={scrollToTop}
                    className="group inline-flex min-h-10 items-center gap-2 rounded-lg py-2 text-sm text-white/50 transition duration-200 hover:text-orange-400"
                >
                    <ArrowLeft
                        size={17}
                        className="transition-transform duration-200 group-hover:-translate-x-1"
                    />

                    Back to Cart
                </Link>

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="mt-7 sm:mt-8"
                >

                    <p className="text-xs font-semibold tracking-[0.3em] text-orange-400 sm:text-sm sm:tracking-[0.4em]">
                        CHECKOUT
                    </p>

                    <h1 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">

                        Complete Your{" "}

                        <span className="text-orange-400">
                            Booking
                        </span>

                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:mt-4 sm:text-base">
                        Enter your details and proceed to secure payment.
                    </p>

                </motion.div>

                {/* ================= MAIN CONTENT ================= */}

                <div className="mt-8 grid gap-6 md:mt-10 lg:mt-12 lg:grid-cols-[1fr_400px] lg:gap-10">

                    {/* ================= CUSTOMER FORM ================= */}

                    <motion.form
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        onSubmit={handleCheckout}
                        className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:rounded-3xl sm:p-6 md:p-8"
                    >

                        <div>
                            <h2 className="text-xl font-bold sm:text-2xl">
                                Your Details
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-white/50">
                                Please provide accurate information for your booking.
                            </p>
                        </div>

                        {/* ================= NAME ================= */}

                        <div className="mt-7 sm:mt-8">

                            <label className="mb-2 block text-sm font-medium text-white/70 sm:mb-3">
                                Full Name *
                            </label>

                            <div className="flex min-h-[54px] items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 transition duration-200 focus-within:border-orange-400/60 sm:px-4">

                                <User
                                    size={19}
                                    className="shrink-0 text-orange-400"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    className="w-full min-w-0 bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25 sm:text-base"
                                />

                            </div>

                        </div>

                        {/* ================= PHONE ================= */}

                        <div className="mt-5 sm:mt-6">

                            <label className="mb-2 block text-sm font-medium text-white/70 sm:mb-3">
                                Phone Number *
                            </label>

                            <div className="flex min-h-[54px] items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 transition duration-200 focus-within:border-orange-400/60 sm:px-4">

                                <Phone
                                    size={19}
                                    className="shrink-0 text-orange-400"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    inputMode="numeric"
                                    maxLength={10}
                                    placeholder="Enter 10-digit mobile number"
                                    autoComplete="tel"
                                    required
                                    className="w-full min-w-0 bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25 sm:text-base"
                                />

                            </div>

                        </div>

                        {/* ================= EMAIL ================= */}

                        <div className="mt-5 sm:mt-6">

                            <label className="mb-2 block text-sm font-medium text-white/70 sm:mb-3">
                                Email Address *
                            </label>

                            <div className="flex min-h-[54px] items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 transition duration-200 focus-within:border-orange-400/60 sm:px-4">

                                <Mail
                                    size={19}
                                    className="shrink-0 text-orange-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    autoComplete="email"
                                    className="w-full min-w-0 bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25 sm:text-base"
                                />

                            </div>

                        </div>

                        {/* ================= ADDRESS ================= */}

                        {hasProducts && (
                            <div className="mt-5 sm:mt-6">

                                <label className="mb-2 block text-sm font-medium text-white/70 sm:mb-3">
                                    Delivery Address *
                                </label>

                                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-3 transition duration-200 focus-within:border-orange-400/60 sm:px-4">

                                    <MapPin
                                        size={19}
                                        className="mt-4 shrink-0 text-orange-400"
                                    />

                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter your complete delivery address"
                                        rows={4}
                                        autoComplete="street-address"
                                        className="w-full min-w-0 resize-none bg-transparent py-3.5 text-sm leading-6 outline-none placeholder:text-white/25 sm:text-base"
                                    />

                                </div>

                                <p className="mt-2 text-xs leading-5 text-white/40">
                                    Required because your Dandiya items need to be delivered.
                                </p>

                            </div>
                        )}

                        {/* ================= INFO BOX ================= */}

                        {hasPasses && (
                            <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-500/5 p-4 sm:mt-8 sm:p-5">

                                <div className="flex items-start gap-3 sm:gap-4">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                        <Ticket size={21} />
                                    </div>

                                    <div className="min-w-0">

                                        <h3 className="font-semibold text-orange-300">
                                            Digital Event Pass
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                                            After successful payment, your unique booking code and QR code will be generated for event entry.
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}

                        {/* ================= PAYMENT BUTTON ================= */}

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`group mt-6 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-4 text-sm font-bold text-black transition-all duration-200 sm:mt-8 sm:text-base ${isProcessing
                                    ? "cursor-not-allowed opacity-50"
                                    : "hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-[0.99]"
                                }`}
                        >

                            <CreditCard
                                size={20}
                                className="shrink-0"
                            />

                            Proceed to Payment

                        </button>

                    </motion.form>

                    {/* ================= ORDER SUMMARY ================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="h-fit rounded-2xl border border-orange-400/20 bg-[#0b0b0b] p-5 sm:rounded-3xl sm:p-7 lg:sticky lg:top-24"
                    >

                        {/* ================= SUMMARY HEADER ================= */}

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                <ShoppingBag size={21} />
                            </div>

                            <h2 className="text-xl font-bold">
                                Order Summary
                            </h2>

                        </div>

                        {/* ================= ITEMS ================= */}

                        <div className="my-6 space-y-4 border-b border-white/10 pb-6 sm:my-7 sm:pb-7">

                            {cartItems.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex items-start justify-between gap-4"
                                >

                                    <div className="min-w-0">

                                        <p className="break-words text-sm font-medium sm:text-base">
                                            {item.name || item.title}
                                        </p>

                                        <p className="mt-1 text-xs text-white/45 sm:text-sm">
                                            Quantity: {item.quantity}
                                        </p>

                                    </div>

                                    <p className="shrink-0 text-sm font-semibold text-orange-300 sm:text-base">
                                        ₹{item.price * item.quantity}
                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* ================= TOTAL ================= */}

                        <div className="flex items-center justify-between gap-4">

                            <span className="text-sm text-white/60 sm:text-lg">
                                Total Amount
                            </span>

                            <span className="text-2xl font-bold text-orange-400 sm:text-3xl">
                                ₹{totalPrice}
                            </span>

                        </div>

                        {/* ================= SECURITY BOX ================= */}

                        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4">

                            <ShieldCheck
                                size={18}
                                className="mt-0.5 shrink-0 text-green-400"
                            />

                            <p className="text-left text-xs leading-5 text-white/45">
                                Your payment will be processed securely through Razorpay.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>
        </div>
    );
}

export default Checkout;