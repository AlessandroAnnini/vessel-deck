import { Inter, Outfit } from 'next/font/google';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  display: 'swap',
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="bg-neutral-800">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
