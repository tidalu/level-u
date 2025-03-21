'use client';

import { lazy } from 'react';
const Footer = lazy(() => import('@/components/footer'));
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/LanguageContext';
import { ToastContainer } from 'react-toastify';
import Call from '@/components/Call';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div>
        <div className="mx-auto h-full w-full">
          <ThemeProvider attribute="class" defaultTheme="light">
            <LanguageProvider>
              <Header />
              {children}
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <Call />
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
};

export default LandingLayout;
