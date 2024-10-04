import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import AnimatedTitle from '@/components/AnimatedTitle';
import Script from 'next/script'; // Importing Script for GA

const helvetica = localFont({
  src: './fonts/helveticaneue-medium.woff2',
  display: 'swap',
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Level Learning Center',
  description: 'The place where anything is possible to learn',
  keywords:
    'education, learning, online courses, e-learning, tutorials, level-edu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preload" href="/logo.svg" as="image/svg+xml" />
        <link rel="preload" href="/mobile_home-banner.webp" as="image/webp" />
        <link
          rel="preload"
          href="/english-flag-icon-rect.svg'"
          as="image/svg+xml"
        />
        <link
          rel="preload"
          href="/uzbekistan-flag-rect-circle-icon.svg"
          as="image/svg+xml"
        />
        <link
          rel="preload"
          href="/russia-flag-icon-rect.svg"
          as="image/svg+xml"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1DHN2YB2PL`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1DHN2YB2PL');
            `,
          }}
        />
      </head>
      <body className={helvetica.className}>
        {process.env.NODE_ENV === 'production' && (
          <React.Fragment> 
            <SpeedInsights />
            <Analytics />
          </React.Fragment>
        )}
        <AnimatedTitle />
        {children}
      </body>
    </html>
  );
}
