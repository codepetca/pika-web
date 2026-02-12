import FadeInSection from "@/components/FadeInSection";
import { CheckCircle2, Laptop2, PlayCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-start gap-5 px-6 py-6 md:py-10">
      <FadeInSection className="w-full rounded-card border border-border bg-surface p-8 shadow-elevated md:p-12">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Pika Classroom</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">Learning simplified.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://app.pika.school/login"
            className="rounded-control bg-primary px-5 py-2.5 text-sm font-medium text-text-inverse transition hover:bg-primary-hover"
          >
            Get Started
          </a>
          <a
            href="mailto:info@codepet.ca"
            className="rounded-control border border-border px-5 py-2.5 text-sm font-medium text-text-default transition hover:bg-surface-hover"
          >
            Contact
          </a>
        </div>
      </FadeInSection>

      <FadeInSection delayMs={80} className="w-full border border-transparent bg-transparent p-7 shadow-none md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What is Pika Classroom?</h2>
        <p className="mt-3 max-w-3xl text-base text-text-muted">
          Pika Classroom is a modern classroom for learning across online and in-person classes, built to keep teachers
          and students aligned with less friction.
        </p>

        <ul className="mt-6 grid gap-3 text-sm md:grid-cols-2">
          <li className="flex items-start gap-3 rounded-control border border-border bg-surface-2 p-3 text-text-muted">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            Daily check-ins with clear attendance visibility.
          </li>
          <li className="flex items-start gap-3 rounded-control border border-border bg-surface-2 p-3 text-text-muted">
            <Laptop2 size={18} className="mt-0.5 shrink-0 text-primary" />
            Works smoothly for online and in-person classes.
          </li>
          <li className="flex items-start gap-3 rounded-control border border-border bg-surface-2 p-3 text-text-muted">
            <Users size={18} className="mt-0.5 shrink-0 text-primary" />
            Designed for both teacher workflow and student ease.
          </li>
          <li className="flex items-start gap-3 rounded-control border border-border bg-surface-2 p-3 text-text-muted">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            Minimal setup and consistent classroom routines.
          </li>
        </ul>
      </FadeInSection>

      <FadeInSection delayMs={160} className="w-full rounded-card border border-border bg-transparent p-7 shadow-elevated md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Tutorials and quick-start guides</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-control border border-border px-5 py-2.5 text-sm font-medium text-text-default transition hover:bg-surface-hover"
            aria-disabled="true"
          >
            <PlayCircle size={16} />
            Watch Tutorial (Soon)
          </a>
        </div>
      </FadeInSection>
    </main>
  );
}
