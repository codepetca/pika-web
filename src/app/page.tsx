export default function Home() {
  return (
    <main className="px-6 py-8 md:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#eadfc8] bg-[var(--surface)]/95 p-8 shadow-[0_30px_90px_-50px_rgba(29,42,58,0.4)] md:p-12">
        <section className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-end">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-[#d8c9a9] bg-[#fff4cf] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#75522f] uppercase">
              Pika for Online Classrooms
            </span>
            <h1 className="max-w-3xl text-5xl leading-tight font-semibold md:text-7xl">
              Daily check-ins that turn into clear attendance.
            </h1>
            <p className="max-w-2xl text-lg text-[var(--ink-muted)] md:text-xl">
              Pika helps teachers see who is engaged and helps students stay consistent with quick daily logs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.pika.school/login"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                Teacher Login
              </a>
              <a
                href="https://app.pika.school/login"
                className="rounded-full border border-[#d8c9a9] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[#fff6de]"
              >
                Student Login
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-[#ecd9b0] bg-[#fff7e6] p-6">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#7f6342] uppercase">Core Value</p>
            <p className="mt-2 text-2xl leading-snug font-medium">
              Less admin overhead.
              <br />
              More learning visibility.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-[#eadfc8] bg-white p-6">
            <h2 className="text-2xl font-semibold">Fast Student Flow</h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              Students submit a short daily reflection in under two minutes from desktop or mobile.
            </p>
          </article>
          <article className="rounded-3xl border border-[#eadfc8] bg-white p-6">
            <h2 className="text-2xl font-semibold">Automatic Attendance</h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              Pika converts submissions into attendance with consistent, timezone-aware deadline rules.
            </p>
          </article>
          <article className="rounded-3xl border border-[#eadfc8] bg-white p-6">
            <h2 className="text-2xl font-semibold">Teacher Dashboard</h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              Teachers can quickly spot missing entries, follow up, and keep a clear participation record.
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-3xl bg-[#1d2a3a] px-7 py-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Want Pika for your program?</h2>
            <p className="mt-2 text-sm text-[#d4dceb]">
              Reach out to see onboarding options for teachers and cohorts.
            </p>
          </div>
          <a
            href="mailto:hello@pika.school"
            className="mt-4 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#2b2213] md:mt-0"
          >
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
}
