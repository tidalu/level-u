'use client';

import { useEffect } from 'react';
import Context from '@/components/context';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import useScrollReveal from '@/app/hooks/useScrollReveal';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  // Ensure useScrollReveal is called at the top level of the component
  useScrollReveal();

  return (
    <main>
      <div>
        <div className="mx-auto h-full w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Context>
              <Header />
              {children}
              <Footer />
            </Context>
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
};

export default LandingLayout;
