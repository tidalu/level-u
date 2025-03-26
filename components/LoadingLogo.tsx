"use client"

import { motion } from "framer-motion"

interface LoadingLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

const LoadingLogo = ({ size = "md", showText = true }: LoadingLogoProps) => {
  // Size mappings
  const sizes = {
    sm: {
      container: "w-20 h-20",
      circles: "border-2",
      logo: "w-12 h-12",
      text: "text-xl",
      letter: "text-2xl",
    },
    md: {
      container: "w-32 h-32",
      circles: "border-4",
      logo: "w-20 h-20",
      text: "text-2xl",
      letter: "text-3xl",
    },
    lg: {
      container: "w-40 h-40",
      circles: "border-4",
      logo: "w-24 h-24",
      text: "text-3xl",
      letter: "text-4xl",
    },
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Animated Logo */}
      <motion.div
        className={`relative ${sizes[size].container} mb-6`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated circles */}
        <motion.div
          className={`absolute inset-0 rounded-full ${sizes[size].circles} border-green-200 dark:border-green-800`}
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
          className={`absolute inset-0 rounded-full ${sizes[size].circles} border-green-400 dark:border-green-600`}
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
            className={`${sizes[size].logo} bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg`}
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
            <span className={`text-white font-bold ${sizes[size].letter}`}>L</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {showText && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h3
            className={`font-bold text-green-600 dark:text-green-400 mb-2 ${sizes[size].text}`}
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
      )}
    </div>
  )
}

export default LoadingLogo

