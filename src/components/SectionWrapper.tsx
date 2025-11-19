import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  index?: number;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className={cn("size-full overflow-hidden keen-slider__slide")}>
      {children}
    </section>
  );
}