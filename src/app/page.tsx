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
    <main className="min-h-screen text-white overflow-hidden cyber-grid">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

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
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all glow"
          >
            Join Discord
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">

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
              href="#ai"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all glow font-semibold"
            >
              ENTER SHOP
            </a>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:bg-white/5 transition-all"
            >
              JOIN DISCORD
            </a>

          </div>

        </motion.div>

      </section>

      {/* AI SECTION */}
      <section
        id="ai"
        className="max-w-7xl mx-auto px-6 md:px-10 py-24"
      >

        <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AI TRACKING
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">

          {aiPlans.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={plan.title}
              className="bg-zinc-900/70 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl card-glow transition-all text-center"
            >

              <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {plan.title}
              </h3>

              <div className="mt-6 text-5xl font-black">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-3 text-zinc-300">
                <li>✓ Humanized AI</li>
                <li>✓ Controller Support</li>
                <li>✓ Premium Config</li>
                <li>✓ Instant Setup</li>
              </ul>

              <a
                href="https://discord.gg/C7rKt52EFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all font-bold glow"
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
        className="max-w-7xl mx-auto px-6 md:px-10 py-24"
      >

        <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          BOOSTING
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {boostingPlans.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={plan.title}
              className="bg-zinc-900/70 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl card-glow transition-all text-center"
            >

              <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {plan.title}
              </h3>

              <div className="mt-6 text-5xl font-black">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-3 text-zinc-300">
                <li>✓ Top Ranked Players</li>
                <li>✓ Fast Delivery</li>
                <li>✓ Secure Process</li>
                <li>✓ Live Support</li>
              </ul>

              <a
                href="https://discord.gg/C7rKt52EFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all font-bold glow"
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