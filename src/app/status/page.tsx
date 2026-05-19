"use client";

import { motion } from "framer-motion";

const statuses = [
  {
    title: "WARZONE & BO7 AI",
    status: "LIVE",
    color: "green",
  },

  {
    title: "FORTNITE AI",
    status: "SAFE",
    color: "green",
  },

  {
    title: "APEX AI",
    status: "LIVE",
    color: "green",
  },

  {
    title: "BATTLEFIELD AI",
    status: "LIVE",
    color: "green",
  },

  {
    title: "BOOSTING SERVICE",
    status: "ONLINE",
    color: "green",
  },
];

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            SYSTEM STATUS
          </h1>

          <p className="mt-6 text-zinc-400 text-xl">
            Real-time operational monitoring for all AETHER AI services.
          </p>

        </div>

        {/* STATUS CARDS */}
        <div className="mt-24 flex flex-col gap-8">

          {statuses.map((item) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              key={item.title}
              className="bg-zinc-900/80 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:shadow-[0_0_45px_rgba(34,211,238,0.2)] transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-zinc-400">
                    All systems operational and functioning normally.
                  </p>

                </div>

                {/* STATUS */}
                <div className="flex items-center gap-4">

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-5 h-5 rounded-full bg-green-500 animate-ping" />

                    <div className="w-5 h-5 rounded-full bg-green-500 relative z-10" />

                  </div>

                  <div className="px-6 py-3 rounded-2xl bg-green-500/20 text-green-400 border border-green-500/20 font-black tracking-wider">
                    {item.status}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}