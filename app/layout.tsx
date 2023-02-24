import { Inter, Outfit } from 'next/font/google';
import AuthJs from '@/components/AuthJs';
import './globals.css';

import type { Session } from 'next-auth';

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session;
}

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  display: 'swap',
});

const RootLayout: React.FC<RootLayoutProps> = ({ children, session }) => {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthJs session={session}>{children}</AuthJs>
      </body>
    </html>
  );
};

export default RootLayout;
