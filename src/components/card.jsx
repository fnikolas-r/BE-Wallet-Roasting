import { motion } from "framer-motion";
import { useState } from "react";
import { SiWalletconnect } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";

export default function CryptoForm() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="w-full max-w-sm p-6 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/30 rounded-xl shadow-xl sm:p-8 transition-all duration-500 hover:scale-105">
            <motion.h5 
                className="mb-4 text-lg font-bold text-white text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Enter Your Crypto Address
            </motion.h5>
            
            {/* Input */}
            <motion.form
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >       
                <label htmlFor="address" className="mb-2 text-sm font-medium text-white sr-only">
                    Your Address
                </label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                    <FaSearchDollar className="w-5 h-5 text-white" />
                </div>
                    <input
                        type="text"
                        id="address"
                        className="block w-full p-4 pl-10 text-sm  border border-white/30 rounded-lg bg-white/10 focus:ring-pink-400 focus:border-pink-400 backdrop-blur-md text-white placeholder-gray-200"
                        placeholder="0x"
                        required
                    />
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.9, rotate: -2 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setClicked(true);
                            setTimeout(() => setClicked(false), 500);
                        }}
                        className={`absolute right-2.5 bottom-2.5 px-5 py-2 font-medium text-sm rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-400 transition-all duration-300 shadow-md ${
                            clicked ? "border-white scale-95" : ""
                        }`}
                    >
                        {clicked ? "✔ Checked" : "Check"}
                    </motion.button>
                </div>
            </motion.form>
            
            <motion.h5 
                className="my-4 text-xs font-semibold text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                OR
            </motion.h5>
            
            <motion.a
                href="#"
                className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
            >
                <SiWalletconnect className="h-6 mr-3" />
                <span className="flex-1">Wallet Connect</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-pink-400 text-white rounded-sm">Popular</span>
            </motion.a>
        </div>
    );
}
