"use client";

import { motion } from "framer-motion";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.506992472332!2d76.46012157581352!3d15.335017485250327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd4c0919f1f%3A0x8f68b0b990e9c10!2sVirupaksha%20Temple%2C%20Hampi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Virupaksha+Temple%2C+Hampi%2C+Karnataka";

export default function LocationMap() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-3 text-sm sm:text-base text-white/80"
      >
        <p>
          <span className="font-semibold text-white">Renuka Guest House</span>{" "}
          is tucked away in a peaceful lane just behind{" "}
          <span className="font-semibold text-white">
            Virupaksha Temple
          </span>
          , placing you steps away from the sacred complex, riverside ghats,
          and bustling Hampi Bazaar.
        </p>
        <div className="mt-4 space-y-1 text-sm">
          <p className="font-semibold text-hammock-beige">
            Address
          </p>
          <p>Renuka Guest House</p>
          <p>Near Virupaksha Temple</p>
          <p>Hampi, Karnataka, India</p>
        </div>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary mt-4 inline-flex"
        >
          Get Directions
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="glass-card overflow-hidden"
      >
        <div className="aspect-[4/3] w-full">
          <iframe
            src={MAP_URL}
            title="Map showing Renuka Guest House near Virupaksha Temple in Hampi"
            className="h-full w-full rounded-3xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  );
}

