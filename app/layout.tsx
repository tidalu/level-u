import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import AnimatedTitle from '@/components/AnimatedTitle';
import Script from 'next/script';

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
        <link rel="preload" href="/logo.svg" as="image/svg+xml"></link>
        <link
          rel="preload"
          href="/mobile_home-banner.webp"
          as="image/webp"
        ></link>
        <link
          rel="preload"
          href="/english-flag-icon-rect.svg'"
          as="image/svg+xml"
        ></link>
        <link
          rel="preload"
          href="/uzbekistan-flag-rect-circle-icon.svg"
          as="image/svg+xml"
        ></link>
        <link
          rel="preload"
          href="/russia-flag-icon-rect.svg"
          as="image/svg+xml"
        ></link>

        {/* Google Tag Manager (GTM) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NF2LBW2C');
            `,
          }}
        />
      </head>
      <body className={helvetica.className}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF2LBW2C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF2LBW2C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
        <AnimatedTitle />
        {children}
      </body>
    </html>
  );
}
