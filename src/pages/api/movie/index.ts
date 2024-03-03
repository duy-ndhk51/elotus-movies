import type { NextApiRequest, NextApiResponse } from 'next';

import { ELanguage } from '@/constants/language';
import { EMovieType } from '@/constants/movie';
import type { MoviesResponse } from '@/interfaces/movies';
import APIError from '@/utils/api-error';
import errorHandler from '@/utils/error-handler';
import { api } from '@/utils/server';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { type, page } = req.query;

  if (
    typeof type !== 'string' ||
    !type ||
    ![EMovieType.NowPlaying, EMovieType.TopRated].includes(type as EMovieType)
  ) {
    throw new APIError('Movie type is not valid', 400);
  }

  if (req.method === 'GET') {
    const { data } = await api.get<MoviesResponse>(`/movie/${type}`, {
      params: {
        page: typeof page === 'string' ? page : 1,
        language: ELanguage.EN,
      },
    });

    return res.status(200).json(data);
  }

  throw new APIError('Method not allowed', 405);
}

export default errorHandler(handle);
