"use client"

import { Construction, ChevronDown, ChevronUp } from "lucide-react"
import { type ReactNode, useState, useEffect } from "react"

interface UnderConstructionWrapperProps {
  children: ReactNode
}

export default function UnderConstructionWrapper({ children }: UnderConstructionWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  // Animation entrance effect
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${isExpanded ? "w-auto" : "w-auto rounded-full"}`}
        style={{ maxWidth: "90%" }}
      >
        <div
          className={`
          flex items-center bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 
          shadow-lg rounded-b-lg overflow-hidden transition-all duration-300
          ${isExpanded ? "px-6 py-2" : "px-4 py-1 rounded-full"}
        `}
        >
          <div className="flex items-center">
            <div className="relative mr-3">
              <Construction className={`h-5 w-5 text-white ${isExpanded ? "animate-bounce" : ""}`} />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </div>

            {isExpanded && (
              <div className="text-white font-medium text-sm max-w-xs md:max-w-md overflow-hidden transition-all duration-300">
                <div className="flex items-center">
                  <span className="animate-marquee whitespace-nowrap">
                    🚧 This page is currently under construction. Some features may not work as expected. 🚧
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-3 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label={isExpanded ? "Collapse warning" : "Expand warning"}
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-white" />
              ) : (
                <ChevronDown className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isExpanded ? "pt-12" : "pt-10"} transition-all duration-300`}>{children}</div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

