import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  icon?: ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  icon,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className={cn("inline-flex items-center gap-3 mb-4", align === "center" ? "justify-center w-full" : "w-full")}>
        <span className="text-secondary font-semibold tracking-widest uppercase text-xs flex items-center gap-2">
          {icon && (
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              {icon}
            </div>
          )}
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg font-light leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}