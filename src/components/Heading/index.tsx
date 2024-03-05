import React from 'react';

import { EMovieType } from '@/constants/movie';
import { useCurrentParams } from '@/hooks/useCurrentParams';

import styles from './styles.module.scss';

const Heading = () => {
  const { currentType, currentKeyword } = useCurrentParams();

  return (
    <div className={styles.heading__container}>
      <h2 className={styles.heading}>
        {currentType === EMovieType.All && `Keyword: ${currentKeyword}`}
        {currentType === EMovieType.NowPlaying && 'Now Playing'}
        {currentType === EMovieType.TopRated && 'Top Rated'}
      </h2>
    </div>
  );
};

export default Heading;
