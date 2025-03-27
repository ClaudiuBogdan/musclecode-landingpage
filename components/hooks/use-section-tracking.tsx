"use client";

import { useEffect, useRef, useState } from "react";
import { useAnalytics } from "../analytics";

/**
 * Hook to track when a section comes into view
 * @param sectionId The ID of the section to track
 * @param options Additional tracking options
 * @returns A ref to attach to the section element
 */
export function useSectionTracking(
  sectionId: string,
  options: {
    threshold?: number;
    trackOnce?: boolean;
    additionalProps?: Record<string, any>;
  } = {}
) {
  const { threshold = 0.5, trackOnce = true, additionalProps = {} } = options;

  const sectionRef = useRef<HTMLElement>(null);
  const [hasTracked, setHasTracked] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Skip if already tracked and we only want to track once
    if (trackOnce && hasTracked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            // Track section view
            trackEvent("section_viewed", {
              section_id: sectionId,
              ...additionalProps,
            });

            if (trackOnce) {
              setHasTracked(true);
              // Disconnect after tracking once
              observer.disconnect();
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [
    sectionId,
    threshold,
    trackOnce,
    hasTracked,
    additionalProps,
    trackEvent,
  ]);

  return sectionRef;
}
