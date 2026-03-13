"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollToSectionLink from "./ScrollToSectionLink";

export default function RoomCard({ room }) {
  const { name, price, description, features, image } = room;

  return (
    <motion.article
      className="glass-card flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-40 w-full sm:h-48">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-hammock-beige backdrop-blur">
          From ₹{price} / night
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <h3 className="font-heading text-lg font-semibold text-white">
          {name}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-white/80">{description}</p>
        )}
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-hammock-beige">
          {features.map((feature) => (
            <li key={feature} className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-hammock-sunset" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between text-xs text-white/70">
          <span>Ideal for relaxed stays in Hampi.</span>
          <ScrollToSectionLink targetId="contact" className="btn-primary px-4 py-2 text-xs">
            Book Now
          </ScrollToSectionLink>
        </div>
      </div>
    </motion.article>
  );
}

