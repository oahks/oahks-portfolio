"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, CheckCircle2 } from "lucide-react";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendlyInlineEmbed } from "@/components/ui/CalendlyInlineEmbed";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

const inputClassName =
  "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honeypot")) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Submission failed");
      }

      setSubmitted(true);
      form.reset();
      toast({
        variant: "success",
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        variant: "error",
        title: "Couldn't send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or email directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

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
            {submitted ? (
              <div className="glass flex flex-col items-center rounded-2xl p-8 text-center sm:p-10">
                <CheckCircle2 className="mb-4 h-12 w-12 text-accent" />
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass space-y-4 rounded-2xl p-6 sm:p-8"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Send a Message
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Tell me about your project and I&apos;ll respond promptly.
                  </p>
                </div>

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClassName} resize-none`}
                  />
                </div>

                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
