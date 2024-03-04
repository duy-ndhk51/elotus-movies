import { useSignals } from '@preact/signals-react/runtime';
import React from 'react';

import { currentMovieID } from '@/stores/movies';

import Content from './Content';
import Overlay from './Overlay';
import styles from './styles.module.scss';

const DetailedMovieContainer = () => {
  useSignals();
  if (!currentMovieID.value) return null;
  return (
    <div className={styles.detailedMovie}>
      <Content movieID={currentMovieID.value} />
      <Overlay />
    </div>
  );
};

export default DetailedMovieContainer;
