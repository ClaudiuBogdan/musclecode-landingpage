import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { PostHogAnalytics } from "@/components/analytics";
import {
  WebsiteStructuredData,
  OrganizationStructuredData,
  SoftwareApplicationStructuredData,
} from "@/components/structured-data";

// Use Inter font for a more modern look
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "MuscleCode.io - AI-Powered Learning Platform for Developers",
    template: "%s | MuscleCode.io",
  },
  description:
    "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths, interactive challenges, and your own AI trainer.",
  keywords:
    "developer learning, AI coding, programming skills, developer training, coding challenges, AI training, coding practice, software development skills",
  creator: "MuscleCode.io",
  publisher: "MuscleCode.io",
  authors: [{ name: "MuscleCode Team" }],
  metadataBase: new URL("https://musclecode.io"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MuscleCode.io - AI-Powered Learning Platform for Developers",
    description:
      "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths, interactive challenges, and your own AI trainer.",
    url: "https://musclecode.io",
    siteName: "MuscleCode.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MuscleCode.io - AI-Powered Learning Platform for Developers",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuscleCode.io - AI-Powered Learning Platform for Developers",
    description:
      "Train your coding muscles with AI. Become a production-ready developer faster with personalized learning paths.",
    site: "@muscleCodeio",
    creator: "@muscleCodeio",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
    // yandex: "yandex-verification-code", // If needed
    // bing: "bing-verification-code", // If needed
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <CookieConsentBanner />
          <PostHogAnalytics />
          <WebsiteStructuredData />
          <OrganizationStructuredData />
          <SoftwareApplicationStructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
