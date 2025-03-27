"use client";

import { ReactNode, forwardRef } from "react";
import { useSectionTracking } from "../hooks/use-section-tracking";

interface TrackedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  trackingProps?: Record<string, any>;
  trackOnce?: boolean;
  threshold?: number;
}

export const TrackedSection = forwardRef<HTMLElement, TrackedSectionProps>(
  function TrackedSection(
    {
      id,
      className,
      children,
      trackingProps = {},
      trackOnce = true,
      threshold = 0.5,
    },
    externalRef
  ) {
    const internalRef = useSectionTracking(id, {
      threshold,
      trackOnce,
      additionalProps: trackingProps,
    });

    // Merge refs (if external ref is provided)
    const setRef = (element: HTMLElement | null) => {
      if (element) {
        // Set internal ref
        if (internalRef) {
          (internalRef as React.MutableRefObject<HTMLElement | null>).current =
            element;
        }

        // Set external ref if it exists
        if (externalRef) {
          if (typeof externalRef === "function") {
            externalRef(element);
          } else {
            (
              externalRef as React.MutableRefObject<HTMLElement | null>
            ).current = element;
          }
        }
      }
    };

    return (
      <section id={id} ref={setRef} className={className}>
        {children}
      </section>
    );
  }
);
