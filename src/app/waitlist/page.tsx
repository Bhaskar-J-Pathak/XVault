'use client';

import { useActionState } from 'react';
import { joinWaitlist } from './actions';

export default function WaitlistPage() {
  const [state, action, pending] = useActionState(joinWaitlist, null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        X<span className="text-[var(--primary)]">Vault</span>
      </h1>
      <p className="text-[var(--muted-foreground)] text-lg mb-8 text-center max-w-md">
        Be the first to get access.
      </p>
      <form action={action} className="flex flex-col items-center gap-3 w-full max-w-sm">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
        {state?.error && (
          <p className="text-red-500 text-sm self-start">{state.error}</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full px-6 py-3 bg-[var(--primary)] text-black rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {pending ? 'Joining…' : 'Join the Waitlist'}
        </button>
      </form>
    </main>
  );
}
