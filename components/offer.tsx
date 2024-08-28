import React from 'react';
import { Button } from './ui/button';
import { useLocalizedData } from '@/lib/useLocalizedData';
import ManagerContact from './ManagerContact';
import Image from 'next/image';
const Offer = () => {
  const data = useLocalizedData();
  return (
    <section>
      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className="text-black dark:text-white font-extrabold text-2xl text-center">
          {data?.offers?.title}
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 scroll-mt-16 mt-10"
          id="forYou"
        >
          <div className="rounded-2xl shadow-[#b9bfab] dark:shadow-[#35475c]  shadow-xl bg-[#f8ffe5] dark:bg-[#86868517]">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                <div className="text-black dark:text-white font-bold mb-5">
                  {data?.offers?.forYou?.title}
                </div>
                <p className="text-[12px] 2xl:text-lg leading-7 text-gray-500">
                  {data?.offers?.forYou?.desc}
                </p>

                <Button
                  variant="primaryGreen"
                  className="mt-12 dark:text-black shadow-xl w-fit rounded-full text-sm 2xl:text-lg"
                  onClick={() => (window.location.href = '/classes')}
                >
                  {data?.offers?.forYou?.btn}
                </Button>
              </div>

              <div className="p-3 ">
                <Image
                  src="/for-you-img.jpg"
                  alt="offer for you"
                  className="rounded-2xl  shadow-xl object-cover w-full h-full"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl shadow-[#b9bfab] dark:shadow-[#35475c] shadow-xl bg-[#e7e9e7] scroll-mt-24"
            id="offersComp"
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 h-full">
              <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                <div className="text-black font-bold mb-5">
                  {data?.offers?.forCompanies?.title}
                </div>
                <p className="text-[12px] 2xl:text-lg leading-7 text-gray-500">
                  {data?.offers?.forCompanies?.desc?.map(
                    (item: string, index: number) => (
                      <React.Fragment key={index}>
                        {item}
                        {index !== 1 && <br />}
                      </React.Fragment>
                    )
                  )}
                </p>
                <ManagerContact>
                  <div className="mt-6 dark:text-black ">
                    <Button
                      variant="primaryGreen"
                      className=" w-fit rounded-full text-sm 2xl:text-lg shadow-xl"
                    >
                      {data?.offers?.forCompanies?.btn}
                    </Button>
                  </div>
                </ManagerContact>
              </div>

              <div className="p-3  h-full">
                <Image
                  src="/for-companies-img.jpg"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                  alt="for companies"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Offer);
