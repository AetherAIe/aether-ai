"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "🇩🇪 Krieger77",
  "🇺🇸 GhostFPS",
  "🇦🇪 Q8Ghost",
  "🇷🇺 Zloy",
  "🇩🇪 VexenDE",
  "🇦🇪 M4RX",
  "🇺🇸 Nullify",
  "🇩🇪 BlutJager",
  "🇷🇺 S1NNER",
  "🇺🇸 NightAim",
  "🇫🇷 NoirX",
  "🇬🇧 R3KT",
  "🇸🇦 xSaif",
  "🇵🇱 VortiX",
  "🇯🇵 KuroFPS",
  "🇩🇪 TodesAim",
  "🇺🇸 Slayr",
  "🇨🇦 Arctic",
  "🇦🇪 H4WK",
  "🇷🇺 V0RON",
  "🇺🇸 ZeroRecoil",
  "🇩🇪 PhantomDE",
  "🇹🇷 AimLockTR",
  "🇬🇧 ClutchGod",
  "🇫🇷 Vanta",
  "🇺🇸 DripFPS",
  "🇦🇪 QTRx",
  "🇯🇵 OniAim",
  "🇷🇺 RedGhost",
  "🇩🇪 Hexen",
  "🇺🇸 ToxicFPS",
  "🇵🇱 Ryuu",
  "🇸🇦 FalconX",
  "🇨🇦 NovaFPS",
  "🇫🇷 Eclipse",
  "🇬🇧 Hydra",
  "🇺🇸 SilentAim",
  "🇩🇪 ViperDE",
  "🇦🇪 KSAx",
  "🇷🇺 FrostAim",
  "🇺🇸 DeltaFPS",
  "🇹🇷 TRHunter",
  "🇯🇵 KiraFPS",
  "🇩🇪 VenomDE",
  "🇺🇸 Havoc",
  "🇫🇷 Zenith",
  "🇨🇦 PolarAim",
  "🇸🇦 M4JED",
  "🇷🇺 Krovik",
  "🇬🇧 SavageFPS",
  "🇺🇸 RecoilGod",
  "🇩🇪 Schatten",
  "🇦🇪 DesertAim",
  "🇵🇱 NightFox",
  "🇯🇵 RoninFPS",
  "🇺🇸 AimWare",
  "🇫🇷 Fatality",
  "🇷🇺 Inferno",
  "🇩🇪 CyberDE",
  "🇨🇦 Xeno",
  "🇺🇸 GrimFPS",
  "🇸🇦 Q8Hunter",
  "🇹🇷 VandalTR",
  "🇯🇵 Hikari",
  "🇬🇧 OmegaFPS",
  "🇩🇪 BlitzAim",
  "🇺🇸 Raven",
  "🇫🇷 Mirage",
  "🇷🇺 Winter",
  "🇦🇪 DuneFPS",
  "🇵🇱 ToxicPL",
  "🇺🇸 PulseAim",
  "🇩🇪 FrostDE",
  "🇬🇧 VenomUK",
  "🇨🇦 DriftFPS",
  "🇷🇺 Sova",
  "🇸🇦 ShadowKSA",
  "🇺🇸 ChaosFPS",
  "🇯🇵 Yami",
  "🇫🇷 RogueAim",
  "🇩🇪 DarkWolf",
  "🇺🇸 AlphaFPS",
  "🇷🇺 Ghostik",
  "🇦🇪 Q8Savage",
  "🇬🇧 ToxicUK",
  "🇵🇱 HexPL",
  "🇨🇦 VenomFPS",
  "🇺🇸 SavageAim",
  "🇩🇪 IronDE",
  "🇷🇺 Fatal",
  "🇯🇵 Akuma",
  "🇫🇷 NovaX",
  "🇸🇦 M4RXKSA",
  "🇺🇸 ZenithFPS",
  "🇩🇪 VortexDE",
  "🇬🇧 FrostUK",
  "🇷🇺 HydraRU",
  "🇦🇪 SandGhost",
  "🇺🇸 ReaperFPS",
];

const products = [
  "6 HOURS Warzone AI",
  "1 DAY Warzone AI",
  "1 WEEK Warzone AI",
  "1 MONTH Warzone AI",
  "LIFETIME Warzone AI",
  "6 HOURS Fortnite AI",
  "1 DAY Fortnite AI",
  "1 WEEK Fortnite AI",
  "1 MONTH Fortnite AI",
  "LIFETIME Fortnite AI",
  "6 HOURS Apex AI",
  "1 DAY Apex AI",
  "1 WEEK Apex AI",
  "1 MONTH Apex AI",
  "LIFETIME Apex AI",
  "1 WEEK Battlefield AI",
  "1 MONTH Battlefield AI",
  "LIFETIME Battlefield AI",
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

      const randomName =
        names[Math.floor(Math.random() * names.length)];

      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      const randomTime =
        times[Math.floor(Math.random() * times.length)];

      setPurchase(`${randomName} purchased ${randomProduct}`);
      setTime(randomTime);

      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    setTimeout(showPurchase, 3000);

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

          <div className="bg-[#0b0b12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-[0_0_40px_rgba(168,85,247,0.35)] w-[380px]">

            <div className="flex items-start gap-4">

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