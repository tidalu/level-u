"use client"

import { Construction, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react"
import { type ReactNode, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageContext"

interface UnderConstructionWrapperProps {
  children: ReactNode
}

export default function UnderConstructionWrapper({ children }: UnderConstructionWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage() // Get the current language from the context

  // Animation entrance effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Static language-specific text based on language
  const title =
    language === "uz"
      ? "Qurilish Jarayonida"
      : language === "ru"
        ? "В разработке"
        : "Under Construction"
  const message =
    language === "uz"
      ? "Ushbu sahifa hozirda qurilmoqda. Ba'zi funksiyalar kutilganidek ishlamasligi mumkin."
      : language === "ru"
        ? "Эта страница находится в стадии разработки. Некоторые функции могут не работать как ожидается."
        : "This page is currently being built. Some features may not work as expected."

  return (
    <div className="relative">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="fixed right-0 top-1/3 z-50"
          >
            <div className="flex items-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                  flex items-center bg-gradient-to-r from-orange-500 to-amber-500
                  shadow-lg rounded-l-lg overflow-hidden transition-all duration-300
                  ${isExpanded ? "px-3 py-2" : "px-2 py-2"}
                `}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 0 : [0, -10, 0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: isExpanded ? 0 : Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="relative"
                >
                  <Construction className="h-5 w-5 text-white" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, 0, 0, -5, 0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    times: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
                    repeatDelay: 1,
                  }}
                >
                  {isExpanded ? (
                    <ChevronRight className="h-5 w-5 text-white ml-1" />
                  ) : (
                    <ChevronLeft className="h-5 w-5 text-white ml-1" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-amber-500 to-yellow-400 py-2 pr-4 rounded-tr-lg rounded-br-lg shadow-lg"
                  >
                    <div className="flex items-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                      >
                        <AlertTriangle className="h-5 w-5 text-white mx-2" />
                        <p className="text-white font-medium text-sm whitespace-nowrap">{title}</p>
                      </motion.div>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/90 text-xs mt-1 p-3 max-w-[200px]"
                    >
                      {message}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
}