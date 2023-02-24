import { NextApiRequest, NextApiResponse } from 'next';
import { customHandler } from './customHandler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return customHandler(req, res);
}
