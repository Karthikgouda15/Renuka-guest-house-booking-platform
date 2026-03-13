"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionWrapper({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section-padding scroll-mt-24">
      <div className="max-width">
        <motion.header
          className="mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={fadeInUp}
        >
          {eyebrow && <p className="section-subtitle mb-2">{eyebrow}</p>}
          {title && <h2 className="section-title mb-3">{title}</h2>}
          {subtitle && (
            <p className="max-w-2xl text-sm sm:text-base text-white/80">
              {subtitle}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

