"use client";

import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  const { quote, name, meta } = testimonial;

  return (
    <motion.figure
      className="glass-card flex h-full flex-col justify-between px-5 py-5 sm:px-6 sm:py-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
    >
      <p className="text-3xl leading-none text-hammock-sunset">“</p>
      <blockquote className="mt-1 text-sm sm:text-base text-white/85">
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-xs sm:text-sm text-hammock-beige">
        <span className="font-semibold text-white">{name}</span>
        {meta && <span className="text-white/70"> · {meta}</span>}
      </figcaption>
    </motion.figure>
  );
}

