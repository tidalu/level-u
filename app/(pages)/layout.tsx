"use client"

import type React from "react"

import { lazy, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"
const Footer = lazy(() => import("@/components/footer"))
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/LanguageContext"
import { ToastContainer } from "react-toastify"
import Call from "@/components/Call"
import UnderConstructionWrapper from "@/components/under-construction-wrapper"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  // Simulate page loading
  useEffect(() => {
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
  }, [])

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
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
                    rotate: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear" },
                  }}
                  className="flex flex-col items-center"
                >
                  <Loader2 className="h-12 w-12 text-green-600 dark:text-green-500" />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
                  >
                    Loading  content...
                  </motion.p>
                </motion.div>
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

