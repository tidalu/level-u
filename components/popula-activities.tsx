import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { Tooltip } from '@nextui-org/tooltip';
import { Slide, toast } from 'react-toastify';

const PopulaActivities = () => {
  const data = useLocalizedData();
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window?.innerWidth < 768;
  }
  return (
    <section>
      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className="text-black dark:text-white reveal font-bold text-2xl text-center">
          {data?.popularActivities?.title}
        </h2>

        <div className="flex reveal lg:grid lg:grid-cols-3 gap-5 mt-10 scrollMobile">
          {data?.popularActivities?.classes?.map(
            (
              item: {
                topText: string;
                title: string;
                description: string;
                icons: string[];
                href: string;
                comingSoon?: boolean;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative pb-8`}
                >
                  <Link
                    href={item.comingSoon ? '/classes' : item.href}
                    className="block h-full p-4 pt-16 md:p-10"
                  >
                    <h3 className="text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 font-semibold">
                      {item.topText}
                    </h3>

                    <h4 className="uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">
                      {item.description}
                    </p>

                    <div className="flex justify-end">
                      {item.comingSoon ? (
                        <Button
                          variant="primaryGreen"
                          className="absolute bottom-5 right-5 shadow-xl rounded-full p-0 h-5 px-2"
                          onClick={() => {
                            toast(
                              'This course will be available soon, for now you can check other courses',
                              {
                                transition: Slide,
                                autoClose: 3000,
                                position: 'top-center',
                                theme: 'colored',
                                type: 'warning',
                              }
                            );
                          }}
                        >
                          <ChevronRight size={14} className="text-black" />
                        </Button>
                      ) : (
                        <Button
                          variant="primaryGreen"
                          className="absolute bottom-5 right-5 shadow-xl rounded-full p-0 h-5 px-2"
                          onClick={() => {
                            // Handle click event for not coming soon
                          }}
                        >
                          <ChevronRight size={14} className="text-black" />
                        </Button>
                      )}
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PopulaActivities);
