'use client';
import BenefitCard from '@/components/BenefitCard';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import HorizontalScroll from '@/components/ScrollHorizontal';
import Value from '@/components/Value';
import { useLocalizedData } from '@/lib/useLocalizedData';
import RecruitmentProcess from '@/components/RecruitmentProcess';
import Image from 'next/image'; // Importing the Image component

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
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
            <section className="relative my-10 h-auto w-full bg-gray-900">
              <div className="relative w-full overflow-hidden h-auto">
                <Image
                  alt="company-banner"
                  decoding="async"
                  className="object-contain max-w-full w-auto h-full"
                  src="/careers-img.webp"
                  width={1920}
                  height={1080}
                  priority
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-30"></div>
              </div>
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
