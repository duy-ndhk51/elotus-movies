import { useSignals } from '@preact/signals-react/runtime';
import type { MouseEventHandler } from 'react';

import { currentMovieID, useMoviesSignal } from '@/stores/movies';

import Content from './Content';
import styles from './styles.module.scss';

const DetailedMovieContainer = () => {
  useSignals();
  const { clearMovieID, DOMRemoveDisableScroll } = useMoviesSignal();
  if (!currentMovieID.value) return null;

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    clearMovieID();
    DOMRemoveDisableScroll();
  };

  return (
    <div className={styles.detailedMovie} onClick={handleClick}>
      <div className={styles.detailedMovie__dialog}>
        <Content movieID={currentMovieID.value} />
      </div>
    </div>
  );
};

export default DetailedMovieContainer;
