import '@/styles/app.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import TabBar from '@/components/TabBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TabBar />
      </body>
    </html>
  );
}
