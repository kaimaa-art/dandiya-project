// import { Link } from "react-router-dom";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "../context/cartContext";

// function Navbar() {

//     const [menuOpen, setMenuOpen] = useState(false);

//     const { totalItems } = useCart();

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Passes", path: "/passes" },
//         { name: "Dandiya Shop", path: "/shop" },
//         { name: "Contact", path: "/contact" },
//     ];

//     return (
//         <nav className="sticky top-0 z-50 border-b border-orange-500/20 bg-[#090909]/95 backdrop-blur-md">
//             <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

//                 {/* Logo */}
//                 <Link
//                     to="/"
//                     className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
//                 >
//                     <span className="text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
//                         🪔
//                     </span>

//                     <div className="leading-tight">
//                         <p className="text-xl font-bold text-orange-400 transition duration-300 group-hover:text-orange-300">
//                             DANDIYA
//                         </p>

//                         <p className="text-xs tracking-[0.3em] text-white/60">
//                             NIGHT
//                         </p>
//                     </div>
//                 </Link>


//                 {/* Desktop Navigation */}
//                 <div className="hidden items-center gap-8 md:flex">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             to={link.path}
//                             className="group relative py-2 text-sm font-semibold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-orange-400"
//                         >
//                             {link.name}

//                             {/* Animated Underline */}
//                             <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 transition-all duration-300 group-hover:w-full" />

//                             {/* Small Glow */}
//                             <span className="absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 bg-orange-400/40 blur-md transition-all duration-300 group-hover:w-full" />
//                         </Link>
//                     ))}
//                 </div>


//                 {/* Right Side */}
//                 <div className="flex items-center">

//                     {/* Cart */}
//                     <Link
//                         to="/cart"
//                         className="group relative flex items-center gap-2 rounded-full border border-orange-400/40 px-4 py-2 text-sm font-semibold text-orange-400 transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:bg-orange-400 hover:text-black hover:shadow-[0_0_20px_rgba(251,146,60,0.35)]"
//                     >
//                         <ShoppingCart
//                             size={18}
//                             className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
//                         />

//                         <span className="hidden sm:block">
//                             Cart
//                         </span>

//                         <span className="absolute -right-1 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110">
//                             {totalItems}
//                         </span>
//                     </Link>


//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="ml-3 rounded-lg p-2 text-white transition-all duration-300 hover:bg-orange-400/10 hover:text-orange-400 md:hidden"
//                         aria-label="Toggle menu"
//                     >
//                         {menuOpen ? (
//                             <X size={28} className="transition-transform duration-300" />
//                         ) : (
//                             <Menu size={28} className="transition-transform duration-300" />
//                         )}
//                     </button>

//                 </div>

//             </div>


//             {/* Mobile Menu */}
//             <div
//                 className={`overflow-hidden border-t border-white/10 bg-[#090909]/98 backdrop-blur-md transition-all duration-500 md:hidden ${menuOpen
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 border-transparent opacity-0"
//                     }`}
//             >
//                 <div className="flex flex-col gap-2 px-5 py-5">

//                     {navLinks.map((link, index) => (
//                         <Link
//                             key={link.name}
//                             to={link.path}
//                             onClick={() => setMenuOpen(false)}
//                             className="group flex items-center justify-between rounded-xl px-4 py-3 text-white/70 transition-all duration-300 hover:translate-x-2 hover:bg-orange-400/10 hover:text-orange-400"
//                             style={{
//                                 transitionDelay: menuOpen
//                                     ? `${index * 70}ms`
//                                     : "0ms",
//                             }}
//                         >
//                             <span className="font-medium">
//                                 {link.name}
//                             </span>

//                             <span className="text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
//                                 →
//                             </span>
//                         </Link>
//                     ))}

//                 </div>
//             </div>

//         </nav>
//     );
// }

// export default Navbar;
































































































































































































































































































































































import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/cartContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();

    const { totalItems } = useCart();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Passes", path: "/passes" },
        { name: "Dandiya Shop", path: "/shop" },
        { name: "Contact", path: "/contact" },
    ];

    // ================= SCROLL TO TOP =================

    const handleNavigation = () => {
        setMenuOpen(false);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-orange-500/20 bg-[#090909]/95 backdrop-blur-md">

            {/* ================= NAVBAR ================= */}

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">

                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    onClick={handleNavigation}
                    className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-105"
                >
                    <span className="text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:text-3xl">
                        🪔
                    </span>

                    <div className="leading-tight">
                        <p className="text-lg font-bold text-orange-400 transition duration-300 group-hover:text-orange-300 sm:text-xl">
                            DANDIYA
                        </p>

                        <p className="text-[9px] tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.3em]">
                            NIGHT
                        </p>
                    </div>
                </Link>


                {/* ================= DESKTOP NAVIGATION ================= */}

                <div className="hidden items-center gap-7 md:flex lg:gap-8">

                    {navLinks.map((link) => {
                        const isActive =
                            location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={handleNavigation}
                                className={`group relative py-2 text-sm font-semibold transition-all duration-200 ${isActive
                                        ? "text-orange-400"
                                        : "text-white/70 hover:-translate-y-1 hover:scale-105 hover:text-orange-400"
                                    }`}
                            >
                                {link.name}

                                {/* ================= ACTIVE / HOVER UNDERLINE ================= */}

                                <span
                                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 transition-all duration-200 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />

                                {/* ================= ACTIVE / HOVER GLOW ================= */}

                                <span
                                    className={`absolute -bottom-1 left-1/2 h-1 -translate-x-1/2 bg-orange-400/40 blur-md transition-all duration-200 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        );
                    })}

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="flex items-center">

                    {/* ================= CART ================= */}

                    <Link
                        to="/cart"
                        onClick={handleNavigation}
                        className={`group relative flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-200 sm:gap-2 sm:px-4 ${location.pathname === "/cart"
                                ? "border-orange-400 bg-orange-400 text-black shadow-[0_0_20px_rgba(251,146,60,0.35)]"
                                : "border-orange-400/40 text-orange-400 hover:scale-105 hover:border-orange-400 hover:bg-orange-400 hover:text-black hover:shadow-[0_0_20px_rgba(251,146,60,0.35)]"
                            }`}
                    >
                        <ShoppingCart
                            size={18}
                            className="transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110"
                        />

                        <span className="hidden sm:block">
                            Cart
                        </span>

                        {/* Cart Count */}
                        <span
                            className={`absolute -right-1.5 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white transition-transform duration-200 group-hover:scale-110 sm:text-xs ${location.pathname === "/cart"
                                    ? "bg-orange-600"
                                    : "bg-orange-500"
                                }`}
                        >
                            {totalItems}
                        </span>
                    </Link>


                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen((prev) => !prev)
                        }
                        className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 hover:bg-orange-400/10 hover:text-orange-400 active:scale-95 md:hidden"
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X
                                size={26}
                                className="transition-transform duration-200"
                            />
                        ) : (
                            <Menu
                                size={26}
                                className="transition-transform duration-200"
                            />
                        )}
                    </button>

                </div>

            </div>


            {/* ================= MOBILE MENU ================= */}

            <div
                className={`overflow-hidden border-t border-white/10 bg-[#090909]/98 backdrop-blur-md transition-all duration-300 md:hidden ${menuOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 border-transparent opacity-0"
                    }`}
            >

                <div className="flex flex-col gap-1.5 px-4 py-4 sm:px-5 sm:py-5">

                    {navLinks.map((link, index) => {
                        const isActive =
                            location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={handleNavigation}
                                className={`group flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 sm:text-base ${isActive
                                        ? "bg-orange-400/10 text-orange-400"
                                        : "text-white/70 hover:translate-x-1 hover:bg-orange-400/10 hover:text-orange-400"
                                    }`}
                                style={{
                                    transitionDelay: menuOpen
                                        ? `${index * 40}ms`
                                        : "0ms",
                                }}
                            >
                                <span className="font-medium">
                                    {link.name}
                                </span>

                                <span
                                    className={`text-lg text-orange-400 transition-all duration-200 ${isActive
                                            ? "translate-x-1 opacity-100"
                                            : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                        }`}
                                >
                                    →
                                </span>
                            </Link>
                        );
                    })}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;