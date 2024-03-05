import type { FC } from 'react';
import React from 'react';

import Card from '@/components/Card';
import CardSkeleton from '@/components/Card/CardSkeleton';
import type { MoviesResponse } from '@/interfaces/movies';

import styles from './styles.module.scss';

interface IGridView {
  isLoading: boolean;
  movies?: MoviesResponse;
}

const GridView: FC<IGridView> = ({ isLoading, movies }) => {
  return (
    <section className={styles.gridView}>
      {isLoading
        ? Array.from({ length: 20 }).map(() => (
            <CardSkeleton key={Math.random()} />
          ))
        : movies?.results.map(
            ({ id, title, poster_path, vote_average, vote_count }) => (
              <Card
                key={id}
                title={title}
                id={id}
                thumbnail={poster_path}
                rating={vote_average}
                voteCount={vote_count}
              />
            ),
          )}
    </section>
  );
};

export default GridView;
