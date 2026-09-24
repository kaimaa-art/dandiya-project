import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Camera,
    Heart,
    ChevronRight,
} from "lucide-react";

function Footer() {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Passes", path: "/passes" },
        { name: "Dandiya Shop", path: "/shop" },
        { name: "Contact", path: "/contact" },
    ];

    // Scroll page to top whenever a footer link is clicked
    const handleNavigation = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full overflow-hidden border-t border-orange-500/20 bg-[#070707] text-white">

            {/* ================= TOP FOOTER ================= */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-10">

                {/* ================= BRAND ================= */}
                <div className="min-w-0">

                    <Link
                        to="/"
                        onClick={handleNavigation}
                        className="inline-flex items-center gap-3"
                    >
                        <span className="text-3xl sm:text-4xl">
                            🪔
                        </span>

                        <div>
                            <h2 className="text-lg font-bold tracking-wide text-orange-400 sm:text-xl">
                                DANDIYA
                            </h2>

                            <p className="text-[10px] tracking-[0.3em] text-white/50 sm:text-xs sm:tracking-[0.35em]">
                                NIGHT 2026
                            </p>
                        </div>
                    </Link>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                        Celebrate the spirit of dance, devotion and togetherness.
                        Join us for an unforgettable Dandiya Night experience!
                    </p>

                    {/* ================= SOCIAL ICONS ================= */}
                    <div className="mt-6 flex gap-3">

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500 hover:text-black sm:h-11 sm:w-11"
                        >
                            <Camera size={18} />
                        </a>

                        <a
                            href="#"
                            aria-label="Social Media"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500 hover:text-black sm:h-11 sm:w-11"
                        >
                            <Camera size={18} />
                        </a>

                    </div>
                </div>


                {/* ================= QUICK LINKS ================= */}
                <div className="min-w-0">

                    <h3 className="text-lg font-bold">
                        Quick Links
                    </h3>

                    <div className="mt-5 flex flex-col gap-4 sm:mt-6">

                        {quickLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={handleNavigation}
                                className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-orange-400 sm:text-base"
                            >
                                <ChevronRight
                                    size={17}
                                    className="shrink-0 text-orange-400 transition-transform duration-300 group-hover:translate-x-1"
                                />

                                <span>
                                    {link.name}
                                </span>
                            </Link>
                        ))}

                    </div>
                </div>


                {/* ================= EVENT DETAILS ================= */}
                <div className="min-w-0">

                    <h3 className="text-lg font-bold">
                        Event Details
                    </h3>

                    <div className="mt-5 space-y-5 sm:mt-6">

                        {/* LOCATION */}
                        <div className="flex items-start gap-3">

                            <MapPin
                                size={20}
                                className="mt-1 shrink-0 text-orange-400"
                            />

                            <div className="min-w-0">
                                <p className="font-medium">
                                    Event Ground
                                </p>

                                <p className="mt-1 text-sm leading-6 text-white/50">
                                    Your Event Location
                                </p>
                            </div>

                        </div>


                        {/* PHONE */}
                        <div className="flex items-start gap-3">

                            <Phone
                                size={20}
                                className="mt-1 shrink-0 text-orange-400"
                            />

                            <div className="min-w-0">
                                <p className="break-words font-medium">
                                    +91 XXXXX XXXXX
                                </p>

                                <p className="mt-1 text-sm leading-6 text-white/50">
                                    Call us for information
                                </p>
                            </div>

                        </div>


                        {/* EMAIL */}
                        <div className="flex items-start gap-3">

                            <Mail
                                size={20}
                                className="mt-1 shrink-0 text-orange-400"
                            />

                            <div className="min-w-0">
                                <p className="break-all font-medium">
                                    info@dandiyanight.com
                                </p>

                                <p className="mt-1 text-sm leading-6 text-white/50">
                                    Email us anytime
                                </p>
                            </div>

                        </div>

                    </div>
                </div>


                {/* ================= FESTIVAL MESSAGE ================= */}
                <div className="min-w-0">

                    <h3 className="text-lg font-bold">
                        Celebrate With Us
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/55 sm:mt-6 sm:text-base sm:leading-7">
                        Experience the energy of Garba and Dandiya with music,
                        lights, tradition and unforgettable memories.
                    </p>

                    <Link
                        to="/passes"
                        onClick={handleNavigation}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] sm:text-base"
                    >
                        Book Your Pass

                        <ChevronRight size={19} />
                    </Link>

                </div>

            </div>


            {/* ================= BOTTOM FOOTER ================= */}
            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-white/45 sm:flex-row sm:px-8 sm:text-sm lg:px-10">

                    <p className="text-center sm:text-left">
                        © 2026 Dandiya Night. All Rights Reserved.
                    </p>

                    <p className="flex flex-wrap items-center justify-center gap-1 text-center">

                        <span>
                            Made with
                        </span>

                        <Heart
                            size={16}
                            className="fill-orange-500 text-orange-500"
                        />

                        <span>
                            for the Festival of Joy
                        </span>

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;