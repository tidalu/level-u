import type { Metadata } from 'next';
import { Montserrat, Londrina_Outline } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

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
  title: 'fitfabric',
  description: 'your fitness club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  );
}
