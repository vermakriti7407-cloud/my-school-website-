import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-12 opacity-50", className)}>
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-secondary"></div>
      <div className="mx-4 text-secondary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
      </div>
      <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-secondary"></div>
    </div>
  );
}