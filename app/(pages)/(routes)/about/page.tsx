'use client';
import { useLocalizedData } from '@/lib/useLocalizedData';
import React, { useEffect, useState } from 'react';

import { InfiniteMovingCards } from '@/components/InfiniteMovingCards';
import { useTheme } from 'next-themes';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import ThreeDTextScene from '@/components/ThreeDTextScene';

const AboutPage = () => {
  const data = useLocalizedData();
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');
  const reasons = Object.values(data.reasons);

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return (
    <>
      <div className="h-full max-w-[1900px] mx-auto">
        <ScrollAnimateWrapper>
          <div className="min-h-[800px] flex flex-col items-center  justify-center pt-32 pb-12 rounded-b-3xl px-3 lg:px-16 border-red-700">
            <div className=" relative rounded-2xl overflow-hidden  lg:h-[450px] grid grid-cols-12 bg-white  dark:bg-[#020817]  my-4 lg:my-10">
              <div className=" relative col-span-12 reveal lg:col-span-7 xl:col-span-8 h-[300px] lg:h-auto flex xl:justify-end justify-center items-center overflow-hidden bg-slate-200">
                <ThreeDTextScene />
                <span className="  absolute bottom-4 left-0 flex w-full justify-center items-center">
                  <p className=" text-center before:contents  mx-auto py-2 px-4 relative rounded-xl z-10 text-wrap w-auto text-with-blur">
                    {data.about.motto}
                  </p>
                </span>
              </div>{' '}
              <div
                className=" text-gray-600 dark:text-gray-400  py-4 px-10 col-span-12 lg:col-span-5 xl:col-span-4 overflow-y-scroll self-start"
                style={{
                  // hide scrollbar
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <p className="apply-font-o dark:text-slate-200 text-gray-800 text-lg reveal">
                  {data.about.topText}
                </p>
                <h1 className="reveal text-xl text-wrap sm:text-2xl mt-1 mb-4 text-[#69af49] font-extrabold">
                  {data.about.title}
                </h1>

                <p
                  style={{
                    maxHeight: '400px', // Adjust height as needed
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  className="text-sm reveal border-red-400 m-2 overflow-y-scroll py-5"
                >
                  {data.about.description}
                </p>
              </div>{' '}
            </div>
            <div className="  w-full h-auto px-10">
              <div className="w-full flex justify-center items-center my-4">
                <h2 className=" text-black dark:text-white font-extrabold text-2xl text-center">
                  {data.about.why}
                </h2>
              </div>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </div>
      <div className="mx-5 mb-10">
        <InfiniteMovingCards
          items={data.reasons}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="w-full mx-auto"
        />
      </div>
    </>
  );
};

export default AboutPage;
