'use client';
import BenefitCard from '@/components/BenefitCard';
import HorizontalScroll from '@/components/ScrollHorizontal';
import Value from '@/components/Value';
import { useState } from 'react';

function Careers() {
  const data = [
    {
      stepIndex: 1,
      stepTitle: "Review applications and CV's",
      stepDescription:
        'Send us your portfolio (please make it relevant) and a CV (please make it 1 page only). You can apply for one of the open positions or send us your application anyway.',
      stepVideo: '/video/rec-1.mp4',
    },
    {
      stepIndex: 2,
      stepTitle: 'Interview invitation',
      stepDescription:
        'If you get invited for an interview, just bring your best energy and ideas! You will be interviewed by the people you will be working with: the CEO and your future project manager.',
      stepVideo: '/video/rec-2.mp4',
    },
    {
      stepIndex: 3,
      stepTitle: 'The interview',
      stepDescription:
        'Send us your portfolio (please make it relevant) and a CV (please make it 1 page only). You can apply for one of the open positions or send us your application anyway.',
      stepVideo: '/video/rec-3.mp4',
    },
    {
      stepIndex: 4,
      stepTitle: 'Test task',
      stepDescription:
        "If you're a candidate for a junior role, we'll ask you to complete a test task. It will help us learn more about your skills. You also will see what could be your potential tasks.",
      stepVideo: '/video/rec-4.mp4',
    },
  ];
  return (
    <>
      <div className="h-full max-w-[1900px] mx-auto mt-36">
        <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
          <h1 className="text-6xl md:text-[60px] my-6">Careers</h1>
        </section>
      </div>
      <HorizontalScroll />
      <div className="h-full max-w-[1900px] mx-auto">
        <div className=" scroll-smooth ">
          <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
            <div className="mt-8 flex flex-col md:flex-row justify-between">
              <div className="order-2 md:order-1 ">
                <div className="text-md text-gray-700 darl:text-gray-300">
                  Contents
                </div>
                <div className="flex-col flex gap-1 ">
                  <a
                    href="#open-positions"
                    className="lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4 "
                    style={{ opacity: 1 }}
                  >
                    Open positions
                  </a>
                  <a
                    href="#benefits"
                    className="lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4 "
                    style={{ opacity: 1 }}
                  >
                    Benefits
                  </a>
                  <a
                    href="#recruitment-process"
                    className="lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4 "
                    style={{ opacity: 1 }}
                  >
                    Recruitment process
                  </a>
                  <a
                    href="#values"
                    className="lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-x hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4 "
                    style={{ opacity: 1 }}
                  >
                    Values
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 mb-6 md:mb-0 text-lg md:text-2xl dark:text-white max-w-full w-[420px] text-gray-900">
                If you&apos;re as obsessed with design and tech as we are,
                you&apos;ve come to the right place.
              </div>
            </div>
          </section>
          <section
            id="open-positions"
            className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 scroll-mt-[100px]"
          >
            <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
              <h2 className="text-3xl md:text-4xl mb-4">Open positions</h2>{' '}
              <hr className="h-[3px] w-[80px] border-0 bg-tdbGrey1 bg-black" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between group careers_posting__ypMs4"
                  href="/job/react-developer"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">
                      Front-end Engineer (React)
                    </h2>
                    <p className="md:text-lg">Warsaw / Remote</p>
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/ux-ui-designer"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">UX/UI Designer</h2>
                    <p className="md:text-lg">Warsaw / Remote</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/node-developer"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">
                      Backend Engineer (Node)
                    </h2>
                    <p className="md:text-lg">Warsaw / Remote</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/art-director"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">Art Director</h2>
                    <p className="md:text-lg">Warsaw</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/3d-archiviz-artist-mid-senior"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">
                      3D Archiviz Artist mid/senior
                    </h2>
                    <p className="md:text-lg">Warsaw / Remote</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/3d-modeler"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">3D Modeler</h2>
                    <p className="md:text-lg">Warsaw / Remote</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              <span style={{ opacity: 1, transform: 'none' }}>
                <a
                  className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
                  href="/job/3d-modeler-mexico"
                >
                  <div>
                    <h2 className="text-lg md:text-2xl">3D Modeler</h2>
                    <p className="md:text-lg">Mexico / Remote</p>
                  </div>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
            </div>
            <div className="m-auto mt-12 max-w-6xl justify-center">
              <h2 className="text-center font-basic-sans text-2xl font-semibold">
                Got other ideas?
              </h2>
              <p className="mt-1 text-center text-base">
                Send us your portfolio and CV to{' '}
                <a href="mailto:jobs@thedigitalbunch.com">
                  jobs@thedigitalbunch.com
                </a>
              </p>
            </div>
          </section>
          <section className="my-10 md:my-16 lg:my-18 relative bg-gray-900">
            <img
              alt="company-banner"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: 'cover',
                color: 'transparent',
              }}
              sizes="100vw"
              src="/careers-img.webp"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-30"></div>
            <section className="container px-4 sm:px-10 m-auto relative py-24">
              <p className="mb-4 max-w-2xl text-3xl font-semibold text-white md:mb-8 md:text-5xl">
                Grab our Culture Book and learn more!
              </p>
              <button
                className="max-w-md md:text-lg flex items-center transition-all py-2 px-8 text-black bg-white hover:bg-gray-300 border-2 border-white hover:border-gray-300 rounded-full"
                type="button"
              >
                Download
              </button>
            </section>
          </section>
          <section
            className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 scroll-mt-24"
            id="benefits"
          >
            <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
              <h2 className="text-3xl md:text-4xl text-center mb-4">
                Benefits
              </h2>
              <hr className="h-[3px] w-[80px] border-0 bg-gray-800 mx-auto" />
            </div>
            <div className="container  mx-auto px-16 mt-6 flex lg:mt-12 flex-wrap flex-row gap-4 justify-evenly">
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
              <BenefitCard hoverImage="/fit1.webp" />
            </div>
          </section>
          <section
            className="my-10 md:my-16 lg:my-18 scroll-mt-24"
            id="recruitment-process"
          >
            <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
              <h2 className="text-3xl md:text-4xl text-center mb-4">
                Recruitment process
              </h2>
              <hr className="h-[3px] w-[80px] border-0 bg-tdbGrey1 mx-auto bg-gray-800" />
            </div>
            <RecruitmentProcess data={data} />
          </section>

          {/*  */}

          <section
            className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 text-white scroll-mt-24"
            id="values"
          >
            <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-800 dark:text-white">
                We&apos;re big on Values
              </h2>
              <hr className="h-[3px] w-[80px] border-0 bg-gray-800 mx-auto" />
            </div>
            <div className="mx-auto max-w-2xl text-center text-base text-black lg:text-lg dark:text-white">
              An aligned team is the cornerstone of amazing company culture. It
              helps us do the work well and keep the precious work-life balance.
            </div>
            <div className="mt-12 flex flex-col gap-14 md:gap-20 lg:mt-32">
              <Value
                index={1}
                title="Entrepreneurship"
                description="Be bold, be willing to take risks, have conviction in your
                ideas, use your strengths. Creativity is often a solitary
                pursuit. Being entrepreneurial about your work means owning your
                tasks and projects and driving them forward with or without
                oversight. It's also about knowing when to call on the team for
                support, and when to take time to expand your skillset. If a new
                plug-in calling out to you, there's a new tech you want to learn
                or a whole new direction you want to take, we've got you
                covered. Skills &gt; roles."
              />
              <Value
                index={2}
                title="Respect"
                description="Trust comes from relationships – starting with yourself and your work, all the way to the teammates you count on for support and the trust clients have in us when they put their precious ideas in our hands. Trust is built and cultivated; it's part of the work we do at TBD. If work needs do it, we pick it up. And we thank each other for doing so."
              />
              <Value
                index={3}
                title="Trust"
                description="Communication with empathy and emotional intelligence can be a tough exercise, but we believe it's the only way to truly grow. Accommodating differences of opinion can be even harder, but we pride ourselves on how varied and multidisciplinary our team is. We have no time for 'brilliant jerks' - we are a community and we are protective of it. We recognize each other's value and celebrate each other's wins."
              />

              <Value
                index={4}
                title="Efficiency"
                description="We create in a world of budgets and deadlines. Understanding the limitations and picking the right tools to work with is as much a part of the art as creative flow. It's also why we value the time spent pursuing new skills and tools, which in turn help us have more time for artistic flair. Developing a career is important to all of us. Grow along one of our predefined tracks or pick your own path."
              />

              <Value
                index={5}
                title="Integrity"
                description="We create in a world of budgets and deadlines. Understanding the limitations and picking the right tools to work with is as much a part of the art as creative flow. It's also why we value the time spent pursuing new skills and tools, which in turn help us have more time for artistic flair. Developing a career is important to all of us. Grow along one of our predefined tracks or pick your own path."
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Careers;

function RecruitmentProcess({
  data,
}: {
  data: {
    stepIndex: number;
    stepTitle: string;
    stepDescription: string;
    stepVideo: string;
  }[];
}) {
  const [currentOnScreen, setCurrentOnScreen] = useState(data[0]);

  const handleClick = (index: number) => {
    setCurrentOnScreen(data[index]);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row  gap-10 lg:gap-4  mx-auto px-5">
      <div className="rounded-xl flex flex-col basis-1/2 mx-5 border-gray-900 dark:border-gray-200  border">
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
        <h1 className="text-6xl md:text-[60px] my-6 align-start">
          Recruitment <br /> process
        </h1>
        <div className="flex flex-col gap-3">
          {data.map((step, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="px-10 py-6 rounded-full hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-gray-800 cursor-pointer border border-gray-800 dark:border-white flex gap-4
                dark:focus:bg-white dark:focus:text-gray-800"
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
