import type { Metadata } from 'next';
import { Montserrat, Londrina_Outline } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const londriaSketch = Londrina_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina-sketch',
});

const helvetica = localFont({
  src: './fonts/helveticaneue-medium.woff2',
  display: 'swap',
  variable: '--font-helvetica',
});
const inter = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Level Learning Center',
  description: 'The place where anything is possible to learn',
  keywords:
    'education, learning, online courses, e-learning, tutorials, level-edu',
  authors: [
    {
      name: 'Level Education Center',
    },
  ],
  robots: 'index, follow ',
  openGraph: {
    type: 'website',
    url: 'https://www.level-edu.uz',
    title: 'Level Learning Center',
    description: 'The place where anything is possible to learn',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Level Learning Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    title: 'Level Learning Center',
    description: 'The place where anything is possible to learn',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Level Learning Center',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description || ''} />
        <meta name="keywords" content={String(metadata.keywords) || ''} />
        <title>{String(metadata.title)}</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={helvetica.className}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
