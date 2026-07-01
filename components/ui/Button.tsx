"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  href?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/25",
  secondary:
    "glass hover:bg-card-hover text-foreground border border-border",
  ghost: "text-muted hover:text-foreground hover:bg-card",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer",
    variants[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
