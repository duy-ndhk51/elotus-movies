import type { MoviesResponse } from '@/interfaces/movies';

export const enum EMovieType {
  NowPlaying = 'now_playing',
  TopRated = 'top_rated',
  All = 'all',
}

export const defaultMovieData: MoviesResponse = {
  dates: {
    maximum: '2022-12-31',
    minimum: '2022-01-01',
  },
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0,
};
