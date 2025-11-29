import React from 'react';
import { motion } from 'framer-motion';
import { Ban } from 'lucide-react';

const ForbiddenAccess = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-5">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-center"
            >
                <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <Ban size={90} />
                </motion.div>


                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Access Forbidden
                </motion.h1>


                <motion.p
                    className="text-gray-300 text-lg max-w-xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    You don’t have permission to access this page. Please contact support or go back.
                </motion.p>


                <motion.button

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.history.back()}
                    className="bg-red-600 px-6 py-3 rounded-xl text-white font-semibold shadow-2xl"
                    
                >
                    Go Back
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ForbiddenAccess;