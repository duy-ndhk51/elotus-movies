import client from './client';

async function axiosFetcher<R = any, P = any>(
  url: string,
  params: P,
): Promise<R> {
  const response = await client.get<R>(url, { params });
  return response.data;
}

export { axiosFetcher };
