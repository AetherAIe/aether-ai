"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/videos/warzone.mp4",
];

export default function HeroVideo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.video
          key={videos[index]}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        >

          <source src={videos[index]} type="video/mp4" />

        </motion.video>

      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

    </div>
  );
}