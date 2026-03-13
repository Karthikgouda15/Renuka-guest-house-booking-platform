"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";
import RoomCard from "../components/RoomCard";
import AmenityCard from "../components/AmenityCard";
import GalleryGrid from "../components/GalleryGrid";
import LocationMap from "../components/LocationMap";
import ContactForm from "../components/ContactForm";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

import { rooms } from "../data/rooms";
import { amenities } from "../data/amenities";
import { testimonials } from "../data/testimonials";
import { galleryImages } from "../data/gallery";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-10">
        <Hero />

        {/* About */}
        <SectionWrapper
          id="about"
          eyebrow="About the Guest House"
          title="A peaceful base right beside Virupaksha Temple"
          subtitle="Renuka Guest House offers clean, affordable rooms for travelers who want to stay close to the heart of Hampi without compromising on comfort."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Peaceful location",
                text: "Tucked just behind the temple in a quiet lane, away from the noise of the main bazaar.",
              },
              {
                title: "Affordable pricing",
                text: "Comfortable rooms at budget-friendly rates, ideal for backpackers and families alike.",
              },
              {
                title: "Friendly hosts",
                text: "Family-run guest house with warm local guidance on places to visit and eat.",
              },
              {
                title: "Walk to attractions",
                text: "Walk to Virupaksha Temple, the river, and auto stands for exploring the ruins.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="font-heading text-sm sm:text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Rooms */}
        <SectionWrapper
          id="rooms"
          eyebrow="Our Rooms"
          title="Comfortable rooms for every kind of traveler"
          subtitle="Choose from simple standard rooms, cozy deluxe rooms, or family rooms that can comfortably host small groups."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <p className="mt-4 text-xs text-white/70">
            * Final pricing may vary slightly by season and availability. Please
            contact us for the latest rates and special offers.
          </p>
        </SectionWrapper>

        {/* Amenities */}
        <SectionWrapper
          id="amenities"
          eyebrow="Amenities"
          title="Everything you need for a relaxed stay"
          subtitle="Simple, thoughtful comforts so you can focus on experiencing Hampi’s landscapes, temples, and stories."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </SectionWrapper>

        {/* Gallery */}
        <SectionWrapper
          id="gallery"
          eyebrow="Gallery"
          title="Glimpses of Hampi and our spaces"
          subtitle="From sunrise over the boulder hills to the ancient gopurams, Hampi is beautiful at every hour."
        >
          <GalleryGrid images={galleryImages} />
        </SectionWrapper>

        {/* Location */}
        <SectionWrapper
          id="location"
          eyebrow="Location"
          title="In the heart of old Hampi"
          subtitle="Stay within a short walk of Virupaksha Temple, the river, and local cafés."
        >
          <LocationMap />
        </SectionWrapper>

        {/* Contact / Booking */}
        <SectionWrapper
          id="contact"
          eyebrow="Contact & Booking"
          title="Send an enquiry or call us directly"
          subtitle="Share your travel dates and we will confirm availability, room options, and simple local tips to help you plan your time in Hampi."
        >
          <ContactForm />
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper
          id="testimonials"
          eyebrow="Testimonials"
          title="Guests who felt at home here"
          subtitle="Travelers from across India and the world choose Renuka Guest House for its location, cleanliness, and warm hospitality."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </SectionWrapper>

        <Footer />
      </main>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Renuka Guest House – Hampi",
            description:
              "Clean, comfortable, and affordable rooms just a 1-minute walk from Virupaksha Temple in Hampi.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Near Virupaksha Temple",
              addressLocality: "Hampi",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            telephone: "+91-98765-43210",
            url: "https://renukaguesthouse.example.com",
            amenityFeature: amenities.map((a) => ({
              "@type": "LocationFeatureSpecification",
              name: a.label,
              description: a.description,
            })),
          }),
        }}
      />
    </>
  );
}

