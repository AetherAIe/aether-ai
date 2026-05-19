"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden cyber-grid">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-black tracking-[0.3em] bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            AETHER AI
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
          </div>

          <a
            href="https://discord.gg/C7rKt52EFC"
            target="_blank"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all glow"
          >
            Join Discord
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">

        {/* BACKGROUND GLOWS */}
        <div className="absolute w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full top-[-150px] left-[-150px]" />

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >

          <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tight bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AETHER.<br />
            EVOLVED.
          </h1>

          <p className="mt-8 text-zinc-400 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
            Premium AI-powered gaming enhancement technology,
            ranked boosting and next-generation controller assistance systems.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mt-12">

            <a
              href="#services"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all glow font-semibold"
            >
              View Services
            </a>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:bg-white/5 transition-all"
            >
              Join Discord
            </a>

          </div>

        </motion.div>

      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-10 pb-24 max-w-7xl mx-auto">

        {[
          ["98%", "Success Rate"],
          ["5000+", "Happy Users"],
          ["24/7", "Support"],
          ["100%", "Secure"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl card-glow transition-all"
          >
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h2>

            <p className="text-zinc-400 mt-3">
              {desc}
            </p>
          </div>
        ))}

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 pb-32 max-w-7xl mx-auto"
      >

        {[
          [
            "AI Tracking",
            "Humanized AI aiming and controller enhancement technology.",
          ],
          [
            "MP Ranked Boosting",
            "Professional ranked boosting with experienced players.",
          ],
          [
            "WZ Ranked Boosting",
            "High-level Warzone ranked services and SR pushing.",
          ],
        ].map(([title, desc]) => (
          <motion.div
            whileHover={{ scale: 1.04 }}
            key={title}
            className="bg-zinc-900/70 border border-white/10 p-8 rounded-3xl card-glow transition-all backdrop-blur-xl"
          >

            <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h2>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              {desc}
            </p>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all"
            >
              Open Ticket
            </a>

          </motion.div>
        ))}

      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="max-w-7xl mx-auto px-6 md:px-10 pb-40"
      >

        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Trusted By Players
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            ["Ghosty", "Best service I've ever used."],
            ["Venom", "Fast and very professional."],
            ["Shadow", "Amazing support and setup help."],
          ].map(([name, review]) => (
            <div
              key={name}
              className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 backdrop-blur-xl card-glow transition-all"
            >
              <p className="text-zinc-300 leading-relaxed">
                "{review}"
              </p>

              <p className="mt-6 text-cyan-400 font-bold">
                @{name}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        © 2026 AETHER AI — All Rights Reserved.
      </footer>

    </main>
  );
}