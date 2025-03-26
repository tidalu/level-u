"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import googleMap from "../public/google-maps.svg";
import yandexIcon from "../public/yandex.svg";
import { useLocalizedData } from "@/lib/useLocalizedData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPinIcon,
  Navigation,
  Clock,
  ExternalLink,
  ChevronRight,
  Mail,
} from "lucide-react";

interface MapPinProps {
  item: any;
}

const MapPinMine = ({ item }: MapPinProps) => {
  const data = useLocalizedData();
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [selectedMapService, setSelectedMapService] = useState<string | null>(
    null
  );

  // Function to check if current time is within working hours
  const isOpenNow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const openingTime = 8 * 60; // 8:00 in minutes
    const closingTime = 20 * 60; // 20:00 in minutes

    return (
      currentTimeInMinutes >= openingTime && currentTimeInMinutes < closingTime
    );
  };

  const handleGetDirections = (long: number, lat: number, type: string) => {
    setIsGettingLocation(true);
    setSelectedMapService(type);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLong = position.coords.longitude;

          const mapsUrlGoogle = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLong}&destination=${lat},${long}&travelmode=driving`;
          const mapsUrlYandex = `https://yandex.ru/maps/?rtext=${userLat},${userLong}~${lat},${long}&rtt=auto`;

          if (type === "yandex") window.open(mapsUrlYandex, "_blank");
          else window.open(mapsUrlGoogle, "_blank");

          setIsGettingLocation(false);
          setSelectedMapService(null);
        },
        (error) => {
          console.error("Error getting user location:", error);
          let errorMessage =
            data?.schedule?.locationError ||
            "Unable to retrieve your location.";

          if (error.code === 1) {
            errorMessage =
              data?.schedule?.locationPermissionDenied ||
              "Location permission denied. Please enable location access in your browser settings.";
          } else if (error.code === 2) {
            errorMessage =
              data?.schedule?.locationUnavailable ||
              "Your location is currently unavailable. Please try again later.";
          } else if (error.code === 3) {
            errorMessage =
              data?.schedule?.locationTimeout ||
              "Getting your location timed out. Please try again.";
          }

          alert(errorMessage);
          setIsGettingLocation(false);
          setSelectedMapService(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert(
        data?.schedule?.browserLocationNotSupported ||
          "Geolocation is not supported by this browser."
      );
      setIsGettingLocation(false);
      setSelectedMapService(null);
    }
  };

  const handleMarkerClick = (name: string) => {
    setActivePopup(name);
  };

  const handlePopupClose = () => {
    setActivePopup(null);
  };
  console.log("item in me", item);
  return (
    <div>
      {item.clubs.map((club: any) => (
        <Marker
          key={club.name}
          position={[club.latitude, club.longitude]}
          eventHandlers={{
            click: () => handleMarkerClick(club.name),
          }}
        >
          <Popup eventHandlers={{ remove: handlePopupClose }}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[300px] max-w-full relative"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl z-0"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl z-0"
                />

                {/* Main card */}
                <motion.div
                  initial={{ rotateY: -15, rotateX: 5 }}
                  animate={{ rotateY: 0, rotateX: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 relative z-10"
                >
                  {/* Content section */}
                  <div className="p-5">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                      className="space-y-3"
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 capitalize bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 px-3 py-1 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                            {club.name}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-3 "
                      >
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg ">
                          <MapPinIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                            {club.address}
                          </p>
                        </div>
                      </motion.div>
                      {/* Customer Service Section */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        className=""
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                              <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <a
                              href="tel:+998559033747"
                              className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                            >
                              +998 55 903 37 47
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                              <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <a
                              href="mailto:level.edu.uz.@gmail.com"
                              className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
                            >
                              level.edu.uz.@gmail.com
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                              8:00 - 20:00
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                      className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
                    >
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${isOpenNow() ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                          {isOpenNow() 
                            ? (data?.contactPage?.workInfo?.openNow || "Open Now") 
                            : (data?.contactPage?.workInfo?.closed || "Closed Now")}
                        </span>
                      </div>
                    </motion.div>
                    {/* Directions section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="mt-5"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-80 blur-md" />
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                            <Navigation className="h-4 w-4 text-green-500" />
                            {data?.contactPage?.workInfo?.getDirections ||
                              "Get directions"}
                          </h4>

                          <div className="flex gap-3">
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className={`flex-1 relative overflow-hidden rounded-lg ${
                                isGettingLocation &&
                                selectedMapService === "google"
                                  ? "bg-blue-100 dark:bg-blue-900/30"
                                  : "bg-white dark:bg-gray-900"
                              } border border-blue-200 dark:border-blue-800 p-3 group`}
                              onClick={() =>
                                handleGetDirections(
                                  club.longitude,
                                  club.latitude,
                                  "google"
                                )
                              }
                              disabled={isGettingLocation}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative flex flex-col items-center">
                                {isGettingLocation &&
                                selectedMapService === "google" ? (
                                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-1" />
                                ) : (
                                  <Image
                                    src={googleMap || "/placeholder.svg"}
                                    alt="Google Maps"
                                    width={24}
                                    height={24}
                                    className="object-contain mb-1"
                                  />
                                )}
                                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                                  Google
                                </span>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileHover={{ width: "100%" }}
                                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                />
                              </div>
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className={`flex-1 relative overflow-hidden rounded-lg ${
                                isGettingLocation &&
                                selectedMapService === "yandex"
                                  ? "bg-red-100 dark:bg-red-900/30"
                                  : "bg-white dark:bg-gray-900"
                              } border border-red-200 dark:border-red-800 p-3 group`}
                              onClick={() =>
                                handleGetDirections(
                                  club.longitude,
                                  club.latitude,
                                  "yandex"
                                )
                              }
                              disabled={isGettingLocation}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative flex flex-col items-center">
                                {isGettingLocation &&
                                selectedMapService === "yandex" ? (
                                  <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin mb-1" />
                                ) : (
                                  <Image
                                    src={yandexIcon || "/placeholder.svg"}
                                    alt="Yandex Maps"
                                    width={24}
                                    height={24}
                                    className="object-contain mb-1"
                                  />
                                )}
                                <span className="text-xs font-medium text-red-700 dark:text-red-400">
                                  Yandex
                                </span>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileHover={{ width: "100%" }}
                                  className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                                />
                              </div>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default React.memo(MapPinMine);
