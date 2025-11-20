import React from 'react';
import { motion } from "framer-motion";

const Loading = () => {
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
        Loading
        <span className="ml-2 inline-block animate-bounceDot">.</span>
        <span className="inline-block ml-1 animate-bounceDot delay-200">.</span>
        <span className="inline-block ml-1 animate-bounceDot delay-400">.</span>
      </h1>

      <style jsx>{`
        /* Gradient shifting */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        /* Bouncing dots */
        @keyframes bounceDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.3; }
          40% { transform: translateY(-8px); opacity: 1; }
        }

        .animate-bounceDot {
          animation: bounceDot 1.4s infinite ease-in-out;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
    );
};

export default Loading;