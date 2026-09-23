import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    CheckCircle,
    XCircle,
    LogOut,
} from "lucide-react";
import Swal from "sweetalert2";
import { Html5Qrcode } from "html5-qrcode";

function QRScanner() {
    const navigate = useNavigate();

    const scannerRef = useRef(null);
    const scanningRef = useRef(false);

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(
            "adminToken"
        );

        if (!token) {
            navigate("/admin/login");
            return;
        }

        startScanner();

        return () => {
            stopScanner();
        };
    }, []);

    const startScanner = async () => {
        try {
            if (scanningRef.current) return;

            const scanner = new Html5Qrcode(
                "qr-reader"
            );

            scannerRef.current = scanner;

            await scanner.start(
                {
                    facingMode: "environment",
                },
                {
                    fps: 10,
                    qrbox: {
                        width: 250,
                        height: 250,
                    },
                },
                async (decodedText) => {
                    if (scanningRef.current) return;

                    scanningRef.current = true;

                    await verifyQR(decodedText);
                },
                () => { }
            );

            scanningRef.current = false;

        } catch (error) {
            console.error(
                "❌ CAMERA ERROR:",
                error
            );

            Swal.fire({
                icon: "error",
                title: "Camera Error",
                text: "Unable to access camera. Please allow camera permission.",
                background: "#0b0b0b",
                color: "#fff",
                confirmButtonColor: "#f97316",
            });
        }
    };

    const stopScanner = async () => {
        try {
            if (scannerRef.current) {
                const state =
                    scannerRef.current.getState();

                if (state === 2) {
                    await scannerRef.current.stop();
                }

                scannerRef.current.clear();

                scannerRef.current = null;
            }
        } catch (error) {
            console.error(
                "Scanner stop error:",
                error
            );
        }
    };

    const verifyQR = async (qrToken) => {
        try {
            setLoading(true);

            const adminToken =
                localStorage.getItem(
                    "adminToken"
                );

            const response = await fetch(
                "http://192.168.31.122:5000/api/ticket/scan",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization:
                            `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify({
                        qrToken,
                    }),
                }
            );

            const data = await response.json();

            setResult(data);

            if (data.valid) {
                await Swal.fire({
                    icon: "success",
                    title: "VALID TICKET 🟢",
                    html: `
                        <div style="text-align:left">
                            <p><b>Name:</b> ${data.ticket
                            ?.customerName || "-"
                        }</p>

                            <p><b>Pass:</b> ${data.ticket
                            ?.passType || "-"
                        }</p>

                            <p><b>Ticket ID:</b> ${data.ticket
                            ?.ticketId || "-"
                        }</p>

                            <p><b>Quantity:</b> ${data.ticket
                            ?.quantity || "-"
                        }</p>
                        </div>
                    `,
                    background: "#0b0b0b",
                    color: "#fff",
                    confirmButtonColor:
                        "#22c55e",
                });
            } else {
                await Swal.fire({
                    icon: "error",
                    title: "ENTRY DENIED 🔴",
                    text:
                        data.message ||
                        "Invalid ticket.",
                    background: "#0b0b0b",
                    color: "#fff",
                    confirmButtonColor:
                        "#f97316",
                });
            }

            setTimeout(() => {
                setResult(null);
                scanningRef.current = false;
            }, 1000);

        } catch (error) {
            console.error(
                "❌ QR VERIFY ERROR:",
                error
            );

            await Swal.fire({
                icon: "error",
                title: "Verification Error",
                text: "Could not verify QR code.",
                background: "#0b0b0b",
                color: "#fff",
                confirmButtonColor: "#f97316",
            });

            scanningRef.current = false;

        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem(
            "adminToken"
        );

        localStorage.removeItem(
            "adminEmail"
        );

        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-[#050505] px-5 py-8 text-white">

            <div className="mx-auto max-w-2xl">

                {/* HEADER */}

                <div className="flex items-center justify-between">

                    <button
                        onClick={() =>
                            navigate("/admin")
                        }
                        className="flex items-center gap-2 text-white/60 transition hover:text-orange-400"
                    >
                        <ArrowLeft size={20} />
                        Dashboard
                    </button>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-400"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>

                {/* TITLE */}

                <div className="mt-8 text-center">

                    <p className="text-xs font-semibold tracking-[0.35em] text-orange-400">
                        GATE ENTRY
                    </p>

                    <h1 className="mt-3 text-4xl font-bold">
                        QR Scanner
                    </h1>

                    <p className="mt-3 text-white/50">
                        Scan the customer's ticket QR
                        code.
                    </p>

                </div>

                {/* SCANNER */}

                <div className="mt-10 overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0b0b0b] p-5">

                    <div
                        id="qr-reader"
                        className="overflow-hidden rounded-2xl"
                    />

                    {loading && (
                        <div className="mt-5 flex items-center justify-center gap-3 text-orange-400">

                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-orange-400/30 border-t-orange-400" />

                            Verifying ticket...

                        </div>
                    )}

                </div>

                {/* RESULT */}

                {result?.valid && (
                    <div className="mt-6 rounded-3xl border border-green-500/30 bg-green-500/10 p-6">

                        <div className="flex items-center gap-3 text-green-400">

                            <CheckCircle size={30} />

                            <h2 className="text-xl font-bold">
                                ENTRY ALLOWED
                            </h2>

                        </div>

                        <div className="mt-5 space-y-2 text-sm text-white/70">

                            <p>
                                Name:{" "}
                                <b className="text-white">
                                    {result.ticket?.customerName}
                                </b>
                            </p>

                            <p>
                                Pass:{" "}
                                <b className="text-white">
                                    {result.ticket?.passType}
                                </b>
                            </p>

                            <p>
                                Ticket ID:{" "}
                                <b className="text-orange-400">
                                    {result.ticket?.ticketId}
                                </b>
                            </p>

                        </div>

                    </div>
                )}

                {result && !result.valid && (
                    <div className="mt-6 rounded-3xl border border-red-500/30 bg-red-500/10 p-6">

                        <div className="flex items-center gap-3 text-red-400">

                            <XCircle size={30} />

                            <h2 className="text-xl font-bold">
                                ENTRY DENIED
                            </h2>

                        </div>

                        <p className="mt-4 text-white/60">
                            {result.message}
                        </p>

                    </div>
                )}

            </div>

        </div>
    );
}

export default QRScanner;