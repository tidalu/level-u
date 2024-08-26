import React from 'react';
import { useEffect, useState } from 'react';

function RecruitmentProcess({
  data,
  title,
}: {
  data: {
    stepIndex: number;
    stepTitle: string;
    stepDescription: string;
    stepVideo: string;
  }[];
  title: string;
}) {
  const [currentOnScreen, setCurrentOnScreen] = useState(data[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  useEffect(() => {
    setCurrentOnScreen(data[0]);
  }, [data]);

  const handleClick = (index: number) => {
    setSelectedStepIndex(index);
    setCurrentOnScreen(data[index]);
    setIsAnimating(true);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeoutId);
  }, [currentOnScreen]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-4 mx-auto px-5">
      <div
        className={` rounded-xl reveal flex flex-col basis-1/2 mx-5 border-gray-900 dark:border-gray-200 border ${
          isAnimating ? 'slide-in-elliptic-top-fwd' : 'animation-done'
        }`}
      >
        <div className="basis-1/2">
          <video
            src={currentOnScreen.stepVideo}
            autoPlay
            className="h-inherit w-inherit rounded-t-xl"
            loop
          ></video>
        </div>
        <div className="p-16 basis-1/2">
          <h3 className="text-2xl pb-4 font-bold ">
            {currentOnScreen.stepTitle}
          </h3>
          <p>{currentOnScreen.stepDescription}</p>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-6 justify-center">
        <h1 className="text-6xl reveal md:text-[60px] my-6 align-start text-wrap">
          {title}
        </h1>
        <div className="flex flex-col gap-3">
          {data.map((step, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`px-10 py-6 rounded-full hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-gray-800 cursor-pointer border border-gray-800 dark:border-white flex gap-4 ${
                  selectedStepIndex === index ? 'bg-gray-800 text-white' : ''
                }
  dark:focus:bg-white dark:focus:text-gray-800 reveal`}
              >
                <p className="text-xl font-bold">0{step.stepIndex}</p>
                <p className="text-xl ">{step.stepTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(RecruitmentProcess);
