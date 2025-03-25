"use client"

import { Flame } from "lucide-react"
import { Tooltip } from "@nextui-org/tooltip"
import { cn } from "@/lib/utils"

interface IntensityIndicatorProps {
  intensity: number | string
  className?: string
}

export const IntensityIndicator = ({ intensity, className = "" }: IntensityIndicatorProps) => {
  // Parse the intensity value (handles both numeric and string formats like "2 / 4")
  const parseIntensity = (value: number | string): { current: number; max: number } => {
    // If it's already a number
    if (typeof value === "number") {
      // Check if it's a decimal between 0 and 1
      if (value >= 0 && value <= 1) {
        return { current: Math.round(value * 4), max: 4 }
      }
      // Otherwise assume it's a fraction like 2/4
      const parts = String(value)
        .split("/")
        .map((part) => Number.parseFloat(part.trim()))
      if (parts.length === 2) {
        return { current: parts[0], max: parts[1] }
      }
      // Default to the value as current with max of 4
      return { current: value, max: 4 }
    }

    // If it's a string, try to parse it
    const parts = String(value)
      .split("/")
      .map((part) => Number.parseFloat(part.trim()))
    if (parts.length === 2) {
      return { current: parts[0], max: parts[1] }
    }

    // Default
    return { current: 2, max: 4 }
  }

  const { current, max } = parseIntensity(intensity)
  const intensityLevel = current
  const maxLevel = max
  const intensityRatio = intensityLevel / maxLevel

  // Get color based on intensity ratio
  const getIntensityColor = (ratio: number) => {
    if (ratio <= 0.25) return "bg-emerald-500"
    if (ratio <= 0.5) return "bg-green-500"
    if (ratio <= 0.75) return "bg-amber-500"
    if (ratio < 1) return "bg-orange-500"
    return "bg-red-500"
  }

  const getIntensityText = (ratio: number) => {
    if (ratio <= 0.25) return "Beginner"
    if (ratio <= 0.5) return "Easy"
    if (ratio <= 0.75) return "Moderate"
    if (ratio < 1) return "Advanced"
    return "Intense"
  }

  const mainColor = getIntensityColor(intensityRatio)
  const intensityText = getIntensityText(intensityRatio)

  return (
    
      <div className={cn("flex items-center gap-1.5", className)}>
        <div className="relative h-4 w-full max-w-[100px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${mainColor}`}
            style={{ width: `${intensityRatio * 100}%` }}
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

        <div className="flex items-center gap-0.5">
          <Flame
            className={cn(
              "h-4 w-4 transition-all duration-300",
              intensityRatio <= 0.25
                ? "text-emerald-500"
                : intensityRatio <= 0.5
                  ? "text-green-500"
                  : intensityRatio <= 0.75
                    ? "text-amber-500"
                    : intensityRatio < 1
                      ? "text-orange-500"
                      : "text-red-500",
            )}
            fill={intensityRatio >= 0.5 ? "currentColor" : "none"}
            fillOpacity={intensityRatio >= 0.5 ? 0.3 : 0}
          />
          <span className="text-xs font-medium">
            {current}/{max}
          </span>
        </div>
      </div>
  )
}

