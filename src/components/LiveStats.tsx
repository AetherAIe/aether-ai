"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "GhostFPS",
    text: "Best AI I ever used. Absolutely insane tracking.",
  },

  {
    name: "Krieger77",
    text: "Undetected for weeks. Legit best provider.",
  },

  {
    name: "Q8Ghost",
    text: "Actually feels unfair lol.",
  },

  {
    name: "Nullify",
    text: "Tracking is smooth af. 10/10.",
  },

  {
    name: "V0RON",
    text: "Won 14 games in a row with this.",
  },
];

export default function LiveStats() {
  const [viewers, setViewers] = useState(128);
  const [review, setReview] = useState(reviews[0]);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const random = Math.floor(Math.random() * 6) - 2;
        return Math.max(90, prev + random);
      });
    }, 4000);

    const reviewInterval = setInterval(() => {
      const randomReview =
        reviews[Math.floor(Math.random() * reviews.length)];

      setReview(randomReview);
    }, 8000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <>

      {/* VIEWERS */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 right-6 z-[9999]"
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

      {/* REVIEW */}
      <motion.div
        key={review.name}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[9999]"
      >

        <div className="bg-[#0b0b12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.15)] w-[340px]">

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