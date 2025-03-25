"use client"

import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface IntensityIndicatorProps {
  intensity: number
  className?: string
}

export const IntensityIndicator = ({ intensity, className = "" }: IntensityIndicatorProps) => {
  // Ensure intensity is between 0 and 1
  const normalizedIntensity = Math.min(Math.max(intensity, 0), 1)

  const max = 5
  // Round to nearest integer to avoid decimal display
  const current = Math.round(normalizedIntensity * max)
  const maxLevel = 5

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

  const mainColor = getIntensityColor(normalizedIntensity)
  const intensityText = getIntensityText(normalizedIntensity)

  return (
    <div className={cn("flex items-center gap-1.5 transition-all duration-500 group", className)}>
      <div className="relative h-4 w-full max-w-[100px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:shadow-sm">
        {/* Direct width setting instead of animation for more reliable updates */}
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ${mainColor} group-hover:brightness-110`}
          style={{
            width: `${normalizedIntensity * 100}%`,
          }}
        />

        {/* Intensity markers */}
        <div className="absolute inset-0 flex justify-between px-[3px]">
          {Array.from({ length: maxLevel }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-full w-0.5 bg-white/30 dark:bg-black/20 transition-all duration-500",
                i === 0 && "opacity-0", // Hide first divider
                "group-hover:bg-white/40 dark:group-hover:bg-black/30",
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-0.5 transition-all duration-500 group-hover:scale-110">
        <Flame
          className={cn(
            "h-4 w-4 transition-all duration-500",
            normalizedIntensity <= 0.25
              ? "text-emerald-500"
              : normalizedIntensity <= 0.5
                ? "text-green-500"
                : normalizedIntensity <= 0.75
                  ? "text-amber-500"
                  : normalizedIntensity < 1
                    ? "text-orange-500"
                    : "text-red-500",
            "group-hover:animate-pulse",
          )}
          fill={normalizedIntensity >= 0.5 ? "currentColor" : "none"}
          fillOpacity={normalizedIntensity}
        />
        <span className="text-xs font-medium transition-all duration-500 group-hover:font-semibold">
          {current}/{max}
        </span>
      </div>
    </div>
  )
}

