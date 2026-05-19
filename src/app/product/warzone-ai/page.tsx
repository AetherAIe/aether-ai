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

export default function WarzoneAIPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_45px_rgba(168,85,247,0.2)]">

              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
                alt="Warzone AI"
                className="w-full h-[500px] object-cover"
              />

            </div>

            {/* GALLERY */}
            <div className="flex gap-6 mt-8">

              {[
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1548686304-89d188a80029?q=80&w=800&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=800&auto=format&fit=crop",
              ].map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="preview"
                  className="w-[140px] h-[100px] object-cover rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
                />
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              WARZONE AI
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

            {/* SELECT */}
            <div className="mt-12 bg-zinc-900/80 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(168,85,247,0.15)]">

              <h2 className="text-4xl font-black">
                Select Duration
              </h2>

              <p className="text-zinc-400 mt-3">
                Choose the perfect key duration for your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                {durations.map((duration) => (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    key={duration.title}
                    className="border border-white/10 rounded-2xl p-6 bg-black/40 hover:border-cyan-400 transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-2xl font-black">
                        {duration.title}
                      </h3>

                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                        {duration.stock}
                      </span>

                    </div>

                    <div className="mt-5 text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {duration.price}
                    </div>

                  </motion.div>
                ))}

              </div>

              {/* BUTTON */}
              <a
                href="https://discord.gg/C7rKt52EFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 w-full text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-[1.01] transition-all duration-300 font-black text-2xl shadow-[0_0_45px_rgba(168,85,247,0.5)]"
              >
                BUY NOW
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}