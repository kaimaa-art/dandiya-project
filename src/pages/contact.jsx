import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CalendarDays,
  Camera,
} from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // ============================================================
  // ===================== SWEET ALERT ==========================
  // ============================================================

  const swalConfig = {
    background: "#0b0b0b",
    color: "#ffffff",
    confirmButtonColor: "#f97316",
  };

  // ============================================================
  // ===================== HANDLE INPUT =========================
  // ============================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ============================================================
  // ================= SUBMIT CONTACT FORM ======================
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch(
        "https://dandiya-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      setIsSending(false);

      await Swal.fire({
        ...swalConfig,
        icon: "success",
        title: "Message Sent! 🎉",
        text: "Thank you for contacting Dandiya Night. We'll get back to you soon.",
        confirmButtonText: "Okay",
        allowOutsideClick: false,
      });

      // ================= RESET FORM =================

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Contact form error:", error);

      setIsSending(false);

      Swal.fire({
        ...swalConfig,
        icon: "error",
        title: "Message Not Sent",
        text:
          error.message ||
          "Something went wrong. Please try again.",
        confirmButtonText: "Try Again",
      });
    }
  };

  // ============================================================
  // ========================== UI ==============================
  // ============================================================

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16">

      {/* ========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:left-[-100px] sm:top-40 sm:h-80 sm:w-80 sm:blur-[140px]" />

      <div className="pointer-events-none absolute right-[-120px] top-[500px] h-80 w-80 rounded-full bg-yellow-500/5 blur-[130px] sm:right-[-100px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/[0.025] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ========================================================
            HEADER
        ========================================================= */}

        <motion.div
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
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* TOP LABEL */}

          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 sm:gap-4">

            <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

            <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs sm:tracking-[0.45em] md:text-sm">
              GET IN TOUCH
            </p>

            <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

          </div>

          {/* TITLE */}

          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">

            Contact{" "}

            <span className="text-orange-400">
              Us
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:mt-5 sm:text-base sm:leading-7">
            Have questions about tickets, the event, or Dandiya packs?
            We're here to help you make your Dandiya Night experience amazing!
          </p>

        </motion.div>

        {/* ========================================================
            CONTACT INFO CARDS
        ========================================================= */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4">

          {/* ======================================================
              LOCATION
          ====================================================== */}

          <motion.div
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
              delay: 0.05,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.1,
              },
            }}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-100 hover:border-orange-400/40 sm:p-6"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:h-12 sm:w-12">
              <MapPin size={22} />
            </div>

            <h3 className="mt-4 font-bold sm:mt-5">
              Event Location
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Your Event Ground Location
            </p>

          </motion.div>

          {/* ======================================================
              PHONE
          ====================================================== */}

          <motion.div
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
              delay: 0.1,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.1,
              },
            }}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-100 hover:border-orange-400/40 sm:p-6"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:h-12 sm:w-12">
              <Phone size={22} />
            </div>

            <h3 className="mt-4 font-bold sm:mt-5">
              Call Us
            </h3>

            <p className="mt-2 text-sm text-white/55">
              +91 XXXXX XXXXX
            </p>

          </motion.div>

          {/* ======================================================
              EMAIL
          ====================================================== */}

          <motion.div
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
              delay: 0.15,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.1,
              },
            }}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-100 hover:border-orange-400/40 sm:p-6"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:h-12 sm:w-12">
              <Mail size={22} />
            </div>

            <h3 className="mt-4 font-bold sm:mt-5">
              Email Us
            </h3>

            <p className="mt-2 break-all text-sm text-white/55">
              info@dandiyanight.com
            </p>

          </motion.div>

          {/* ======================================================
              TIME
          ====================================================== */}

          <motion.div
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
              delay: 0.2,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.1,
              },
            }}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-100 hover:border-orange-400/40 sm:p-6"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:h-12 sm:w-12">
              <Clock size={22} />
            </div>

            <h3 className="mt-4 font-bold sm:mt-5">
              Event Time
            </h3>

            <p className="mt-2 text-sm text-white/55">
              6:00 PM onwards
            </p>

          </motion.div>

        </div>

        {/* ========================================================
            MAIN SECTION
        ========================================================= */}

        <div className="mt-8 grid gap-6 sm:mt-10 lg:mt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-10">

          {/* ======================================================
              CONTACT FORM
          ====================================================== */}

          <motion.form
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.1,
            }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:rounded-3xl sm:p-7 md:p-8"
          >

            {/* FORM HEADER */}

            <h2 className="text-xl font-bold sm:text-2xl">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Fill out the form and we'll get back to you soon.
            </p>

            {/* ====================================================
                NAME
            ==================================================== */}

            <div className="mt-6 sm:mt-7">

              <label className="mb-2 block text-sm text-white/70">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                disabled={isSending}
                className="min-h-[52px] w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/60 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              />

            </div>

            {/* ====================================================
                EMAIL + PHONE
            ==================================================== */}

            <div className="mt-5 grid gap-5 sm:grid-cols-2">

              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm text-white/70">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  autoComplete="email"
                  required
                  disabled={isSending}
                  className="min-h-[52px] w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/60 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="mb-2 block text-sm text-white/70">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setFormData({
                      ...formData,
                      phone: value,
                    });
                  }}
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  required
                  disabled={isSending}
                  className="min-h-[52px] w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/60 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                />

              </div>

            </div>

            {/* ====================================================
                MESSAGE
            ==================================================== */}

            <div className="mt-5">

              <label className="mb-2 block text-sm text-white/70">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows={6}
                disabled={isSending}
                className="min-h-[150px] w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm leading-6 outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/60 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-[170px] sm:text-base"
              />

            </div>

            {/* ====================================================
                SEND BUTTON
            ==================================================== */}

            <button
              type="submit"
              disabled={isSending}
              className="group mt-6 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3.5 text-sm font-bold text-black transition-all duration-100 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none sm:mt-7 sm:text-base"
            >

              {isSending ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />

                  <span>
                    Sending Message...
                  </span>
                </>
              ) : (
                <>
                  <Send
                    size={19}
                    strokeWidth={2}
                  />

                  <span>
                    Send Message
                  </span>
                </>
              )}

            </button>

            {/* ====================================================
                SENDING STATUS
            ==================================================== */}

            {isSending && (
              <p className="mt-4 text-center text-xs leading-5 text-white/40 sm:text-sm">
                Please wait while we send your message...
              </p>
            )}

          </motion.form>

          {/* ======================================================
              EVENT DETAILS
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.1,
            }}
            className="space-y-5 sm:space-y-6"
          >

            {/* ====================================================
                EVENT DETAILS CARD
            ==================================================== */}

            <div className="rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-[#0b0b0b] p-5 sm:rounded-3xl sm:p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 sm:h-14 sm:w-14">
                <CalendarDays
                  size={25}
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
                Dandiya Night 2026
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                Join us for an incredible evening filled with energetic music,
                colorful lights, traditional dance and unforgettable memories.
              </p>

              {/* EVENT INFO */}

              <div className="mt-6 space-y-4 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">

                {/* DATE */}

                <div className="flex items-start gap-3">

                  <CalendarDays
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />

                  <span className="text-sm leading-6 text-white/70">
                    Date: Coming Soon
                  </span>

                </div>

                {/* TIME */}

                <div className="flex items-start gap-3">

                  <Clock
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />

                  <span className="text-sm leading-6 text-white/70">
                    Time: 6:00 PM onwards
                  </span>

                </div>

                {/* VENUE */}

                <div className="flex items-start gap-3">

                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-400"
                  />

                  <span className="text-sm leading-6 text-white/70">
                    Venue: Event Ground
                  </span>

                </div>

              </div>

            </div>

            {/* ====================================================
                SOCIAL CARD
            ==================================================== */}

            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:rounded-3xl sm:p-7">

              <div className="flex items-start gap-3 sm:items-center sm:gap-4">

                {/* ICON */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-400/10 text-orange-400 sm:h-12 sm:w-12">

                  <Camera
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>

                {/* TEXT */}

                <div className="min-w-0">

                  <h3 className="font-bold">
                    Follow Our Journey
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                    Get the latest updates about the event.
                  </p>

                </div>

              </div>

              {/* INSTAGRAM BUTTON */}

              <button
                type="button"
                className="mt-5 flex min-h-[50px] w-full items-center justify-center rounded-xl border border-orange-400/40 px-4 py-3 text-sm font-semibold text-orange-400 transition-all duration-100 hover:bg-orange-500 hover:text-black active:scale-[0.99] sm:mt-6 sm:text-base"
              >
                Follow on Instagram
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Contact;