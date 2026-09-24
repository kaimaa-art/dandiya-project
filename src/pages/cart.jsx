import { motion } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import Swal from "sweetalert2";

function Cart() {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // ================= SCROLL TO TOP =================

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ================= REMOVE ITEM =================

  const handleRemove = async (item) => {
    const result = await Swal.fire({
      title: "Remove this item?",
      text: `${item.name || item.title} will be removed from your cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Keep It",
      background: "#0b0b0b",
      color: "#ffffff",
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
      removeFromCart(item.id);

      Swal.fire({
        title: "Removed!",
        text: "Item has been removed from your cart.",
        icon: "success",
        background: "#0b0b0b",
        color: "#ffffff",
        confirmButtonColor: "#f97316",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  // ================= EMPTY CART =================

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center overflow-hidden bg-[#050505] px-4 py-12 text-white sm:min-h-[calc(100vh-80px)] sm:px-6">

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
            duration: 0.5,
          }}
          className="w-full max-w-md text-center"
        >

          {/* ICON */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-400 sm:h-24 sm:w-24">
            <ShoppingCart
              size={38}
              strokeWidth={1.7}
              className="sm:h-[45px] sm:w-[45px]"
            />
          </div>


          {/* TITLE */}

          <h1 className="mt-7 text-2xl font-bold sm:mt-8 sm:text-3xl">
            Your Cart is Empty
          </h1>


          {/* DESCRIPTION */}

          <p className="mt-3 px-2 text-sm leading-6 text-white/60 sm:mt-4 sm:text-base sm:leading-7">
            Looks like you haven't added anything yet.
            Choose your event pass or grab your Dandiya set
            and get ready for the celebration!
          </p>


          {/* BUTTON */}

          <Link
            to="/passes"
            onClick={handleNavigation}
            className="mt-7 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] active:scale-95 sm:mt-8 sm:px-7 sm:text-base"
          >
            <ArrowLeft size={18} />

            Explore Passes
          </Link>

        </motion.div>

      </main>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-14 md:px-10 lg:px-16">

      {/* ================= HEADER ================= */}

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
          duration: 0.6,
        }}
        className="mx-auto max-w-7xl"
      >

        <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-sm sm:tracking-[0.4em]">
          YOUR BOOKING
        </p>

        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:mt-3 sm:text-5xl">
          Your{" "}
          <span className="text-orange-400">
            Cart
          </span>
        </h1>

        <p className="mt-3 text-sm text-white/60 sm:mt-4 sm:text-base">
          Review your passes and Dandiya items before checkout.
        </p>

      </motion.div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="mx-auto mt-8 grid max-w-7xl gap-7 sm:mt-12 sm:gap-10 lg:grid-cols-[1fr_380px]">


        {/* ================= CART ITEMS ================= */}

        <div className="space-y-4 sm:space-y-5">

          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 transition-all duration-300 hover:border-orange-400/30 sm:p-5"
            >

              {/* CARD GLOW */}

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/5 blur-3xl" />


              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">


                {/* ================= ITEM ICON ================= */}

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-400/10 bg-orange-500/10 text-3xl sm:h-20 sm:w-20">
                  {item.type === "pass"
                    ? "🎟️"
                    : item.emoji || "🪔"}
                </div>


                {/* ================= ITEM DETAILS ================= */}

                <div className="min-w-0 flex-1">

                  <h2 className="text-lg font-bold sm:text-xl">
                    {item.name || item.title}
                  </h2>

                  <p className="mt-1 text-xs text-white/45 sm:text-sm">
                    {item.type === "pass"
                      ? "Event Entry Pass"
                      : "Dandiya Festival Product"}
                  </p>

                  <p className="mt-2 text-xl font-bold text-orange-400 sm:mt-3">
                    ₹{item.price}
                  </p>

                </div>


                {/* ================= QUANTITY + REMOVE ================= */}

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-3">


                  {/* QUANTITY */}

                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-1">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-all duration-200 hover:bg-orange-500 hover:text-black active:scale-90 sm:h-10 sm:w-10"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>


                    <span className="w-6 text-center text-sm font-bold sm:w-7 sm:text-base">
                      {item.quantity}
                    </span>


                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-all duration-200 hover:bg-orange-500 hover:text-black active:scale-90 sm:h-10 sm:w-10"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>

                  </div>


                  {/* REMOVE */}

                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(item)
                    }
                    className="flex min-h-[40px] items-center gap-1.5 rounded-lg px-2 text-xs text-red-400/80 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 active:scale-95 sm:text-sm"
                  >
                    <Trash2 size={16} />

                    Remove
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>


        {/* ================= ORDER SUMMARY ================= */}

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
            duration: 0.6,
          }}
          className="h-fit rounded-3xl border border-orange-400/20 bg-[#0b0b0b] p-5 sm:p-7 lg:sticky lg:top-24"
        >

          {/* SUMMARY TITLE */}

          <h2 className="text-xl font-bold sm:text-2xl">
            Order Summary
          </h2>


          {/* ITEMS */}

          <div className="my-6 space-y-4 border-b border-white/10 pb-6 sm:my-7 sm:pb-7">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4 text-sm"
              >

                <span className="min-w-0 flex-1 leading-5 text-white/60">
                  {item.name || item.title} ×{" "}
                  {item.quantity}
                </span>

                <span className="shrink-0 font-semibold text-white">
                  ₹{item.price * item.quantity}
                </span>

              </div>
            ))}

          </div>


          {/* ================= TOTAL ================= */}

          <div className="flex items-center justify-between gap-4">

            <span className="text-base text-white/70 sm:text-lg">
              Total
            </span>

            <span className="text-2xl font-bold text-orange-400 sm:text-3xl">
              ₹{totalPrice}
            </span>

          </div>


          {/* ================= CHECKOUT ================= */}

          <Link
            to="/checkout"
            onClick={handleNavigation}
            className="group mt-7 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-[0.98] sm:mt-8 sm:text-base"
          >
            Proceed to Checkout

            <ArrowRight
              size={19}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>


          {/* ================= CONTINUE SHOPPING ================= */}

          <Link
            to="/passes"
            onClick={handleNavigation}
            className="mt-4 flex min-h-[44px] items-center justify-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-orange-400 sm:mt-5"
          >
            <ArrowLeft size={16} />

            Continue Shopping
          </Link>

        </motion.div>

      </div>

    </main>
  );
}

export default Cart;