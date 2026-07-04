"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export function CalendlyInlineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const url = siteConfig.calendly;

  const initWidget = useCallback(() => {
    if (!containerRef.current || !window.Calendly) return;
    containerRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
  }, [url]);

  useEffect(() => {
    if (window.Calendly) initWidget();
  }, [initWidget]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initWidget}
      />
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full min-w-[320px]"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
