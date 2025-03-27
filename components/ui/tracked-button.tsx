"use client";

import { ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useAnalytics } from "@/components/analytics";

interface TrackedButtonProps extends ButtonProps {
  trackingName: string;
  trackingData?: Record<string, any>;
  children: ReactNode;
}

export function TrackedButton({
  trackingName,
  trackingData = {},
  children,
  onClick,
  ...props
}: TrackedButtonProps) {
  const { trackButtonClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Track the button click
    trackButtonClick(trackingName, trackingData);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
