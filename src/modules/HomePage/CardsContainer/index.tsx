import Card from '@/components/Card';
import CardSkeleton from '@/components/Card/CardSkeleton';
import { useCurrentParams } from '@/hooks/useCurrentParams';
import useMovies from '@/hooks/useMovies';

import styles from './styles.module.scss';

const CardsContainer = () => {
  const { currentPage, currentType, currentKeyword } = useCurrentParams();
  const { movies, isLoading } = useMovies(
    currentPage,
    currentType,
    currentKeyword,
  );

  return (
    <section className={styles.cardsContainer}>
      {isLoading
        ? Array.from({ length: 20 }).map(() => <CardSkeleton />)
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

export default CardsContainer;
