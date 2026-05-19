"use client";

import { motion } from "framer-motion";

export default function ScanCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl group transition-all duration-300"
    >

      {/* SUPER VISIBLE AI SCAN */}
      <motion.div
        initial={{ y: "-150%" }}
        whileHover={{
          y: "350%",
        }}
        transition={{
          duration: 0.8,
          ease: "linear",
        }}
        className="absolute inset-x-0 top-0 z-[999] h-48 bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent blur-2xl pointer-events-none"
      />

      {/* HORIZONTAL SCAN */}
      <motion.div
        initial={{ x: "-150%" }}
        whileHover={{
          x: "250%",
        }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
        className="absolute top-0 left-0 z-[999] h-full w-32 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent blur-xl pointer-events-none"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[998] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-cyan-400/10 pointer-events-none" />

      {/* BORDER GLOW */}
      <div className="absolute inset-0 rounded-[32px] border border-cyan-400/0 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_0px_rgba(34,211,238,0)] group-hover:shadow-[0_0_70px_rgba(34,211,238,0.7)] pointer-events-none z-[998]" />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  );
}