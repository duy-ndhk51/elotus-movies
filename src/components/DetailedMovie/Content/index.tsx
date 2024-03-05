'use client';

import { isAxiosError } from 'axios';
import type { FC } from 'react';
import { useEffect } from 'react';
import useSWR from 'swr';

import { APIRouting } from '@/constants/routing';
import type { MovieDetailsResponse } from '@/interfaces/movies';
import { useMoviesSignal } from '@/stores/movies';
import { useToastSignal } from '@/stores/toast';
import { axiosFetcher } from '@/utils/fetcher';

import Movie from './Movie';
import Skeleton from './Skeleton';

interface IContentProps {
  movieID: string;
}

const Content: FC<IContentProps> = ({ movieID }) => {
  const { DOMAddDisableScroll, DOMRemoveDisableScroll } = useMoviesSignal();
  const { enableToast } = useToastSignal();
  const { data: movie, isLoading } = useSWR<MovieDetailsResponse>(
    `/${APIRouting.movie}/${movieID}`,
    axiosFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onError(err) {
        if (isAxiosError(err)) {
          enableToast(err.response?.data?.message || err.message);
        } else {
          enableToast('An error occurred');
        }
      },
    },
  );

  useEffect(() => {
    DOMAddDisableScroll();
    return () => {
      DOMRemoveDisableScroll();
    };
  }, []);
  if (!movie || isLoading) return <Skeleton />;
  return <Movie movie={movie} />;
};

export default Content;
