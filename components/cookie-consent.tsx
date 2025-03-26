"use client";

import { useState, useEffect } from "react";
import { Code } from "lucide-react";

// Add TypeScript declarations
declare global {
  interface Window {
    posthogCookiesAccepted?: boolean;
  }
}

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Set default to opted-out
    window.posthogCookiesAccepted = false;

    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");

    if (!cookieConsent) {
      // No choice made yet, show banner and ensure opted-out by default
      setShowBanner(true);
      window.posthogCookiesAccepted = false;
    } else if (cookieConsent === "accepted") {
      // Explicitly opted in
      window.posthogCookiesAccepted = true;
    } else {
      // Explicitly opted out
      window.posthogCookiesAccepted = false;
    }
  }, []);

  const acceptCookies = () => {
    setIsExiting(true);
    setTimeout(() => {
      localStorage.setItem("cookie-consent", "accepted");
      window.posthogCookiesAccepted = true;
      setShowBanner(false);
      // Reload to enable analytics
      window.location.reload();
    }, 500);
  };

  const declineCookies = () => {
    setIsExiting(true);
    setTimeout(() => {
      localStorage.setItem("cookie-consent", "declined");
      window.posthogCookiesAccepted = false;
      setShowBanner(false);
    }, 500);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4 transition-transform duration-500 ease-in-out ${
        isExiting ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-5xl mx-auto rounded-xl bg-gray-900 p-6 md:p-8 shadow-xl ring-1 ring-gray-700">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Cookies.init()
            </h3>
          </div>

          <div className="text-left">
            <pre className="m-0 font-mono whitespace-pre-wrap text-green-400 text-sm md:text-base mb-4 max-w-3xl">
              {`
// We're using cookies to enhance your experience and improve our product.
// Help us squash bugs faster than ChatGPT saves your day.`}
            </pre>

            <p className="text-blue-300 italic mb-2">
              Your privacy matters — your data is encrypted tighter than your
              minified JS bundle.
            </p>

            <p className="text-blue-300 italic">
              We won't send any data unless you accept. Feel free to inspect
              network traffic if you're curious! 👀
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto">
            <button
              onClick={declineCookies}
              className="text-amber-400 hover:text-amber-300 font-mono text-sm px-4 transition-colors underline self-center"
            >
              No, thanks
            </button>

            <button
              onClick={acceptCookies}
              className="rounded-lg bg-green-600 px-8 py-3 font-mono text-white text-lg transition hover:bg-green-500 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Accept</span>
              <span className="text-xs">(let's improve 🚀)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
