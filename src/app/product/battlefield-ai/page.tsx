"use client";

import { motion } from "framer-motion";

const durations = [
  {
    title: "6 HOURS",
    price: "$2.99",
    stock: "49 In Stock",
  },

  {
    title: "1 DAY",
    price: "$9.99",
    stock: "35 In Stock",
  },

  {
    title: "1 WEEK",
    price: "$19.99",
    stock: "17 In Stock",
  },

  {
    title: "1 MONTH",
    price: "$34.99",
    stock: "14 In Stock",
  },

  {
    title: "LIFETIME",
    price: "$129.99",
    stock: "10 In Stock",
  },
];

export default function BattlefieldAIPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="/images/battlefield.png"
              alt="Battlefield AI"
              className="w-full rounded-[32px] border border-white/10 shadow-[0_0_45px_rgba(168,85,247,0.2)]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              BATTLEFIELD AI
            </h1>

            <div className="mt-10 text-7xl font-black">
              $2.99
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              {durations.map((duration) => (
                <div
                  key={duration.title}
                  className="border border-white/10 rounded-2xl p-6 bg-black/40"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-black">
                      {duration.title}
                    </h3>

                    <span className="text-green-400 text-sm">
                      {duration.stock}
                    </span>

                  </div>

                  <div className="mt-5 text-4xl font-black">
                    {duration.price}
                  </div>

                </div>
              ))}

            </div>

            <a
              href="https://discord.gg/C7rKt52EFC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 w-full text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 font-black text-2xl"
            >
              BUY NOW
            </a>

          </motion.div>

        </div>

      </div>

    </main>
  );
}