import '@/styles/app.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import CacheProvider from 'react-inlinesvg/provider';

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
        <CacheProvider>
          {children}
          <Suspense>
            <TabBar />
          </Suspense>
        </CacheProvider>
      </body>
    </html>
  );
}
