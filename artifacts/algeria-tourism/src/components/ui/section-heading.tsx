import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      {subtitle && (
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-foreground">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-secondary mt-6", align === "center" && "mx-auto")} />
    </div>
  );
}
