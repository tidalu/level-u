import React from 'react';
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
  const { language } = useLanguage();

  return (
    <div className="relative reveal w-[100%] md:w-[40%] lg:w-[30%] border-gray-800 border-box dark:border-gray-200 border rounded-xl h-auto mt-2 p-4 cursor-pointer">
      <div className={` bg-transparent`}>
        <div className="relative flex h-24 justify-center p-4 lg:h-32 w-auto">
          <Image
            src={icon}
            alt=""
            loading="lazy"
            decoding="async"
            width={100}
            height={100}
            className=""
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
