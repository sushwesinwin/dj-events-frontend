import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/Layout.module.css";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the lastest DJ and other musical events",
  keywords: ["DJ Events", "DJ", "Events", "Music", "Party"],
};

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} ${poppins.className} antialiased`}
      >
        <Header />
        <div className={styles.container}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
