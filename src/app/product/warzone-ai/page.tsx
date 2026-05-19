"use client";

import { motion } from "framer-motion";

const durations = [
  { title: "6 HOURS", price: "$2.99", stock: "49 In Stock" },
  { title: "1 DAY", price: "$9.99", stock: "35 In Stock" },
  { title: "1 WEEK", price: "$19.99", stock: "17 In Stock" },
  { title: "1 MONTH", price: "$34.99", stock: "14 In Stock" },
  { title: "LIFETIME", price: "$129.99", stock: "10 In Stock" },
];

export default function WarzoneAIPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[140px]" />

      <div className="relative z-10 flex justify-center px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[430px]"
        >

          {/* IMAGE */}
          <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <img
              src="/images/warzone.png"
              alt="Warzone AI"
              className="w-full h-[240px] object-cover"
            />

            <div className="p-8 bg-[#0b0b12]">

              {/* TITLE */}
              <h1 className="text-6xl font-black leading-none bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                WARZONE AI
              </h1>

              {/* BADGES */}
              <div className="flex flex-wrap gap-3 mt-6">

                <div className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/20">
                  UNDETECTED
                </div>

                <div className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-400 text-sm font-bold border border-purple-500/20">
                  AI AIM TOOLS
                </div>

                <div className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 text-sm font-bold border border-cyan-500/20">
                  INSTANT DELIVERY
                </div>

              </div>

              {/* PRICE */}
              <div className="mt-8 text-7xl font-black">
                $2.99
              </div>

              {/* CARD */}
              <div className="mt-10 rounded-[28px] border border-white/10 bg-[#111118] p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

                <h2 className="text-4xl font-black">
                  Select Duration
                </h2>

                <p className="text-zinc-400 mt-2">
                  Choose the perfect key duration for your needs.
                </p>

                {/* DURATIONS */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  {durations.map((duration) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      key={duration.title}
                      className="rounded-2xl bg-[#0a0a0f] border border-white/5 p-5"
                    >

                      <div className="flex justify-between items-start gap-2">

                        <h3 className="text-2xl font-black leading-tight">
                          {duration.title}
                        </h3>

                        <div className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                          {duration.stock}
                        </div>

                      </div>

                      <div className="mt-6 text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {duration.price}
                      </div>

                    </motion.div>
                  ))}

                </div>

                {/* BUTTON */}
                <a
                  href="https://discord.gg/C7rKt52EFC"
                  target="_blank"
                  className="mt-8 block w-full text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 font-black text-2xl shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  BUY NOW
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </main>
  );
}