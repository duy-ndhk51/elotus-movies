import { ELanguage } from './language';

export const enum EMovieType {
  NowPlaying = 'now_playing',
  TopRated = 'top_rated',
}

export const mapMovieTypeToParams: {
  [key in EMovieType]: Record<string, any>;
} = {
  [EMovieType.NowPlaying]: {
    with_release_type: '2|3',
    'release_date.gte': '{min_date}',
    'release_date.lte': '{max_date}',
    page: 1,
    include_adult: false,
    include_video: false,
    language: ELanguage.EN,
    sort_by: 'popularity.desc',
  },
  [EMovieType.TopRated]: {
    include_adult: false,
    include_video: false,
    language: ELanguage.EN,
    page: 1,
    sort_by: 'vote_average.desc',
    without_genres: '99,10755',
    'vote_count.gte': 200,
  },
};
