"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  const stats = [
    { value: siteConfig.stats.funnels, label: "Funnels Built" },
    { value: siteConfig.stats.workflows, label: "Workflows Created" },
    { value: siteConfig.stats.campaigns, label: "Campaigns Managed" },
    { value: siteConfig.stats.platforms, label: "Platforms Managed" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container-max relative section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
              {siteConfig.title}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">
                <Calendar className="h-4 w-4" />
                Book a Consultation
              </Button>
              <Button variant="secondary" href="#portfolio">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 to-indigo-600/20 blur-2xl" />
              <div className="glass-strong relative overflow-hidden rounded-3xl glow-blue">
                <div className="flex aspect-square items-center justify-center hero-inner-bg">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent to-indigo-600 text-5xl font-bold text-white">
                      AE
                    </div>
                    <p className="font-heading text-xl font-semibold text-foreground">
                      {siteConfig.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-2xl glass p-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
