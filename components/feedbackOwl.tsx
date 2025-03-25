"use client"

import { useState, useEffect } from "react"
import { X, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface FeedbackOwlProps {
  delayInSeconds?: number
  onFeedbackSubmit?: (liked: boolean) => void
  className?: string
}

export const FeedbackOwl = ({ delayInSeconds = 60, onFeedbackSubmit, className }: FeedbackOwlProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [blinking, setBlinking] = useState(false)

  // Blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 300)
    }, 3000)

    return () => clearInterval(blinkInterval)
  }, [])

  // Show feedback after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delayInSeconds * 1000)

    return () => clearTimeout(timer)
  }, [delayInSeconds])

  const handleFeedback = (liked: boolean) => {
    if (onFeedbackSubmit) {
      onFeedbackSubmit(liked)
    }
    setIsSubmitted(true)

    // Hide after showing thank you message
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsExiting(false)
    }, 500)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center",
        isExiting ? "animate-slide-out-top" : "animate-slide-in-top",
        className,
      )}
    >
      <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-lg p-4 flex items-center gap-4 max-w-md border border-t-0 border-gray-200 dark:border-gray-700">
        {/* Owl Animation */}
        <div className="relative w-16 h-16 flex-shrink-0">
          {/* Owl body */}
          <div className="absolute w-14 h-14 bg-amber-200 rounded-full left-1 top-1 animate-slight-bounce"></div>

          {/* Owl ears/horns */}
          <div className="absolute w-4 h-4 bg-amber-300 rounded-full left-1 top-0 transform -rotate-12"></div>
          <div className="absolute w-4 h-4 bg-amber-300 rounded-full right-1 top-0 transform rotate-12"></div>

          {/* Owl face */}
          <div className="absolute w-12 h-10 bg-amber-100 rounded-full left-2 top-3"></div>

          {/* Owl eyes */}
          <div className="absolute w-3.5 h-3.5 bg-white rounded-full left-4 top-5 flex items-center justify-center">
            <div
              className={`w-2 h-2 bg-gray-800 rounded-full ${blinking ? "h-0.5" : ""} transition-all duration-100`}
            ></div>
          </div>
          <div className="absolute w-3.5 h-3.5 bg-white rounded-full right-4 top-5 flex items-center justify-center">
            <div
              className={`w-2 h-2 bg-gray-800 rounded-full ${blinking ? "h-0.5" : ""} transition-all duration-100`}
            ></div>
          </div>

          {/* Owl beak */}
          <div className="absolute w-3 h-2 bg-orange-400 rounded-full left-1/2 top-8 transform -translate-x-1/2"></div>

          {/* Owl wings */}
          <div className="absolute w-4 h-8 bg-amber-300 rounded-full left-0 top-6 animate-wing-flap"></div>
          <div className="absolute w-4 h-8 bg-amber-300 rounded-full right-0 top-6 animate-wing-flap"></div>

          {/* Add keyframes for wing flap and bounce animations */}
          <style jsx>{`
            @keyframes wingFlap {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(15deg); }
            }
            
            @keyframes slightBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            
            .animate-wing-flap {
              animation: wingFlap 2s ease-in-out infinite;
            }
            
            .animate-slight-bounce {
              animation: slightBounce 3s ease-in-out infinite;
            }
            
            @keyframes slideInTop {
              from { transform: translateY(-100%); }
              to { transform: translateY(0); }
            }
            
            @keyframes slideOutTop {
              from { transform: translateY(0); }
              to { transform: translateY(-100%); }
            }
            
            .animate-slide-in-top {
              animation: slideInTop 0.5s forwards;
            }
            
            .animate-slide-out-top {
              animation: slideOutTop 0.5s forwards;
            }
          `}</style>
        </div>

        {/* Feedback Content */}
        <div className="flex-1">
          {!isSubmitted ? (
            <>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">How &apos;s your experience?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Do you like our website? We &apos;d love to know!
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 hover:bg-green-50 hover:text-green-600 hover:border-green-200"
                  onClick={() => handleFeedback(true)}
                >
                  <ThumbsUp size={16} />
                  <span>Yes</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                  onClick={() => handleFeedback(false)}
                >
                  <ThumbsDown size={16} />
                  <span>No</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="py-2">
              <h3 className="font-medium text-gray-900 dark:text-white">Thank you for your feedback!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">We appreciate your input.</p>
            </div>
          )}
        </div>

        {/* Close button */}
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6 rounded-full absolute top-2 right-2"
          onClick={handleClose}
        >
          <X size={14} />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}

