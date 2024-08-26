'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { memo} from 'react';
import { useLanguage } from './LanguageContext';

const HomeBlogList = () => {
  const { language } = useLanguage();
  const data = useLocalizedData()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 756,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mt-4  reveal">
      <Slider {...settings} className=" ">
        {data.blogs.map(
          (item: {
            id: number;
            img: string;
            title: string;
            comingSoon: boolean;
          }) => (
            <div key={item.id} className=" h-full">
              <div className=" bg-white dark:bg-[#020817] rounded-2xl p-4 group/item mr-5">
                <div className=" grid grid-cols-12 gap-4">
                  <div className=" col-span-6">
                    <Image
                      src={item.img}
                      className=" rounded-2xl object-cover w-full h-32"
                      alt="fit1"
                      width={200}
                      height={200}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className=" col-span-6 flex flex-col justify-between">
                    <div className=" text-[13px] 2xl:text-lg font-semibold leading-6 group-hover/item:underline">
                      {item.title}
                    </div>

                    <div className=" text-right">
                      <Button
                        variant="primaryGreen"
                        className=" rounded-full p-0 h-5 px-2"
                      >
                        <ChevronRight size={14} className="text-black" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default memo(HomeBlogList);
