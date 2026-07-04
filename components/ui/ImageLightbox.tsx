"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;

type ImageLightboxProps = {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  title?: string;
};

export function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onIndexChange,
  title = "Screenshot",
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [zoom, setZoom] = useState(1);

  const image = images[activeIndex];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setZoom(1);
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    onIndexChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onIndexChange]);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));
  }, []);

  const resetZoom = useCallback(() => setZoom(1), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          e.stopPropagation();
          onClose();
          break;
        case "ArrowLeft":
          if (hasMultiple) goPrev();
          break;
        case "ArrowRight":
          if (hasMultiple) goNext();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "0":
          resetZoom();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext, zoomIn, zoomOut, resetZoom, hasMultiple]);

  if (!mounted || !image) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery preview"
    >
      <div
        className="absolute inset-0 bg-black/95"
        onClick={onClose}
        aria-hidden
      />

      {/* Top toolbar */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="text-sm text-white/80">
          {hasMultiple && (
            <span className="font-medium text-white">
              {activeIndex + 1} / {images.length}
            </span>
          )}
          <span className="ml-2 hidden text-white/50 sm:inline">{title}</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <LightboxButton
            onClick={zoomOut}
            disabled={zoom <= ZOOM_MIN}
            label="Zoom out"
          >
            <ZoomOut className="h-5 w-5" />
          </LightboxButton>
          <span className="min-w-[3rem] text-center text-xs font-medium text-white/70">
            {Math.round(zoom * 100)}%
          </span>
          <LightboxButton
            onClick={zoomIn}
            disabled={zoom >= ZOOM_MAX}
            label="Zoom in"
          >
            <ZoomIn className="h-5 w-5" />
          </LightboxButton>
          <LightboxButton
            onClick={resetZoom}
            disabled={zoom === 1}
            label="Reset zoom"
          >
            <RotateCcw className="h-4 w-4" />
          </LightboxButton>
          <LightboxButton onClick={onClose} label="Close gallery">
            <X className="h-5 w-5" />
          </LightboxButton>
        </div>
      </div>

      {/* Main image area */}
      <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden px-14 sm:px-20">
        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer sm:left-4 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div
          className={cn(
            "max-h-full max-w-full overflow-auto",
            zoom > 1 && "cursor-grab active:cursor-grabbing"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`${title} ${activeIndex + 1}`}
            draggable={false}
            className="max-h-[calc(100vh-8rem)] w-auto max-w-full rounded-lg object-contain transition-transform duration-200 ease-out"
            style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
          />
        </div>

        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer sm:right-4 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div className="relative z-10 border-t border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm">
          <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange(i);
                }}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer",
                  i === activeIndex
                    ? "border-accent ring-2 ring-accent/40"
                    : "border-white/20 opacity-60 hover:opacity-100"
                )}
                aria-label={`View image ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>,
    document.body
  );
}

function LightboxButton({
  children,
  onClick,
  label,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors cursor-pointer",
        disabled
          ? "cursor-not-allowed opacity-30"
          : "hover:bg-white/10 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
