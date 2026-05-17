import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaBoost | Digital Marketing & TikTok Agency",
  description: "Premium digital marketing agency specializing in TikTok Ads, Meta Ads, SEO, and social media growth strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505]">
        <Navbar />
        {children}
        <Footer />

        {/* Floating WhatsApp Action Trigger */}
        <a 
          href="https://wa.me/923314589220" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MenuCircle className="w-7 h-7" />
        </a>
      </body>
    </html>
  );
}