import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishi M. Prabhu | Aspiring Quant & Software Engineer",
  description: "Personal website of Rishi M. Prabhu, an aspiring quantitative researcher and software engineer at Carnegie Mellon University. Explore my projects, experience, and skills in quantitative finance, machine learning, and software development.",
  keywords: "Rishi Prabhu, Quantitative Finance, Software Engineer, CMU, Machine Learning, Portfolio, Projects",
  authors: [{ name: "Rishi M. Prabhu" }],
  openGraph: {
    title: "Rishi M. Prabhu | Aspiring Quant & Software Engineer",
    description: "Personal website of Rishi M. Prabhu, an aspiring quantitative researcher and software engineer at Carnegie Mellon University.",
    url: "https://rishabhprabhu.com",
    siteName: "Rishi M. Prabhu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rishi M. Prabhu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi M. Prabhu | Aspiring Quant & Software Engineer",
    description: "Personal website of Rishi M. Prabhu, an aspiring quantitative researcher and software engineer at Carnegie Mellon University.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
