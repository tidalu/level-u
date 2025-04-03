"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import HomeBlogList from "./home-blogList";
import { useLocalizedData } from "@/lib/useLocalizedData";
import Form from "./form";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const LandingBanner = () => {
  const data = useLocalizedData();
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSrc, setImageSrc] = useState("/quote-replacement-en.svg");
  const [slideImages, setSlideImages] = useState([
    { desktopImage: "", mobileImage: "" },
    { desktopImage: "", mobileImage: "" },
  ]);

  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleMerchClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    window.location.href = "/merch";
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  // Update image source for the quote graphic and slide images based on language
  useEffect(() => {
    console.log("Language:", language);

    // Set quote graphic source
    const src =
      language === "uz"
        ? "/quote-replacement-uz.svg"
        : language === "ru"
        ? "/quote-replacement-ru.svg"
        : "/quote-replacement-en.svg";
    setImageSrc(src);

    // Set slide images with a fallback language
    const effectiveLanguage = language || "en"; // Fallback to "en" if language is undefined
    const updatedSlideImages = [
      {
        desktopImage: `/desk_home-banner-welcome-${effectiveLanguage}.webp`,
        mobileImage: `/mobile_home-banner-welcome-${effectiveLanguage}.webp`,
      },
      {
        desktopImage: `/desk_home-banner-merch-${effectiveLanguage}.webp`,
        mobileImage: `/mobile_home-banner-merch-${effectiveLanguage}.webp`,
      },
    ];
    setSlideImages(updatedSlideImages);
  }, [language]);

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        changeSlide((currentSlide + 1) % 2);
      }
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  interface Slide {
    desktopImage: string;
    mobileImage: string;
  }

  const changeSlide = (index: number): void => {
    if (currentSlide === index || isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match this with the CSS transition duration
  };

  // Create slides with different content
  const slides = [
    {
      mainTitle: data?.landingAdd?.mainTitle || ["Title", "Here"],
      buttonText: data?.landingAdd?.buttonText || "Button",
      topPic: data?.landingAdd?.topPic || [],
      bottomPic: data?.landingAdd?.bottomPic || [],
      desktopImage: slideImages[0].desktopImage,
      mobileImage: slideImages[0].mobileImage,
      quoteImage: imageSrc || "/placeholder.svg",
    },
    {
      mainTitle: data?.landingAdd?.mainTitle.slice(2) || ["Title", "Here"],
      buttonText: data?.landingAdd?.merchButton || "Button",
      topPic: data?.landingAdd?.topPic || [],
      bottomPic: data?.landingAdd?.bottomPic || [],
      desktopImage: slideImages[1].desktopImage,
      mobileImage: slideImages[1].mobileImage,
      quoteImage: "/hoodie-1.jpg",
    },
  ];

  return (
    <div className="reveal homeBanner pt-32 pb-12 rounded-b-3xl px-5 lg:px-16 relative overflow-hidden 3xl:mx-32">
      {/* Auto-carousel container */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="transition-opacity duration-1000 ease-in-out"
            style={{
              display: currentSlide === index ? "block" : "none", // Use display to show/hide slides
            }}
          >
            <div className="relative rounded-2xl overflow-hidden  lg:min-h-[663.38px] lg:grid lg:grid-cols-12 bg-[#6cce40] mx-auto">
              {/* Text section: Only for the first slide */}
              {index === 0 && (
                <div className="text-white p-6 lg:py-12 justify-between lg:pl-16 col-span-12 md:col-span-5 flex flex-col items-center gap-0">
                  <div className="w-full">
                    <p className="text-3xl sm:text-4xl reveal text-left text-black xl:text-5xl 2xl:text-6xl font-extrabold leading-snug italic apply-font-o">
                      {slide.mainTitle[0]}
                    </p>
                    <p className="text-3xl sm:text-4xl reveal text-start lg:-mr-8 xl:text-5xl 2xl:text-6xl xl:-mr-11 text-black font-extrabold leading-snug italic apply-font-o">
                      {slide.mainTitle[1]}
                    </p>
                  </div>

                  <Image
                    src={slide.quoteImage || "/placeholder.svg"}
                    alt="Quote graphic"
                    height={100}
                    width={100}
                    className="object-cover mx-auto scale-150 sm:scale-100 md:scale-125 xl:scale-100 m-7 w-[80%] h-auto lg:m-0 2xl:self-right"
                  />
                  <Form>
                    <div className="self-end scale-110 hover:scale-105 transition-all delay-75 shadow-lg inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 radial_bg_red text-white h-10 px-4 py-2 rounded-xl cursor-pointer">
                      {slide.buttonText}
                    </div>
                  </Form>
                </div>
              )}

              {/* Text section for second slide: Only on mobile */}
              {index === 1 && (
                <div onClick={index === 1 ? handleMerchClick : undefined} className="text-white  justify-between col-span-12 flex flex-col items-center gap-0 lg:hidden">
                  <Image
                    src={slide.quoteImage || "/placeholder.svg"}
                    alt="Merch store promotion"
                    width={600} // Set appropriate dimensions
                    height={400}
                    quality={100} // Ensure maximum quality
                    priority={Number(index) === 0}
                    className="object-top mx-auto w-full rounded-t-2xl h-auto lg:m-0 2xl:self-right"
                  />
                </div>
              )}

              {/* Desktop image section */}
              <div
                className={`reveal md:h-[100%] bg-no-repeat bg-cover relative hidden md:block ${
                  index === 0 ? "md:col-span-7" : "col-span-12"
                } ${index === 1 ? "cursor-pointer" : ""}`}
                style={{ backgroundImage: `url(${slide.desktopImage})` }}
                onClick={index === 1 ? handleMerchClick : undefined}
                role={index === 1 ? "button" : undefined}
                tabIndex={index === 1 ? 0 : undefined}
                aria-label={index === 1 ? "Visit merch store" : undefined}
              ></div>

              {/* Mobile image section */}
              <div
                className={`reveal relative col-span-12 lg:hidden ${
                  index === 1 ? "cursor-pointer" : ""
                }`}
                onClick={index === 1 ? handleMerchClick : undefined}
                role={index === 1 ? "button" : undefined}
                tabIndex={index === 1 ? 0 : undefined}
                aria-label={index === 1 ? "Visit merch store" : undefined}
              >
                <Image
                  src={slide.mobileImage || "/placeholder.svg"}
                  className="w-full h-full object-cover "
                  alt={`main page mobile home banner, image of a student to give a ${
                    index === 0 ? "welcoming" : "merch"
                  } vibe`}
                  width={200}
                  height={200}
                  priority
                  layout="responsive"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Carousel indicators */}
        <div className="flex justify-center mt-4 gap-2">
          <button
            className={`w-2 h-2 rounded-full ${
              currentSlide === 0 ? "bg-[#6cce40]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(0)}
            aria-label="Show slide 1"
          />
          <button
            className={`w-2 h-2 rounded-full ${
              currentSlide === 1 ? "bg-[#6cce40]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(1)}
            aria-label="Show slide 2"
          />
        </div>
      </div>
      {/* banner container ends here */}

      <div className="mt-4 relative reveal scroll-mt-24">
        <h2 className="text-white text-xl md:text-2xl font-extrabold">
          <Link href="/" className="hover:underline" id="news-section">
            {data?.news}
            <ChevronRight
              size={24}
              className="inline-block ml-1 text-[#6cce40]"
            />
          </Link>
        </h2>

        <HomeBlogList />
      </div>
      {/* Custom Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 apply-font-o">
              {language === "uz"
                ? "Merch do'koniga tashrif buyuring"
                : language === "ru"
                ? "Посетить магазин мерча"
                : "Visit Merch Store"}{" "}
              {/* Default to English */}
            </h3>
            <p className="text-gray-700 mb-6">
              {language === "uz"
                ? "Merchandise do'konimizga tashrif buyurishni xohlaysizmi?"
                : language === "ru"
                ? "Хотите посетить наш магазин мерчандайза?"
                : "Would you like to visit our merchandise store?"}{" "}
              {/* Default to English */}
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {language === "uz"
                  ? "Bekor qilish"
                  : language === "ru"
                  ? "Отмена"
                  : "Cancel"}{" "}
                {/* Default to English */}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-xl radial_bg_red text-white hover:opacity-90 transition-colors"
              >
                {language === "uz"
                  ? "Tashrif buyurish"
                  : language === "ru"
                  ? "Посетить магазин"
                  : "Visit Store"}{" "}
                {/* Default to English */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingBanner;
