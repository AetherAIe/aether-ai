"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "WARZONE & BO7 AI",
    image: "/images/warzone.png",
    link: "/product/warzone-ai",
  },

  {
    title: "FORTNITE AI",
    image: "/images/fortnite.png",
    link: "/product/fortnite-ai",
  },

  {
    title: "BATTLEFIELD AI",
    image: "/images/battlefield.png",
    link: "/product/battlefield-ai",
  },

  {
    title: "APEX AI",
    image: "/images/apex.png",
    link: "/product/apex-ai",
  },

  {
    title: "BOOSTING SERVICE",
    image: "/images/warzone.png",
    link: "/boosting",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <h1 className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          SERVICES
        </h1>

        <div className="flex flex-wrap justify-center gap-10">

          {products.map((product) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={product.title}
              className="w-[360px] bg-zinc-900/80 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:shadow-[0_0_55px_rgba(34,211,238,0.2)] transition-all duration-300"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {product.title}
                </h2>

                <div className="flex items-center gap-3 mt-5">

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-4 h-4 rounded-full bg-green-500 animate-ping" />

                    <div className="w-4 h-4 rounded-full bg-green-500 relative z-10" />

                  </div>

                  <span className="text-green-400 font-bold tracking-wider">
                    LIVE & UNDETECTED
                  </span>

                </div>

                <p className="text-zinc-400 mt-5 leading-relaxed">
                  Premium AI-powered enhancement technology with instant delivery.
                </p>

                <Link
                  href={product.link}
                  className="inline-block mt-8 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                >
                  VIEW PRODUCT
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}