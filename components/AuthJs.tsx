'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

interface AutJsProps {
  children: React.ReactNode;
  session: Session;
}

// http://localhost:3000/api/auth/signin

const AuthJs: React.FC<AutJsProps> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default AuthJs;
