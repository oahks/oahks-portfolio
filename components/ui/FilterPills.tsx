"use client";

import { cn } from "@/lib/utils";

type FilterPillsProps<T extends string> = {
  options: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
  className?: string;
};

export function FilterPills<T extends string>({
  options,
  active,
  onChange,
  className,
}: FilterPillsProps<T>) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
            active === option.id
              ? "bg-accent text-white shadow-lg shadow-accent/25"
              : "glass text-muted hover:text-foreground hover:bg-card-hover"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
