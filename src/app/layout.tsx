import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Delegate Co.',
  description: 'The Delegate Co.',
  icons: {
    icon: '/the-delegate-co-logo.png',
    shortcut: '/the-delegate-co-logo.png',
    apple: '/the-delegate-co-logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

