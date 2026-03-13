"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollToSectionLink from "./ScrollToSectionLink";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center px-4 pt-20 sm:px-8 lg:px-12"
    >
      <div className="max-width relative">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30">
          <Image
            src="https://images.unsplash.com/photo-1603267847350-9a273fef957a?auto=format&fit=crop&w=1600&q=80"
            alt="Sunset over the boulders and temples of Hampi"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hammock-brown-dark/90 via-black/40 to-transparent" />
        </div>

        {/* Glass content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card relative mx-auto max-w-3xl px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        >
          <p className="section-subtitle mb-3">Renuka Guest House – Hampi</p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Stay Comfortably in the Heart of Hampi
          </h1>
          <p className="mt-4 text-sm sm:text-base text-hammock-beige">
            Enjoy a peaceful and affordable stay just a 1-minute walk from{" "}
            <span className="font-semibold text-white">
              Virupaksha Temple
            </span>
            . Perfect for backpackers, explorers, and pilgrims discovering the
            UNESCO heritage ruins of Hampi.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <ScrollToSectionLink targetId="contact" className="btn-primary">
              Book a Room
            </ScrollToSectionLink>
            <ScrollToSectionLink targetId="rooms" className="btn-secondary">
              View Rooms
            </ScrollToSectionLink>
          </div>

          <div className="mt-5 grid gap-3 text-xs text-white/80 sm:grid-cols-3 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <p>1-minute walk to Virupaksha Temple</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <p>Clean, comfortable, and budget-friendly rooms</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              <p>Warm, family-run hospitality</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

