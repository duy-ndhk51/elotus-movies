import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { EMovieType } from '@/constants/movie';

export function useCurrentParams() {
  const currentParams = useSearchParams();
  const currentPage = useMemo(() => {
    const page = Number(currentParams?.get('page'));
    return !Number.isNaN(page) && page !== 0 ? page : 1;
  }, [currentParams]);

  const currentType = useMemo(() => {
    const movieType = currentParams?.get('type');
    return !movieType ? EMovieType.NowPlaying : (movieType as EMovieType);
  }, [currentParams]);

  return { currentPage, currentType };
}
