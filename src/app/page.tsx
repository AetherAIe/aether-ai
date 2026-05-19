"use client";

import { motion } from "framer-motion";

const aiPlans = [
  { title: "6 HOURS", price: "$2.99" },
  { title: "1 DAY", price: "$9.99" },
  { title: "1 WEEK", price: "$19.99" },
  { title: "1 MONTH", price: "$34.99" },
  { title: "LIFETIME", price: "$129.99" },
];

const boostingPlans = [
  { title: "BRONZE → DIAMOND", price: "$30" },
  { title: "DIAMOND → CRIM", price: "$40" },
  { title: "CRIM → IRI", price: "$70" },
  { title: "BRONZE → IRI", price: "$100" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-black tracking-[0.3em] bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            AETHER AI
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#">Home</a>
            <a href="#ai">AI</a>
            <a href="#boosting">Boosting</a>
          </div>

          <a
            href="https://discord.gg/C7rKt52EFC"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.6)]"
          >
            Join Discord
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >

          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-tight tracking-tight bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AETHER.<br />
            EVOLVED.
          </h1>

          <p className="mt-8 text-zinc-400 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
            Premium AI-powered gaming enhancement technology,
            ranked boosting and next-generation controller systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="#ai"
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_45px_rgba(168,85,247,0.7)] font-bold"
            >
              ENTER SHOP
            </a>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300"
            >
              JOIN DISCORD
            </a>

          </div>

        </motion.div>

      </section>

      {/* AI TRACKING */}
      <section
        id="ai"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AI TRACKING
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {aiPlans.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={plan.title}
              className="w-[280px] bg-zinc-900/80 border border-white/10 rounded-[36px] p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            >

              <h3 className="text-3xl font-black text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {plan.title}
              </h3>

              <div className="mt-8 text-center text-6xl font-black">
                {plan.price}
              </div>

              <ul className="mt-10 space-y-4 text-zinc-300 text-lg">
                <li>✓ Humanized AI</li>
                <li>✓ Controller Support</li>
                <li>✓ Premium Config</li>
                <li>✓ Instant Setup</li>
              </ul>

              <a
                href="https://discord.gg/C7rKt52EFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              >
                BUY NOW
              </a>

            </motion.div>
          ))}

        </div>

      </section>

      {/* BOOSTING */}
      <section
        id="boosting"
        className="max-w-7xl mx-auto px-6 pb-32"
      >

        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          BOOSTING
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {boostingPlans.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={plan.title}
              className="w-[320px] bg-zinc-900/80 border border-white/10 rounded-[36px] p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            >

              <h3 className="text-3xl font-black text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {plan.title}
              </h3>

              <div className="mt-8 text-center text-6xl font-black">
                {plan.price}
              </div>

              <ul className="mt-10 space-y-4 text-zinc-300 text-lg">
                <li>✓ Top Ranked Players</li>
                <li>✓ Fast Delivery</li>
                <li>✓ Secure Process</li>
                <li>✓ Live Support</li>
              </ul>

              <a
                href="https://discord.gg/C7rKt52EFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              >
                ORDER NOW
              </a>

            </motion.div>
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