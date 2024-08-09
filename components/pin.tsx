import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

interface MapPinProps {
  item: any;
}

const MapPin = ({ item }: MapPinProps) => {
  const handleGetDirections = (long: number, lat: number) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLong = position.coords.longitude;

          // Construct the Google Maps URL with the user's location as the origin
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLong}&destination=${lat},${long}&travelmode=driving`;

          // Redirect the user to the constructed URL
          window.open(mapsUrl, '_blank');
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
                <div>
                  <button
                    className="text-[12px] text-[#1d75c7] font-semibold underline"
                    onClick={() =>
                      handleGetDirections(item.longitude, item.latitude)
                    }
                    formTarget="_blank"
                  >
                    Get directions
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
