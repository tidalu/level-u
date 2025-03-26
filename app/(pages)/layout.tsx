"use client"

import type React from "react"
import { lazy, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
const Footer = lazy(() => import("@/components/footer"))
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/LanguageContext"
import { ToastContainer } from "react-toastify"
import Call from "@/components/Call"
import UnderConstructionWrapper from "@/components/under-construction-wrapper"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  // Use this to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  // Handle mounting first to prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Simulate page loading - only run after component is mounted
  useEffect(() => {
    if (!isMounted) return

    // First hide the loading spinner
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    // Then show the content with a slight delay for a smooth transition
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 1000)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(contentTimer)
    }
  }, [isMounted])

  function handleFeedback(liked: boolean): void {
    if (liked) {
      console.log("Thank you for your positive feedback!")
    } else {
      console.log("Thank you for your feedback! We will strive to improve.")
    }
  }

  // Background elements for visual interest
  const backgroundElements = [
    { size: 300, color: "bg-green-500/5", delay: 0, duration: 20, top: "10%", left: "5%" },
    { size: 200, color: "bg-emerald-400/5", delay: 5, duration: 25, top: "60%", right: "10%" },
    { size: 400, color: "bg-teal-500/5", delay: 10, duration: 30, bottom: "5%", left: "20%" },
  ]

  // Return a simple div during server rendering and initial mount
  // This prevents hydration errors by ensuring server and client render the same initial content
  if (!isMounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="w-32 h-32 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">L</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>
        <main className="relative min-h-screen overflow-hidden">
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {backgroundElements.map((el, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${el.color} blur-3xl`}
                style={{
                  width: el.size,
                  height: el.size,
                  top: el.top,
                  left: el.left,
                  right: el.right,
                  bottom: el.bottom,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.7,
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  opacity: { duration: 2 },
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: el.duration,
                    delay: el.delay,
                    ease: "easeInOut",
                  },
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: el.duration * 1.2,
                    delay: el.delay,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>

          {/* Loading screen */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Animated Logo */}
                  <motion.div
                    className="relative w-32 h-32 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated circles */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-green-200 dark:border-green-800"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                        borderColor: ["rgb(187, 247, 208)", "rgb(74, 222, 128)", "rgb(187, 247, 208)"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-green-400 dark:border-green-600"
                      animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [360, 180, 0],
                        borderColor: ["rgb(74, 222, 128)", "rgb(34, 197, 94)", "rgb(74, 222, 128)"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    />

                    {/* Central logo */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          boxShadow: [
                            "0px 0px 20px rgba(16, 185, 129, 0.3)",
                            "0px 0px 40px rgba(16, 185, 129, 0.5)",
                            "0px 0px 20px rgba(16, 185, 129, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-white text-3xl font-bold">L</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Loading text with typing effect */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.h3
                      className="text-xl font-bold text-green-600 dark:text-green-400 mb-2"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      LEVEL
                    </motion.h3>

                    <div className="flex items-center justify-center space-x-1">
                      {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map((letter, index) => (
                        <motion.span
                          key={index}
                          className="text-gray-600 dark:text-gray-300 inline-block"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            type: "spring",
                            stiffness: 100,
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <motion.div
                      className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-48 mt-4 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 1.6,
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Floating elements */}
                  {[1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${i % 2 === 0 ? "bg-green-500/20" : "bg-emerald-400/20"}`}
                      style={{
                        width: `${20 + i * 10}px`,
                        height: `${20 + i * 10}px`,
                        top: `${i * 30 - 50}px`,
                        left: `${i * 40 - 60 + i * 20}px`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 0.8,
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.3, delay: i * 0.2 },
                        y: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 2 + i,
                          ease: "easeInOut",
                        },
                        x: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 3 + i,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="mx-auto h-full w-full">
              <UnderConstructionWrapper>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: showContent ? 0 : 20, opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Header />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="min-h-screen"
                >
                  {children}
                </motion.div>

                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: showContent ? 1 : 0.9, opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Call />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: showContent ? 0 : 50, opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Footer />
                </motion.div>

                {/* <FeedbackOwl delayInSeconds={10} onFeedbackSubmit={handleFeedback} /> */}
              </UnderConstructionWrapper>
            </div>
          </motion.div>

          {/* Page transition overlay */}
          <AnimatePresence>
            {!showContent && !isLoading && (
              <motion.div
                className="fixed inset-0 bg-green-50 dark:bg-green-950 z-40 pointer-events-none"
                initial={{ scaleY: 1, originY: 0 }}
                animate={{ scaleY: 0, originY: 0 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              />
            )}
          </AnimatePresence>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default LandingLayout

