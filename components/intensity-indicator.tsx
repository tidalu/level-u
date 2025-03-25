"use client"

import { Flame } from "lucide-react"
import { Tooltip } from "@nextui-org/tooltip"
import { cn } from "@/lib/utils"

interface IntensityIndicatorProps {
  intensity: string
  className?: string
}

export const IntensityIndicator = ({ intensity, className = "" }: IntensityIndicatorProps) => {
  // Map intensity text to a numeric value (1-5)
  const getIntensityLevel = (intensity: string): number => {
    const lowTerms = ["beginner", "easy", "low", "light", "basic"]
    const mediumTerms = ["intermediate", "medium", "moderate", "average"]
    const highTerms = ["advanced", "high", "intense", "hard", "expert"]
    const veryHighTerms = ["extreme", "very high", "professional", "elite"]

    const lowerIntensity = String(intensity).toLowerCase()

    if (lowTerms.some((term) => lowerIntensity.includes(term))) return 1
    if (mediumTerms.some((term) => lowerIntensity.includes(term))) return 3
    if (highTerms.some((term) => lowerIntensity.includes(term))) return 4
    if (veryHighTerms.some((term) => lowerIntensity.includes(term))) return 5

    //  for now we should modify content file
    
    return 3
  }

  const intensityLevel = getIntensityLevel(intensity)
  const maxLevel = 5

  // Get color based on intensity level
  const getIntensityColor = (level: number) => {
    if (level <= 1) return "bg-emerald-500"
    if (level <= 2) return "bg-green-500"
    if (level <= 3) return "bg-amber-500"
    if (level <= 4) return "bg-orange-500"
    return "bg-red-500"
  }

  const mainColor = getIntensityColor(intensityLevel)

  return (
    <Tooltip
      content={
        <div className="px-2 py-1">
          <p className="text-xs font-medium">Intensity: {intensity}</p>
          <p className="text-xs opacity-80">
            {intensityLevel <= 2
              ? "Suitable for beginners"
              : intensityLevel <= 3
                ? "Moderate challenge"
                : "High intensity workout"}
          </p>
        </div>
      }
      placement="bottom"
    >
      <div className={cn("flex items-center gap-1.5", className)}>
        <div className="relative h-4 w-full max-w-[100px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${mainColor}`}
            style={{ width: `${(intensityLevel / maxLevel) * 100}%` }}
          />

          {/* Intensity markers */}
          <div className="absolute inset-0 flex justify-between px-[3px]">
            {Array.from({ length: maxLevel }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-full w-0.5 bg-white/30 dark:bg-black/20",
                  i === 0 && "opacity-0", // Hide first divider
                )}
              />
            ))}
          </div>
        </div>

        <Flame
          className={cn(
            "h-4 w-4 transition-all duration-300",
            intensityLevel <= 1
              ? "text-emerald-500"
              : intensityLevel <= 2
                ? "text-green-500"
                : intensityLevel <= 3
                  ? "text-amber-500"
                  : intensityLevel <= 4
                    ? "text-orange-500"
                    : "text-red-500",
          )}
          fill={intensityLevel >= 3 ? "currentColor" : "none"}
          fillOpacity={intensityLevel >= 3 ? 0.3 : 0}
        />
      </div>
    </Tooltip>
  )
}

