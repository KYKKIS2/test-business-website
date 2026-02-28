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
  title: "Test Business - We provide great value to our customers",
  description: "This is a test business description that meets the minimum character requirements of 100 characters to ensure the validation passes correctly.",
  keywords: ["test business", "quality products", "excellent service"],
  authors: [{ name: "Test Business" }],
  creator: "Test Business",
  publisher: "Test Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testbusiness.com"),
  openGraph: {
    title: "Test Business - We provide great value to our customers",
    description: "We provide great value to our customers through excellent service and quality products that exceed expectations.",
    type: "website",
    locale: "en_US",
    siteName: "Test Business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Business - We provide great value to our customers",
    description: "We provide great value to our customers through excellent service and quality products that exceed expectations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
