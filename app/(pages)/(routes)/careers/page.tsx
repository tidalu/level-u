"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Award, Clock, Coffee } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import Value from "@/components/Value";
import RecruitmentProcess from "@/components/RecruitmentProcess";
import { useLocalizedData } from "@/lib/useLocalizedData";

function Careers() {
  const data = useLocalizedData();
  const benefitsRef = useRef<HTMLDivElement>(null);

  // Parallax effect for banner image
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerImage = document.querySelector(
        ".banner-image"
      ) as HTMLElement;
      if (bannerImage) {
        bannerImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered animation for benefit cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Enhanced section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  // Enhanced text animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  // Floating elements for the 3D effect
  const floatingElements = [
    {
      size: 60,
      color: "bg-green-500/30",
      delay: 0,
      duration: 8,
      top: "10%",
      left: "5%",
    },
    {
      size: 40,
      color: "bg-emerald-400/20",
      delay: 1,
      duration: 9,
      top: "20%",
      right: "15%",
    },
    {
      size: 80,
      color: "bg-teal-500/20",
      delay: 2,
      duration: 10,
      bottom: "15%",
      right: "10%",
    },
    {
      size: 50,
      color: "bg-green-600/20",
      delay: 1.5,
      duration: 7,
      bottom: "25%",
      left: "20%",
    },
    {
      size: 30,
      color: "bg-emerald-300/30",
      delay: 0.5,
      duration: 6,
      top: "40%",
      right: "30%",
    },
  ];

  return (
    <>
      {/* <ScrollAnimateWrapper> */}
      {/* Hero Section with Animated Gradient */}
      <div className="relative min-h-[100vh] w-full  overflow-hidden bg-white dark:bg-gray-900">
        {/* Background pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1)_0,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08)_0,rgba(0,0,0,0)_70%)]"
        ></motion.div>

        {/* Floating elements */}
        {floatingElements.map((el, index) => (
          <motion.div
            key={index}
            className={`absolute ${el.color} rounded-full backdrop-blur-xl z-0 hidden sm:block`}
            style={{
              width: el.size,
              height: el.size,
              top: el.top,
              left: el.left,
              right: el.right,
              bottom: el.bottom,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: el.delay * 0.2 },
              scale: { duration: 0.8, delay: el.delay * 0.2 },
              y: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: el.duration,
                delay: el.delay,
                ease: "easeInOut",
              },
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: el.duration * 1.2,
                delay: el.delay,
                ease: "easeInOut",
              },
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: el.duration * 1.5,
                delay: el.delay,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* 3D Perspective container */}
        <div className="absolute inset-0 flex pt-14 flex-col items-center  justify-center gap-4 perspective-[1000px] px-4 sm:px-6">
          <motion.div
            initial={{ rotateX: 20, rotateY: -20, scale: 0.8, opacity: 0 }}
            animate={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto transform-style-3d"
          >
            {/* Decorative grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-3xl"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
            </motion.div>

            {/* Content container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-4 sm:p-8 md:p-16"
            >
              {/* Left side: Text content */}
              <div className="flex-1 space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="relative"
                  whileInView={{ scale: [0.95, 1.02, 1] }}
                  transition={{ duration: 0.8, times: [0, 0.7, 1] }}
                >
                  <span className="absolute -top-3 -left-6 text-5xl text-green-200 dark:text-green-800 font-bold opacity-50">
                    &quot;
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white relative z-10">
                    <motion.span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400"
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      {data?.careers?.header || "Join Our Team"}
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-xl"
                  whileInView={{ opacity: [0.7, 1], y: [5, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {data?.careers?.desc}
                </motion.p>

                <motion.a
                  href="#open-positions"
                  className="group relative inline-flex items-center overflow-hidden rounded-full bg-green-600 px-6 py-3 sm:px-8 sm:py-4 text-white transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-medium text-base sm:text-lg">
                    {data?.careers?.joinUs?.button}
                  </span>
                  <ChevronRight className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <motion.span
                    className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-transform duration-500 ease-out group-hover:translate-x-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  ></motion.span>
                </motion.a>
              </div>

              {/* Right side: Visual element */}
              <motion.div
                variants={itemVariants}
                className="relative flex-1 h-[200px] sm:h-[300px] md:h-[400px] w-full max-w-md mt-6 md:mt-0"
                whileInView={{ scale: [0.9, 1], opacity: [0.8, 1] }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Abstract shapes */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-green-200 dark:border-green-800/50 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-emerald-200 dark:border-emerald-800/50 rounded-full"
                    />

                    {/* Central element */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0px 0px 20px rgba(16, 185, 129, 0.3)",
                            "0px 0px 30px rgba(16, 185, 129, 0.5)",
                            "0px 0px 20px rgba(16, 185, 129, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                      >
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="text-white text-3xl sm:text-5xl font-bold"
                        >
                          {"Level"}
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    {/* Floating icons */}
                    {[
                      { icon: "💻", top: "15%", right: "20%" },
                      { icon: "🚀", bottom: "20%", left: "15%" },
                      { icon: "🌱", top: "30%", left: "20%" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="absolute text-2xl"
                        style={{
                          top: item.top,
                          bottom: item.bottom,
                          left: item.left,
                          right: item.right,
                        }}
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          y: [0, -10, 0],
                        }}
                        transition={{
                          opacity: { duration: 0.5, delay: 0.8 + index * 0.2 },
                          scale: { duration: 0.5, delay: 0.8 + index * 0.2 },
                          rotate: { duration: 0.5, delay: 0.8 + index * 0.2 },
                          y: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          },
                        }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
                  {/* Scroll indicator */}
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-40 flex flex-col items-center justify-self-end"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-sm text-gray-500 dark:text-gray-400 mb-2"
              >
                {data?.careers?.scrollToExplore || "Scroll to Explore"}
              </motion.span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-green-500 rounded-full"
                />
              </motion.div>
            </motion.div>
        </div>


      </div>

      {/* Horizontal Scroll Section */}
      {/* <HorizontalScroll /> */}

      <div className="h-full max-w-[1900px] mx-auto">
        <div className="scroll-smooth">
          {/* Navigation Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container px-4 sm:px-10 m-auto my-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col md:flex-row justify-between"
            >
              <div className="order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-md text-gray-700 dark:text-gray-300 mb-3"
                >
                  {data?.careers?.navSection?.title || "Quick Navigation"}
                </motion.div>
                <div className="flex-col flex gap-3">
                  {data?.careers?.navSection?.links?.map(
                    (
                      link: {
                        name: string;
                        href: string;
                      },
                      index: number
                    ) => (
                      <motion.a
                        key={index}
                        href={`${link.href}`}
                        rel={link.href === "/about" ? "canonical" : ""}
                        className="group lg:text-2xl text-gray-900 dark:text-white font-semibold text-left text-base md:text-xl flex items-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="relative overflow-hidden">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight
                            className="ml-2 transition-opacity duration-300"
                            size={18}
                          />
                        </motion.div>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2 mb-6 md:mb-0 text-lg md:text-2xl dark:text-white max-w-full w-[420px] text-gray-900"
              >
                {data?.careers?.navSection?.description ||
                  "Explore our career opportunities and learn about our company culture, benefits, and values."}
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Open Positions Section */}
          <motion.section
            id="open-positions"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container px-4 sm:px-10 m-auto my-20 scroll-mt-[100px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="text-3xl md:text-5xl mb-4 font-bold"
              >
                {data?.careers?.openPositions?.title || "Open Positions"}
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500"
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
              {data?.careers?.openPositions?.positions.map(
                (
                  position: {
                    title: string;
                    location: string;
                  },
                  index: number
                ) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        bounce: 0.4,
                      }}
                    >
                      <motion.a
                        className="group flex cursor-pointer items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-100 dark:hover:shadow-none"
                        href="/contact"
                        whileHover={{
                          scale: 1.03,
                          boxShadow:
                            "0 10px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div>
                          <motion.h2
                            className="text-lg md:text-2xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {position.title}
                          </motion.h2>
                          <motion.p
                            className="md:text-lg text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {position.location}
                          </motion.p>
                        </div>
                        <motion.div
                          className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-green-600 dark:group-hover:bg-green-600 transition-colors duration-300"
                          whileHover={{ rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  );
                }
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
              }}
              className="m-auto mt-16 max-w-6xl justify-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center font-semibold text-2xl"
              >
                {data?.careers?.optionalRequision?.title ||
                  "Don't see a position that fits?"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-center text-base"
              >
                {data?.careers?.optionalRequision?.description ||
                  "Send your resume to"}{" "}
                <motion.a
                  href="mailto:level.edu.careers.uz@gmail.com"
                  className="text-green-600 dark:text-green-400 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  level.edu.careers.uz@gmail.com
                </motion.a>
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Benefits Section with Animated Cards */}
          <motion.section
            ref={benefitsRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container px-4 sm:px-10 m-auto my-20 scroll-mt-24"
            id="benefits"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="text-3xl md:text-5xl mb-4 font-bold"
              >
                {data?.careers?.benefits?.title || "Benefits & Perks"}
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto"
              ></motion.div>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {data?.careers?.benefits?.desc}
              </motion.p>
            </motion.div>

            <div className="container mx-auto px-4 lg:px-16 mt-6 flex flex-wrap gap-6 justify-center">
              {data?.careers?.benefits?.cards.map(
                (
                  card: {
                    icon: string;
                    title: string;
                    image: string;
                    desc: string;
                  },
                  index: number
                ) => {
                  const IconComponent = () => {
                    switch (card.icon) {
                      case "/flexible_hours.svg":
                        return <Coffee className="w-6 h-6" />;
                      case "/collaborative_environment.svg":
                        return <Award className="w-6 h-6" />;
                      case "/high-competetive-offers.svg":
                        return <Award className="w-6 h-6" />;
                      case "/Career_development.svg":
                        return <Clock className="w-6 h-6" />;
                    }
                  };

                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow:
                          "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      <BenefitCard
                        icon={<IconComponent />}
                        title={card.title}
                        hoverImage={card.icon}
                        desc={card.desc}
                      />
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.section>

          {/* Recruitment Process Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="my-20 scroll-mt-24  py-20 container"
            id="recruitment-process"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 sm:px-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="text-3xl md:text-5xl mb-4 font-bold text-center"
              >
                {data?.careers?.recruitmentProcess?.title ||
                  "Our Recruitment Process"}
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto mb-12"
              ></motion.div>
            </motion.div>

            <RecruitmentProcess
              data={data?.careers?.recruitmentProcess?.process}
              title={data?.careers?.recruitmentProcess?.title}
            />
          </motion.section>

          {/* Values Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container px-4 sm:px-10 m-auto my-20 scroll-mt-24"
            id="values"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="text-3xl md:text-5xl mb-4 font-bold text-gray-800 dark:text-white"
              >
                {data?.careers?.values?.title || "Our Values"}
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto"
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300"
            >
              {data?.careers?.values?.description ||
                "Our values define who we are and guide everything we do. They're at the heart of our culture and shape our interactions with each other and our customers."}
            </motion.div>

            <div className="mt-16 flex flex-col gap-20 md:gap-32">
              {data?.careers?.values?.valueList?.map(
                (
                  value: {
                    id: number;
                    title: string;
                    description: string;
                  },
                  index: number
                ) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 80, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        type: "spring",
                        bounce: 0.4,
                      }}
                    >
                      <Value
                        key={index}
                        index={value.id}
                        title={value.title}
                        description={value.description}
                      />
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-16 md:py-24 my-12 md:my-20 overflow-hidden"
          >
            {/* Background image with proper Next.js Image component for optimization */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/careers-img.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
                aria-hidden="true"
              />
              {/* Overlay for better text contrast */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-white/40 dark:bg-gray-700/70 backdrop-blur-[2px] mix-blend-multiply"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 sm:px-10 text-center relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm py-8 px-4 rounded-xl shadow-lg"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 drop-shadow-md"
                >
                  {data?.careers?.joinUs?.readytoJoin}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md"
                >
                  {data?.careers?.joinUs?.desc}
                  resume.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.a
                  href="#open-positions"
                  className="px-6 py-3 mt-2 md:px-8 md:py-4 bg-white text-green-600 hover:bg-green-50 rounded-full font-medium text-base md:text-lg transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {data?.careers?.joinUs?.button}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
      {/* </ScrollAnimateWrapper> */}
    </>
  );
}

export default Careers;
