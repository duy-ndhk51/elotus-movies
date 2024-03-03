import type { NextApiRequest, NextApiResponse } from 'next';

import { ELanguage } from '@/constants/language';
import { APIRouting } from '@/constants/routing';
import type { Movie } from '@/interfaces/movies';
import APIError from '@/utils/api-error';
import errorHandler from '@/utils/error-handler';
import { api } from '@/utils/server';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { ID } = req.query;
  if (req.method === 'GET') {
    const { data: movie } = await api.get<Movie>(`/${APIRouting.movie}/${ID}`, {
      params: {
        language: ELanguage.EN,
      },
    });
    return res.status(200).json(movie);
  }

  throw new APIError('Method not allowed', 405);
}

export default errorHandler(handle);
