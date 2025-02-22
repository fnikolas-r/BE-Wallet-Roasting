import "./App.css";
import Cards from "./components/card";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pt-10">

        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="font-[Mochiy_Pop_One] text-[36px] font-normal text-white"
            whileHover={{ scale: 1.1 }}
          >
            Roasting
          </motion.div>
          <motion.div
            className="font-[Mochiy_Pop_One] text-[36px] font-normal text-[#e11d48]"
            animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Wallet
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="font-[dm_sans] text-[24px] font-normal text-white">by</div>
          <motion.div
            className="font-[dm_sans] text-[24px] font-normal text-[#f59e0b] ml-2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            @SiramanKangPaus
          </motion.div>
        </motion.div>

        <br />

        {/* Cards */}
        <Cards />
      </div>
    </>
  );
}

export default App;
