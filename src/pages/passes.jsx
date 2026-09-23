// import { motion } from "framer-motion";
// import { Check, User, Heart, Users, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/cartContext";

// function Passes() {

//   const { addToCart } = useCart();

//   const passes = [
//     {
//       id: "single-pass",
//       type: "pass",
//       title: "Single Pass",
//       price: 299,
//       icon: <User size={32} />,
//       description: "Perfect for enjoying the festival on your own.",
//       features: [
//         "Entry for 1 Person",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Ticket Code",
//       ],
//       popular: false,
//     },

//     {
//       id: "couple-pass",
//       type: "pass",
//       title: "Couple Pass",
//       price: 499,
//       icon: <Heart size={32} />,
//       description: "Celebrate an unforgettable Dandiya Night together.",
//       features: [
//         "Entry for 2 Persons",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Booking Code",
//       ],
//       popular: true,
//     },

//     {
//       id: "family-pass",
//       type: "pass",
//       title: "Family Pass",
//       price: 899,
//       icon: <Users size={32} />,
//       description: "Bring your family and celebrate together.",
//       features: [
//         "Family Entry",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Booking Code",
//       ],
//       popular: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505] px-5 py-16 text-white sm:px-10 lg:px-16">

//       {/* ================= HEADER ================= */}

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mx-auto max-w-3xl text-center"
//       >
//         <p className="mb-4 text-sm font-semibold tracking-[0.4em] text-orange-400">
//           CHOOSE YOUR EXPERIENCE
//         </p>

//         <h1 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
//           Select Your{" "}
//           <span className="text-orange-400">
//             Perfect Pass
//           </span>
//         </h1>

//         <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
//           Choose the perfect pass for you and get ready to experience an
//           unforgettable night of dance, music, celebration and festive energy.
//         </p>
//       </motion.div>


//       {/* ================= PASS CARDS ================= */}

//       <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-3">

//         {passes.map((pass, index) => (

//           <motion.div
//             key={pass.title}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//             }}
//             whileHover={{
//               y: -12,
//               scale: 1.02,
//             }}
//             className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300
//               ${pass.popular
//                 ? "border-orange-400 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_40px_rgba(249,115,22,0.2)]"
//                 : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
//               }`}
//           >

//             {/* POPULAR BADGE */}

//             {pass.popular && (
//               <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-black">
//                 MOST POPULAR
//               </div>
//             )}


//             {/* ICON */}

//             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
//               {pass.icon}
//             </div>


//             {/* TITLE */}

//             <h2 className="mt-7 text-3xl font-bold">
//               {pass.title}
//             </h2>


//             {/* DESCRIPTION */}

//             <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/60">
//               {pass.description}
//             </p>


//             {/* PRICE */}

//             <div className="my-7 flex items-end gap-2">

//               <span className="text-5xl font-bold text-orange-400">
//                 ₹{pass.price}
//               </span>

//               <span className="mb-2 text-sm text-white/50">
//                 / pass
//               </span>

//             </div>


//             {/* LINE */}

//             <div className="h-[1px] w-full bg-white/10" />


//             {/* FEATURES */}

//             <div className="my-7 space-y-4">

//               {pass.features.map((feature) => (

//                 <div
//                   key={feature}
//                   className="flex items-center gap-3 text-sm text-white/75"
//                 >

//                   <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
//                     <Check size={14} />
//                   </div>

//                   {feature}

//                 </div>

//               ))}

//             </div>


//             {/* BUTTON */}

//             <button
//               onClick={() => {
//                 addToCart({
//                   id: pass.id,
//                   name: pass.title,
//                   price: pass.price,
//                   type: "pass",
//                 });
//               }}
//               className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold transition-all duration-300 ${pass.popular
//                 ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
//                 : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
//                 }`}
//             >
//               Add to Cart

//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//           </motion.div>

//         ))}

//       </div>


//       {/* ================= BOTTOM INFO ================= */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="mx-auto mt-16 max-w-3xl rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 text-center"
//       >

//         <p className="text-sm leading-7 text-white/60">
//           🎉 After successful payment, you will receive a unique booking code
//           and QR code. Your QR code will be scanned at the event entrance for
//           secure verification.
//         </p>

//       </motion.div>

//     </div>
//   );
// }

// export default Passes;




























































// import { motion } from "framer-motion";
// import { Check, User, Heart, Users, ArrowRight, ShoppingCart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/cartContext";
// import Swal from "sweetalert2";

// function Passes() {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const passes = [
//     {
//       id: "single-pass",
//       type: "pass",
//       title: "Single Pass",
//       price: 299,
//       icon: <User size={32} />,
//       description: "Perfect for enjoying the festival on your own.",
//       features: [
//         "Entry for 1 Person",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Ticket Code",
//       ],
//       popular: false,
//     },

//     {
//       id: "couple-pass",
//       type: "pass",
//       title: "Couple Pass",
//       price: 499,
//       icon: <Heart size={32} />,
//       description: "Celebrate an unforgettable Dandiya Night together.",
//       features: [
//         "Entry for 2 Persons",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Booking Code",
//       ],
//       popular: true,
//     },

//     {
//       id: "family-pass",
//       type: "pass",
//       title: "Family Pass",
//       price: 899,
//       icon: <Users size={32} />,
//       description: "Bring your family and celebrate together.",
//       features: [
//         "Family Entry",
//         "Dandiya Night Access",
//         "Music & Dance Experience",
//         "QR Code Entry",
//         "Unique Booking Code",
//       ],
//       popular: false,
//     },
//   ];

//   // ================= ADD TO CART =================

//   const handleAddToCart = async (pass) => {
//     addToCart({
//       id: pass.id,
//       name: pass.title,
//       price: pass.price,
//       type: "pass",
//     });

//     await Swal.fire({
//       background: "#0b0b0b",
//       color: "#ffffff",
//       icon: "success",
//       title: "Added to Cart! 🎟️",
//       text: `${pass.title} has been added to your cart.`,
//       showCancelButton: true,
//       confirmButtonText: "Go to Cart",
//       cancelButtonText: "Continue Browsing",
//       confirmButtonColor: "#f97316",
//       cancelButtonColor: "#374151",
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate("/cart");
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] px-5 py-16 text-white sm:px-10 lg:px-16">

//       {/* ================= HEADER ================= */}

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mx-auto max-w-3xl text-center"
//       >
//         <p className="mb-4 text-sm font-semibold tracking-[0.4em] text-orange-400">
//           CHOOSE YOUR EXPERIENCE
//         </p>

//         <h1 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
//           Select Your{" "}
//           <span className="text-orange-400">
//             Perfect Pass
//           </span>
//         </h1>

//         <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
//           Choose the perfect pass for you and get ready to experience an
//           unforgettable night of dance, music, celebration and festive energy.
//         </p>
//       </motion.div>

//       {/* ================= PASS CARDS ================= */}

//       <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-3">

//         {passes.map((pass, index) => (

//           <motion.div
//             key={pass.title}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//             }}
//             whileHover={{
//               y: -12,
//               scale: 1.02,
//             }}
//             className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300
//               ${pass.popular
//                 ? "border-orange-400 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_40px_rgba(249,115,22,0.2)]"
//                 : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
//               }`}
//           >

//             {/* POPULAR BADGE */}

//             {pass.popular && (
//               <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-black">
//                 MOST POPULAR
//               </div>
//             )}

//             {/* ICON */}

//             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
//               {pass.icon}
//             </div>

//             {/* TITLE */}

//             <h2 className="mt-7 text-3xl font-bold">
//               {pass.title}
//             </h2>

//             {/* DESCRIPTION */}

//             <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/60">
//               {pass.description}
//             </p>

//             {/* PRICE */}

//             <div className="my-7 flex items-end gap-2">

//               <span className="text-5xl font-bold text-orange-400">
//                 ₹{pass.price}
//               </span>

//               <span className="mb-2 text-sm text-white/50">
//                 / pass
//               </span>

//             </div>

//             {/* LINE */}

//             <div className="h-[1px] w-full bg-white/10" />

//             {/* FEATURES */}

//             <div className="my-7 space-y-4">

//               {pass.features.map((feature) => (

//                 <div
//                   key={feature}
//                   className="flex items-center gap-3 text-sm text-white/75"
//                 >

//                   <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
//                     <Check size={14} />
//                   </div>

//                   {feature}

//                 </div>

//               ))}

//             </div>

//             {/* BUTTON */}

//             <button
//               onClick={() => handleAddToCart(pass)}
//               className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold transition-all duration-300 ${pass.popular
//                   ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
//                   : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
//                 }`}
//             >
//               <ShoppingCart size={18} />

//               Add to Cart

//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//           </motion.div>

//         ))}

//       </div>

//       {/* ================= BOTTOM INFO ================= */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="mx-auto mt-16 max-w-3xl rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 text-center"
//       >

//         <p className="text-sm leading-7 text-white/60">
//           🎉 After successful payment, you will receive a unique booking code
//           and QR code. Your QR code will be scanned at the event entrance for
//           secure verification.
//         </p>

//       </motion.div>

//     </div>
//   );
// }

// export default Passes;




























































































































































































































































import { motion } from "framer-motion";
import {
  Check,
  User,
  Heart,
  Users,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import Swal from "sweetalert2";

function Passes() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // ================= PASS DETAILS =================
  // Prices are kept same as Home page:
  // Single ₹199 | Couple ₹349 | Family ₹599

  const passes = [
    {
      id: "single-pass",
      type: "pass",
      title: "Single Pass",
      price: 199,
      icon: User,
      description:
        "Perfect for enjoying the festival on your own.",
      features: [
        "Entry for 1 Person",
        "Dandiya Night Access",
        "Music & Dance Experience",
        "QR Code Entry",
        "Unique Ticket Code",
      ],
      popular: false,
    },

    {
      id: "couple-pass",
      type: "pass",
      title: "Couple Pass",
      price: 349,
      icon: Heart,
      description:
        "Celebrate an unforgettable Dandiya Night together.",
      features: [
        "Entry for 2 Persons",
        "Dandiya Night Access",
        "Music & Dance Experience",
        "QR Code Entry",
        "Unique Booking Code",
      ],
      popular: true,
    },

    {
      id: "family-pass",
      type: "pass",
      title: "Family Pass",
      price: 599,
      icon: Users,
      description:
        "Bring your family and celebrate together.",
      features: [
        "Entry for 4 Members",
        "Dandiya Night Access",
        "Music & Dance Experience",
        "QR Code Entry",
        "Unique Booking Code",
      ],
      popular: false,
    },
  ];

  // ================= ADD TO CART =================

  const handleAddToCart = async (pass) => {
    addToCart({
      id: pass.id,
      name: pass.title,
      price: pass.price,
      type: "pass",
    });

    const result = await Swal.fire({
      background: "#0b0b0b",
      color: "#ffffff",
      icon: "success",
      title: "Added to Cart! 🎟️",
      text: `${pass.title} has been added to your cart.`,
      showCancelButton: true,
      confirmButtonText: "Go to Cart",
      cancelButtonText: "Continue Browsing",
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#374151",
      reverseButtons: true,
      customClass: {
        popup: "rounded-3xl",
        confirmButton: "rounded-xl",
        cancelButton: "rounded-xl",
      },
    });

    if (result.isConfirmed) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      navigate("/cart");
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] px-4 py-12 text-white sm:px-6 sm:py-16 md:px-10 lg:px-16">

      {/* ================= HEADER ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-[10px] font-semibold tracking-[0.28em] text-orange-400 sm:mb-4 sm:text-sm sm:tracking-[0.4em]">
          CHOOSE YOUR EXPERIENCE
        </p>

        <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Select Your{" "}
          <span className="text-orange-400">
            Perfect Pass
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-white/60 sm:mt-5 sm:text-base sm:leading-7">
          Choose the perfect pass for you and get ready to
          experience an unforgettable night of dance, music,
          celebration and festive energy.
        </p>
      </motion.div>


      {/* ================= PASS CARDS ================= */}

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

        {passes.map((pass, index) => {
          const Icon = pass.icon;

          return (
            <motion.div
              key={pass.id}
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.1,
                // delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 transition-all duration-300 sm:p-7 lg:p-8 ${pass.popular
                  ? "border-orange-400 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_40px_rgba(249,115,22,0.18)]"
                  : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
                }`}
            >

              {/* ================= CARD GLOW ================= */}

              <div
                className={`pointer-events-none absolute h-32 w-32 rounded-full bg-orange-500/10 blur-[60px] ${pass.popular
                    ? "left-1/2 top-0 -translate-x-1/2"
                    : "-right-10 -top-10"
                  }`}
              />


              {/* ================= POPULAR BADGE ================= */}

              {pass.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-orange-400 px-3 py-1 text-[9px] font-bold tracking-wide text-black sm:right-5 sm:top-5 sm:px-4 sm:text-xs">
                  MOST POPULAR
                </div>
              )}


              <div className="relative flex h-full flex-col">

                {/* ================= ICON ================= */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-400/10 bg-orange-500/10 text-orange-400 sm:h-16 sm:w-16">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>


                {/* ================= TITLE ================= */}

                <h2 className="mt-6 text-2xl font-bold sm:mt-7 sm:text-3xl">
                  {pass.title}
                </h2>


                {/* ================= DESCRIPTION ================= */}

                <p className="mt-3 min-h-0 text-sm leading-6 text-white/60 sm:min-h-[48px]">
                  {pass.description}
                </p>


                {/* ================= PRICE ================= */}

                <div className="my-6 flex items-end gap-2 sm:my-7">

                  <span className="text-4xl font-bold tracking-tight text-orange-400 sm:text-5xl">
                    ₹{pass.price}
                  </span>

                  <span className="mb-1.5 text-xs text-white/45 sm:mb-2 sm:text-sm">
                    / pass
                  </span>

                </div>


                {/* ================= LINE ================= */}

                <div className="h-px w-full bg-white/10" />


                {/* ================= FEATURES ================= */}

                <div className="my-6 flex-1 space-y-3.5 sm:my-7 sm:space-y-4">

                  {pass.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >

                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                        <Check size={13} />
                      </span>

                      <span className="leading-5">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>


                {/* ================= BUTTON ================= */}

                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(pass)
                  }
                  className={`group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] sm:px-5 sm:py-4 sm:text-base ${pass.popular
                      ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
                      : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
                    }`}
                >

                  <ShoppingCart
                    size={18}
                    className="shrink-0"
                  />

                  <span>
                    Add to Cart
                  </span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </div>

            </motion.div>
          );
        })}

      </div>


      {/* ================= BOTTOM INFO ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.5,
        }}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 text-center sm:mt-16 sm:p-6"
      >

        <p className="text-xs leading-6 text-white/60 sm:text-sm sm:leading-7">
          🎉 After successful payment, you will receive a unique
          booking code and QR code. Your QR code will be scanned
          at the event entrance for secure verification.
        </p>

      </motion.div>

    </main>
  );
}

export default Passes;