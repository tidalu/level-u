'use client';
import dynamic from 'next/dynamic';
import { data } from '@/data';
import Image from 'next/image';
import ExpandableText from '@/components/ExpandableText';

import React, { useEffect } from 'react';

import aboutImg from '@/public/about-main.jpeg';
import { InfiniteMovingCards } from '@/components/InfiniteMovingCards';

const AboutPage = () => {
  const reasons = Object.values(data.reasons);

  useEffect(() => {
    console.log(reasons);
  }, [reasons]);

  return (
    <div className="h-full max-w-[1900px] mx-auto">
      <div className="min-h-[800px] flex flex-col items-center  justify-center pt-32 pb-12 rounded-b-3xl px-3 lg:px-16 border-red-700">
        <div className=" relative rounded-2xl overflow-hidden  lg:h-[450px] grid grid-cols-12 bg-white  dark:bg-[#020817]  my-4 lg:my-10">
          <div className=" relative col-span-12 reveal lg:col-span-7 xl:col-span-8  flex xl:justify-end justify-center items-center overflow-hidden ">
            <div className="rounded-xl bg-slate-50">
              <Image
                src={aboutImg}
                width={0}
                height={0}
                alt="about image"
                className="object-contain rounded-xl "
              />
            </div>
          </div>{' '}
          <div
            className=" text-gray-600 dark:text-gray-400  py-4 px-10 col-span-12 lg:col-span-5 xl:col-span-4 overflow-y-scroll self-start"
            style={{
              // hide scrollbar
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <p className="text-[#1d75c7] text-lg reveal">About us</p>
            <h1 className="reveal text-xl sm:text-2xl mt-1 mb-4 text-[#69af49] font-extrabold">
              Who we are and what you <br /> get from our spaces
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
              {data.about}
            </p>
          </div>{' '}
        </div>
        {/* accordion for top reasons to study */}
        <div className="reveal  w-full h-auto px-10">
          <div className="w-full flex justify-center items-center my-4">
            <h2 className=" text-black dark:text-white font-extrabold text-2xl text-center">
              Why you should study at LevelEdu!
            </h2>
          </div>
          <InfiniteMovingCards
            items={data.reasons}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
