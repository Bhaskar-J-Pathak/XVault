import Link from "next/link";
import InfiniteHero from "@/components/infinite-hero";
import { createAdminClient } from "@/lib/supabase-server";

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

export default async function Home() {
  const supabase = createAdminClient();
  const { count } = await supabase
    .from("waitlist_signups")
    .select("*", { count: "exact", head: true });

  const waitlistCount = count ?? 0;

  return (
    <main className="flex flex-col items-center overflow-x-hidden bg-black text-white">

      {/* ── Hero ── */}
      <InfiniteHero waitlistCount={waitlistCount} />

      {/* ── Differentiators ── */}
      <section className="w-full border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Why XVault
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            How it&apos;s different
          </h2>
          <p className="text-white/50 mb-14 max-w-lg text-base leading-relaxed">
            Most X growth tools charge you for API calls with a hidden markup
            baked in. XVault flips that model entirely.
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-[#0a0a0a] p-7 sm:p-8 flex flex-col gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <h3 className="font-medium text-base">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="features" className="w-full border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Setup
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-white/50 mb-14 text-base leading-relaxed">
            Simple setup. Total transparency.
          </p>

          <div className="flex flex-col gap-10">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6">
                <span className="font-mono text-blue-400 text-sm font-medium shrink-0 w-8 pt-0.5">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-medium text-base mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="w-full border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Transparent pricing
          </h2>
          <p className="text-white/50 mb-14 max-w-md text-base leading-relaxed">
            One flat platform fee. Your X API costs stay between you and X —
            we never touch them.
          </p>

          <div className="border border-white/10 rounded-2xl p-8 max-w-sm bg-white/[0.03]">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">
              Platform fee
            </p>
            <p className="text-5xl font-light tracking-tight mb-1">
              $19
              <span className="text-2xl text-white/40 ml-1">/mo</span>
            </p>
            <p className="text-sm text-white/40 mb-8">
              + your own X API costs (paid directly to X)
            </p>

            <ul className="flex flex-col gap-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 mt-0.5 text-blue-400"
                    aria-hidden
                  >
                    <path
                      d="M2 7L5.5 10.5L12 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="w-full border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24 md:py-32">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Your API key. Your costs.
            <br />
            Your control.
          </h2>
          <p className="text-white/50 mb-8 text-base leading-relaxed">
            Early access is limited. Get on the list now.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 text-sm rounded-lg font-medium tracking-wide text-white backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-white/50 hover:bg-white/15"
          >
            Join the Waitlist
          </Link>
          {waitlistCount > 0 && (
            <p className="mt-4 text-sm text-white/35">
              <span className="text-white/55">
                {waitlistCount.toLocaleString()} developers
              </span>{" "}
              already on the list
            </p>
          )}
        </div>
      </section>

    </main>
  );
}
