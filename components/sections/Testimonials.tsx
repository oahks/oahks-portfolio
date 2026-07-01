"use client";

import { Play } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          description="A few words from the people I've built funnels, automations, and GoHighLevel systems for."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass flex flex-col items-center justify-center rounded-2xl p-8 text-center lg:col-span-1">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Play className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Video Testimonial
            </h3>
            <p className="mt-2 text-sm text-muted">
              Hear it in a client&apos;s own words. A short, unscripted message
              about the systems I built. Press play to watch.
            </p>
            <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-xl bg-input">
              <span className="text-xs text-muted">Video placeholder</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}
