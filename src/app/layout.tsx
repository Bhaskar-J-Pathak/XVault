import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XVault — X Growth for Developers",
  description: "AI-powered X growth with a BYOK model. Bring your own API key, pay a flat platform fee, and keep full control over your costs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
