'use client';

import { type ReactElement, Suspense } from 'react';

import CardsContainer from './CardsContainer';

export default function HomePage(): ReactElement {
  return (
    <Suspense>
      <CardsContainer />
    </Suspense>
  );
}
