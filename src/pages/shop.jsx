// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   ArrowRight,
//   Check,
//   Package,
//   Sparkles,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/cartContext";

// function Shop() {

//   const { addToCart } = useCart();

//   const products = [
//     {
//       id: "single-dandiya",
//       type: "product",
//       name: "Single Dandiya Set",
//       price: 199,
//       description:
//         "Perfect for one person ready to join the celebration with traditional Dandiya sticks.",
//       features: [
//         "1 Pair of Dandiya Sticks",
//         "Festival Ready Design",
//         "Lightweight & Comfortable",
//       ],
//       emoji: "🥢",
//       popular: false,
//     },
//     {
//       id: "family-dandiya",
//       type: "product",
//       name: "Family Dandiya Pack",
//       price: 699,
//       description:
//         "Bring the entire family together and enjoy the festival with our complete Dandiya pack.",
//       features: [
//         "4 Pairs of Dandiya Sticks",
//         "Premium Festival Design",
//         "Perfect for Family & Groups",
//         "Special Value Pack",
//       ],
//       emoji: "🪔",
//       popular: true,
//     },
//   ];

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#050505] px-5 py-16 text-white sm:px-10 lg:px-16">

//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

//       <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-yellow-500/5 blur-[160px]" />

//       <div className="relative z-10">

//         {/* ================= HEADER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-4">
//             <span className="h-[1px] w-12 bg-orange-400/60" />

//             <p className="text-xs font-semibold tracking-[0.45em] text-orange-400 sm:text-sm">
//               DANDIYA SHOP
//             </p>

//             <span className="h-[1px] w-12 bg-orange-400/60" />
//           </div>

//           <h1 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
//             Don't Have{" "}
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
//               Dandiya?
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
//             No worries! Get your Dandiya set directly from us and arrive
//             fully prepared for an unforgettable night of dance and celebration.
//           </p>
//         </motion.div>


//         {/* ================= PRODUCTS ================= */}

//         <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">

//           {products.map((product, index) => (

//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.15,
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//               }}
//               className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${product.popular
//                 ? "border-orange-400/60 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_50px_rgba(249,115,22,0.12)]"
//                 : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
//                 }`}
//             >

//               {/* Popular Badge */}
//               {product.popular && (
//                 <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-black">
//                   BEST VALUE
//                 </div>
//               )}


//               {/* Decorative Glow */}
//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-300 group-hover:bg-orange-500/20" />


//               <div className="relative">

//                 {/* Product Icon */}
//                 <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-5xl transition duration-300 group-hover:scale-110">
//                   {product.emoji}
//                 </div>


//                 {/* Product Name */}
//                 <h2 className="text-3xl font-bold text-white">
//                   {product.name}
//                 </h2>


//                 {/* Description */}
//                 <p className="mt-4 min-h-[72px] leading-7 text-white/60">
//                   {product.description}
//                 </p>


//                 {/* Price */}
//                 <div className="my-8 flex items-end gap-2">

//                   <span className="text-5xl font-bold text-orange-400">
//                     ₹{product.price}
//                   </span>

//                   <span className="mb-2 text-sm text-white/50">
//                     / pack
//                   </span>

//                 </div>


//                 <div className="h-[1px] bg-white/10" />


//                 {/* Features */}
//                 <div className="my-7 space-y-4">

//                   {product.features.map((feature) => (

//                     <div
//                       key={feature}
//                       className="flex items-center gap-3 text-sm text-white/70"
//                     >
//                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
//                         <Check size={14} />
//                       </div>

//                       {feature}
//                     </div>

//                   ))}

//                 </div>


//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all duration-300 ${product.popular
//                       ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
//                       : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
//                     }`}
//                 >
//                   <ShoppingCart size={20} />

//                   Add to Cart

//                   <ArrowRight size={18} />
//                 </button>

//               </div>

//             </motion.div>

//           ))}

//         </div>


//         {/* ================= EXTRA INFO ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mx-auto mt-16 flex max-w-4xl flex-col gap-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-7 sm:flex-row sm:items-center"
//         >

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
//             <Sparkles size={28} />
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">
//               Festival Ready, Just One Click Away!
//             </h3>

//             <p className="mt-2 text-sm leading-6 text-white/55">
//               Add your Dandiya pack along with your event pass and complete
//               everything in one simple booking.
//             </p>
//           </div>

//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default Shop;
































































// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   ArrowRight,
//   Check,
//   Sparkles,
// } from "lucide-react";
// import { useCart } from "../context/cartContext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// function Shop() {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: "single-dandiya",
//       type: "product",
//       name: "Single Dandiya Set",
//       price: 199,
//       description:
//         "Perfect for one person ready to join the celebration with traditional Dandiya sticks.",
//       features: [
//         "1 Pair of Dandiya Sticks",
//         "Festival Ready Design",
//         "Lightweight & Comfortable",
//       ],
//       emoji: "🥢",
//       popular: false,
//     },
//     {
//       id: "family-dandiya",
//       type: "product",
//       name: "Family Dandiya Pack",
//       price: 699,
//       description:
//         "Bring the entire family together and enjoy the festival with our complete Dandiya pack.",
//       features: [
//         "4 Pairs of Dandiya Sticks",
//         "Premium Festival Design",
//         "Perfect for Family & Groups",
//         "Special Value Pack",
//       ],
//       emoji: "🪔",
//       popular: true,
//     },
//   ];

//   // ================= ADD TO CART =================

//   const handleAddToCart = async (product) => {
//     addToCart(product);

//     const result = await Swal.fire({
//       background: "#0b0b0b",
//       color: "#ffffff",
//       icon: "success",
//       title: "Added to Cart! 🪔",
//       text: `${product.name} has been added to your cart.`,
//       showCancelButton: true,
//       confirmButtonText: "Go to Cart",
//       cancelButtonText: "Continue Shopping",
//       confirmButtonColor: "#f97316",
//       cancelButtonColor: "#374151",
//       reverseButtons: true,
//     });

//     if (result.isConfirmed) {
//       navigate("/cart");
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#050505] px-5 py-16 text-white sm:px-10 lg:px-16">

//       {/* Background Glow */}

//       <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

//       <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-yellow-500/5 blur-[160px]" />

//       <div className="relative z-10">

//         {/* ================= HEADER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-4">
//             <span className="h-[1px] w-12 bg-orange-400/60" />

//             <p className="text-xs font-semibold tracking-[0.45em] text-orange-400 sm:text-sm">
//               DANDIYA SHOP
//             </p>

//             <span className="h-[1px] w-12 bg-orange-400/60" />
//           </div>

//           <h1 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
//             Don't Have{" "}
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
//               Dandiya?
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
//             No worries! Get your Dandiya set directly from us and arrive
//             fully prepared for an unforgettable night of dance and celebration.
//           </p>
//         </motion.div>

//         {/* ================= PRODUCTS ================= */}

//         <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">

//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.1,
//                 // delay: index * 0.15,
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//               }}
//               className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${product.popular
//                 ? "border-orange-400/60 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_50px_rgba(249,115,22,0.12)]"
//                 : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
//                 }`}
//             >

//               {/* Popular Badge */}

//               {product.popular && (
//                 <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-black">
//                   BEST VALUE
//                 </div>
//               )}

//               {/* Decorative Glow */}

//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-300 group-hover:bg-orange-500/20" />

//               <div className="relative">

//                 {/* Product Icon */}

//                 <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-5xl transition duration-300 group-hover:scale-110">
//                   {product.emoji}
//                 </div>

//                 {/* Product Name */}

//                 <h2 className="text-3xl font-bold text-white">
//                   {product.name}
//                 </h2>

//                 {/* Description */}

//                 <p className="mt-4 min-h-[72px] leading-7 text-white/60">
//                   {product.description}
//                 </p>

//                 {/* Price */}

//                 <div className="my-8 flex items-end gap-2">

//                   <span className="text-5xl font-bold text-orange-400">
//                     ₹{product.price}
//                   </span>

//                   <span className="mb-2 text-sm text-white/50">
//                     / pack
//                   </span>

//                 </div>

//                 <div className="h-[1px] bg-white/10" />

//                 {/* Features */}

//                 <div className="my-7 space-y-4">

//                   {product.features.map((feature) => (
//                     <div
//                       key={feature}
//                       className="flex items-center gap-3 text-sm text-white/70"
//                     >
//                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
//                         <Check size={14} />
//                       </div>

//                       {feature}
//                     </div>
//                   ))}

//                 </div>

//                 {/* Add to Cart Button */}

//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all duration-300 ${product.popular
//                     ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
//                     : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
//                     }`}
//                 >
//                   <ShoppingCart size={20} />

//                   Add to Cart

//                   <ArrowRight size={18} />
//                 </button>

//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* ================= EXTRA INFO ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mx-auto mt-16 flex max-w-4xl flex-col gap-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-7 sm:flex-row sm:items-center"
//         >

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
//             <Sparkles size={28} />
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">
//               Festival Ready, Just One Click Away!
//             </h3>

//             <p className="mt-2 text-sm leading-6 text-white/55">
//               Add your Dandiya pack along with your event pass and complete
//               everything in one simple booking.
//             </p>
//           </div>

//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default Shop;




























































































































































































































































// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   ArrowRight,
//   Check,
//   Sparkles,
//   User,
//   Users,
// } from "lucide-react";
// import { useCart } from "../context/cartContext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// function Shop() {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   // ================= PRODUCTS =================

//   const products = [
//     {
//       id: "single-dandiya",
//       type: "product",
//       name: "Single Dandiya Set",
//       price: 199,
//       description:
//         "Perfect for one person ready to join the celebration with traditional Dandiya sticks.",
//       features: [
//         "1 Pair of Dandiya Sticks",
//         "Festival Ready Design",
//         "Lightweight & Comfortable",
//       ],
//       icon: User,
//       popular: false,
//     },

//     {
//       id: "family-dandiya",
//       type: "product",
//       name: "Family Dandiya Pack",
//       price: 699,
//       description:
//         "Bring the entire family together and enjoy the festival with our complete Dandiya pack.",
//       features: [
//         "4 Pairs of Dandiya Sticks",
//         "Premium Festival Design",
//         "Perfect for Family & Groups",
//         "Special Value Pack",
//       ],
//       icon: Users,
//       popular: true,
//     },
//   ];

//   // ================= GO TO CART =================

//   const handleGoToCart = () => {
//     navigate("/cart");
//   };

//   // ================= ADD TO CART =================

//   const handleAddToCart = async (product) => {
//     addToCart(product);

//     const result = await Swal.fire({
//       background: "#0b0b0b",
//       color: "#ffffff",
//       icon: "success",
//       title: "Added to Cart! 🛒",
//       text: `${product.name} has been added to your cart.`,
//       showCancelButton: true,
//       confirmButtonText: "Go to Cart",
//       cancelButtonText: "Continue Shopping",
//       confirmButtonColor: "#f97316",
//       cancelButtonColor: "#374151",
//       reverseButtons: true,
//       buttonsStyling: true,
//     });

//     if (result.isConfirmed) {
//       handleGoToCart();
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16">

//       {/* =====================================================
//           BACKGROUND GLOWS
//       ====================================================== */}

//       <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:left-[-80px] sm:h-80 sm:w-80 sm:blur-[140px]" />

//       <div className="pointer-events-none absolute right-[-120px] top-1/2 h-80 w-80 rounded-full bg-yellow-500/5 blur-[130px] sm:right-[-80px] sm:h-96 sm:w-96 sm:blur-[160px]" />

//       <div className="relative z-10">

//         {/* =====================================================
//             HEADER
//         ====================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.1,
//           }}
//           className="mx-auto max-w-3xl text-center"
//         >

//           {/* TOP LABEL */}

//           <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 sm:gap-4">

//             <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

//             <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs sm:tracking-[0.45em] md:text-sm">
//               DANDIYA SHOP
//             </p>

//             <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

//           </div>

//           {/* TITLE */}

//           <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
//             Don't Have{" "}

//             <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
//               Dandiya?
//             </span>
//           </h1>

//           {/* DESCRIPTION */}

//           <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
//             No worries! Get your Dandiya set directly from us and arrive
//             fully prepared for an unforgettable night of dance and celebration.
//           </p>

//         </motion.div>

//         {/* =====================================================
//             PRODUCTS
//         ====================================================== */}

//         <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-14 sm:gap-7 md:mt-16 md:grid-cols-2 md:gap-8">

//           {products.map((product, index) => {
//             const Icon = product.icon;

//             return (
//               <motion.div
//                 key={product.id}

//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}

//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}

//                 transition={{
//                   duration: 0.1,
//                   delay: index * 0.05,
//                 }}

//                 whileHover={{
//                   y: -8,
//                   scale: 1.01,
//                   transition: {
//                     duration: 0.1,
//                   },
//                 }}

//                 className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-100 sm:rounded-3xl sm:p-7 md:p-8 ${product.popular
//                     ? "border-orange-400/60 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_40px_rgba(249,115,22,0.10)] sm:shadow-[0_0_50px_rgba(249,115,22,0.12)]"
//                     : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
//                   }`}
//               >

//                 {/* =====================================================
//                     POPULAR BADGE
//                 ====================================================== */}

//                 {product.popular && (
//                   <div className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold tracking-wide text-black sm:right-5 sm:top-5 sm:px-4 sm:text-xs">
//                     BEST VALUE
//                   </div>
//                 )}

//                 {/* =====================================================
//                     DECORATIVE GLOW
//                 ====================================================== */}

//                 <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-100 group-hover:bg-orange-500/20" />

//                 <div className="relative">

//                   {/* =====================================================
//                       PRODUCT ICON
//                   ====================================================== */}

//                   <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-orange-400 transition-transform duration-100 group-hover:scale-105 sm:mb-7 sm:h-20 sm:w-20">

//                     <Icon
//                       size={34}
//                       strokeWidth={1.8}
//                     />

//                   </div>

//                   {/* =====================================================
//                       PRODUCT NAME
//                   ====================================================== */}

//                   <h2 className="pr-20 text-2xl font-bold leading-tight text-white sm:pr-0 sm:text-3xl">
//                     {product.name}
//                   </h2>

//                   {/* =====================================================
//                       DESCRIPTION
//                   ====================================================== */}

//                   <p className="mt-3 min-h-0 text-sm leading-6 text-white/60 sm:mt-4 sm:min-h-[72px] sm:text-base sm:leading-7">
//                     {product.description}
//                   </p>

//                   {/* =====================================================
//                       PRICE
//                   ====================================================== */}

//                   <div className="my-6 flex items-end gap-2 sm:my-8">

//                     <span className="text-4xl font-bold text-orange-400 sm:text-5xl">
//                       ₹{product.price}
//                     </span>

//                     <span className="mb-1.5 text-xs text-white/50 sm:mb-2 sm:text-sm">
//                       / pack
//                     </span>

//                   </div>

//                   <div className="h-px bg-white/10" />

//                   {/* =====================================================
//                       FEATURES
//                   ====================================================== */}

//                   <div className="my-6 space-y-3.5 sm:my-7 sm:space-y-4">

//                     {product.features.map((feature) => (

//                       <div
//                         key={feature}
//                         className="flex items-start gap-3 text-sm leading-5 text-white/70"
//                       >

//                         <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
//                           <Check size={14} />
//                         </div>

//                         <span>
//                           {feature}
//                         </span>

//                       </div>

//                     ))}

//                   </div>

//                   {/* =====================================================
//                       ADD TO CART BUTTON
//                   ====================================================== */}

//                   <button
//                     type="button"
//                     onClick={() => handleAddToCart(product)}
//                     className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-100 active:scale-[0.98] sm:py-4 sm:text-base ${product.popular
//                         ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
//                         : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
//                       }`}
//                   >

//                     <ShoppingCart
//                       size={20}
//                       strokeWidth={2}
//                       className="shrink-0"
//                     />

//                     <span>
//                       Add to Cart
//                     </span>

//                     <ArrowRight
//                       size={18}
//                       strokeWidth={2}
//                       className="shrink-0 transition-transform duration-100 group-hover/btn:translate-x-1"
//                     />

//                   </button>

//                 </div>

//               </motion.div>
//             );
//           })}

//         </div>

//         {/* =====================================================
//             EXTRA INFO
//         ====================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             delay: 0.2,
//             duration: 0.1,
//           }}
//           className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-6 sm:rounded-3xl sm:p-7 md:mt-16"
//         >

//           {/* ICON */}

//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 sm:h-14 sm:w-14">

//             <Sparkles
//               size={26}
//               strokeWidth={1.8}
//             />

//           </div>

//           {/* CONTENT */}

//           <div>

//             <h3 className="text-base font-bold sm:text-lg">
//               Festival Ready, Just One Click Away!
//             </h3>

//             <p className="mt-1.5 text-xs leading-5 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
//               Add your Dandiya pack along with your event pass and complete
//               everything in one simple booking.
//             </p>

//           </div>

//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default Shop;












































































































import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// ============================================================
// ===================== DANDIYA ICONS =========================
// ============================================================

const DandiyaIcon = ({ size = 34, strokeWidth = 1.8 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Dandiya */}
      <path d="M12 8L36 40" />

      {/* Right Dandiya */}
      <path d="M36 8L12 40" />

      {/* Decorative ends */}
      <path d="M9 7H15" />
      <path d="M33 7H39" />

      <path d="M9 41H15" />
      <path d="M33 41H39" />

      {/* Decorative bands */}
      <path d="M16 14L21 11" />
      <path d="M27 37L32 34" />

      <path d="M32 14L27 11" />
      <path d="M21 37L16 34" />
    </svg>
  );
};

// ============================================================
// ================== DANDIYA SET ICON ========================
// ============================================================

const DandiyaSetIcon = ({ size = 34, strokeWidth = 1.8 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Dandiya 1 */}
      <path d="M9 9L19 39" />

      {/* Dandiya 2 */}
      <path d="M16 7L24 41" />

      {/* Dandiya 3 */}
      <path d="M24 7L24 41" />

      {/* Dandiya 4 */}
      <path d="M32 7L24 41" />

      {/* Dandiya 5 */}
      <path d="M39 9L29 39" />

      {/* Decorative tips */}
      <path d="M7 8L11 7" />
      <path d="M14 6L18 5" />
      <path d="M22 6H26" />
      <path d="M30 5L34 6" />
      <path d="M37 7L41 8" />

      {/* Bottom tips */}
      <path d="M17 40L21 39" />
      <path d="M22 42H26" />
      <path d="M27 39L31 40" />
    </svg>
  );
};

// ============================================================
// ========================== SHOP =============================
// ============================================================

function Shop() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // ================= PRODUCTS =================

  const products = [
    {
      id: "single-dandiya",
      type: "product",
      name: "Single Dandiya Set",
      price: 199,
      description:
        "Perfect for one person ready to join the celebration with traditional Dandiya sticks.",
      features: [
        "1 Pair of Dandiya Sticks",
        "Festival Ready Design",
        "Lightweight & Comfortable",
      ],
      icon: DandiyaIcon,
      popular: false,
    },

    {
      id: "family-dandiya",
      type: "product",
      name: "Family Dandiya Pack",
      price: 699,
      description:
        "Bring the entire family together and enjoy the festival with our complete Dandiya pack.",
      features: [
        "4 Pairs of Dandiya Sticks",
        "Premium Festival Design",
        "Perfect for Family & Groups",
        "Special Value Pack",
      ],
      icon: DandiyaSetIcon,
      popular: true,
    },
  ];

  // ================= GO TO CART =================

  const handleGoToCart = () => {
    navigate("/cart");
  };

  // ================= ADD TO CART =================

  const handleAddToCart = async (product) => {
    addToCart(product);

    const result = await Swal.fire({
      background: "#0b0b0b",
      color: "#ffffff",
      icon: "success",
      title: "Added to Cart! 🛒",
      text: `${product.name} has been added to your cart.`,
      showCancelButton: true,
      confirmButtonText: "Go to Cart",
      cancelButtonText: "Continue Shopping",
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#374151",
      reverseButtons: true,
      buttonsStyling: true,
    });

    if (result.isConfirmed) {
      handleGoToCart();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] sm:left-[-80px] sm:h-80 sm:w-80 sm:blur-[140px]" />

      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-80 w-80 rounded-full bg-yellow-500/5 blur-[130px] sm:right-[-80px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      {/* Decorative warm glow */}

      <div className="pointer-events-none absolute left-1/2 top-[35%] h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/[0.03] blur-[100px]" />

      <div className="relative z-10">

        {/* =====================================================
            HEADER
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
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* TOP LABEL */}

          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 sm:gap-4">

            <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

            <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs sm:tracking-[0.45em] md:text-sm">
              DANDIYA SHOP
            </p>

            <span className="h-px w-7 bg-orange-400/60 sm:w-12" />

          </div>

          {/* TITLE */}

          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Don't Have{" "}

            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Dandiya?
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            No worries! Get your Dandiya set directly from us and arrive
            fully prepared for an unforgettable night of dance and celebration.
          </p>

        </motion.div>

        {/* =====================================================
            PRODUCTS
        ====================================================== */}

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-14 sm:gap-7 md:mt-16 md:grid-cols-2 md:gap-8">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  transition: {
                    duration: 0.1,
                  },
                }}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-100 sm:rounded-3xl sm:p-7 md:p-8 ${product.popular
                    ? "border-orange-400/60 bg-gradient-to-b from-orange-500/15 to-[#0b0b0b] shadow-[0_0_40px_rgba(249,115,22,0.10)] sm:shadow-[0_0_50px_rgba(249,115,22,0.12)]"
                    : "border-white/10 bg-[#0b0b0b] hover:border-orange-400/50"
                  }`}
              >

                {/* =====================================================
                    POPULAR BADGE
                ====================================================== */}

                {product.popular && (
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold tracking-wide text-black sm:right-5 sm:top-5 sm:px-4 sm:text-xs">

                    <span className="text-sm leading-none">
                      ★
                    </span>

                    BEST VALUE

                  </div>
                )}

                {/* =====================================================
                    DECORATIVE GLOW
                ====================================================== */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-[70px] transition duration-100 group-hover:bg-orange-500/20" />

                <div className="relative">

                  {/* =====================================================
                      PRODUCT ICON
                  ====================================================== */}

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-orange-400 transition-transform duration-100 group-hover:scale-105 sm:mb-7 sm:h-20 sm:w-20">

                    <Icon
                      size={34}
                      strokeWidth={1.8}
                    />

                  </div>

                  {/* =====================================================
                      PRODUCT NAME
                  ====================================================== */}

                  <h2 className="pr-20 text-2xl font-bold leading-tight text-white sm:pr-0 sm:text-3xl">
                    {product.name}
                  </h2>

                  {/* =====================================================
                      DESCRIPTION
                  ====================================================== */}

                  <p className="mt-3 min-h-0 text-sm leading-6 text-white/60 sm:mt-4 sm:min-h-[72px] sm:text-base sm:leading-7">
                    {product.description}
                  </p>

                  {/* =====================================================
                      PRICE
                  ====================================================== */}

                  <div className="my-6 flex items-end gap-2 sm:my-8">

                    <span className="text-4xl font-bold text-orange-400 sm:text-5xl">
                      ₹{product.price}
                    </span>

                    <span className="mb-1.5 text-xs text-white/50 sm:mb-2 sm:text-sm">
                      / pack
                    </span>

                  </div>

                  {/* DIVIDER */}

                  <div className="h-px bg-white/10" />

                  {/* =====================================================
                      FEATURES
                  ====================================================== */}

                  <div className="my-6 space-y-3.5 sm:my-7 sm:space-y-4">

                    {product.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-5 text-white/70"
                      >

                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">

                          <Check
                            size={14}
                            strokeWidth={2.5}
                          />

                        </div>

                        <span>
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                  {/* =====================================================
                      ADD TO CART BUTTON
                  ====================================================== */}

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-100 active:scale-[0.98] sm:py-4 sm:text-base ${product.popular
                        ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]"
                        : "border border-orange-400/50 text-orange-400 hover:bg-orange-500 hover:text-black"
                      }`}
                  >

                    <ShoppingCart
                      size={20}
                      strokeWidth={2}
                      className="shrink-0"
                    />

                    <span>
                      Add to Cart
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="shrink-0 transition-transform duration-100 group-hover/btn:translate-x-1"
                    />

                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            EXTRA INFO
        ====================================================== */}

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
            delay: 0.2,
            duration: 0.1,
          }}
          className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-6 sm:rounded-3xl sm:p-7 md:mt-16"
        >

          {/* ICON */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 sm:h-14 sm:w-14">

            <Sparkles
              size={26}
              strokeWidth={1.8}
            />

          </div>

          {/* CONTENT */}

          <div>

            <h3 className="text-base font-bold sm:text-lg">
              Festival Ready, Just One Click Away!
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-white/55 sm:mt-2 sm:text-sm sm:leading-6">
              Add your Dandiya pack along with your event pass and complete
              everything in one simple booking.
            </p>

          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default Shop;