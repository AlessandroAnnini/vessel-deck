import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

// interface RequestProps {
//   query: {
//     id: string;
//     entity: string;
//   };
//   body: any;
// }

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { entity, id } = req.query;
  // const data = req.body;

  const {
    query: { entity },
    body: data,
  } = req;

  console.log('entity', entity);
  console.log('data', data);

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
    console.log('GET', data);
    const id = req.query.id as string;
    if (!id) return res.status(400).json({ error: 'Missing id' });

    // @ts-ignore
    result = await db[e].findUnique({
      where: { id },
    });
  }

  res.status(200).json(result);
}
