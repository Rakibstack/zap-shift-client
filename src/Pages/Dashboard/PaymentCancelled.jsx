import React from 'react';
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const PaymentCancelled = () => {
    return (
       <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
            >

                {/* Red Glow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.35 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-300/20 to-transparent rounded-3xl pointer-events-none"
                />

                {/* Icon Shake Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: [0, -10, 10, -5, 5, 0]  // shake effect
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center mb-4"
                >
                    <XCircle className="w-20 h-20 text-red-500" />
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold mb-2 text-red-600"
                >
                    Payment Cancelled
                </motion.h2>

                {/* Message */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 mb-6"
                >
                    Your transaction was not completed.  
                    Please try again or contact support if you need help.
                </motion.p>

                {/* Back Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline btn-error w-full text-lg"
                    onClick={() => window.location.href = '/dashboard/myParcels'}
                >
                    Try Again
                </motion.button>

            </motion.div>

        </div>
    );
};

export default PaymentCancelled;