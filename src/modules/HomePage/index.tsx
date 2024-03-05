'use client';

import { type ReactElement, Suspense } from 'react';

import DetailedMovieContainer from '@/components/DetailedMovie';
import Heading from '@/components/Heading';

import CardsContainer from './CardsContainer';
import styles from './styles.module.scss';

export default function HomePage(): ReactElement {
  return (
    <Suspense>
      <div className={styles.container}>
        <Heading />
        <CardsContainer />
        <DetailedMovieContainer />
      </div>
    </Suspense>
  );
}
