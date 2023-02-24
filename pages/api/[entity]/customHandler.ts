import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';s

export const customHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { entity },
    body: data,
  } = req;

  // @ts-ignore
  const e = entity.toLowerCase();
  let result;

  if (req.method === 'POST') {
    // @ts-ignore
    result = await db[e].create({ data });
  } else if (req.method === 'PUT') {
    // @ts-ignore
    result = await db[e].update({
      where: { id: data.id },
      data,
    });
  } else if (req.method === 'DELETE') {
    // @ts-ignore
    result = await db[e].delete({
      where: { id: data.id },
    });
  } else {
    const id = req.query.id as string;
    if (!id) {
      // @ts-ignore
      result = await db[e].findMany();
    } else {
      // @ts-ignore
      result = await db[e].findUnique({
        where: { id },
      });
    }
  }

  res.status(200).json(result);
};
