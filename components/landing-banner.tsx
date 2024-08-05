import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HomeBlogList from './home-blogList';
import { Button } from './ui/button';
import { data } from '@/data';
import Forms from './Forms';

const LandingBanner = () => {
  return (
    <div className="  homeBanner pt-32 pb-12 rounded-b-3xl px-5 lg:px-16 relative overflow-hidden 3xl:mx-32  ">
      <div className=" relative rounded-2xl overflow-hidden  md:h-[450px] grid grid-cols-12 bg-[#6cce40] mx-auto">
        <div className=" text-white p-6 lg:py-12 lg:pl-16 col-span-12 md:col-span-5">
          <div className="w-full ">
            <p className="text-4xl text-left text-black xl:text-5xl 2xl:text-6xl font-extrabold leading-snug italic dark:text-">
              Pre-Registration
            </p>
            <p className="text-4xl text-right lg:-mr-8 xl:text-5xl 2xl:text-6xl xl:-mr-11 text-black font-extrabold leading-snug italic ">
              is open now
            </p>
          </div>

          <div className="w-[200px] h-[240px] max-h-[60%] mx-auto 2xl:mx-0 2xl:self-right bg-[#FFD032] m-7 ">
            {' '}
            <div className="border-[3px] relative border-[#3F3F3F] w-full h-full -inset-3  text-center">
              <div className="absolute  flex flex-row -top-[20px] left-[20px]">
                <img
                  src="/quote.png"
                  width={70}
                  height={70}
                  alt="quote"
                  className="stroke-cyan-700"
                />
              </div>
              <div className="absolute  flex flex-row -bottom-[25px] right-[20px] rotate-180">
                <img
                  src="/quote.png"
                  width={70}
                  height={70}
                  alt="quote"
                  className="stroke-cyan-700"
                />
              </div>
              <p className="text-[#101210] text-wrap text-center p-7 pl-10 font-bold  tracking-wide h-full flex justify-center items-center">
                SIGN UP IN TIME TO THE GROUP AND GET THE OPPORTUNITY TO STUDY
                ABROAD
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url('/desk_home-banner.webp')] h-[500px] bg-no-repeat bg-cover relative -top-[26px] -right-6 hidden md:block md:col-span-7"></div>

        <div className=" col-span-12 md:hidden">
          <img src="/mobile_home-banner.webp" />
        </div>
      </div>

      <div className="mt-4 z-10 relative">
        <h2 className=" text-white text-xl md:text-2xl font-extrabold">
          <Link href="/" className="hover:underline">
            News!
            <ChevronRight
              size={24}
              className=" inline-block ml-1 text-[#6cce40]"
            />
          </Link>
        </h2>

        <HomeBlogList />
      </div>
    </div>
  );
};

export default LandingBanner;
