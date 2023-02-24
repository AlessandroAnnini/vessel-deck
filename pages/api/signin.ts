import { comparePasswords, createJWT } from '@/lib/auth';
import { db } from '@/lib/db';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const cookieName = process.env.COOKIE_NAME || '';

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    console.log(req.body.password, user?.password);
    const isUser = await comparePasswords(req.body.password, user!?.password);

    if (isUser) {
      const jwt = await createJWT(user);

      res.setHeader(
        'Set-Cookie',
        serialize(cookieName, jwt, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
      );
      res.status(201).json({});
    }
    res.status(401).json({});
  } else {
    res.status(402).json({});
  }
}
