"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToSectionLink from "./ScrollToSectionLink";

const navItems = [
  { id: "home", label: "Home" },
  { id: "rooms", label: "Rooms" },
  { id: "amenities", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40"
    >
      <nav className="glass-nav mx-3 my-3 rounded-2xl px-4 py-3 sm:mx-6 sm:my-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 text-sm font-semibold text-hammock-sunset shadow-md">
              RG
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm sm:text-base font-semibold tracking-tight">
                Renuka Guest House
              </p>
              <p className="text-[11px] sm:text-xs text-white/60">
                Near Virupaksha Temple, Hampi
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-5 text-xs">
              {navItems.map((item) => (
                <ScrollToSectionLink
                  key={item.id}
                  targetId={item.id}
                  className="nav-link relative"
                >
                  <span>{item.label}</span>
                </ScrollToSectionLink>
              ))}
            </div>
            <ScrollToSectionLink targetId="contact" className="btn-primary text-xs">
              Book Now
            </ScrollToSectionLink>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 p-2 text-white/90 hover:bg-white/20 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-0.5">
              <span className="h-[2px] w-4 rounded-full bg-white" />
              <span className="h-[2px] w-3 rounded-full bg-white/80" />
              <span className="h-[2px] w-4 rounded-full bg-white/70" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-3 border-t border-white/10 pt-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <ScrollToSectionLink
                    key={item.id}
                    targetId={item.id}
                    className="nav-link w-full rounded-xl px-2 py-2 text-left hover:bg-white/10"
                  >
                    <span onClick={close}>{item.label}</span>
                  </ScrollToSectionLink>
                ))}
                <ScrollToSectionLink
                  targetId="contact"
                  className="btn-primary mt-2 w-full justify-center text-sm"
                >
                  Book Now
                </ScrollToSectionLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

