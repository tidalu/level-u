import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import googleMap from '../public/google-maps.svg';
import yandexIcon from '../public/yandex.svg';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

interface MapPinProps {
  item: any;
}

const MapPin = ({ item }: MapPinProps) => {
  const handleGetDirections = (long: number, lat: number, type: string) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLong = position.coords.longitude;

          // Construct the Google Maps URL with the user's location as the origin
          const mapsUrlGoogle = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLong}&destination=${lat},${long}&travelmode=driving`;
          const mapsUrlYandex = `https://yandex.ru/maps/?rtext=${userLat},${userLong}~${lat},${long}&rtt=auto`;

          // Redirect the user to the constructed URL
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
            <ScrollAnimateWrapper>
              <div className=" bg-white rounded-2xl p-1">
                <div className="bg-[#b8df4b1a] rounded-md p-4">
                  {/* image */}
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
                  <div className="flex gap-2 mt-2">
                    {item.benefits.map((icon: any, idx: any) => (
                      <img
                        key={idx}
                        src={
                          (icon == 'Gym' && 'fiticon1.svg') ||
                          '' ||
                          (icon == 'Fitness' && 'fiticon2.svg') ||
                          '' ||
                          (icon == 'Indoor Cycling' && 'fiticon3.svg') ||
                          '' ||
                          (icon == 'Sauna' && 'fiticon4.svg') ||
                          '' ||
                          (icon == 'Wifi' && 'fiticon5.svg') ||
                          '' ||
                          (icon == 'Parking' && 'fiticon6.svg') ||
                          '' ||
                          (icon == 'Bar' && 'fiticon7.svg') ||
                          '' ||
                          (icon == 'Lockers with Padlocks' && 'fiticon8.svg') ||
                          '' ||
                          (icon == 'Solarium' && 'fiticon9.svg') ||
                          '' ||
                          (icon == 'Fight Zone' && 'fiticon10.svg') ||
                          '' ||
                          (icon == 'Squash' && 'fiticon11.svg') ||
                          '' ||
                          (icon == 'SPA & Wellness' && 'fiticon12.svg') ||
                          ''
                        }
                        alt=""
                        className="w-4 h-4"
                        title={icon}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
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
                      Get directions with{' '}
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
                      Get directions with
                      <Image
                        src={yandexIcon}
                        alt="yandex icon map"
                        className="w-[40px] "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default MapPin;
