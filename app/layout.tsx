import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Use Inter font for a more modern look
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MuscleCode.io - AI-Powered Learning Platform for Developers",
  description:
    "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths, interactive challenges, and your own AI trainer.",
  keywords:
    "developer learning, AI coding, programming skills, developer training, coding challenges",
  creator: "MuscleCode.io",
  openGraph: {
    title: "MuscleCode.io - AI-Powered Learning Platform for Developers",
    description:
      "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths, interactive challenges, and your own AI trainer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuscleCode.io - AI-Powered Learning Platform for Developers",
    description:
      "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
