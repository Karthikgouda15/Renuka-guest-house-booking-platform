import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://renukaguesthouse.example.com"),

  title: "Renuka Guest House – Hampi | Rooms near Virupaksha Temple",
  description:
    "Renuka Guest House in Hampi offers clean, comfortable, and affordable rooms just a 1-minute walk from Virupaksha Temple. Perfect for travelers, backpackers, and pilgrims.",

  openGraph: {
    title: "Renuka Guest House – Hampi",
    description:
      "Stay comfortably in the heart of Hampi, just a minute walk from Virupaksha Temple.",
    url: "https://renukaguesthouse.example.com",
    siteName: "Renuka Guest House – Hampi",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renuka Guest House – Hampi",
    description:
      "Affordable rooms near Virupaksha Temple with a peaceful atmosphere and friendly hosts.",
  },

  icons: {
    icon: "/favicon.ico",
  },

  themeColor: "#3E2723",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}