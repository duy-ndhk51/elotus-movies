import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import APIError from './api-error';

export default function errorHandler(
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<any>,
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await fn(req, res);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        res
          .status(error.response!.status)
          .json({ statusCode: error.response!.status, message: error.message });
        return;
      }
      if (error instanceof APIError) {
        res
          .status(error.statusCode)
          .json({ statusCode: error.statusCode, message: error.message });
        return;
      }
      res.status(500).json({ statusCode: 500, message: String(error) });
    }
  };
}
