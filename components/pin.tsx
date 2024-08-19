import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import googleMap from '../public/google-maps.svg';
import yandexIcon from '../public/yandex.svg';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';
import { useLocalizedData } from '@/lib/useLocalizedData';

interface MapPinProps {
  item: any;
}

const MapPin = ({ item }: MapPinProps) => {
  const data = useLocalizedData();
  const handleGetDirections = (long: number, lat: number, type: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLong = position.coords.longitude;

          const mapsUrlGoogle = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLong}&destination=${lat},${long}&travelmode=driving`;
          const mapsUrlYandex = `https://yandex.ru/maps/?rtext=${userLat},${userLong}~${lat},${long}&rtt=auto`;

          if (type === 'yandex') window.open(mapsUrlYandex, '_blank');
          else window.open(mapsUrlGoogle, '_blank');
        },
        (error) => {
          console.error('Error getting user location:', error);
          alert(
            'Unable to retrieve your location. Please allow location access and try again.'
          );
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  return (
    <div>
      {item.clubs.map((item: any) => (
        <Marker key={item.name} position={[item.latitude, item.longitude]}>
          <Popup>
            <div className=" bg-white rounded-2xl p-1 ">
              <div className="bg-[#b8df4b1a] rounded-md p-4">
                <Image
                  src={item.image}
                  alt="logo"
                  width={0}
                  height={0}
                  className="w-full h-40"
                />
                <h3 className=" text-[13px] capitalize mb-1 font-bold">
                  {item.name}
                </h3>
                <div className="mt-0 text-[12px] text-gray-500">
                  {item.address}
                </div>

                <div>
                  <a
                    href={`tel:${item.phone}`}
                    className="text-[12px] text-[#1d75c7] font-semibold"
                  >
                    {item.phone}
                  </a>
                </div>

                <div className="flex flex-col mt-4">
                  <button
                    className="text-[12px] text-[#1d75c7] font-semibold  flex justify-center items-center gap-1 border border-[#1d75c7] rounded-full py-1 px-2 mt-2"
                    onClick={() =>
                      handleGetDirections(
                        item.longitude,
                        item.latitude,
                        'google'
                      )
                    }
                    formTarget="_blank"
                  >
                    {data.schedule.getDirections}{' '}
                    <Image
                      src={googleMap}
                      alt="google map"
                      className="w-[30px] "
                    />
                  </button>
                  <button
                    className="text-[12px] text-[#1d75c7] font-semibold flex justify-center items-center gap-1 border border-[#1d75c7] rounded-full py-2.5 px-2 mt-2 "
                    onClick={() =>
                      handleGetDirections(
                        item.longitude,
                        item.latitude,
                        'yandex'
                      )
                    }
                    formTarget="_blank"
                  >
                    {data.schedule.getDirections}
                    <Image
                      src={yandexIcon}
                      alt="yandex icon map"
                      className="w-[40px] "
                    />
                  </button>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default MapPin;
