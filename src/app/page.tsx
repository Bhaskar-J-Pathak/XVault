import Link from "next/link";
import { LaserFlowHero } from "@/components/ui/LaserFlowHero";

const differentiators = [
  {
    title: "Bring Your Own API Key",
    body: "Connect your own X developer credentials. You pay X directly for API usage — no hidden markup, no middleman. We never store your keys.",
  },
  {
    title: "Flat Platform Fee",
    body: "One monthly fee covers the platform, AI features, and infrastructure. Your API costs are entirely separate and stay between you and X.",
  },
  {
    title: "Full Spending Visibility",
    body: "Weekly digest emails give you a rough estimate of your API credit usage. Low-balance warnings fire before you hit a wall.",
  },
];

const steps = [
  {
    n: "01",
    title: "Add your X API key",
    body: "Connect your developer app credentials. They're used in-session only — never written to disk or stored on our servers.",
  },
  {
    n: "02",
    title: "Let the AI work",
    body: "Smart scheduling, content suggestions, and deep analytics run on top of your own API quota.",
  },
  {
    n: "03",
    title: "Stay in control",
    body: "Weekly usage reports estimate your spend. Low-credit alerts keep disruptions from sneaking up on you.",
  },
];

const included = [
  "AI-powered scheduling & content suggestions",
  "Deep analytics dashboard",
  "Weekly API credit usage estimates",
  "Low-balance warnings before you run out",
  "Your API key is never stored — ever",
];

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center">
        <LaserFlowHero />

        {/* Text pushed to upper portion — leaves beam-glow space at the bottom */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-20 md:pt-28 pb-[28vh]">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted-foreground)] text-sm mb-6 md:mb-8">
              Built for developers who want control
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-5 md:mb-6 leading-[1.05]">
              X<span className="text-[var(--primary)]">Vault</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] mb-4 leading-relaxed">
              The X growth platform with a{" "}
              <span className="text-[var(--foreground)] font-semibold">BYOK model</span>.
              Bring your own API key, pay a flat platform fee, and keep full
              control over your costs.
            </p>

            <p className="text-[var(--muted-foreground)] mb-8 md:mb-10 max-w-md text-sm sm:text-base">
              No key storage. No API markup. Just powerful AI tooling on top of
              your own credentials.
            </p>

            <Link
              href="/waitlist"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── Differentiators ── pulled up so beam tip meets the top of the cards ── */}
      <section className="relative z-10 w-full max-w-5xl px-6 sm:px-8 -mt-[120px] sm:-mt-[160px] md:-mt-[200px] pb-20 md:pb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          How it&apos;s different
        </h2>
        <p className="text-[var(--muted-foreground)] mb-10 max-w-lg text-sm sm:text-base">
          Most X growth tools charge you for API calls with a hidden markup
          baked in. XVault flips that model entirely.
        </p>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 sm:p-6"
            >
              <div className="w-2 h-2 rounded-sm bg-[var(--primary)] mb-4 sm:mb-5" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">{d.title}</h3>
              <p className="text-[var(--muted-foreground)] text-xs sm:text-sm leading-relaxed">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="w-full max-w-2xl px-6 sm:px-8 pb-20 md:pb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">How it works</h2>
        <p className="text-[var(--muted-foreground)] mb-10 text-sm sm:text-base">
          Simple setup. Total transparency.
        </p>

        <div className="flex flex-col gap-8 md:gap-10">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 md:gap-6">
              <span className="font-mono text-[var(--primary)] font-bold text-base md:text-lg shrink-0 w-8 pt-0.5">
                {s.n}
              </span>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">{s.title}</h3>
                <p className="text-[var(--muted-foreground)] text-xs sm:text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="w-full max-w-2xl px-6 sm:px-8 pb-20 md:pb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Transparent pricing</h2>
        <p className="text-[var(--muted-foreground)] mb-10 max-w-md text-sm sm:text-base">
          One flat platform fee. Your X API costs stay between you and X —
          we never touch them.
        </p>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 sm:p-8 max-w-sm">
          <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
            Platform fee
          </p>
          <p className="text-4xl font-bold mb-1">
            $19
            <span className="text-xl font-normal text-[var(--muted-foreground)]">
              /mo
            </span>
          </p>
          <p className="text-sm text-[var(--muted-foreground)] mb-7 sm:mb-8">
            + your own X API costs (paid directly to X)
          </p>

          <ul className="flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-xs sm:text-sm">
                <span className="text-[var(--primary)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="w-full max-w-2xl px-6 sm:px-8 pb-24 md:pb-32">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Your API key. Your costs. Your control.
        </h2>
        <p className="text-[var(--muted-foreground)] mb-7 sm:mb-8 text-sm sm:text-base">
          Early access is limited. Get on the list now.
        </p>
        <Link
          href="/waitlist"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          Join the Waitlist
        </Link>
      </section>

    </main>
  );
}
