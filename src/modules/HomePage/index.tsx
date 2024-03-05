'use client';

import { type ReactElement, Suspense } from 'react';

import DetailedMovieContainer from '@/components/DetailedMovie';
import Heading from '@/components/Heading';
import SelectView from '@/components/SelectView';
import Toast from '@/components/Toast';

import CardsContainer from './CardsContainer';
import styles from './styles.module.scss';

export default function HomePage(): ReactElement {
  return (
    <Suspense>
      <div className={styles.container}>
        <Heading />
        <SelectView />
        <CardsContainer />
        <DetailedMovieContainer />
        <Toast />
      </div>
    </Suspense>
  );
}
