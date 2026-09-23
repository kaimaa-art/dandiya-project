// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Lock, Mail, ShieldCheck } from "lucide-react";
// import Swal from "sweetalert2";

// function AdminLogin() {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!email || !password) {
//             Swal.fire({
//                 icon: "warning",
//                 title: "Missing Details",
//                 text: "Enter admin email and password.",
//                 background: "#0b0b0b",
//                 color: "#fff",
//                 confirmButtonColor: "#f97316",
//             });

//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 "https://dandiya-backend.onrender.com/api/admin/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         email,
//                         password,
//                     }),
//                 }
//             );

//             const data = await response.json();

//             if (!response.ok || !data.success) {
//                 throw new Error(
//                     data.message ||
//                     "Login failed."
//                 );
//             }

//             localStorage.setItem(
//                 "adminToken",
//                 data.token
//             );

//             localStorage.setItem(
//                 "adminEmail",
//                 data.admin.email
//             );

//             await Swal.fire({
//                 icon: "success",
//                 title: "Welcome Admin! 🔐",
//                 text: "Login successful.",
//                 background: "#0b0b0b",
//                 color: "#fff",
//                 confirmButtonColor: "#f97316",
//                 timer: 1200,
//                 showConfirmButton: false,
//             });

//             navigate("/admin");

//         } catch (error) {
//             console.error(
//                 "❌ ADMIN LOGIN ERROR:",
//                 error
//             );

//             Swal.fire({
//                 icon: "error",
//                 title: "Login Failed",
//                 text:
//                     error.message ||
//                     "Invalid admin credentials.",
//                 background: "#0b0b0b",
//                 color: "#fff",
//                 confirmButtonColor: "#f97316",
//             });

//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#050505] px-5 py-16 text-white">

//             <div className="mx-auto flex min-h-[75vh] max-w-md items-center justify-center">

//                 <div className="w-full rounded-3xl border border-orange-500/20 bg-[#0b0b0b] p-8 shadow-[0_0_60px_rgba(249,115,22,0.08)]">

//                     {/* ICON */}

//                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
//                         <ShieldCheck size={40} />
//                     </div>

//                     {/* HEADER */}

//                     <div className="mt-6 text-center">

//                         <p className="text-xs font-semibold tracking-[0.35em] text-orange-400">
//                             DANDIYA NIGHT
//                         </p>

//                         <h1 className="mt-3 text-3xl font-bold">
//                             Admin Login
//                         </h1>

//                         <p className="mt-3 text-sm text-white/50">
//                             Secure access for event management
//                         </p>

//                     </div>

//                     {/* FORM */}

//                     <form
//                         onSubmit={handleLogin}
//                         className="mt-8 space-y-5"
//                     >

//                         {/* EMAIL */}

//                         <div>
//                             <label className="mb-2 block text-sm text-white/60">
//                                 Admin Email
//                             </label>

//                             <div className="relative">

//                                 <Mail
//                                     size={18}
//                                     className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
//                                 />

//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) =>
//                                         setEmail(
//                                             e.target.value
//                                         )
//                                     }
//                                     placeholder="Admin email"
//                                     className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-orange-400"
//                                 />

//                             </div>
//                         </div>

//                         {/* PASSWORD */}

//                         <div>
//                             <label className="mb-2 block text-sm text-white/60">
//                                 Password
//                             </label>

//                             <div className="relative">

//                                 <Lock
//                                     size={18}
//                                     className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
//                                 />

//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) =>
//                                         setPassword(
//                                             e.target.value
//                                         )
//                                     }
//                                     placeholder="Admin password"
//                                     className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-orange-400"
//                                 />

//                             </div>
//                         </div>

//                         {/* BUTTON */}

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
//                         >
//                             {loading ? (
//                                 <span className="flex items-center gap-2">
//                                     <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
//                                     Logging in...
//                                 </span>
//                             ) : (
//                                 "Login to Admin"
//                             )}
//                         </button>

//                     </form>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default AdminLogin;













































































import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Lock,
    Mail,
    ShieldCheck,
} from "lucide-react";
import Swal from "sweetalert2";

function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Missing Details",
                text: "Enter admin email and password.",
                background: "#0b0b0b",
                color: "#fff",
                confirmButtonColor: "#f97316",
            });

            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "https://dandiya-backend.onrender.com/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Login failed."
                );
            }

            localStorage.setItem(
                "adminToken",
                data.token
            );

            localStorage.setItem(
                "adminEmail",
                data.admin.email
            );

            await Swal.fire({
                icon: "success",
                title: "Welcome Admin! 🔐",
                text: "Login successful.",
                background: "#0b0b0b",
                color: "#fff",
                confirmButtonColor: "#f97316",
                timer: 1200,
                showConfirmButton: false,
            });

            navigate("/admin");

        } catch (error) {
            console.error(
                "❌ ADMIN LOGIN ERROR:",
                error
            );

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text:
                    error.message ||
                    "Invalid admin credentials.",
                background: "#0b0b0b",
                color: "#fff",
                confirmButtonColor: "#f97316",
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#050505] px-4 py-8 text-white sm:px-6 sm:py-12">

            <div className="mx-auto flex min-h-[85vh] max-w-md items-center justify-center">

                <div className="w-full rounded-3xl border border-orange-500/20 bg-[#0b0b0b] p-5 shadow-[0_0_60px_rgba(249,115,22,0.08)] sm:p-8">

                    {/* SECURITY ICON */}

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 sm:h-20 sm:w-20">
                        <ShieldCheck
                            size={34}
                            className="sm:hidden"
                        />

                        <ShieldCheck
                            size={40}
                            className="hidden sm:block"
                        />
                    </div>

                    {/* HEADER */}

                    <div className="mt-5 text-center sm:mt-6">

                        <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs sm:tracking-[0.35em]">
                            DANDIYA NIGHT
                        </p>

                        <h1 className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">
                            Admin Login
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-white/50 sm:mt-3">
                            Secure access for event management
                        </p>

                    </div>

                    {/* FORM */}

                    <form
                        onSubmit={handleLogin}
                        className="mt-7 space-y-4 sm:mt-8 sm:space-y-5"
                    >

                        {/* EMAIL */}

                        <div>
                            <label className="mb-2 block text-sm font-medium text-white/60">
                                Admin Email
                            </label>

                            <div className="relative">

                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Admin email"
                                    autoComplete="email"
                                    disabled={loading}
                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/70 focus:bg-black/60 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                                />

                            </div>
                        </div>

                        {/* PASSWORD */}

                        <div>
                            <label className="mb-2 block text-sm font-medium text-white/60">
                                Password
                            </label>

                            <div className="relative">

                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                                />

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Admin password"
                                    autoComplete="current-password"
                                    disabled={loading}
                                    className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-100 placeholder:text-white/25 focus:border-orange-400/70 focus:bg-black/60 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                                />

                            </div>
                        </div>

                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-3.5 font-bold text-black transition-all duration-100 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(249,115,22,0.18)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                                    Logging in...
                                </span>
                            ) : (
                                "Login to Admin"
                            )}
                        </button>

                    </form>

                    {/* SECURITY NOTE */}

                    <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-white/30 sm:mt-6 sm:text-xs">
                        <ShieldCheck size={14} />
                        <span>
                            Authorized admin access only
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminLogin;