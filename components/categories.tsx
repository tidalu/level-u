'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Slide, toast } from 'react-toastify';
import { Button } from './ui/button';
import { useLocalizedData } from '@/lib/useLocalizedData';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';
interface Class {
  href: string;
  name: string;
  img: string;
  description: string;
  video: string;
  forWhom: string[];
  cost: string;
  duration: string;
  intersity: string;
  purpose: string;
  effects: string[];
  comingSoon?: boolean;
}
interface ClassList {
  title: string;
  list: {
    [x: string]: any;
    name: Class[];
  };
}

const Categories = () => {
  const data = useLocalizedData();
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window?.innerWidth < 768;
  }
  return (
    <div>
      <div className="flex flex-col items-start gap-4 w-full mt-6 md:flex-row flex-wrap justify-between">
        {data?.classPage?.classList &&
          Object.values(data?.classPage?.classList as ClassList[]).map(
            (item: ClassList, index: number) => {
              return (
                <div className="flex-1 w-full" key={index}>
                  <ul className=" reveal bg-white custom-shadow  dark:bg-[#86868517]  dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                    <li className=" text-gray-400 font-semibold mb-3">
                      {item.title}
                    </li>
                    <li className="grid grid-cols-1 xl:grid-cols-2 gap-5 scroll-mt-16 mt-10">
                      {item.list.map((item: Class) => (
                        <div
                          key={item.name}
                          className="group/item shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 h-auto overflow-hidden dark:bg-[#0f1227]"
                        >
                          <div className="cursor-pointer">
                            <div className="absolute skew top-0 left-0 right-0   bottom-44  w-[70%] md:w-[50%] lg:w-[80%] h-[100%] ">
                              <Image
                                src={item.img || '/offer4.webp'}
                                alt=""
                                className="object-cover w-full !h-full "
                                width={100}
                                height={100}
                                loading="lazy"
                                layout="responsive"
                                decoding="async"
                              />
                            </div>
                            <div className="text-black dark:text-white relative z-10 mt-12 text-sm mb-2 pl-10 md:pl-0">
                              <span className="font-bold group-hover:item:underline">
                                {item.name}
                              </span>
                            </div>
                            <div className="flex justify-end relative z-10 text-[12px] text-gray-500">
                              {' '}
                              {item.comingSoon ? (
                                <Tooltip
                                  content={'coming soon'}
                                  color="warning"
                                  placement="left"
                                >
                                  <Button
                                    variant="primaryGreen"
                                    className="rounded-full p-0 h-5 px-2"
                                    onClick={() => {
                                      if (isMobile) {
                                        toast(
                                          'This course will be available soon',
                                          {
                                            transition: Slide,
                                            autoClose: 3000,
                                            position: 'top-center',
                                            theme: 'colored',
                                            type: 'warning',
                                          }
                                        );
                                      }
                                    }}
                                  >
                                    <ChevronRight
                                      size={14}
                                      className="text-black"
                                    />
                                  </Button>
                                </Tooltip>
                              ) : (
                                <Button
                                  variant="primaryGreen"
                                  className="rounded-full p-0 h-5 px-2"
                                  onClick={() =>
                                    (window.location.href = `/classess/${item.href.toLowerCase()}`)
                                  }
                                >
                                  <ChevronRight
                                    size={14}
                                    className="text-black"
                                  />
                                </Button>
                              )}
                            </div>
                            <Image
                              className="absolute z-10 top-0 right-3"
                              width={50}
                              height={50}
                              loading="lazy"
                              decoding="async"
                              src="/offericon-1.webp"
                              alt="OFFER ICON"
                            />
                          </div>
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default React.memo(Categories);
