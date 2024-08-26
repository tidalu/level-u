import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import Image from 'next/image';
function BenefitCard({
  title,
  icon,
  hoverImage,
}: {
  title: string;
  icon: string;
  hoverImage: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative reveal w-[70%] md:w-[40%] lg:w-[30%] border-gray-800 border-box dark:border-gray-200 border rounded-xl h-auto mt-2 p-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={hoverImage}
          alt=""
          className="w-full h-full object-fill rounded-xl"
        />
      </div>
      <div
        className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } bg-transparent`}
      >
        <div className="relative flex h-24 justify-center p-4 lg:h-32 w-auto">
          <Image
            src={icon}
            alt=""
            loading="lazy"
            decoding="async"
            width={100}
            height={100}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
        <p
          lang={language}
          className="mt-6 text-center text-sm hyphens-auto text-wrap text-black dark:text-white lg:text-base"
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default React.memo(BenefitCard);
