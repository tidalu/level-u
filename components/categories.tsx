'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { useLocalizedData } from '@/lib/useLocalizedData';
import Link from 'next/link';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

interface Class {
  name: string;
  description: string;
  video: string;
  forWhom: string[];
  cost: string;
  duration: string;
  intersity: string;
  purpose: string;
  effects: string[];
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
  return (
    <div>
      <div className="flex flex-col items-center  mt-6 md:flex-row flex-wrap justify-between">
        {Object.values(data.classPage.classList as ClassList[]).map(
          (item: ClassList, index: number) => {
            return (
              <div className="basis-[45%]" key={index}>
                <ul className="reveal bg-white custom-shadow  dark:bg-[#86868517]  dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                  <li className=" text-gray-400 font-semibold mb-3">
                    {item.title}
                  </li>
                  {item.list.map((item: Class) => (
                    <li className="mb-2 h-auto" key={item.name}>
                      <div
                        key={item.name}
                        className="shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 xl:h-52 overflow-hidden dark:bg-[#0f1227]"
                      >
                        <div className="cursor-pointer">
                          <div className="absolute skew top-0 left-0 right-0 bottom-52 md:bottom-0  w-full h-full overflow-hidden">
                            <img
                              src="/offer3.webp"
                              className="rounded-2xl object-cover w-full h-full"
                              alt=""
                            />
                          </div>
                          <div className="text-black dark:text-white relative z-10 mt-12 text-sm mb-2">
                            <span className="font-bold">{item.name}</span>
                          </div>
                          <div className="flex justify-between relative z-10 text-[12px] text-gray-500">
                            {'short description here'}
                            <Button
                              variant="primaryGreen"
                              className="rounded-full p-0 h-5 px-2"
                              onClick={() =>
                                window.open(
                                  `/classess/${item.name.toLowerCase()}`
                                )
                              }
                            >
                              <ChevronRight size={14} className="text-black" />
                            </Button>
                          </div>
                          <img
                            className="absolute z-10 top-0 right-3"
                            width={50}
                            src="/offericon-3.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Categories;
