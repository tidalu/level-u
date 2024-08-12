'use client';
import Categories from '@/components/categories';
import YesMove from '@/components/yes-move';
import LandingBanner from '@/components/landing-banner';
import Offer from '@/components/offer';
import PopulaActivities from '@/components/popula-activities';
import Call from '@/components/Call';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';

const LandingPage = () => {
  return (
    <div className="h-full max-w-[1920px] max-w-sc  mx-auto ">
      {/* landing banner */}
      <LandingBanner />
      <Call />
      <div className=" max-w-[1600px] mx-auto reveal">
        {/* offer */}
        <Offer />
        {/* available clubs */}
        <section>
          <div className="my-16 px-3 lg:px-16 mx-auto reveal">
            <h2 className="reveal text-black dark:text-white font-bold text-2xl 2xl:text-3xl text-center">
              <ScrollAnimateWrapper>
                Classes available in our clubs
              </ScrollAnimateWrapper>
            </h2>
            <p className=" reveal text-[12px] 2xl:text-lg text-center text-gray-500  mt-4">
              <ScrollAnimateWrapper>
                Choose your favorite activities and learn more
              </ScrollAnimateWrapper>
            </p>

            <Categories />
          </div>
        </section>
        {/* popular activities */}
        <PopulaActivities />
        {/* yes2move */}
        <YesMove />
      </div>
    </div>
  );
};

export default LandingPage;
