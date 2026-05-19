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
    <main className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid xl:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <img
              src="/images/warzone.png"
              alt="Warzone AI"
              className="w-full rounded-[32px] border border-white/10 shadow-[0_0_45px_rgba(168,85,247,0.25)]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <h1 className="text-7xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              WARZONE & BO7 AI
            </h1>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="px-5 py-3 rounded-xl bg-green-500/20 text-green-400 border border-green-500/20 font-bold">
                UNDETECTED
              </div>

              <div className="px-5 py-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/20 font-bold">
                AI AIM TOOLS
              </div>

              <div className="px-5 py-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 font-bold">
                INSTANT DELIVERY
              </div>

            </div>

            <div className="mt-10 text-7xl font-black">
              $2.99
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {durations.map((duration) => (
                <div
                  key={duration.title}
                  className="bg-black/40 border border-white/10 rounded-[28px] p-6 hover:border-cyan-400/40 transition-all"
                >

                  <div className="flex justify-between items-start">

                    <h3 className="text-3xl font-black">
                      {duration.title}
                    </h3>

                    <div className="text-green-400 text-sm">
                      {duration.stock}
                    </div>

                  </div>

                  <div className="mt-8 text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {duration.price}
                  </div>

                </div>
              ))}

            </div>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 w-full text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-[1.02] transition-all duration-300 font-black text-2xl shadow-[0_0_45px_rgba(168,85,247,0.5)]"
            >
              BUY NOW
            </a>

          </motion.div>

        </div>

      </div>

    </main>
  );
}