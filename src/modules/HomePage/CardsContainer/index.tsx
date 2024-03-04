import Card from '@/components/Card';
import { useCurrentParams } from '@/hooks/useCurrentParams';
import useMovies from '@/hooks/useMovies';

import styles from './styles.module.scss';

const CardsContainer = () => {
  const { currentPage, currentType } = useCurrentParams();
  const { movies } = useMovies(currentPage, currentType);

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
