import type { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export default function FadeInSection({ children, delayMs = 0, className = "" }: FadeInSectionProps) {
  return (
    <section
      className={`fade-in-section ${className}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </section>
  );
}
