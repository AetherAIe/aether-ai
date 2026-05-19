"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "🇩🇪 Krieger77",
    text: "Best AI I ever used. Absolutely insane tracking.",
  },
  {
    name: "🇺🇸 GhostFPS",
    text: "Tracking feels completely natural. Crazy smooth.",
  },
  {
    name: "🇦🇪 Q8Ghost",
    text: "Actually feels unfair lol.",
  },
  {
    name: "🇷🇺 Zloy",
    text: "Won 14 games in a row with this.",
  },
  {
    name: "🇬🇧 R3KT",
    text: "Detection status is insanely good.",
  },
  {
    name: "🇫🇷 NoirX",
    text: "Best provider I tried this year.",
  },
  {
    name: "🇵🇱 VortiX",
    text: "Aim feels super legit and smooth.",
  },
  {
    name: "🇯🇵 KuroFPS",
    text: "Zero issues after weeks of use.",
  },
  {
    name: "🇩🇪 TodesAim",
    text: "Absolutely broken tracking lol.",
  },
  {
    name: "🇺🇸 Slayr",
    text: "Dropped 32 kills first game.",
  },
  {
    name: "🇨🇦 Arctic",
    text: "UI and loader are clean af.",
  },
  {
    name: "🇦🇪 H4WK",
    text: "Support replied instantly. Respect.",
  },
  {
    name: "🇷🇺 V0RON",
    text: "Feels premium compared to other providers.",
  },
  {
    name: "🇺🇸 ZeroRecoil",
    text: "Actually the smoothest AI I've tested.",
  },
  {
    name: "🇹🇷 AimLockTR",
    text: "Movement prediction is crazy.",
  },
  {
    name: "🇩🇪 PhantomDE",
    text: "Undetected for weeks already.",
  },
  {
    name: "🇫🇷 Vanta",
    text: "Looks super legit in game.",
  },
  {
    name: "🇺🇸 DripFPS",
    text: "Best tracking I've seen so far.",
  },
  {
    name: "🇸🇦 FalconX",
    text: "Worth every dollar honestly.",
  },
  {
    name: "🇷🇺 Inferno",
    text: "Aimbot feels humanized perfectly.",
  },
];

const viewerSequence = [4, 5, 6, 8, 7, 5, 4, 3, 2, 4];

export default function LiveStats() {
  const [viewers, setViewers] = useState(viewerSequence[0]);
  const [review, setReview] = useState(reviews[0]);

  useEffect(() => {

    let viewerIndex = 0;

    const viewerInterval = setInterval(() => {

      viewerIndex =
        (viewerIndex + 1) % viewerSequence.length;

      setViewers(viewerSequence[viewerIndex]);

    }, 25000);

    const reviewInterval = setInterval(() => {

      const randomReview =
        reviews[Math.floor(Math.random() * reviews.length)];

      setReview(randomReview);

    }, 10000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(reviewInterval);
    };

  }, []);

  return (
    <>

      {/* LIVE VIEWERS */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-24 right-6 z-[99999]"
      >

        <div className="bg-[#0b0b12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-[0_0_40px_rgba(168,85,247,0.2)]">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <div className="text-white font-semibold">
              {viewers} users viewing now
            </div>

          </div>

        </div>

      </motion.div>

      {/* LIVE REVIEW */}
      <motion.div
        key={review.name}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[99999]"
      >

        <div className="bg-[#0b0b12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.15)] w-[360px]">

          <div className="flex items-center gap-2 text-yellow-400 text-lg">
            ★★★★★
          </div>

          <div className="mt-3 text-white font-medium leading-relaxed">
            "{review.text}"
          </div>

          <div className="mt-4 text-cyan-400 font-bold">
            — {review.name}
          </div>

        </div>

      </motion.div>

    </>
  );
}