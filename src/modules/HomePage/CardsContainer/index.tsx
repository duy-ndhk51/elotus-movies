import useSWR from 'swr';

import Card from '@/components/Card';
import { EMovieType } from '@/constants/movie';
import { APIRouting } from '@/constants/routing';
import type { MoviesResponse } from '@/interfaces/movies';
import { axiosFetcher } from '@/utils/fetcher';

import styles from './styles.module.scss';

const CardsContainer = () => {
  const { data: movies } = useSWR<MoviesResponse>(
    [
      `/${APIRouting.movie}`,
      {
        type: EMovieType.TopRated,
      },
    ],
    ([url, params]: [string, any]) => axiosFetcher(url, params),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  return (
    <section className={styles.cardsContainer}>
      {movies?.results.map(
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

export default CardsContainer;