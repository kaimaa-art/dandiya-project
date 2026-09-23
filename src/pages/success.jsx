// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Success() {
//     const [ticket, setTicket] = useState(null);

//     useEffect(() => {
//         const paymentDetails = localStorage.getItem("paymentDetails");

//         if (paymentDetails) {
//             const data = JSON.parse(paymentDetails);

//             if (data.ticket) {
//                 setTicket(data.ticket);
//             }
//         }
//     }, []);

//     if (!ticket) {
//         return (
//             <div className="min-h-screen bg-[#050505] flex items-center justify-center px-5 text-white">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold">
//                         Ticket Not Found
//                     </h1>

//                     <p className="mt-3 text-white/50">
//                         We couldn't find your booking details.
//                     </p>

//                     <Link
//                         to="/passes"
//                         className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black"
//                     >
//                         Back to Passes
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#050505] px-5 py-16 text-white">
//             <div className="mx-auto max-w-lg">

//                 {/* SUCCESS */}

//                 <div className="text-center">
//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl">
//                         ✓
//                     </div>

//                     <h1 className="mt-6 text-4xl font-bold">
//                         Booking Confirmed!
//                     </h1>

//                     <p className="mt-3 text-white/50">
//                         Your Dandiya Night ticket is ready.
//                     </p>
//                 </div>

//                 {/* TICKET */}

//                 <div className="mt-10 rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-7">

//                     <div className="text-center">
//                         <p className="text-sm tracking-[0.3em] text-orange-400">
//                             DANDIYA NIGHT
//                         </p>

//                         <h2 className="mt-2 text-2xl font-bold">
//                             Event Entry Pass
//                         </h2>
//                     </div>

//                     {/* QR */}

//                     <div className="mt-8 flex justify-center">
//                         <div className="rounded-2xl bg-white p-4">
//                             <img
//                                 src={ticket.qrCode}
//                                 alt="Event Entry QR"
//                                 className="h-56 w-56"
//                             />
//                         </div>
//                     </div>

//                     <p className="mt-4 text-center text-xs text-white/40">
//                         Show this QR code at the entry gate
//                     </p>

//                     {/* DETAILS */}

//                     <div className="mt-8 space-y-4 border-t border-white/10 pt-6">

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Ticket ID
//                             </span>

//                             <span className="font-semibold text-orange-400">
//                                 {ticket.ticketId}
//                             </span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Name
//                             </span>

//                             <span>
//                                 {ticket.customerName}
//                             </span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Pass
//                             </span>

//                             <span>
//                                 {ticket.passType}
//                             </span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Quantity
//                             </span>

//                             <span>
//                                 {ticket.quantity}
//                             </span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Amount Paid
//                             </span>

//                             <span className="font-semibold">
//                                 ₹{ticket.amount}
//                             </span>
//                         </div>

//                         <div className="flex justify-between">
//                             <span className="text-white/50">
//                                 Payment
//                             </span>

//                             <span className="font-semibold text-green-400">
//                                 ✓ VERIFIED
//                             </span>
//                         </div>

//                     </div>
//                 </div>

//                 {/* BUTTON */}

//                 <Link
//                     to="/"
//                     className="mt-6 block rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 text-center font-bold text-black"
//                 >
//                     Back to Home
//                 </Link>

//             </div>
//         </div>
//     );
// }

// export default Success;












































































































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Success() {
//     const [tickets, setTickets] = useState([]);

//     useEffect(() => {
//         const paymentDetails = localStorage.getItem("paymentDetails");

//         if (paymentDetails) {
//             try {
//                 const data = JSON.parse(paymentDetails);

//                 if (data.tickets) {
//                     setTickets(data.tickets);
//                 }
//             } catch (error) {
//                 console.error("❌ Payment details parse error:", error);
//             }
//         }
//     }, []);

//     if (!tickets.length) {
//         return (
//             <div className="min-h-screen bg-[#050505] flex items-center justify-center px-5 text-white">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold">
//                         Tickets Not Found
//                     </h1>

//                     <p className="mt-3 text-white/50">
//                         We couldn't find your booking details.
//                     </p>

//                     <Link
//                         to="/passes"
//                         className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black"
//                     >
//                         Back to Passes
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#050505] px-5 py-16 text-white">
//             <div className="mx-auto max-w-2xl">

//                 {/* SUCCESS HEADER */}
//                 <div className="text-center">
//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl">
//                         ✓
//                     </div>

//                     <h1 className="mt-6 text-4xl font-bold">
//                         Booking Confirmed!
//                     </h1>

//                     <p className="mt-3 text-white/50">
//                         Your Dandiya Night passes are ready.
//                     </p>
//                 </div>

//                 {/* TICKETS */}
//                 <div className="mt-10 space-y-6">

//                     {tickets.map((ticket, index) => (
//                         <div
//                             key={ticket.ticketId}
//                             className="rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-7"
//                         >

//                             {/* PASS HEADER */}
//                             <div className="text-center">
//                                 <p className="text-sm tracking-[0.3em] text-orange-400">
//                                     DANDIYA NIGHT
//                                 </p>

//                                 <h2 className="mt-2 text-2xl font-bold">
//                                     {ticket.passType}
//                                 </h2>

//                                 <p className="mt-2 text-sm text-white/40">
//                                     Pass {index + 1} of {tickets.length}
//                                 </p>
//                             </div>

//                             {/* QR */}
//                             <div className="mt-8 flex justify-center">
//                                 <div className="rounded-2xl bg-white p-4">
//                                     <img
//                                         src={ticket.qrCode}
//                                         alt={`${ticket.passType} QR`}
//                                         className="h-56 w-56"
//                                     />
//                                 </div>
//                             </div>

//                             <p className="mt-4 text-center text-xs text-white/40">
//                                 Show this QR code at the entry gate
//                             </p>

//                             {/* DETAILS */}
//                             <div className="mt-8 space-y-4 border-t border-white/10 pt-6">

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Ticket ID
//                                     </span>

//                                     <span className="font-semibold text-orange-400">
//                                         {ticket.ticketId}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Name
//                                     </span>

//                                     <span>
//                                         {ticket.customerName}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Pass
//                                     </span>

//                                     <span>
//                                         {ticket.passType}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Quantity
//                                     </span>

//                                     <span className="font-semibold">
//                                         {ticket.quantity}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Amount
//                                     </span>

//                                     <span className="font-semibold">
//                                         ₹{ticket.amount}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between gap-4">
//                                     <span className="text-white/50">
//                                         Payment
//                                     </span>

//                                     <span className="font-semibold text-green-400">
//                                         ✓ VERIFIED
//                                     </span>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </div>

//                 {/* HOME BUTTON */}
//                 <Link
//                     to="/"
//                     className="mt-8 block rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 text-center font-bold text-black"
//                 >
//                     Back to Home
//                 </Link>

//             </div>
//         </div>
//     );
// }

// export default Success;


























































































import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Ticket,
    User,
    Hash,
    CreditCard,
    ShieldCheck,
    Home,
    QrCode,
} from "lucide-react";

function Success() {
    const [tickets, setTickets] = useState([]);

    // ============================================================
    // ================= GET PAYMENT DETAILS =====================
    // ============================================================

    useEffect(() => {
        const paymentDetails =
            localStorage.getItem("paymentDetails");

        if (paymentDetails) {
            try {
                const data = JSON.parse(paymentDetails);

                if (data.tickets) {
                    setTickets(data.tickets);
                }
            } catch (error) {
                console.error(
                    "❌ Payment details parse error:",
                    error
                );
            }
        }
    }, []);

    // ============================================================
    // ================= TICKETS NOT FOUND ========================
    // ============================================================

    if (!tickets.length) {
        return (
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6">

                {/* Background Glow */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

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
                        duration: 0.1,
                    }}
                    className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 text-center sm:p-8"
                >

                    {/* Icon */}

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 sm:h-20 sm:w-20">
                        <Ticket
                            size={30}
                            strokeWidth={1.7}
                        />
                    </div>

                    {/* Heading */}

                    <h1 className="mt-5 text-2xl font-bold sm:text-3xl">
                        Tickets Not Found
                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/50">
                        We couldn't find your booking details.
                    </p>

                    {/* Back Button */}

                    <Link
                        to="/passes"
                        className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3.5 text-sm font-bold text-black transition-all duration-100 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] active:scale-[0.99] sm:text-base"
                    >
                        <Ticket size={18} />

                        Back to Passes
                    </Link>

                </motion.div>
            </div>
        );
    }

    // ============================================================
    // ========================= SUCCESS ==========================
    // ============================================================

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14">

            {/* ====================================================
                BACKGROUND GLOWS
            ===================================================== */}

            <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/[0.04] blur-[120px]" />

            <div className="pointer-events-none absolute left-[-100px] top-[40%] h-80 w-80 rounded-full bg-orange-500/[0.05] blur-[130px]" />

            <div className="pointer-events-none absolute right-[-100px] top-[60%] h-80 w-80 rounded-full bg-yellow-500/[0.04] blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-3xl">

                {/* ====================================================
                    SUCCESS HEADER
                ===================================================== */}

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
                        duration: 0.1,
                    }}
                    className="text-center"
                >

                    {/* SUCCESS ICON */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.1,
                        }}
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-green-400/20 bg-green-500/10 text-green-400 sm:h-20 sm:w-20"
                    >
                        <CheckCircle2
                            size={38}
                            strokeWidth={1.7}
                            className="sm:size-11"
                        />
                    </motion.div>

                    {/* HEADING */}

                    <h1 className="mt-5 text-3xl font-bold leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
                        Booking Confirmed!
                    </h1>

                    {/* DESCRIPTION */}

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/50 sm:text-base">
                        Your Dandiya Night passes are ready.
                    </p>

                    {/* VERIFIED BADGE */}

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/5 px-4 py-2 text-xs font-medium text-green-400 sm:text-sm">

                        <ShieldCheck
                            size={15}
                        />

                        Payment Verified

                    </div>

                </motion.div>

                {/* ====================================================
                    TICKETS
                ===================================================== */}

                <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

                    {tickets.map((ticket, index) => (

                        <motion.div
                            key={ticket.ticketId}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.1,
                                delay: index * 0.05,
                            }}
                            className="relative overflow-hidden rounded-2xl border border-orange-400/20 bg-[#0b0b0b] p-5 shadow-[0_0_40px_rgba(249,115,22,0.04)] sm:rounded-3xl sm:p-7"
                        >

                            {/* Decorative Glow */}

                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px]" />

                            <div className="relative">

                                {/* ====================================================
                                    PASS HEADER
                                ===================================================== */}

                                <div className="text-center">

                                    <div className="flex items-center justify-center gap-2">

                                        <Ticket
                                            size={17}
                                            className="text-orange-400"
                                        />

                                        <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs sm:tracking-[0.4em]">
                                            DANDIYA NIGHT
                                        </p>

                                    </div>

                                    <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                                        {ticket.passType}
                                    </h2>

                                    <p className="mt-2 text-xs text-white/40 sm:text-sm">
                                        Pass {index + 1} of {tickets.length}
                                    </p>

                                </div>

                                {/* ====================================================
                                    QR CODE
                                ===================================================== */}

                                <div className="mt-7 flex flex-col items-center sm:mt-8">

                                    <div className="rounded-2xl bg-white p-3 shadow-[0_0_35px_rgba(255,255,255,0.08)] sm:p-4">

                                        <img
                                            src={ticket.qrCode}
                                            alt={`${ticket.passType} QR`}
                                            className="h-48 w-48 object-contain sm:h-56 sm:w-56"
                                        />

                                    </div>

                                    <div className="mt-4 flex items-center gap-2 text-center">

                                        <QrCode
                                            size={14}
                                            className="shrink-0 text-orange-400"
                                        />

                                        <p className="text-[11px] leading-5 text-white/40 sm:text-xs">
                                            Show this QR code at the entry gate
                                        </p>

                                    </div>

                                </div>

                                {/* ====================================================
                                    DETAILS
                                ===================================================== */}

                                <div className="mt-7 space-y-0 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">

                                    {/* TICKET ID */}

                                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] py-3 first:pt-0">

                                        <div className="flex min-w-0 items-center gap-2">

                                            <Hash
                                                size={15}
                                                className="shrink-0 text-orange-400/70"
                                            />

                                            <span className="text-xs text-white/50 sm:text-sm">
                                                Ticket ID
                                            </span>

                                        </div>

                                        <span className="max-w-[58%] break-all text-right text-xs font-semibold text-orange-400 sm:text-sm">
                                            {ticket.ticketId}
                                        </span>

                                    </div>

                                    {/* NAME */}

                                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] py-3">

                                        <div className="flex min-w-0 items-center gap-2">

                                            <User
                                                size={15}
                                                className="shrink-0 text-orange-400/70"
                                            />

                                            <span className="text-xs text-white/50 sm:text-sm">
                                                Name
                                            </span>

                                        </div>

                                        <span className="max-w-[58%] break-words text-right text-sm sm:text-base">
                                            {ticket.customerName}
                                        </span>

                                    </div>

                                    {/* PASS */}

                                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] py-3">

                                        <div className="flex min-w-0 items-center gap-2">

                                            <Ticket
                                                size={15}
                                                className="shrink-0 text-orange-400/70"
                                            />

                                            <span className="text-xs text-white/50 sm:text-sm">
                                                Pass
                                            </span>

                                        </div>

                                        <span className="max-w-[58%] break-words text-right text-sm sm:text-base">
                                            {ticket.passType}
                                        </span>

                                    </div>

                                    {/* QUANTITY */}

                                    <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-3">

                                        <span className="text-xs text-white/50 sm:text-sm">
                                            Quantity
                                        </span>

                                        <span className="text-sm font-semibold sm:text-base">
                                            {ticket.quantity}
                                        </span>

                                    </div>

                                    {/* AMOUNT */}

                                    <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-3">

                                        <span className="text-xs text-white/50 sm:text-sm">
                                            Amount
                                        </span>

                                        <span className="text-sm font-semibold text-orange-400 sm:text-base">
                                            ₹{ticket.amount}
                                        </span>

                                    </div>

                                    {/* PAYMENT */}

                                    <div className="flex items-center justify-between gap-4 pt-4">

                                        <div className="flex items-center gap-2">

                                            <CreditCard
                                                size={15}
                                                className="text-green-400"
                                            />

                                            <span className="text-xs text-white/50 sm:text-sm">
                                                Payment
                                            </span>

                                        </div>

                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 sm:text-sm">

                                            <CheckCircle2
                                                size={15}
                                            />

                                            VERIFIED

                                        </span>

                                    </div>

                                </div>

                            </div>
                        </motion.div>

                    ))}

                </div>

                {/* ====================================================
                    EMAIL NOTE
                ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.1,
                        delay: 0.15,
                    }}
                    className="mt-5 rounded-2xl border border-orange-400/10 bg-orange-500/5 px-4 py-4 text-center sm:mt-6 sm:px-6"
                >

                    <p className="text-xs leading-5 text-white/45 sm:text-sm">
                        Your ticket details and QR code have also been sent to
                        your registered email address.
                    </p>

                </motion.div>

                {/* ====================================================
                    HOME BUTTON
                ===================================================== */}

                <Link
                    to="/"
                    className="mt-6 flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3.5 text-sm font-bold text-black transition-all duration-100 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-[0.99] sm:mt-8 sm:text-base"
                >

                    <Home
                        size={18}
                    />

                    Back to Home

                </Link>

                {/* Bottom spacing */}

                <div className="h-4 sm:h-8" />

            </div>
        </div>
    );
}

export default Success;