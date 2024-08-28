'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListChecks, MapPin } from 'lucide-react';
import { useLocalizedData } from '@/lib/useLocalizedData';
import ClientOnly from './ClientOnly';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

interface Club {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  image: string;
  benefits: string[];
}
interface placeInterface {
  cityName: string;
  clubs: Club[];
}

interface ClubItemProps {
  city: string;
  clubs: Club[];
}

const ClubItem: React.FC<ClubItemProps> = ({ city, clubs }) => {
  return (
    <div className=" relative">
      <h2 className="text-sm mb-2 sm:mt-0 sm:absolute sm:left-5 sm:top-5 sm:h-10 flex items-center sm:w-40 font-bold">
        {city}
      </h2>
      <div className="bg-white dark:bg-[#020817] dark:border custom-shadow rounded-2xl p-4 mb-6 sm:pl-48">
        {clubs.map((club, index) => (
          <div
            key={index}
            className={cn(
              'bg-[#b8df4b1a] dark:bg-[#86868517] rounded-xl md:rounded-full px-4 md:px-6 py-3 text-sm grid grid-cols-12 gap-3 items-center',
              clubs.length > 1 && 'mb-4'
            )}
          >
            <div className="font-semibold text-[12px] mb-1 md:mb-0 col-span-12 md:col-span-3">
              {club.name}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-[13px] mb-2 md:mb-0 col-span-12 md:col-span-9">
              {club.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const data = useLocalizedData();

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value);
  };

  const filteredPlaces = selectedCity
    ? data.schedule.places.filter(
        (item: placeInterface) => item.cityName === selectedCity
      )
    : data.schedule.places;

  return (
    <ScrollAnimateWrapper>
      <Tabs defaultValue="list" className="">
        <div className=" flex justify-center items-center flex-wrap gap-5 sm:gap-20 mb-8">
          <select
            name="city"
            id="city"
            className="custom-select trunc pr-8 appearance-none w-44 outline-none border-2 border-[#6cce40] dark:bg-[#020817] rounded-full py-1.5 px-5 text-sm font-semibold"
            onChange={handleCityChange}
          >
            <option value="">{data?.schedule?.title}</option>
            {data?.schedule?.places?.map(
              (
                item: {
                  cityName: string;
                  clubs: Club[];
                },
                index: number
              ) => (
                <option key={index} value={item.cityName}>
                  {item.cityName}
                </option>
              )
            )}
          </select>
          <TabsList className="rounded-full">
            <TabsTrigger
              className="data-[state=active]:text-black rounded-full schedule"
              value="map"
            >
              <MapPin size={18} className=" mr-1" />
              {data?.schedule?.map}
            </TabsTrigger>
            <TabsTrigger
              className=" data-[state=active]:text-black rounded-full schedule"
              value="list"
            >
              <ListChecks size={18} className=" mr-1" />
              {data?.schedule?.list}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="map">
          <ClientOnly>
            <MapComponent items={filteredPlaces} />
          </ClientOnly>
        </TabsContent>
        <TabsContent value="list">
          {filteredPlaces.map((item: placeInterface, index: number) => (
            <ClubItem key={index} city={item.cityName} clubs={item.clubs} />
          ))}
        </TabsContent>
      </Tabs>
    </ScrollAnimateWrapper>
  );
};

export default React.memo(Schedule);
