import type { FC } from 'react';

import CardList from '@/components/CardList';
import CardListSkeleton from '@/components/CardList/CardListSkeleton';
import type { MoviesResponse } from '@/interfaces/movies';

import styles from './styles.module.scss';

interface IListView {
  isLoading: boolean;
  movies?: MoviesResponse;
}

const ListView: FC<IListView> = ({ isLoading, movies }) => {
  return (
    <section className={styles.listView}>
      {isLoading
        ? Array.from({ length: 20 }).map(() => (
            <CardListSkeleton key={Math.random()} />
          ))
        : movies?.results.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
              vote_count,
              overview,
            }) => (
              <CardList
                key={id}
                title={title}
                overview={overview}
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

export default ListView;
