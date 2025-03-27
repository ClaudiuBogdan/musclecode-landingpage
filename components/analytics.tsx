"use client";

import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

function Analytics() {
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

// Wrapper component with Suspense
export function PostHogAnalytics() {
  return (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  );
}

/**
 * Custom hook for tracking analytics events
 * @returns Object with methods for tracking different types of events
 */
export const useAnalytics = () => {
  /**
   * Track a button click event
   * @param buttonName Name of the button
   * @param properties Additional properties to include with the event
   */
  const trackButtonClick = (buttonName: string, properties = {}) => {
    posthog.capture('button_clicked', {
      button_name: buttonName,
      ...properties
    });
  };

  /**
   * Track a link click event
   * @param linkText Text or name of the link
   * @param destination Destination URL
   * @param properties Additional properties to include with the event
   */
  const trackLinkClick = (linkText: string, destination: string, properties = {}) => {
    posthog.capture('link_clicked', {
      link_text: linkText,
      destination,
      ...properties
    });
  };

  /**
   * Track a form submission event
   * @param formName Name of the form
   * @param properties Additional properties to include with the event
   */
  const trackFormSubmit = (formName: string, properties = {}) => {
    posthog.capture('form_submitted', {
      form_name: formName,
      ...properties
    });
  };

  /**
   * Track a custom event
   * @param eventName Name of the event
   * @param properties Additional properties to include with the event
   */
  const trackEvent = (eventName: string, properties = {}) => {
    posthog.capture(eventName, properties);
  };

  /**
   * Check if analytics is available (initialized and consent given)
   */
  const isAnalyticsAvailable = () => {
    return posthog.__loaded === true;
  };

  return {
    trackButtonClick,
    trackLinkClick,
    trackFormSubmit,
    trackEvent,
    isAnalyticsAvailable
  };
};
