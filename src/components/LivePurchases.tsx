"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const purchases = [
  "🇩🇪 Krieger77 purchased 1 MONTH Warzone AI",
  "🇺🇸 GhostFPS purchased LIFETIME Apex AI",
  "🇦🇪 Q8Ghost purchased 6 HOURS Fortnite AI",
  "🇷🇺 Zloy purchased 1 WEEK Battlefield AI",
  "🇩🇪 VexenDE purchased 1 DAY Warzone AI",
  "🇦🇪 M4RX purchased 1 MONTH Fortnite AI",
  "🇺🇸 Nullify purchased 6 HOURS Apex AI",
  "🇩🇪 BlutJager purchased LIFETIME Warzone AI",
  "🇷🇺 S1NNER purchased 1 WEEK Battlefield AI",
  "🇺🇸 NightAim purchased 1 DAY Fortnite AI",
];

const times = [
  "just now",
  "2 minutes ago",
  "5 minutes ago",
  "11 minutes ago",
  "14 minutes ago",
];

export default function LivePurchases() {
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {

    const showPurchase = () => {

      const randomPurchase =
        purchases[Math.floor(Math.random() * purchases.length)];

      const randomTime =
        times[Math.floor(Math.random() * times.length)];

      setPurchase(randomPurchase);
      setTime(randomTime);

      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // FIRST POPUP FAST
    setTimeout(showPurchase, 3000);

    // LOOP
    const interval = setInterval(() => {
      showPurchase();
    }, 30000);

    return () => clearInterval(interval);

  }, []);

  return (
    <AnimatePresence>

      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-[99999]"
        >

          <div className="bg-[#0b0b12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-[0_0_40px_rgba(168,85,247,0.35)] w-[360px]">

            <div className="flex items-start gap-4">

              {/* GREEN DOT */}
              <div className="mt-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <div>

                <div className="text-white font-semibold leading-snug">
                  {purchase}
                </div>

                <div className="text-zinc-400 text-sm mt-1">
                  {time}
                </div>

              </div>

            </div>

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}