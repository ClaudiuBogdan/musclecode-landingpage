"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useAnalytics } from "@/components/analytics";

interface TrackedLinkProps extends Omit<LinkProps, "onClick"> {
  trackingName: string;
  destination?: string;
  trackingData?: Record<string, any>;
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
}

export function TrackedLink({
  trackingName,
  destination,
  trackingData = {},
  className,
  children,
  onClick,
  target,
  ...props
}: TrackedLinkProps) {
  const { trackLinkClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Track the link click
    trackLinkClick(
      trackingName,
      destination || (typeof props.href === "string" ? props.href : ""),
      trackingData
    );
  };

  return (
    <Link
      onClick={handleClick}
      className={className}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
}
