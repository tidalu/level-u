import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HomeBlogList from './home-blogList';
import { useLocalizedData } from '@/lib/useLocalizedData';
import Form from './form';
import { useLanguage } from './LanguageContext';
import Image from 'next/image';
const LandingBanner = () => {
  const data = useLocalizedData();

  const [imageSrc, setImageSrc] = useState('/quote-replacement-en.svg');

  const { language } = useLanguage();
  useEffect(() => {
    const src =
      language === 'uz'
        ? '/quote-replacement-uz.svg'
        : language === 'ru'
          ? '/quote-replacement-ru.svg'
          : '/quote-replacement-en.svg';

    setImageSrc(src);
  }, [language]);

  return (
    <div className=" reveal homeBanner pt-32 pb-12 rounded-b-3xl px-5 lg:px-16 relative overflow-hidden 3xl:mx-32  ">
      <div className=" relative rounded-2xl overflow-hidden   md:min-h-[450px] grid grid-cols-12 bg-[#6cce40] mx-auto">
        <div className=" text-white p-6 lg:py-12 lg:pl-16 col-span-12 md:col-span-5 flex flex-col items-center gap-0 ">
          <div className="w-full ">
            <p className="text-3xl sm:text-4xl reveal text-left text-black xl:text-5xl 2xl:text-6xl font-extrabold leading-snug italic apply-font-o ">
              {data?.landingAdd?.mainTitle[0]}
            </p>
            <p className="text-3xl sm:text-4xl reveal text-start  lg:-mr-8 xl:text-5xl 2xl:text-6xl xl:-mr-11 text-black  font-extrabold leading-snug italic apply-font-o ">
              {data?.landingAdd?.mainTitle?.[1]}
            </p>
          </div>

          <Image
            src={imageSrc}
            alt=""
            height={100}
            width={100}
            className="object-cover mx-auto scale-150 sm:scale-100 md:scale-125 xl:scale-100 m-7 w-[80%] h-auto lg:m-0 2xl:self-right"
          />
          <Form>
            <div className="self-end  scale-110 hover:scale-105 transition-all delay-75 shadow-lg inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 radial_bg_red text-white h-10 px-4 py-2 rounded-xl cursor-pointer">
              {data?.landingAdd?.buttonText}
            </div>
          </Form>
        </div>

        <div className="reveal bg-[url('/desk_home-banner.webp')] md:h-[100%]    bg-no-repeat bg-cover relative    hidden md:block md:col-span-7 ">
          <div
            className="md:h-full md:ml-6  md:w-[300px]  -skew-x-[10deg] flex flex-col h-[60%] my-auto gap-6 pb-20 2xl:pb-16 min-[1685px]:pb-8    
          justify-center"
          >
            <p className="text-gray-800  text-3xl md:text-4xl lg:text-5xl 2xl:-mt-20 min-[1685px]:-mt-24  text-wrap apply-font-o text-center 2xl:text-red-300">
              {data?.landingAdd?.topPic?.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 2 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl 2xl:-mb-8  text-center text-gray-800 text-wrap apply-font-o">
              {data?.landingAdd?.bottomPic?.map((item: string, i: number) => {
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
          <Image
            src="/mobile_home-banner.webp"
            className="w-full h-full object-cover"
            alt="mobile banner"
            width={200}
            height={200}
            priority
            decoding="async"
          />
          <div className="h-[60%] px-3 mt-2 sm:px-6 sm:mt-4 w-full  absolute top-0 left-0 flex flex-col">
            <p className="self-start text-black  text-center text-lg sm:text-2xl apply-font-o">
              {data?.landingAdd?.topPic?.map((item: string, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {item}
                    {i !== 2 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
            <p className="self-end sm:mt-7 text-center text-black sm:text-2xl mt-4 text-lg apply-font-o">
              {data?.landingAdd?.bottomPic?.map((item: string, i: number) => {
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
            {data?.news}
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
