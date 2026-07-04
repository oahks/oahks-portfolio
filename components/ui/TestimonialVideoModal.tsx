"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { ProjectVideoPlayer } from "@/components/ui/ProjectVideoPlayer";
import type { ProjectVideo } from "@/lib/data/promotional-videos";

type TestimonialVideoModalProps = {
  video: ProjectVideo;
  open: boolean;
  onClose: () => void;
};

export function TestimonialVideoModal({
  video,
  open,
  onClose,
}: TestimonialVideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer sm:-right-2 sm:top-0 sm:translate-x-full sm:translate-y-0"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <div className="border-b border-white/10 px-4 py-3 sm:px-5">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {video.title}
                </h3>
                <p className="mt-0.5 text-sm text-white/60">
                  Hear it in a client&apos;s own words
                </p>
              </div>
              <div className="p-2 sm:p-3">
                <ProjectVideoPlayer video={video} className="min-h-[50vh] sm:min-h-[420px]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
