import React from 'react';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

function BenefitCard({
  title,
  icon,
  hoverImage,
}: {
  title?: string;
  icon?: string;
  hoverImage: string;
}) {
  return (
    <div className="relative reveal border-gray-800 border-box dark:border-gray-200 border rounded-xl w-auto h-auto mt-2 p-4 cursor-pointer">
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <img
          src={hoverImage}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="transition-opacity duration-300 hover:opacity-0 ">
        <div className="relative flex h-24 justify-center p-4 lg:h-32">
          <img src={icon} alt="" />
        </div>
        <p className="mt-6 text-center text-sm text-wrap text-black dark:text-white lg:text-base">
          {title || 'Flexible working hours'}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
