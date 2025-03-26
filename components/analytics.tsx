"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Always opt out by default - only opt in if explicit consent is given
    const hasConsent = window.posthogCookiesAccepted === true;
    if (!posthog.__loaded && hasConsent) {
      // Initial configuration - tracking disabled by default
      console.log("initializing posthog");
      posthog.init(
        process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_YourPostHogKeyHere",
        {
          api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
          loaded: (posthog) => {
            if (process.env.NODE_ENV !== "production") {
              posthog.debug(false);
            }
          },
          capture_pageview: true,
          opt_in_site_apps: true,
          autocapture: true,
          disable_session_recording: false,
          persistence: "localStorage",
        }
      );
    }
  }, [pathname, searchParams]);

  return null;
}
