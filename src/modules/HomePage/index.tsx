'use client';

import { type ReactElement, Suspense } from 'react';

import DetailedMovieContainer from '@/components/DetailedMovie';

import CardsContainer from './CardsContainer';

export default function HomePage(): ReactElement {
  return (
    <Suspense>
      <CardsContainer />
      <DetailedMovieContainer />
    </Suspense>
  );
}
