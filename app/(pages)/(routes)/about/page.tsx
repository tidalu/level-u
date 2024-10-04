'use client';
import React from 'react';
import { useLocalizedData } from '@/lib/useLocalizedData';
import InfiniteMovingCards from '@/components/InfiniteMovingCards';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';


const AboutPage = () => {
  const data = useLocalizedData();

  return (
    <React.Fragment>
      <div className="h-auto max-w-[1900px] mx-auto ">
        <ScrollAnimateWrapper>
          <div className="min-h-[800px] h-auto flex flex-col items-center  justify-center pt-32 pb-12 rounded-b-3xl px-3 lg:px-16 ">
            <div className=" relative rounded-2xl   h-auto  grid grid-cols-12 bg-white  dark:bg-[#020817]  my-4 lg:my-10">
              <div className=" relative col-span-12 reveal rounded-xl lg:col-span-7 xl:col-span-8 h-[300px] lg:h-auto flex xl:justify-end justify-center items-center overflow-hidden bg-slate-200">
                {/* video */}
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                >
                  <source src="/video/about-page.mp4" type="video/mp4"
                  aria-description='Level learning center main content video'
                  />
                </video>
                <span className="  absolute top-4 -left-[25%] md:-left-[30%] xl:-left-[35%] flex w-full justify-center items-center">
                  <p className=" text-center before:contents apply-font-o   mx-auto py-2 px-4 relative rounded-xl z-10 text-wrap w-auto text-with-blur">
                    {data?.about?.motto.split(',')[0]}
                    <br />
                    {data?.about?.motto.split(',')[1]}
                  </p>
                </span>
              </div>{' '}
              <div
                className=" text-gray-600  dark:text-gray-400  py-4 px-10 col-span-12 h-auto lg:col-span-5 
               overflow-y-clip xl:col-span-4  self-start"
              >
                <p className="apply-font-o dark:text-slate-200 text-gray-800 text-lg reveal">
                  {data?.about?.topText}
                </p>
                <h1 className="reveal text-xl text-wrap sm:text-2xl mt-1 mb-4 text-[#69af49] font-extrabold">
                  {data?.about?.title}
                </h1>

                <p
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  className="text-sm reveal  m-1  py-2"
                >
                  {data?.about?.description}
                </p>
              </div>{' '}
            </div>
            <div className="  w-full h-auto px-10">
              <div className="w-full flex justify-center items-center my-4">
                <h2 className=" text-black dark:text-white font-extrabold text-2xl text-center h-auto">
                  {data?.about?.why}
                </h2>
              </div>
            </div>
          </div>
        </ScrollAnimateWrapper>
      </div>
      <div className="mx-5 mb-10">
        <InfiniteMovingCards
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="w-full mx-auto"
        />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
