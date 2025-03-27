import "posthog-js";

declare global {
  interface Window {
    posthogCookiesAccepted?: boolean;
  }
}

// Extend posthog-js with the __loaded property
declare module "posthog-js" {
  interface PostHog {
    __loaded?: boolean;
  }
}
