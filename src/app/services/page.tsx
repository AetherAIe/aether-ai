"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "WARZONE AI",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    link: "/product/warzone-ai",
  },

  {
    title: "FORTNITE AI",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    link: "/product/fortnite-ai",
  },

  {
    title: "BATTLEFIELD AI",
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1200&auto=format&fit=crop",
    link: "/product/battlefield-ai",
  },

  {
    title: "APEX AI",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1200&auto=format&fit=crop",
    link: "/product/apex-ai",
  },

  {
    title: "BOOSTING SERVICE",
    image:
      "https://images.unsplash.com/photo-1548686304-89d188a80029?q=80&w=1200&auto=format&fit=crop",
    link: "/boosting",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

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

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Premium undetected gaming enhancement technology and services.
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