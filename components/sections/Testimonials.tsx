"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { TestimonialVideoModal } from "@/components/ui/TestimonialVideoModal";
import type { ProjectVideo } from "@/lib/data/promotional-videos";

const testimonialVideo: ProjectVideo = {
  id: "testimonial",
  title: siteConfig.testimonialVideo.title,
  source: "google-drive",
  fileId: siteConfig.testimonialVideo.fileId,
};

export function Testimonials() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          description="A few words from the people I've built funnels, automations, and GoHighLevel systems for."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -2 }}
            onClick={() => setVideoOpen(true)}
            className="group glass flex cursor-pointer flex-col overflow-hidden rounded-2xl text-left lg:col-span-1"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent/30 via-violet-900/40 to-background">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2)_0%,_transparent_70%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-7 w-7 fill-current pl-1" />
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Watch video
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-accent-light">
                Video Testimonial
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Hear it in a client&apos;s own words — a short, unscripted message
                about the funnels and automation I built.
              </p>
            </div>
          </motion.button>

          <div className="lg:col-span-2">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>

      <TestimonialVideoModal
        video={testimonialVideo}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
