"use client"
import Hero from "@/components/hero"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLocalizedData } from "@/lib/useLocalizedData"
import { GraduationCap, Globe, Award, Users, ArrowRight, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

function StudyAbroad() {
  const data = useLocalizedData()
  const [activeDestination, setActiveDestination] = useState<number | null>(null)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    // Set page as loaded after a small delay for entrance animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const destinations = [
    {
      name: "USA",
      flag: "🇺🇸",
      image: "/usa-flag.jpg",
    },
    {
      name: "UK",
      flag: "🇬🇧",
      image: "/uk-flag.jpg",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "/canada-flag.jpg",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "/australia-flag.jpg",
    },
  ]

  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      title: data?.hero?.whyStudyAbroad?.reasons[0].title || "World-Class Education",
      description:  data?.hero?.whyStudyAbroad?.reasons[0].description || "Access to top-ranked universities and cutting-edge programs",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: data?.hero?.whyStudyAbroad?.reasons[1].title  || "Cultural Experience",
      description: data?.hero?.whyStudyAbroad?.reasons[1].description || "Immerse yourself in new cultures and expand your worldview",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: data?.hero?.whyStudyAbroad?.reasons[2].title  || "Career Opportunities",
      description: data?.hero?.whyStudyAbroad?.reasons[2].description || "Enhance your resume and open doors to international careers",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: data?.hero?.whyStudyAbroad?.reasons[3].title || "Global Network",
      description:
      data?.hero?.whyStudyAbroad?.reasons[3].description || "Build connections with students and professionals from around the world",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  }

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
  }

  return (
    <motion.div
      className="relative mx-auto px-3 pt-36 mb-16"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${index % 2 === 0 ? "bg-green-500/10" : "bg-emerald-400/10"}`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: index * 0.2 },
              scale: { duration: 0.8, delay: index * 0.2 },
              y: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 5 + index,
                ease: "easeInOut",
              },
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 7 + index,
                ease: "easeInOut",
              },
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 9 + index,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Hero Section with Form */}
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <Hero />
      </motion.div>

      {/* Destinations Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-screen-xl mx-auto px-4 py-16"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-green-900 dark:text-green-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            {data?.hero?.popularDestinations?.title || "Popular Study Destinations"}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto mb-4"
          ></motion.div>
          <motion.p
            className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data?.hero?.popularDestinations?.desc ||
              "Explore educational opportunities in these top destinations for international students"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
              }}
              onHoverStart={() => setActiveDestination(index)}
              onHoverEnd={() => setActiveDestination(null)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: activeDestination === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <motion.div
                  className="absolute top-3 right-3 text-2xl"
                  animate={
                    activeDestination === index
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {destination.flag}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeDestination === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl text-green-800 dark:text-green-200 flex items-center">
                  <MapPin className="w-5 h-5 mr-1 text-green-600" />
                  {destination.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {data?.hero?.popularDestinations?.discover || "Discover educational opportunities"}
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeDestination === index ? 1 : 0,
                    height: activeDestination === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 overflow-hidden"
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center"
                  >
                    {data?.hero?.popularDestinations?.learnMore}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-green-50 dark:bg-gray-900 py-16 relative overflow-hidden"
      >
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-green-900 dark:text-green-50 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              {data?.hero?.whyStudyAbroad?.title || "Why Study Abroad?"}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto mb-4"
            ></motion.div>
            <motion.p
              className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data?.hero?.whyStudyAbroad?.desc ||
                "Studying abroad offers numerous advantages that can transform your life and career"}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <motion.div
                  className="mb-4 bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-neutral-600 dark:text-neutral-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {benefit.description}
                </motion.p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-screen-xl mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
          }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-8 md:p-12 rounded-2xl shadow-md text-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-green-900 dark:text-green-50 mb-4 relative z-10"
          >
            {data?.hero?.readyToBegin?.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8 relative z-10"
          >
            {data?.hero?.readyToBegin?.desc}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 relative z-10"
          >
            {data?.hero?.readyToBegin?.button}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
            >
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.div>
          </motion.button>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-200/30 dark:bg-green-700/20 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-200/30 dark:bg-emerald-700/20 rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section>

      {/* Testimonial Section - Commented out in original code
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-50 mb-4">
            {data?.testimonials?.title || "Student Success Stories"}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {data?.testimonials?.description ||
              "Hear from students who have transformed their lives through our study abroad programs"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                <Image src="/profile-1-pic.jpg" alt="Student" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">
                  {data?.testimonials?.student1?.name || "Sarah Johnson"}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {data?.testimonials?.student1?.program || "MBA, University of Toronto"}
                </p>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 italic">
              {data?.testimonials?.student1?.quote ||
                '"Studying abroad was the best decision I ever made. The experience broadened my horizons and opened up incredible career opportunities."'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                <Image src="/profile-3-pic.jpg" alt="Student" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">
                  {data?.testimonials?.student2?.name || "David Chen"}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {data?.testimonials?.student2?.program || "Computer Science, University of Melbourne"}
                </p>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 italic">
              {data?.testimonials?.student2?.quote ||
                '"The support I received throughout my application process was exceptional. Now I\'m working at my dream tech company thanks to my international degree."'}
            </p>
          </motion.div>
        </div>
      </motion.section> */}
    </motion.div>
  )
}

export default StudyAbroad

