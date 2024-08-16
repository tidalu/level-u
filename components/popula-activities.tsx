import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const PopulaActivities = () => {
  return (
    <section>
      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className="text-black dark:text-white reveal font-bold text-2xl text-center">
          Popular Classes
        </h2>

        <div className="flex reveal lg:grid lg:grid-cols-3 gap-5 mt-10 scrollMobile">
          {/* IELTS Section */}
          <div className="rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative pb-8">
            <Link
              href="/classess/ielts preparation"
              className="block h-full p-4 pt-16 md:p-10"
            >
              <h3 className="text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 font-semibold">
                TEST PREPARATION
              </h3>

              <h4 className="uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">
                IELTS Preparation
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">
                Our IELTS preparation classes are designed to help you achieve
                your desired score. We offer comprehensive training in all four
                modules: Listening, Reading, Writing, and Speaking. Through
                practice tests, vocabulary building, and personalized feedback,
                you&apos;ll enhance your skills and boost your confidence.
              </p>

              <div className="flex justify-end">
                <Button
                  variant="primaryGreen"
                  className="absolute bottom-5 right-5 shadow-xl rounded-full p-0 h-5 px-2"
                >
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className="absolute top-4 left-4 md:top-6 md:left-auto md:right-6 flex gap-1">
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon1.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon2.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon3.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Korean Section */}
          <div className="rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative">
            <Link
              href="/classess/korean group classes"
              className="block h-full p-4 pt-16 md:p-10"
            >
              <h3 className="text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 font-semibold">
                LANGUAGE LEARNING
              </h3>

              <h4 className="uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">
                Korean Language Classes
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">
                Dive into the Korean language with our interactive classes. From
                basic vocabulary and grammar to advanced conversational skills,
                our curriculum is designed to help you master Korean
                efficiently. Whether you&apos;re preparing for travel or aiming
                for fluency, our courses offer engaging lessons and practical
                exercises.
              </p>

              <div className="flex justify-end">
                <Button
                  variant="primaryGreen"
                  className="absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2"
                >
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className="absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon4.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Kid's English Section */}
          <div className="rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative">
            <Link
              href="/classess/kids english program"
              className="block h-full p-4 pt-16 md:p-10"
            >
              <h3 className="text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 uppercase font-semibold">
                EARLY EDUCATION
              </h3>

              <h4 className="uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">
                Kid&apos;s English Classes
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">
                Our Kid&apos;s English classes are crafted to make learning fun
                and engaging for young learners. Through interactive games,
                storytelling, and creative activities, children will develop
                their English skills in a supportive environment. Perfect for
                building confidence and a love for the language from an early
                age.
              </p>

              <div className="flex justify-end">
                <Button
                  variant="primaryGreen"
                  className="absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2"
                >
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className="absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon5.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
                <div className="bg-white dark:bg-[#020817] rounded-xl p-2">
                  <img
                    src="/popularicon6.svg"
                    width={16}
                    className=""
                    alt="Icon"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopulaActivities;
