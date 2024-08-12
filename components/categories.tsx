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
      <ScrollAnimateWrapper>
        <div className="flex flex-col items-center gap-7 mt-6 md:flex-row flex-wrap justify-evenly">
          {Object.values(data.classPage.classList as ClassList[]).map(
            (item: ClassList, index: number) => {
              return (
                <div className="" key={index}>
                  <ul className="reveal bg-white custom-shadow dark:bg-[#86868517] width-[60%] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                    <li className=" text-gray-400 font-semibold mb-3">
                      {item.title}
                    </li>
                    {item.list.map((item: Class) => (
                      <li className="mb-1" key={item.name}>
                        <Link
                          href={`/classess/${item.name.toLowerCase()}`}
                          className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold"
                        >
                          {item.name}
                          <ChevronRight
                            size={12}
                            className=" inline-block  text-[#6cce40]"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </ScrollAnimateWrapper>
    </div>
  );
};

export default Categories;
