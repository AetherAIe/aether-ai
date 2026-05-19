"use client";

import { motion } from "framer-motion";

export default function AIRadar() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* BIG CENTER RADAR */}
      <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2">

        {/* GLOW */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* RINGS */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
        <div className="absolute inset-[10%] rounded-full border border-cyan-400/20" />
        <div className="absolute inset-[20%] rounded-full border border-cyan-400/20" />
        <div className="absolute inset-[30%] rounded-full border border-cyan-400/20" />
        <div className="absolute inset-[40%] rounded-full border border-cyan-400/20" />

        {/* CROSS */}
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cyan-400/10" />
        <div className="absolute top-1/2 left-0 h-[1px] w-full bg-cyan-400/10" />

        {/* SWEEP */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="absolute inset-0"
        >

          <div className="absolute top-1/2 left-1/2 origin-left w-1/2 h-[4px] bg-gradient-to-r from-cyan-400 via-cyan-300/70 to-transparent shadow-[0_0_40px_rgba(34,211,238,1)]" />

        </motion.div>

        {/* DOT 1 */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-[28%] left-[63%]"
        >

          <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,1)]" />

        </motion.div>

        {/* DOT 2 */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute top-[65%] left-[38%]"
        >

          <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_40px_rgba(168,85,247,1)]" />

        </motion.div>

        {/* DOT 3 */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute top-[48%] left-[78%]"
        >

          <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,1)]" />

        </motion.div>

      </div>

    </div>
  );
}