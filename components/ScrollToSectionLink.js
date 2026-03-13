"use client";

import { motion } from "framer-motion";

export default function ScrollToSectionLink({ targetId, children, className = "" }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.button
      whileHover={{ y: -1, opacity: 0.95 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

