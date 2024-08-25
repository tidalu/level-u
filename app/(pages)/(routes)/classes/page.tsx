'use client';

import { useLocalizedData } from '@/lib/useLocalizedData';
import Categories from '@/components/categories';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';

const ClassesPage = () => {
  const data = useLocalizedData();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="h-full max-w-[1900px] mx-auto ">
      <ScrollAnimateWrapper>
        <div className="homeBanner pt-32 pb-12 rounded-b-3xl px-3 lg:px-16">
          <div className=" reveal relative rounded-2xl overflow-hidden lg:h-[450px] grid grid-cols-12  mx-auto dark:bg-[#020817]">
            <div className=" relative col-span-12 lg:col-span-7 xl:col-span-8  overflow-hidden outline-none ">
              <video
                ref={videoRef}
                width="1120"
                height="632"
                className="h-full w-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none "
                autoPlay
                muted={true}
                loop
              >
                <source src="/video/classes.webm" type="video/mp4" />
              </video>
            </div>

            <div className=" text-gray-600 bg-white dark:text-gray-400 py-4 px-10 col-span-12 lg:col-span-5 xl:col-span-4 h-auto overflow-y-auto scrollbar-hide">
              <h1 className=" text-xl sm:text-2xl reveal text-wrap mt-1 mb-4 text-[#6cce40] font-extrabold">
                {data.classPage.mainContent.title}
              </h1>
              <p className=" text-[13px] reveal xl:text-[14px] 2xl:text-[15px] ">
                {data.classPage.mainContent.description[0]}
              </p>
              <ul className="text-[13px] reveal xl:text-[14px] 2xl:text-[15px]  my-3">
                {Array.isArray(data.classPage.mainContent.description[2]) &&
                  data.classPage.mainContent.description[2].map(
                    (item: string, index: number) => (
                      <li className="mb-1.5" key={index}>
                        {' '}
                        - {item} ,
                      </li>
                    )
                  )}
              </ul>

              <p className=" text-[13px] reveal xl:text-[14px] 2xl:text-[15px] ">
                {data.classPage.mainContent.description[3]}
              </p>
            </div>
          </div>
        </div>

        <div className="my-16 px-3 lg:px-16 mx-auto" id="category">
          <Categories />
        </div>
      </ScrollAnimateWrapper>
    </div>
  );
};

export default ClassesPage;
