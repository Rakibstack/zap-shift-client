import React from 'react';
import { motion } from "framer-motion";
import {  ArrowLeft } from "lucide-react"
const PageNotFound = () => {
    return (
        <div>
               <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center overflow-hidden">

            {/* Floating Blobs */}
            <motion.div
                className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl"
                animate={{
                    x: [0, 60, -40, 0],
                    y: [0, -40, 50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
                className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl"
                animate={{
                    x: [0, -50, 40, 0],
                    y: [0, 40, -40, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            {/* Glass Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-lg w-[90%] text-center text-white"
            >
                {/* Neon Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-purple-400/40 shadow-[0_0_30px_5px_rgba(168,85,247,0.5)] pointer-events-none"></div>

                {/* Floating 404 Text */}
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl font-extrabold mb-4 tracking-widest drop-shadow-lg"
                >
                    404
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-200 mb-6"
                >
                    The page you're looking for drifted into space.
                </motion.p>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary text-black w-full text-lg flex items-center justify-center gap-2"
                    onClick={() => (window.location.href = "/")}
                >
                    <ArrowLeft className="w-5 text-black h-5" />
                    Return Home
                </motion.button>
            </motion.div>

            {/* Floating Stars */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                    initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
                    animate={{
                        y: [null, Math.random() * window.innerHeight],
                        x: [null, Math.random() * window.innerWidth],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
       
        </div>
    );
};

export default PageNotFound;