import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "SSYouTube Pro - Free Video Downloader",
    template: "%s | SSYouTube Pro",
  },
  description:
    "Download videos, audio, thumbnails and playlists quickly with SSYouTube Pro. Fast, secure and easy to use.",
  keywords: [
    "ssyoutube",
    "video downloader",
    "youtube downloader",
    "mp3 downloader",
    "thumbnail downloader",
    "playlist downloader",
  ],
  authors: [
    {
      name: "Usman",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
