// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

// import Home from "./pages/home"
// import Passes from "./pages/passes"
// import Shop from "./pages/shop"
// import Cart from "./pages/cart"
// import Contact from "./pages/contact"
// import Checkout from "./pages/checkout";
// import Success from "./pages/success";

// import AdminLogin from "./admin side/AdminLogin";
// import AdminDashboard from "./admin side/AdminDashboard";
// import QRScanner from "./admin side/QRScanner";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/passes" element={<Passes />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/checkout" element={<Checkout />} />

//         <Route path="/success" element={<Success />} />

//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/admin/scanner" element={<QRScanner />} />
//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;






















































import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Passes from "./pages/passes";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
import Success from "./pages/success";

import AdminLogin from "./admin side/AdminLogin";
import AdminDashboard from "./admin side/AdminDashboard";
import QRScanner from "./admin side/QRScanner";

// ============================================================
// ===================== SCROLL TO TOP =========================
// ============================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly move to the top whenever route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

// ============================================================
// ========================== APP ==============================
// ============================================================

function App() {
  return (
    <BrowserRouter>

      {/* ================= GLOBAL SCROLL HANDLER ================= */}

      <ScrollToTop />

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= ROUTES ================= */}

      <Routes>

        {/* ================= PUBLIC PAGES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/passes"
          element={<Passes />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        {/* ================= ADMIN PAGES ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/scanner"
          element={<QRScanner />}
        />

      </Routes>

      {/* ================= FOOTER ================= */}

      <Footer />

    </BrowserRouter>
  );
}

export default App;