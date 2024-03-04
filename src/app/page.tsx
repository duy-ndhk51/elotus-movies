import type { Metadata } from 'next';

import HomePage from '@/modules/HomePage';

export const metadata: Metadata = {
  title: 'Movies',
  description:
    'Movies is a modern web application that lets you discover new movies, and find information about your favorite movies',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Movies',
    description:
      'Movies is a modern web application that lets you discover new movies, and find information about your favorite movies',
    images: [
      {
        url: `/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: `Movies`,
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
