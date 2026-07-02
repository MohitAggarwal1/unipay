import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({subsets: ["latin"], variable: '--font-inter'});
const ibmPexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'});

export const metadata: Metadata = {
  title: "UniPay",
  description: "UniPay is an all-in-one solution for all payment needs.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}