import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HomeBlogList from './home-blogList';
import { Button } from './ui/button';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Form } from './form';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

const LandingBanner = () => {
  const data = useLocalizedData();
  return (
    <div className=" reveal homeBanner pt-32 pb-12 rounded-b-3xl px-5 lg:px-16 relative overflow-hidden 3xl:mx-32  ">
      <div className=" relative rounded-2xl overflow-hidden   md:min-h-[450px] grid grid-cols-12 bg-[#6cce40] mx-auto">
        <div className=" text-white p-6 lg:py-12 lg:pl-16 col-span-12 md:col-span-5 flex flex-col items-center ">
          <div className="w-full ">
            <p className="text-4xl reveal text-left text-black xl:text-5xl 2xl:text-6xl font-extrabold leading-snug italic apply-font-o ">
              {data.landingAdd.mainTitle[0]}
            </p>
            <p className="text-4xl reveal text-center md:text-right lg:-mr-8 xl:text-5xl 2xl:text-6xl xl:-mr-11 text-black  font-extrabold leading-snug italic apply-font-o ">
              {data.landingAdd.mainTitle[1]}
            </p>
          </div>

          <div className="w-[80%] h-[240px] max-h-[60%] mx-auto 2xl:mx-0 2xl:self-right bg-[#FFD032] m-7 ">
            {' '}
            <div className="border-[3px] reveal relative border-[#3F3F3F] w-full h-full -inset-3  text-center">
              <div className="absolute   flex flex-row -top-[20px] left-[20px]">
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
              <section className="reveal apply-font-otext-[#101210] text-wrap text-center p-7 pl-10 font-bold  tracking-wide h-full flex justify-center items-center text-black">
                {data.landingAdd.subTitle}
              </section>
            </div>
          </div>
          <Form>
            <div className="self-end  scale-110 hover:scale-105 transition-all delay-75 shadow-lg inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 radial_bg_red text-white h-10 px-4 py-2 rounded-xl cursor-pointer">
              {data.landingAdd.buttonText}
            </div>
          </Form>
        </div>

        <div className="reveal bg-[url('/desk_home-banner.webp')] md:h-[100%]    bg-no-repeat bg-cover relative    hidden md:block md:col-span-7 ">
          <div
            className="md:h-full md:ml-6  md:w-[300px]  -skew-x-[10deg] flex flex-col h-[60%] my-auto gap-6 pb-20 2xl:pb-20 min-[1685px]:pb-8    
          justify-center"
          >
            <p className="text-gray-800  text-3xl md:text-4xl lg:text-5xl   text-wrap apply-font-o text-center">
              {data.landingAdd.topPic.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 2 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl  text-center text-gray-800 text-wrap apply-font-o">
              {data.landingAdd.bottomPic.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 1 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>

        <div className="reveal relative col-span-12 md:hidden ">
          <img
            src="/mobile_home-banner.webp"
            className=""
            alt="mobile banner"
          />
          <div className="h-[60%] px-6 mt-4 w-full  absolute top-0 left-0 flex flex-col">
            <p className="self-start text-gray-800  text-center text-2xl apply-font-o">
              {data.landingAdd.topPic.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 2 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
            <p className="self-end mt-7 text-center text-gray-800  text-2xl apply-font-o">
              {data.landingAdd.bottomPic.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 1 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 z-10 relative reveal scroll-mt-24">
        <h2 className=" text-white text-xl md:text-2xl font-extrabold">
          <Link href="/" className="hover:underline " id="news-section">
            {data.news}
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
