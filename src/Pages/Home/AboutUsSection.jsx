import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
    const [active, setActive] = useState("Story");
    const sections = ["Story", "Mission", "Success", "Team & Others"];

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-16 flex justify-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-5xl space-y-8">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-gray-600 max-w-2xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                </p>

                <div className="flex gap-6 text-gray-500 font-medium border-b pb-2">
                    {sections.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => setActive(sec)}
                            className={`${active === sec ? "text-green-600 border-b-2 border-green-600" : ""}`}
                        >
                            {sec}
                        </button>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 text-gray-700 leading-relaxed"
                >
                    {active === "Story" && (
                        <p>
                            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
                            Over the years, our commitment to logistics and customer-first service made us trusted by thousands.
                        </p>
                    )}

                    {active === "Mission" && (
                        <p>
                            Our mission is to simplify delivery for everyone through technology, reliability and transparency.
                        </p>
                    )}

                    {active === "Success" && (
                        <p>
                            Thousands of successful deliveries, happy customers and strong business relationships define our success.
                        </p>
                    )}

                    {active === "Team & Others" && (
                        <p>
                            Behind every parcel is a dedicated team of engineers, riders and support members making delivery smarter.
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
