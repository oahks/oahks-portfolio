"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Services"
          title="How I Can Help"
          description="From a single workflow to a full CRM build — here's how I help businesses automate and grow."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard className="flex h-full flex-col">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-success">
                  {service.outcome}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
