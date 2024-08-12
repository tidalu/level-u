'use client';

import { useEffect } from 'react';
import Context from '@/components/context';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/LanguageContext';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div>
        <div className="mx-auto h-full w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LanguageProvider>
              <Header />
              {children}
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
};

export default LandingLayout;
