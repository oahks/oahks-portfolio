"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendlyInlineEmbed } from "@/components/ui/CalendlyInlineEmbed";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="container-max">
        <SectionHeader
          label="Contact"
          title="Ready to Get Started?"
          description="Ready to automate your business and generate more leads? Let's build a system that works for you."
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass overflow-hidden rounded-2xl">
              <div className="border-b border-border p-4 sm:p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Book a Discovery Call
                </h3>
                <p className="mt-1 text-sm text-muted">
                  30 min · No commitment · {siteConfig.location} (WAT)
                </p>
              </div>
              <div className="overflow-hidden bg-input">
                <CalendlyInlineEmbed />
              </div>
            </div>

            {/*
            Contact form — re-enable when backend (Formspree / GHL) is connected

            <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              ... name, email, phone, message fields ...
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Direct Contact
              </h3>
              <p className="mt-2 text-sm text-muted">
                Prefer email or a quick message? Reach out directly or connect on
                social.
              </p>
              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                  aria-label="Upwork"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
