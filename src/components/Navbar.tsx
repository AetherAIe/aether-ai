"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[0.3em] bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
        >
          AETHER AI
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">

          <Link
            href="/"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Services
          </Link>

          <Link
            href="/boosting"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Boosting
          </Link>

          <Link
            href="/status"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Status
          </Link>

        </div>

        {/* DISCORD BUTTON */}
        <a
          href="https://discord.gg/C7rKt52EFC"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.5)] font-semibold"
        >
          Join Discord
        </a>

      </div>

    </motion.nav>
  );
}