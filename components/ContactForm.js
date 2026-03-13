"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BOOKING_PHONE = "+91-98765-43210";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    // Placeholder: integrate with email service or backend API here.
    setStatus({
      type: "success",
      message: "Thank you! We have received your enquiry and will get back shortly.",
    });
    form.reset();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
      <motion.form
        onSubmit={handleSubmit}
        className="glass-card px-5 py-5 sm:px-7 sm:py-7"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-hammock-beige" htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-hammock-sunset focus:outline-none focus:ring-1 focus:ring-hammock-sunset/70"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-hammock-beige" htmlFor="phone">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              required
              className="w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-hammock-sunset focus:outline-none focus:ring-1 focus:ring-hammock-sunset/70"
              placeholder="WhatsApp or mobile number"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-hammock-beige" htmlFor="checkin">
              Check-in date *
            </label>
            <input
              id="checkin"
              name="checkin"
              type="date"
              required
              className="w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-hammock-sunset focus:outline-none focus:ring-1 focus:ring-hammock-sunset/70"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-hammock-beige" htmlFor="checkout">
              Check-out date *
            </label>
            <input
              id="checkout"
              name="checkout"
              type="date"
              required
              className="w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-hammock-sunset focus:outline-none focus:ring-1 focus:ring-hammock-sunset/70"
            />
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <label className="text-xs font-medium text-hammock-beige" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-white/20 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-hammock-sunset focus:outline-none focus:ring-1 focus:ring-hammock-sunset/70"
            placeholder="Number of guests, room preference, special requests..."
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button type="submit" className="btn-primary text-sm">
            Send Enquiry
          </button>
          <a
            href={`tel:${BOOKING_PHONE}`}
            className="btn-secondary text-sm"
          >
            Call Now
          </a>
        </div>

        {status && (
          <p
            className={`mt-4 text-xs ${
              status.type === "success" ? "text-emerald-300" : "text-red-300"
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="space-y-4 text-sm text-white/80"
      >
        <div className="glass-card px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hammock-beige">
            Booking & Enquiries
          </p>
          <p className="mt-2 text-sm">
            Share your travel dates and we will confirm the best available room
            for you. Early bookings are recommended during weekends and
            holidays in Hampi.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-semibold text-hammock-beige">Call / WhatsApp</p>
            <a
              href={`tel:${BOOKING_PHONE}`}
              className="text-base font-semibold text-white hover:text-hammock-sunset"
            >
              {BOOKING_PHONE}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

