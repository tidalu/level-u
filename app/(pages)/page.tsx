"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Categories from "@/components/categories"
import LandingBanner from "@/components/landing-banner"
import Offer from "@/components/offer"
import PopulaActivities from "@/components/popula-activities"
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper"
import { useLocalizedData } from "@/lib/useLocalizedData"
import { PreferenceDialog } from "@/components/PreferenceDialog"
import Cookies from "js-cookie"
import { ChevronDown, Sparkles } from "lucide-react"

const LandingPage = () => {
  // Initialize savedShow using cookies instead of localStorage
  const savedShow = Cookies.get("showPreference") === "true"
  const [show, setShow] = useState(savedShow || false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const data = useLocalizedData()
  const scrollRef = useRef(null)

  // Scroll animation for the chevron
  const { scrollYProgress } = useScroll()
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const chevronY = useTransform(scrollYProgress, [0, 0.1], [0, 20])

  useEffect(() => {
    setShow(savedShow)

    // Set page as loaded after a small delay for entrance animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [savedShow])

  function handleFeedback(liked: boolean): void {
    console.log("User feedback:", liked ? "Liked" : "Disliked")
  }

  // Scroll to content function
  const scrollToContent = () => {
    if (scrollRef.current) {
      ;(scrollRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const fadeInUpVariants = {
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

  // Floating elements for visual interest
  const floatingElements = [
    { size: 60, color: "bg-green-500/10", delay: 0, duration: 8, top: "10%", left: "5%" },
    { size: 40, color: "bg-emerald-400/10", delay: 1, duration: 9, top: "20%", right: "15%" },
    { size: 80, color: "bg-teal-500/10", delay: 2, duration: 10, bottom: "15%", right: "10%" },
    { size: 50, color: "bg-green-600/10", delay: 1.5, duration: 7, bottom: "25%", left: "20%" },
    { size: 30, color: "bg-emerald-300/10", delay: 0.5, duration: 6, top: "40%", right: "30%" },
  ]

  return (
    <motion.div
      className="h-full max-w-[1920px] mx-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${el.color}`}
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
                duration: el.duration,
                ease: "easeInOut",
              },
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: el.duration * 1.2,
                ease: "easeInOut",
              },
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: el.duration * 1.5,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Landing banner with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative"
      >
        <ScrollAnimateWrapper>
          <LandingBanner />
        </ScrollAnimateWrapper>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          style={{ opacity: chevronOpacity, y: chevronY }}
          onClick={scrollToContent}
        >
          <motion.span
            className="text-sm text-gray-600 dark:text-gray-300 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Scroll to explore
          </motion.span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-green-600 dark:text-green-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Preference Dialog */}
      <AnimatePresence>
        {!show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <PreferenceDialog />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto" ref={scrollRef}>
        {/* Offer section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <Offer />
        </motion.div>

        {/* Categories section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="my-16 px-3 lg:px-16 mx-auto"
        >
          <motion.div className="relative mb-10">
            <motion.h2
              variants={itemVariants}
              className="text-black dark:text-white font-bold text-2xl 2xl:text-3xl text-center"
            >
              {data?.classPage?.homeContent?.title}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-[3px] w-[80px] bg-green-600 dark:bg-green-500 mx-auto my-4"
            ></motion.div>

            <motion.p variants={itemVariants} className="text-[12px] 2xl:text-lg text-center text-gray-500 mt-4">
              {data?.classPage?.homeContent?.subtitle}
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 text-green-500/20 dark:text-green-400/20"
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Sparkles className="h-12 w-12" />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Categories />
          </motion.div>
        </motion.section>

        {/* Popular activities section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <PopulaActivities />
        </motion.div>

        {/* Feedback section (commented out) */}
        {/* <FeedbackOwlDemo /> */}
      </div>
    </motion.div>
  )
}

export default LandingPage

