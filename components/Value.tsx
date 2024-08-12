import React from 'react';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

function Value({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div
      className="z-10 flex flex-col gap-4 sm:flex-row md:gap-16 reveal"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="font-basic-sans TextStroke_black__PJZS8 break-words text-4xl font-semibold italic tracking-wider sm:w-1/3 sm:text-right">
        <p className="text-wrap font-londrina-sketch text-gray-800 dark:text-white">
          <span className="font-londrina-sketch text-gray-800 dark:text-white">
            {index}
          </span>
          <br />
          <ScrollAnimateWrapper>{title}</ScrollAnimateWrapper>
        </p>
      </div>
      <span className="max-w-2xl flex-1 text-base text-black dark:text-gray-300 xl:text-lg">
        <ScrollAnimateWrapper>{description}</ScrollAnimateWrapper>
      </span>
    </div>
  );
}

export default Value;
