import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hamche Culture — Way Back to Real Life",
    template: "%s — Hamche Culture",
  },
  description:
    "Hamche Culture offers immersive cultural and educational experiences connecting people with the Siddi community, nature, and sustainable living in Karnataka, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-ink">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
