"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export type ImageLoadVariant = "hero" | "card" | "gallery" | "lightbox";

const loadConfig: Record<
  ImageLoadVariant,
  Pick<ImageProps, "priority" | "loading" | "fetchPriority">
> = {
  hero: { priority: true, loading: "eager", fetchPriority: "high" },
  card: { loading: "lazy", fetchPriority: "low" },
  gallery: { loading: "lazy", fetchPriority: "low" },
  lightbox: { loading: "eager", fetchPriority: "high" },
};

type OptimizedImageProps = Omit<ImageProps, "alt" | "loading" | "fetchPriority"> & {
  variant?: ImageLoadVariant;
  alt: string;
};

/** next/image wrapper with sensible eager (hero/lightbox) vs lazy (cards/gallery) defaults */
export function OptimizedImage({
  variant = "card",
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...loadConfig[variant]}
      {...props}
      alt={alt}
      className={className}
    />
  );
}

type LazyInViewImageProps = OptimizedImageProps & {
  containerClassName?: string;
  rootMargin?: string;
};

/** Defers loading until the image container nears the viewport */
export function LazyInViewImage({
  containerClassName,
  rootMargin = "120px",
  className,
  variant = "card",
  ...props
}: LazyInViewImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: rootMargin as `${number}px` });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      {isInView ? (
        <OptimizedImage variant={variant} className={className} {...props} />
      ) : (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-section-alt",
            className
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
