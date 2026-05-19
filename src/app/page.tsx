"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import HeroVideo from "@/components/HeroVideo";
import ScanCard from "@/components/ScanCard";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <HeroVideo />

      {/* GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-[1]" />

      {/* GLOW */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none z-[1]" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none z-[1]" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

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

          <p className="mt-8 text-zinc-300 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
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

            <Link
              href="/boosting"
              className="px-10 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              BOOSTING
            </Link>

            <Link
              href="/status"
              className="px-10 py-4 rounded-2xl border border-green-500 text-green-400 hover:bg-green-500/10 transition-all duration-300"
            >
              SYSTEM STATUS
            </Link>

          </div>

        </motion.div>

      </section>

      {/* FEATURED */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">

        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          FEATURED PRODUCTS
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {[
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
              title: "BOOSTING SERVICE",
              image: "/images/boosting-service.png",
              link: "/boosting",
            },
          ].map((item) => (
            <ScanCard key={item.title}>

              <div className="w-[380px] bg-zinc-900/80 rounded-[36px] overflow-hidden backdrop-blur-xl transition-all duration-300">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] object-cover hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-5">

                    <div className="relative flex items-center justify-center">

                      <div className="absolute w-4 h-4 rounded-full bg-green-500 animate-ping" />

                      <div className="w-4 h-4 rounded-full bg-green-500 relative z-10" />

                    </div>

                    <span className="text-green-400 font-bold tracking-wider">
                      LIVE & UNDETECTED
                    </span>

                  </div>

                  <p className="mt-5 text-zinc-400 leading-relaxed">
                    Premium next-generation gaming enhancement systems.
                  </p>

                  <Link
                    href={item.link}
                    className="inline-block mt-8 w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                  >
                    VIEW PRODUCT
                  </Link>

                </div>

              </div>

            </ScanCard>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-zinc-500">
        © 2026 AETHER AI — All Rights Reserved.
      </footer>

    </main>
  );
}