'use client';
import Categories from '@/components/categories';
import LandingBanner from '@/components/landing-banner';
import Offer from '@/components/offer';
import PopulaActivities from '@/components/popula-activities';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { PreferenceDialog } from '@/components/PreferenceDialog';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const LandingPage = () => {
  // Initialize savedShow using cookies instead of localStorage
  let savedShow = Cookies.get('showPreference') === 'true';

  const [show, setShow] = useState(savedShow || false);

  useEffect(() => {
    setShow(savedShow);
  }, [savedShow]);

  const data = useLocalizedData();

  return (
    <div className="h-full max-w-[1920px] max-w-sc mx-auto">
      <ScrollAnimateWrapper>
        {/* landing banner */}
        <LandingBanner />
      </ScrollAnimateWrapper>
      {!show && <PreferenceDialog />}
      <div className="max-w-[1600px] mx-auto reveal">
        {/* offer */}
        <Offer />
        {/* availability */}
        <section>
          <div className="my-16 px-3 lg:px-16 mx-auto reveal">
            <h2 className="reveal text-black dark:text-white font-bold text-2xl 2xl:text-3xl text-center">
              {data?.classPage?.homeContent?.title}
            </h2>
            <p className="reveal text-[12px] 2xl:text-lg text-center text-gray-500 mt-4">
              {data?.classPage?.homeContent?.subtitle}
            </p>

            <Categories />
          </div>
        </section>
        {/* popular activities */}
        <PopulaActivities />
      </div>
    </div>
  );
};

export default LandingPage;
