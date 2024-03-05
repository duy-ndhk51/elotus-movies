'use client';

import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

import type { EMovieType } from '@/constants/movie';
import { APIRouting } from '@/constants/routing';
import type { MoviesResponse } from '@/interfaces/movies';
import { totalPages } from '@/stores/movies';
import { useToastSignal } from '@/stores/toast';
import { axiosFetcher } from '@/utils/fetcher';

export default function useMovies(
  currentPage: number,
  currentType: EMovieType,
  keyword?: string | null,
) {
  const { enableToast } = useToastSignal();
  const {
    data: movies,
    isLoading,
    error,
  } = useSWR<MoviesResponse>(
    [
      `/${APIRouting.movie}`,
      {
        keyword,
        type: currentType,
        page: currentPage,
      },
    ],
    ([url, params]: [string, any]) => axiosFetcher(url, params),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onError(err) {
        if (isAxiosError(err)) {
          enableToast(err.response?.data?.message || err.message);
        }
      },
    },
  );

  useEffect(() => {
    if (movies?.total_pages) {
      totalPages.value = movies.total_pages;
    }
  }, [movies?.total_pages]);

  return { movies, isLoading, error };
}
