"use client";

import { useRef } from "react";
import { useLocalizedData } from "@/lib/useLocalizedData";
import InfiniteMovingCards from "@/components/InfiniteMovingCards";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle2, Quote, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const data = useLocalizedData();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const whyRef = useRef(null);

  const isVideoInView = useInView(videoRef, { once: false, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: false, amount: 0.3 });
  // Lower the amount threshold for mobile and add rootMargin
  const isWhyInView = useInView(whyRef, {
    once: false, // Keep checking as user scrolls
    amount: 0.2, // Trigger when 20% is visible (more lenient for mobile)
    margin: "0px 0px -50px 0px", // Extend the detection area slightly
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  // Split the motto if it exists
  const mottoFirst = data?.about?.motto?.split(",")[0] || "";
  const mottoSecond = data?.about?.motto?.split(",")[1] || "";

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 mt-16 ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-green-300/10 dark:bg-green-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-amber-300/10 dark:bg-amber-700/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-[1900px] mx-auto">
        {/* Hero Section */}
        <motion.div
          style={{ opacity, y, scale }}
          className="min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              {data?.about?.topText || "Welcome to our story"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 mb-6">
              {data?.about?.title || "About Level Education"}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {data?.about?.subtitle ||
                "Transforming education through innovation and excellence"}
            </p>
          </motion.div>

          {/* Main content section with video and text */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl ">
              {/* Video section */}
              <motion.div
                ref={videoRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isVideoInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.8 }}
                className="col-span-1 lg:col-span-7 xl:col-span-8 relative  h-[500px]  lg:h-auto  "
              >
                {/* Decorative elements */}
                <div className="rounded-3xl absolute inset-0 bg-gradient-to-br from-green-500/10 flex items-center justify-center to-blue-500/10 mix-blend-overlay z-10" />

                {/* Video */}
                <Image
                  src="/2482873.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full  rounded-3xl"
                  alt="Level learning center main content video"
                />
                {/* <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  aria-description="Level learning center main content video"
                >
                  <source src="/video/about-page.mp4" type="video/mp4" />
                </video> */}

                {/* Motto overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isVideoInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-8 left-8 right-8 z-20"
                >
                  <div className="bg-white/50 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <Quote className="h-8 w-8 text-green-500 mb-2 opacity-50" />
                    <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                      {mottoFirst}
                      {mottoSecond && (
                        <>
                          <br />
                          {mottoSecond}
                        </>
                      )}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Text section */}
              <motion.div
                ref={textRef}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8 }}
                className="col-span-1 lg:col-span-5 xl:col-span-4 p-6 md:p-8 flex flex-col justify-center "
              >
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {data?.about?.ourStory || "Our Story"}
                  </h2>

                  <div className="prose prose-green dark:prose-invert">
                    <p className="text-gray-700 dark:text-gray-300">
                      {data?.about?.description}
                    </p>
                  </div>

                  {/* Values section */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      {data?.about?.ourValues || "Our Values"}
                    </h3>

                    <ul className="space-y-3">
                      {[
                        "Excellence",
                        "Innovation",
                        "Integrity",
                        "Community",
                      ].map((value, index) => (
                        <motion.li
                          key={value}
                          initial={{ opacity: 0, x: 20 }}
                          animate={
                            isTextInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {data?.about?.[value.toLowerCase()] || value}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={whyRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isWhyInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {data?.about?.whyChooseUs || "Why Choose Us"}
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={isWhyInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {data?.about?.why }
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isWhyInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              {data?.about?.whyChooseUsDesc}
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: data?.about?.reasonCards.expertinstr,
                description: data?.about?.reasonCards.expertinstrDesc,
                icon: "👨‍🏫",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: data?.about?.reasonCards.modernCurriculum,
                description: data?.about?.reasonCards.modernCurriculumDesc,
                icon: "📚",
                color: "from-green-500 to-green-600",
              },
              {
                title: data?.about?.reasonCards.personalizedLearning,
                description: data?.about?.reasonCards.personalizedLearningDesc,
                icon: "🎯",
                color: "from-amber-500 to-amber-600",
              },
              {
                title: data?.about?.reasonCards.globalPerspective,
                description: data?.about?.reasonCards.globalPerspectiveDesc,
                icon: "🌎",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: data?.about?.reasonCards.careerSupport,
                description: data?.about?.reasonCards.careerSupportDesc,
                icon: "🚀",
                color: "from-red-500 to-red-600",
              },
              {
                title: data?.about?.reasonCards.community,
                description: data?.about?.reasonCards.communityDesc,
                icon: "👥",
                color: "from-teal-500 to-teal-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {data?.about?.[feature.title.replace(/\s+/g, "").toLowerCase()] || feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {data?.about?.[`${feature.title.replace(/\s+/g, "").toLowerCase()}Desc`] || feature.description}
                  </p>
                  
                </div>
                <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials/Cards Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            > */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {data?.about?.testimonials || "What Our Students Say"}
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                {data?.about?.testimonialsSubtitle ||
                  "Hear from our community of learners"}
              </p>
              </div>
            {/* </motion.div> */}

            <div className="mx-auto">
              <InfiniteMovingCards
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
