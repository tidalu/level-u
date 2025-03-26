"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

interface ScrollToFormButtonProps {
  text?: string
  className?: string
  animated?: boolean
}

const ScrollToFormButton = ({ text = "Get Started", className = "", animated = true }: ScrollToFormButtonProps) => {
  // Function to scroll to form and focus on the first input
  const handleScrollToForm = () => {
    // Find the form element - adjust the selector based on your actual form
    const formElement = document.getElementById("study-abroad-form")
    
    if (formElement) {
      // Scroll to the form with smooth behavior
      formElement.scrollIntoView({ behavior: "smooth", block: "center" })
      
      // After scrolling, focus on the first input field
      setTimeout(() => {
        const firstInput = formElement.querySelector("input, select, textarea") as HTMLElement
        if (firstInput) {
          firstInput.focus()
        }
      }, 800) // Delay to allow smooth scrolling to complete
    }
  }

  return animated ? (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 ${className}`}
      onClick={handleScrollToForm}
    >
      {text}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ArrowRight className="ml-2 w-5 h-5" />
      </motion.div>
    </motion.button>
  ) : (
    <Button 
      className={`inline-flex items-center ${className}`}
      onClick={handleScrollToForm}
    >
      {text}
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  )
}

export default ScrollToFormButton
