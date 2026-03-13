export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding pt-10">
      <div className="max-width">
        <div className="glass-card px-6 py-6 sm:px-8 sm:py-7">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="section-subtitle mb-2">Renuka Guest House</p>
              <p className="font-heading text-lg font-semibold text-white">
                Your quiet base in the heart of Hampi.
              </p>
              <p className="mt-3 text-sm text-white/80">
                Clean, comfortable rooms steps away from Virupaksha Temple,
                Hampi Bazaar, and the sacred Tungabhadra river.
              </p>
            </div>

            <div className="text-sm">
              <h3 className="mb-2 font-semibold text-hammock-beige">
                Quick Links
              </h3>
              <nav className="space-y-1 text-white/80">
                <a href="#rooms" className="block hover:text-white">
                  Rooms
                </a>
                <a href="#amenities" className="block hover:text-white">
                  Amenities
                </a>
                <a href="#gallery" className="block hover:text-white">
                  Gallery
                </a>
                <a href="#location" className="block hover:text-white">
                  Location
                </a>
                <a href="#contact" className="block hover:text-white">
                  Contact / Booking
                </a>
              </nav>
            </div>

            <div className="text-sm">
              <h3 className="mb-2 font-semibold text-hammock-beige">
                Contact
              </h3>
              <p>Renuka Guest House</p>
              <p>Near Virupaksha Temple</p>
              <p>Hampi, Karnataka, India</p>
              <p className="mt-2">
                Phone:{" "}
                <a href="tel:+919876543210" className="hover:text-hammock-sunset">
                  +91-98765-43210
                </a>
              </p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:stay@renukahampi.com"
                  className="hover:text-hammock-sunset"
                >
                  stay@renukahampi.com
                </a>
              </p>
              <div className="mt-3 flex gap-2 text-xs text-white/70">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 hover:border-hammock-sunset hover:text-hammock-sunset"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 hover:border-hammock-sunset hover:text-hammock-sunset"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/60">
            <p>
              © {year} Renuka Guest House – Hampi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

