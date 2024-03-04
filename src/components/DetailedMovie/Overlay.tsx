import type { FC } from 'react';
import React from 'react';

import { useMoviesSignal } from '@/stores/movies';

import styles from './styles.module.scss';

const Overlay: FC = () => {
  const { clearMovieID, DOMRemoveDisableScroll } = useMoviesSignal();

  return (
    <div
      className={styles.detailedMovie__overlay}
      onClick={() => {
        clearMovieID();
        DOMRemoveDisableScroll();
      }}
    />
  );
};

export default Overlay;
