import { useCurrentParams } from '@/hooks/useCurrentParams';
import useMovies from '@/hooks/useMovies';

import SwitchView from '../SwitchView';

const CardsContainer = () => {
  const { currentPage, currentType, currentKeyword } = useCurrentParams();
  const { movies, isLoading } = useMovies(
    currentPage,
    currentType,
    currentKeyword,
  );

  return <SwitchView movies={movies} isLoading={isLoading} />;
};

export default CardsContainer;
