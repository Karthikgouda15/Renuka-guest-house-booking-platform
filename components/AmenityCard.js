"use client";

import { motion } from "framer-motion";

const iconMap = {
  wifi: "📶",
  water: "🚿",
  clean: "🧼",
  food: "🍽️",
  temple: "🛕",
  travel: "🧭",
};

export default function AmenityCard({ amenity }) {
  const { label, description, icon } = amenity;

  return (
    <motion.div
      className="glass-card flex h-full flex-col px-4 py-4 sm:px-5 sm:py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 text-base sm:h-10 sm:w-10">
        <span aria-hidden="true">{iconMap[icon] || "★"}</span>
      </div>
      <h3 className="font-heading text-sm sm:text-base font-semibold text-white">
        {label}
      </h3>
      {description && (
        <p className="mt-1 text-xs sm:text-sm text-white/80">{description}</p>
      )}
    </motion.div>
  );
}

