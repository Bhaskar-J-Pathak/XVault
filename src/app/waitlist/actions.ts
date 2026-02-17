'use server';

import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import { createAdminClient } from '@/lib/supabase-server';

export type ActionState = { error: string } | null;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get('email')?.toString().trim() ?? '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from('waitlist_signups')
    .insert({ email });

  const isDuplicate = error?.code === '23505';

  if (error && !isDuplicate) {
    return { error: 'Something went wrong. Please try again.' };
  }

  // Only send confirmation email for new signups
  if (!isDuplicate) {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'XVault <noreply@xvault.com>',
      to: email,
      subject: "You're on the XVault waitlist",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0a0a0a;color:#fafafa;border-radius:12px;">
          <h1 style="font-size:28px;font-weight:700;margin:0 0 8px;">X<span style="color:#1d9bf0;">Vault</span></h1>
          <h2 style="font-size:20px;font-weight:600;margin:24px 0 8px;">You're on the list.</h2>
          <p style="color:#a1a1aa;margin:0 0 24px;">We'll reach out as soon as XVault is ready. Stay tuned.</p>
          <p style="color:#52525b;font-size:13px;margin:0;">You're receiving this because you signed up at xvault.com.</p>
        </div>
      `,
    }).catch(() => {
      // Non-fatal — don't block the redirect if email sending fails
    });
  }

  redirect('/waitlist/thank-you');
}
