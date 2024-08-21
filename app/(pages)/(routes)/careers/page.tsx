'use client';
import BenefitCard from '@/components/BenefitCard';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import HorizontalScroll from '@/components/ScrollHorizontal';
import Value from '@/components/Value';
import { useEffect, useState } from 'react';
import { useLocalizedData } from '@/lib/useLocalizedData';

function Careers() {
  const data = useLocalizedData();
  return (
    <>
      <ScrollAnimateWrapper>
        <div className="h-full max-w-[1900px] mx-auto mt-36">
          <section className="reveal container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
            <h1 className="text-6xl md:text-[60px] my-6">
              {data.careers.header}
            </h1>
          </section>
        </div>
        <HorizontalScroll />
        <div className="h-full max-w-[1900px] mx-auto">
          <div className=" scroll-smooth ">
            <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
              <div className="mt-8 flex flex-col md:flex-row justify-between">
                <div className="order-2 md:order-1 reveal">
                  <div className="text-md text-gray-700 darl:text-gray-300">
                    {data.careers.navSection.title}
                  </div>
                  <div className="flex-col flex gap-1 ">
                    {data.careers.navSection.links.map(
                      (
                        link: {
                          name: string;
                          href: string;
                        },
                        index: number
                      ) => (
                        <a
                          key={index}
                          href={`${link.href}`}
                          className="lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4 "
                          style={{ opacity: 1 }}
                        >
                          {link.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
                <div className="order-1 reveal md:order-2 mb-6 md:mb-0 text-lg md:text-2xl dark:text-white max-w-full w-[420px] text-gray-900">
                  {data.careers.navSection.description}
                </div>
              </div>
            </section>
            <section
              id="open-positions"
              className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 scroll-mt-[100px]"
            >
              <div className="mb-8 " style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-3xl md:text-4xl mb-4 reveal">
                  {data.careers.openPositions.title}
                </h2>{' '}
                <hr className="reveal h-[3px] w-[80px] border-0 bg-tdbGrey1 bg-black dark:bg-white" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
                {data.careers.openPositions.positions.map(
                  (
                    position: {
                      title: string;
                      location: string;
                    },
                    index: number
                  ) => {
                    return (
                      <span
                        key={index}
                        style={{ opacity: 1, transform: 'none' }}
                      >
                        <a
                          className="reveal flex cursor-pointer items-center justify-between group "
                          href="/contact"
                        >
                          <div>
                            <h2 className="text-lg md:text-2xl">
                              {position.title}
                            </h2>
                            <p className="md:text-lg">{position.location}</p>
                          </div>
                          <svg
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 group-hover:jello-diagonal-1 group-hover:scale-110 transition-all delay-150"
                          >
                            <path
                              d="M2 23.135 25 2m0 0H4m21 0v21.135"
                              stroke="#717174"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </span>
                    );
                  }
                )}
              </div>
              <div className="m-auto mt-12 max-w-6xl justify-center reveal">
                <h2 className="text-center font-basic-sans text-2xl font-semibold">
                  {data.careers.optionalRequision.title}
                </h2>
                <p className="mt-1 text-center text-base">
                  {data.careers.optionalRequision.description}{' '}
                  <a href="mailto:level.edu.careers.uz@gmail.com">
                    level.edu.careers.uz@gmail.com
                  </a>
                </p>
              </div>
            </section>
            <section className=" my-10 h-auto w-full reveal md:my-16 lg:my-18 relative bg-gray-900">
              <img
                alt="company-banner"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',

                  objectFit: 'cover',
                  color: 'transparent',
                }}
                sizes="100vw"
                src="/careers-img.webp"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-30"></div>
              {/* <section className="container px-4 sm:px-10 m-auto relative py-24">
                <p className="mb-4 max-w-2xl text-3xl font-semibold text-white md:mb-8 md:text-5xl">
                  {data.careers.optionalRequision.cultureBook}
                </p>
                <button
                  className="max-w-md md:text-lg flex items-center transition-all py-2 px-8 text-black bg-white hover:bg-gray-300 border-2 border-white hover:border-gray-300 rounded-full"
                  type="button"
                >
                  {data.careers.optionalRequision.button}
                </button>
              </section> */}
            </section>
            <section
              className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 scroll-mt-24"
              id="benefits"
            >
              <div
                className="mb-8 reveal"
                style={{ opacity: 1, transform: 'none' }}
              >
                <h2 className="text-3xl md:text-4xl text-center mb-4">
                  {data.careers.benefits.title}
                </h2>
                <hr className="h-[3px] w-[80px] border-0 bg-gray-800 mx-auto" />
              </div>
              <div className="container reveal  mx-auto px-16 mt-6 flex lg:mt-12 flex-wrap flex-row gap-4 justify-center">
                {data.careers.benefits.cards.map(
                  (
                    card: {
                      icon: string;
                      title: string;
                      image: string;
                    },
                    index: number
                  ) => {
                    return (
                      <BenefitCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        hoverImage={
                          // card.image ||
                          '/offer1.webp'
                        }
                      />
                    );
                  }
                )}
              </div>
            </section>
            <section
              className="my-10 md:my-16 lg:my-18 scroll-mt-24"
              id="recruitment-process"
            >
              <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
                <hr className="h-[3px] w-[80px] border-0 bg-tdbGrey1 mx-auto bg-gray-800" />
              </div>
              <RecruitmentProcess
                data={data.careers.recruitmentProcess.process}
                title={data.careers.recruitmentProcess.title}
              />
            </section>

            {/*  */}

            <section
              className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 text-white scroll-mt-24"
              id="values"
            >
              <div
                className="mb-8 reveal"
                style={{ opacity: 1, transform: 'none' }}
              >
                <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-800 dark:text-white">
                  {data.careers.values.title}
                </h2>
                <hr className="h-[3px] w-[80px] border-0 bg-gray-800 mx-auto" />
              </div>
              <div className="mx-auto max-w-2xl reveal text-center text-base text-black lg:text-lg dark:text-white">
                {data.careers.values.description}
              </div>
              <div className="mt-12 flex flex-col gap-14 md:gap-20 lg:mt-32">
                {data.careers.values.valueList.map(
                  (
                    value: {
                      id: number;
                      title: string;
                      description: string;
                    },
                    index: number
                  ) => {
                    return (
                      <Value
                        key={index}
                        index={value.id}
                        title={value.title}
                        description={value.description}
                      />
                    );
                  }
                )}
              </div>
            </section>
          </div>
        </div>
      </ScrollAnimateWrapper>
    </>
  );
}

export default Careers;

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

  // Update the currentOnScreen when the data changes (e.g., on language change)
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
