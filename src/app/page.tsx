"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-black tracking-[0.3em] bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
          >
            AETHER AI
          </Link>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">

            <Link href="/">
              Home
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/product/warzone-ai">
              Products
            </Link>

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

            <Link
              href="/services"
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_45px_rgba(168,85,247,0.7)] font-bold"
            >
              ENTER STORE
            </Link>

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

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          FEATURED PRODUCTS
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {[
            {
              title: "WARZONE AI",
              image:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
              link: "/product/warzone-ai",
            },

            {
              title: "BOOSTING SERVICE",
              image:
                "https://images.unsplash.com/photo-1548686304-89d188a80029?q=80&w=1200&auto=format&fit=crop",
              link: "/services",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={item.title}
              className="w-[380px] bg-zinc-900/80 border border-white/10 rounded-[36px] overflow-hidden backdrop-blur-xl transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Premium next-generation gaming enhancement systems.
                </p>

                <Link
                  href={item.link}
                  className="inline-block mt-8 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                >
                  VIEW PRODUCT
                </Link>

              </div>

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