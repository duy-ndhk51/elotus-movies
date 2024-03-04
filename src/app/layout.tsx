import '@/styles/app.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import CacheProvider from 'react-inlinesvg/provider';

import TabBar from '@/components/TabBar';

const poppins = Poppins({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});

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
      <body className={poppins.className}>
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
