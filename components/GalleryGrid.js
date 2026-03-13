"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {images.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/5"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: index * 0.03 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-2 left-2 right-2 text-[11px] text-hammock-beige">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

