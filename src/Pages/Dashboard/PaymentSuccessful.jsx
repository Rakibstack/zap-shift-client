import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccessful = () => {

    const [searchParams,] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiossecure = useAxiosSecure();
    const [payment,setPayment] = useState({})

    useEffect(() => {
        if (sessionId) {
            axiossecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPayment({
                     trackingId:res.data.trackingId,
                     transactionId:res.data.transactionId
                    })
          })
        }
    }, [axiossecure, sessionId])

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <title>Payment Successful</title>
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
            >

                {/* Glow Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-300/20 to-transparent rounded-3xl pointer-events-none"
                />

                {/* Icon Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    className="flex justify-center mb-4"
                >
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold mb-2"
                >
                    Payment Successful!
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 font-bold mb-6"
                >
                    Thank you for your payment. Your transaction has been completed.
                </motion.p>
                {/* Subtitle */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 mb-6"
                >
                    Your Transaction ID :{payment.transactionId}
                </motion.p>
                {/* Subtitle */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 mb-6"
                >
                    Your TrackingId :{payment.trackingId}
                </motion.p>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                    className="btn btn-primary text-black w-full text-lg"
                    onClick={() => window.location.href = '/'}

                >
                    Go to Home
                </motion.button>

            </motion.div>

        </div>
    );
};

export default PaymentSuccessful;