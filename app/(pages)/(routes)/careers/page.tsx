import BenefitCard from '@/components/BenefitCard';
import { Button } from '@/components/ui/button';
import Value from '@/components/Value';
import { Link, ChevronUp, ChevronDown } from 'lucide-react';
import React from 'react';

function Careers() {
  return (
    <div className="h-full max-w-[1900px] mx-auto">
      <div className=" mt-32  ">
        <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
          <h1 className="text-6xl md:text-[60px]">Careers</h1>
          <div className="mt-8 flex flex-col md:flex-row justify-between">
            <div className="order-2 md:order-1">
              <div className="text-sm text-gray-700">Contents</div>
              <div className="flex-col flex gap-1">
                <a
                  href="#open-positions"
                  className="lg:text-2xl text-gray-900 font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4"
                  style={{ opacity: 1 }}
                >
                  Open positions
                </a>
                <a
                  href="#open-positions"
                  className="lg:text-2xl text-gray-900 font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4"
                  style={{ opacity: 1 }}
                >
                  Benefits
                </a>
                <a
                  href="#open-positions"
                  className="lg:text-2xl text-gray-900 font-semibold text-left text-base md:text-xl hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4"
                  style={{ opacity: 1 }}
                >
                  Recruitment process
                </a>
                <a
                  href="#open-positions"
                  className="lg:text-2xl text-gray-900 font-semibold text-left text-base md:text-x hover:underline trasition-all duration-150 ease-linear hover:underline-offset-4"
                  style={{ opacity: 1 }}
                >
                  Values
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0 text-lg md:text-2xl max-w-full w-[420px] text-gray-900">
              If you&apos;re as obsessed with design and tech as we are, you&apos;ve come
              to the right place.
            </div>
          </div>
        </section>
        <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18">
          <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-3xl md:text-4xl mb-4">Open positions</h2>{' '}
            <hr className="h-[3px] w-[80px] border-0 bg-tdbGrey1 bg-black" />
          </div>
          <div
            className="grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2"
            id="open-positions"
          >
            <span style={{ opacity: 1, transform: 'none' }}>
              <a
                className="flex cursor-pointer items-center justify-between careers_posting__ypMs4"
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
        <section className="container px-4 sm:px-10 m-auto my-10 md:my-16 lg:my-18 scroll-mt-24">
          <div className="mb-8" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-3xl md:text-4xl text-center mb-4">Benefits</h2>
            <hr className="h-[3px] w-[80px] border-0 bg-gray-800 mx-auto" />
          </div>
          <div className="container m-auto mt-6 flex lg:mt-12 flex-wrap flex-row gap-4 justify-evenly">
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
          <div className="carousel-root">
            <div className="carousel carousel-slider" style={{ width: '100%' }}>
              <button
                type="button"
                aria-label="previous slide / item"
                className="control-arrow control-prev control-disabled"
              />
              <div className="slider-wrapper axis-horizontal">
                <ul
                  className="slider animated"
                  style={{
                    transform: 'translate3d(-500%, 0px, 0px)',
                    transitionDuration: '350ms',
                  }}
                >
                  <li className="slide selected">
                    <div className="relative flex h-full flex-col lg:flex-row">
                      <div className="relative lg:w-7/12">
                        <div className="LazyLoad is-visible">
                          <video
                            autoPlay
                            loop
                            playsInline
                            src="/videos/hop.mp4"
                            style={{ width: '100%' }}
                          />
                        </div>
                        <button
                          aria-label="Next"
                          className="absolute top-1/2 right-6 h-8 w-8 -translate-y-1/2 rounded-full bg-gray-200 fill-gray-600 stroke-2 p-2"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330"
                            xmlSpace="preserve"
                          >
                            <path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 0 0 0-21.213z" />
                          </svg>
                        </button>
                        <button
                          aria-label="Previous"
                          className="absolute top-1/2 left-6 h-8 w-8 -translate-y-1/2 rotate-180 rounded-full bg-gray-200 fill-gray-600 stroke-2 p-2"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330"
                            xmlSpace="preserve"
                          >
                            <path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 0 0 0-21.213z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex h-64 w-full bg-tdbGrey1 lg:h-full lg:w-5/12">
                        <div className="m-auto h-full w-5/6 lg:flex lg:w-4/6 lg:flex-col lg:justify-center">
                          <div className="font-basic-sans TextStroke_white__hbjZ5 mt-4 text-xl font-semibold sm:text-2xl lg:text-left lg:text-3xl xl:text-4xl">
                            <p className="text-inherit">
                              <span className="TextStroke_stroke__44ZCv">
                                05
                              </span>
                              <br />
                              Now you&apos;re one of us!
                            </p>
                          </div>
                          <p className="mt-4 text-center text-sm text-gray-400 sm:text-base lg:text-left xl:text-lg">
                            Once we&apos;ve made a decision, we will give you final
                            feedback and invite you to work with us or keep you
                            on file for further opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Repeat similar structure for other slides */}
                </ul>
              </div>
            </div>
          </div>
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
          <div className="mx-auto max-w-2xl text-center text-base text-black lg:text-lg">
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
  );
}

export default Careers;
