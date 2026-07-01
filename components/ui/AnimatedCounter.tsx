"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export function AnimatedCounter({
  value,
  suffix = "+",
  prefix = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest).toString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
