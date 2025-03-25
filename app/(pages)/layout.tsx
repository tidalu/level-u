'use client';

import { lazy } from 'react';
const Footer = lazy(() => import('@/components/footer'));
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/LanguageContext';
import { ToastContainer } from 'react-toastify';
import Call from '@/components/Call';
import { FeedbackOwl } from '@/components/feedbackOwl';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  function handleFeedback(liked: boolean): void {
    if (liked) {
      console.log('Thank you for your positive feedback!');
    } else {
      console.log('Thank you for your feedback! We will strive to improve.');
    }
  }

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
              {/* <FeedbackOwl delayInSeconds={10} onFeedbackSubmit={handleFeedback} /> */}

            </LanguageProvider>
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
};

export default LandingLayout;
