// import { useNavigate } from "react-router-dom";
// import {
//     LogOut,
//     ScanLine,
//     ShieldCheck,
// } from "lucide-react";

// function AdminDashboard() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("adminToken");
//         localStorage.removeItem("adminEmail");

//         navigate("/admin/login");
//     };

//     return (
//         <div className="min-h-screen bg-[#050505] px-5 py-10 text-white">

//             <div className="mx-auto max-w-6xl">

//                 {/* HEADER */}

//                 <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

//                     <div>

//                         <p className="text-xs font-semibold tracking-[0.3em] text-orange-400">
//                             DANDIYA NIGHT
//                         </p>

//                         <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
//                             Admin Dashboard
//                         </h1>

//                         <p className="mt-2 text-white/50">
//                             Manage event entry and tickets.
//                         </p>

//                     </div>

//                     <button
//                         onClick={handleLogout}
//                         className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-5 py-3 text-red-400 transition hover:bg-red-500/10"
//                     >
//                         <LogOut size={18} />
//                         Logout
//                     </button>

//                 </div>

//                 {/* ADMIN CARD */}

//                 <div className="mt-10 grid gap-6 md:grid-cols-2">

//                     <button
//                         onClick={() =>
//                             navigate("/admin/scanner")
//                         }
//                         className="group rounded-3xl border border-orange-500/20 bg-[#0b0b0b] p-8 text-left transition hover:-translate-y-2 hover:border-orange-400/50"
//                     >

//                         <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
//                             <ScanLine size={34} />
//                         </div>

//                         <h2 className="mt-6 text-2xl font-bold">
//                             QR Scanner
//                         </h2>

//                         <p className="mt-3 leading-7 text-white/50">
//                             Scan customer tickets at the
//                             event gate and verify entry.
//                         </p>

//                         <div className="mt-6 text-sm font-bold text-orange-400">
//                             Open Scanner →
//                         </div>

//                     </button>

//                     <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">

//                         <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
//                             <ShieldCheck size={34} />
//                         </div>

//                         <h2 className="mt-6 text-2xl font-bold">
//                             Secure Access
//                         </h2>

//                         <p className="mt-3 leading-7 text-white/50">
//                             QR verification is protected by
//                             admin authentication.
//                         </p>

//                         <div className="mt-6 text-sm font-semibold text-green-400">
//                             ● Authentication Active
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default AdminDashboard;




































































import { useNavigate } from "react-router-dom";
import {
    LogOut,
    ScanLine,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminEmail");

        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#050505] px-4 py-6 text-white sm:px-6 sm:py-10">

            <div className="mx-auto max-w-6xl">

                {/* HEADER */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-[10px] font-semibold tracking-[0.3em] text-orange-400 sm:text-xs">
                            DANDIYA NIGHT
                        </p>

                        <h1 className="mt-2 text-2xl font-bold sm:text-4xl">
                            Admin Dashboard
                        </h1>

                        <p className="mt-2 max-w-md text-sm leading-6 text-white/50 sm:text-base">
                            Manage event entry and tickets.
                        </p>
                    </div>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 px-5 py-3 text-sm font-semibold text-red-400 transition-all duration-100 hover:border-red-400/50 hover:bg-red-500/10 active:scale-[0.98] sm:w-auto"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>

                {/* DASHBOARD CARDS */}
                <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2">

                    {/* QR SCANNER CARD */}
                    <button
                        onClick={() => navigate("/admin/scanner")}
                        className="group w-full rounded-3xl border border-orange-500/20 bg-[#0b0b0b] p-6 text-left transition-all duration-100 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-[#0e0e0e] active:scale-[0.99] sm:p-8"
                    >

                        {/* ICON */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 transition-all duration-100 group-hover:bg-orange-500/15 sm:h-16 sm:w-16">
                            <ScanLine size={30} className="sm:hidden" />
                            <ScanLine size={34} className="hidden sm:block" />
                        </div>

                        {/* CONTENT */}
                        <h2 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
                            QR Scanner
                        </h2>

                        <p className="mt-3 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                            Scan customer tickets at the event gate
                            and verify entry.
                        </p>

                        {/* ACTION */}
                        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-orange-400 sm:mt-6">
                            <span>Open Scanner</span>

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-100 group-hover:translate-x-1"
                            />
                        </div>

                    </button>

                    {/* SECURE ACCESS CARD */}
                    <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-8">

                        {/* ICON */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 sm:h-16 sm:w-16">
                            <ShieldCheck
                                size={30}
                                className="sm:hidden"
                            />

                            <ShieldCheck
                                size={34}
                                className="hidden sm:block"
                            />
                        </div>

                        {/* CONTENT */}
                        <h2 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
                            Secure Access
                        </h2>

                        <p className="mt-3 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                            QR verification is protected by
                            admin authentication.
                        </p>

                        {/* STATUS */}
                        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-400 sm:mt-6">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            <span>Authentication Active</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;