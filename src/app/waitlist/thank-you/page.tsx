import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        X<span className="text-[var(--primary)]">Vault</span>
      </h1>
      <p className="text-2xl font-semibold mb-3">You&apos;re on the list.</p>
      <p className="text-[var(--muted-foreground)] text-lg mb-8 text-center max-w-md">
        We&apos;ll reach out when XVault is ready.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}
