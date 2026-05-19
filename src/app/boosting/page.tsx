"use client";

import { motion } from "framer-motion";

const boostingPlans = [
  {
    title: "BRONZE → DIAMOND",
    price: "$30",
    image: "/images/bronze-diamond.png",
  },

  {
    title: "DIAMOND → CRIM",
    price: "$40",
    image: "/images/diamond-crim.png",
  },

  {
    title: "CRIM → IRI",
    price: "$70",
    image: "/images/crim-iri.png",
  },

  {
    title: "BRONZE → IRI",
    price: "$100",
    image: "/images/bronze-iri.png",
  },
];

export default function BoostingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center">

          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            BOOSTING SERVICE
          </h1>

          <p className="mt-6 text-zinc-400 text-xl max-w-3xl mx-auto">
            Professional ranked boosting by high-level players with instant delivery.
          </p>

        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-10 mt-24">

          {boostingPlans.map((plan) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={plan.title}
              className="w-[340px] bg-zinc-900/80 border border-white/10 rounded-[36px] overflow-hidden backdrop-blur-xl transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] hover:shadow-[0_0_55px_rgba(34,211,238,0.25)]"
            >

              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {plan.title}
                </h2>

                <div className="mt-6 text-6xl font-black">
                  {plan.price}
                </div>

                {/* STATUS */}
                <div className="flex items-center gap-3 mt-6">

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-4 h-4 rounded-full bg-green-500 animate-ping" />

                    <div className="w-4 h-4 rounded-full bg-green-500 relative z-10" />

                  </div>

                  <span className="text-green-400 font-bold tracking-wider">
                    LIVE BOOSTING
                  </span>

                </div>

                <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
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

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}