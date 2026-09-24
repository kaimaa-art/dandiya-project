import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    User,
    Heart,
    Users,
    PartyPopper,
    Utensils,
    Sparkles,
    Music
} from "lucide-react";
import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

function Home() {

    const heroImages = [hero1, hero2, hero3];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === heroImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        );
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <main className="w-full overflow-x-hidden bg-[#050505] text-white">

            {/* ================= HERO SECTION ================= */}

            <section className="relative min-h-[calc(100svh-80px)] overflow-hidden sm:min-h-[calc(100vh-80px)]">

                {/* ================= BACKGROUND SLIDES ================= */}

                <AnimatePresence mode="wait">

                    <motion.img
                        key={currentSlide}
                        src={heroImages[currentSlide]}
                        alt="Dandiya Night Festival"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            object-center
                            brightness-[1.15]
                            saturate-[1.1]
                            sm:object-center
                        "
                    />

                </AnimatePresence>

                {/* ================= DARK OVERLAY ================= */}

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 via-[45%] to-black/10" />

                {/* Mobile extra overlay for readability */}
                <div className="absolute inset-0 bg-black/20 sm:hidden" />

                {/* Bottom Fade */}

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />


                {/* ================= HERO CONTENT ================= */}

                <div
                    className="
                        relative z-10
                        flex
                        min-h-[calc(100svh-80px)]
                        items-center
                        px-5
                        py-12
                        sm:min-h-[calc(100vh-80px)]
                        sm:px-10
                        sm:py-16
                        lg:px-16
                        xl:px-20
                    "
                >

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-3xl text-left"
                    >

                        {/* ================= FESTIVAL TEXT ================= */}

                        <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">

                            <span className="h-[1px] w-8 shrink-0 bg-orange-400/70 sm:w-12" />

                            <p className="text-[9px] font-semibold tracking-[0.28em] text-white/70 sm:text-xs sm:tracking-[0.5em]">
                                THE FESTIVAL OF VICTORY
                            </p>

                        </div>


                        {/* ================= HEADING ================= */}

                        <h1 className="leading-none">

                            <span
                                className="
                                    block
                                    font-serif
                                    text-[clamp(3.2rem,15vw,6rem)]
                                    font-bold
                                    leading-[0.88]
                                    tracking-wide
                                    text-[#f6b34b]
                                    drop-shadow-[0_0_18px_rgba(255,166,40,0.55)]
                                    sm:text-7xl
                                    sm:leading-none
                                    md:text-8xl
                                    lg:text-8xl
                                    xl:text-9xl
                                "
                            >
                                DANDIYA
                            </span>

                            <span
                                className="
                                    mt-2
                                    block
                                    font-serif
                                    text-[clamp(2.65rem,11vw,5rem)]
                                    font-semibold
                                    leading-[0.9]
                                    tracking-wide
                                    text-white
                                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                                    sm:text-6xl
                                    sm:leading-none
                                    md:text-7xl
                                    lg:text-7xl
                                    xl:text-8xl
                                "
                            >
                                NIGHT 2026
                            </span>

                        </h1>


                        {/* ================= TAGLINE ================= */}

                        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-[#f4b75c] sm:mt-5 sm:gap-3 sm:text-base">

                            <span>Dance</span>
                            <span>•</span>
                            <span>Devotion</span>
                            <span>•</span>
                            <span>Togetherness</span>

                        </div>


                        {/* ================= DESCRIPTION ================= */}

                        <p className="mt-4 max-w-xl text-[14px] leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-7">

                            Get ready for an unforgettable night filled with music, dance,
                            celebration and the spirit of Durga Puja. Bring your friends and family
                            and experience the magic of Dandiya Night!

                        </p>


                        {/* ================= BUTTONS ================= */}

                        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">

                            <Link
                                to="/passes"
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-yellow-400
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]
                                    sm:w-auto
                                    sm:px-7
                                    sm:py-4
                                    sm:text-base
                                "
                            >
                                Book Your Ticket

                                <ArrowRight
                                    size={20}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />

                            </Link>


                            <Link
                                to="/shop"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-orange-400/50
                                    bg-black/30
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-orange-300
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:bg-orange-400
                                    hover:text-black
                                    sm:w-auto
                                    sm:px-7
                                    sm:py-4
                                    sm:text-base
                                "
                            >
                                Shop Dandiya 🪔
                            </Link>

                        </div>

                    </motion.div>

                </div>


                {/* ================= LEFT BUTTON ================= */}

                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="
                        absolute
                        left-2
                        top-1/2
                        z-20
                        -translate-y-1/2
                        rounded-full
                        border
                        border-white/20
                        bg-black/40
                        p-3
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition
                        hover:bg-orange-500
                        hover:text-black
                        sm:left-6
                        sm:opacity-100
                    "
                >
                    <ChevronLeft size={24} />
                </button>


                {/* ================= RIGHT BUTTON ================= */}

                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="
                        absolute
                        right-2
                        top-1/2
                        z-20
                        -translate-y-1/2
                        rounded-full
                        border
                        border-white/20
                        bg-black/40
                        p-3
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition
                        hover:bg-orange-500
                        hover:text-black
                        sm:right-6
                        sm:opacity-100
                    "
                >
                    <ChevronRight size={24} />
                </button>


                {/* ================= SLIDER DOTS ================= */}

                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5 sm:bottom-8 sm:gap-3">

                    {heroImages.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`
                                h-1.5
                                rounded-full
                                transition-all
                                duration-300
                                sm:h-2
                                ${currentSlide === index
                                    ? "w-7 bg-orange-400 sm:w-8"
                                    : "w-1.5 bg-white/50 hover:bg-white sm:w-2"
                                }
                            `}
                        />

                    ))}

                </div>

            </section>


            {/* ================= EXPERIENCE SECTION ================= */}

            <section className="relative overflow-hidden bg-[#070707] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-20">

                {/* Background Glow */}

                <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />

                <div className="relative z-10">

                    {/* ================= SECTION HEADING ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        {/* Small Heading */}

                        <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4">

                            <span className="h-[1px] w-8 bg-orange-400/60 sm:w-12" />

                            <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-sm sm:tracking-[0.45em]">
                                EXPERIENCE THE CELEBRATION
                            </p>

                            <span className="h-[1px] w-8 bg-orange-400/60 sm:w-12" />

                        </div>


                        {/* Main Heading */}

                        <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">

                            One Night. Endless{" "}

                            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                                Memories.
                            </span>

                        </h2>


                        {/* Description */}

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-7">

                            A magical evening where music, tradition and celebration come together
                            to create unforgettable memories with your friends and family.

                        </p>

                    </motion.div>


                    {/* ================= CARDS ================= */}

                    <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">


                        {/* ================= CARD 1 ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-5
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-orange-400/50
                                sm:p-7
                            "
                        >

                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />

                            <div className="relative">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <Music size={30} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Music & DJ
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Feel the rhythm and dance to energetic music throughout the night.
                                </p>

                            </div>

                        </motion.div>


                        {/* ================= CARD 2 ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-5
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-orange-400/50
                                sm:p-7
                            "
                        >

                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />

                            <div className="relative">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <Sparkles size={30} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Dandiya Dance
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Dance together with your friends and family under festive lights.
                                </p>

                            </div>

                        </motion.div>


                        {/* ================= CARD 3 ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-5
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-orange-400/50
                                sm:p-7
                            "
                        >

                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />

                            <div className="relative">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <Utensils size={30} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Food & Fun
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Enjoy delicious food, refreshments and exciting festival moments.
                                </p>

                            </div>

                        </motion.div>


                        {/* ================= CARD 4 ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-5
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-orange-400/50
                                sm:p-7
                            "
                        >

                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />

                            <div className="relative">

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <PartyPopper size={30} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                    Festive Vibes
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Experience the colours, lights and incredible energy of Durga Puja.
                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* ================= PASSES PREVIEW SECTION ================= */}

            <section className="relative overflow-hidden bg-[#050505] px-5 py-16 sm:px-10 sm:py-24 lg:px-16 xl:px-20">

                {/* Background Decorations */}

                <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-yellow-500/5 blur-[150px]" />


                <div className="relative z-10">

                    {/* ================= SECTION HEADING ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <p className="mb-4 text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-sm sm:tracking-[0.45em]">
                            BOOK YOUR ENTRY
                        </p>


                        <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">

                            Choose Your{" "}

                            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                                Experience
                            </span>

                        </h2>


                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-7">

                            Choose the perfect pass for yourself, your partner or your entire
                            family and get ready to celebrate an unforgettable Dandiya Night.

                        </p>

                    </motion.div>


                    {/* ================= PASS CARDS ================= */}

                    <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-16 sm:gap-7 md:grid-cols-3">


                        {/* ================= SINGLE PASS ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#0c0c0c]
                                p-6
                                transition
                                duration-300
                                hover:border-orange-400/50
                                sm:p-8
                            "
                        >

                            {/* Glow */}

                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-300 group-hover:bg-orange-500/20" />


                            <div className="relative">

                                {/* Icon */}

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <User size={30} strokeWidth={1.8} />
                                </div>


                                {/* Title */}

                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    Single Pass
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Perfect for one person ready to join the celebration.
                                </p>


                                {/* Features */}

                                <div className="my-6 space-y-3 text-sm text-white/70 sm:my-7">

                                    <p>✓ Entry for 1 Person</p>

                                    <p>✓ Access to Dandiya Night</p>

                                    <p>✓ Music & Dance Experience</p>

                                </div>


                                {/* Price */}

                                <div className="border-t border-white/10 pt-5 sm:pt-6">

                                    <p className="text-sm text-white/40">
                                        Starting From
                                    </p>

                                    <h4 className="mt-1 text-3xl font-bold text-orange-400">
                                        ₹ 199
                                    </h4>

                                </div>


                                {/* Button */}

                                <Link
                                    to="/passes"
                                    className="mt-6 flex w-full items-center justify-center rounded-xl border border-orange-400/40 py-3 font-semibold text-orange-300 transition duration-300 hover:bg-orange-400 hover:text-black sm:mt-7"
                                >
                                    Choose Pass
                                </Link>

                            </div>

                        </motion.div>


                        {/* ================= COUPLE PASS ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -12 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-orange-400/50
                                bg-gradient-to-b
                                from-orange-500/10
                                to-[#0c0c0c]
                                p-6
                                shadow-[0_0_50px_rgba(249,115,22,0.08)]
                                transition
                                duration-300
                                hover:border-orange-400
                                sm:p-8
                            "
                        >

                            {/* POPULAR BADGE */}

                            <div className="absolute right-4 top-4 rounded-full bg-orange-400 px-2.5 py-1 text-[10px] font-bold text-black sm:right-5 sm:top-5 sm:px-3 sm:text-xs">
                                MOST POPULAR
                            </div>


                            {/* Glow */}

                            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[70px]" />


                            <div className="relative">

                                {/* Icon */}

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <Heart size={30} strokeWidth={1.8} />
                                </div>


                                {/* Title */}

                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    Couple Pass
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-white/60">
                                    Celebrate together and create unforgettable memories.
                                </p>


                                {/* Features */}

                                <div className="my-6 space-y-3 text-sm text-white/75 sm:my-7">

                                    <p>✓ Entry for 2 members</p>

                                    <p>✓ Access to Dandiya Night</p>

                                    <p>✓ Music & Dance Experience</p>

                                </div>


                                {/* Price */}

                                <div className="border-t border-orange-400/20 pt-5 sm:pt-6">

                                    <p className="text-sm text-white/40">
                                        Starting From
                                    </p>

                                    <h4 className="mt-1 text-3xl font-bold text-orange-400">
                                        ₹ 349
                                    </h4>

                                </div>


                                {/* Button */}

                                <Link
                                    to="/passes"
                                    className="mt-6 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 font-bold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] sm:mt-7"
                                >
                                    Choose Pass
                                </Link>

                            </div>

                        </motion.div>


                        {/* ================= FAMILY PASS ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#0c0c0c]
                                p-6
                                transition
                                duration-300
                                hover:border-orange-400/50
                                sm:p-8
                            "
                        >

                            {/* Glow */}

                            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-300 group-hover:bg-orange-500/20" />


                            <div className="relative">

                                {/* Icon */}

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:mb-6 sm:h-16 sm:w-16">
                                    <Users size={30} strokeWidth={1.8} />
                                </div>


                                {/* Title */}

                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    Family Pass
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-white/55">
                                    Bring your loved ones and celebrate the festival together.
                                </p>


                                {/* Features */}

                                <div className="my-6 space-y-3 text-sm text-white/70 sm:my-7">

                                    <p>✓ Entry of 4 members</p>

                                    <p>✓ Access to Dandiya Night</p>

                                    <p>✓ Music & Dance Experience</p>

                                </div>


                                {/* Price */}

                                <div className="border-t border-white/10 pt-5 sm:pt-6">

                                    <p className="text-sm text-white/40">
                                        Starting From
                                    </p>

                                    <h4 className="mt-1 text-3xl font-bold text-orange-400">
                                        ₹ 599
                                    </h4>

                                </div>


                                {/* Button */}

                                <Link
                                    to="/passes"
                                    className="mt-6 flex w-full items-center justify-center rounded-xl border border-orange-400/40 py-3 font-semibold text-orange-300 transition duration-300 hover:bg-orange-400 hover:text-black sm:mt-7"
                                >
                                    Choose Pass
                                </Link>

                            </div>

                        </motion.div>

                    </div>


                    {/* ================= BOTTOM BUTTON ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-10 text-center sm:mt-12"
                    >

                        <Link
                            to="/passes"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
                        >

                            View All Pass Details

                            <span className="text-lg">
                                →
                            </span>

                        </Link>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Home;