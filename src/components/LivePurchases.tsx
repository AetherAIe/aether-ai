"use client";

import { motion } from "framer-motion";

export default function AIRadar() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* CENTER RADAR */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2">

        {/* OUTER RINGS */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/10" />
        <div className="absolute inset-[10%] rounded-full border border-cyan-500/10" />
        <div className="absolute inset-[20%] rounded-full border border-cyan-500/10" />
        <div className="absolute inset-[30%] rounded-full border border-cyan-500/10" />

        {/* RADAR SWEEP */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute inset-0"
        >

          <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left bg-gradient-to-r from-cyan-400/80 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

        </motion.div>

        {/* DOTS */}
        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-[30%] left-[60%] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute top-[65%] left-[40%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute top-[45%] left-[75%] w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]"
        />

      </div>

    </div>
  );
}