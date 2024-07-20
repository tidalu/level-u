import React from "react";
import { Marker, Popup } from "react-leaflet";

interface MapPinProps {
  item: any
}


const MapPin = ({ item }: MapPinProps) => {
  return (
    <div>
      {item.clubs.map((item: any) => (
        <Marker key={item.name} position={[item.latitude, item.longitude]}>
          <Popup>
            <div className=" bg-white rounded-2xl p-1">
              <div className="bg-[#b8df4b1a] rounded-md p-4">
                <h3 className=" text-[13px] capitalize mb-1 font-bold">
                  {item.name}
                </h3>
                <div className="mt-0 text-[12px] text-gray-500">
                  {item.address}
                </div>

                <div className="flex gap-2 mt-2">
                  {item.benefits.map((icon: any, idx: any) => (
                    <img
                      key={idx}
                      src={
                        (icon == "Gym" && "fiticon1.svg") ||
                        "" ||
                        (icon == "Fitness" && "fiticon2.svg") ||
                        "" ||
                        (icon == "Indoor Cycling" && "fiticon3.svg") ||
                        "" ||
                        (icon == "Sauna" && "fiticon4.svg") ||
                        "" ||
                        (icon == "Wifi" && "fiticon5.svg") ||
                        "" ||
                        (icon == "Parking" && "fiticon6.svg") ||
                        "" ||
                        (icon == "Bar" && "fiticon7.svg") ||
                        "" ||
                        (icon == "Lockers with Padlocks" && "fiticon8.svg") ||
                        "" ||
                        (icon == "Solarium" && "fiticon9.svg") ||
                        "" ||
                        (icon == "Fight Zone" && "fiticon10.svg") ||
                        "" ||
                        (icon == "Squash" && "fiticon11.svg") ||
                        "" ||
                        (icon == "SPA & Wellness" && "fiticon12.svg") ||
                        ""
                      }
                      alt=""
                      className="w-4 h-4"
                      title={icon}
                    />
                  ))}
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
