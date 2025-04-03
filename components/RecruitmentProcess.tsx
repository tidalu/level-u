"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RecruitmentStep {
  stepIndex: number
  stepTitle: string
  stepDescription: string
  stepVideo: string
}

interface RecruitmentProcessProps {
  data: RecruitmentStep[]
  title: string
}

export default function RecruitmentProcess({ data, title }: RecruitmentProcessProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState<RecruitmentStep | undefined>(data?.[0])

  useEffect(() => {
    setCurrentStep(data?.[0])
  }, [data])

  const handleStepChange = (index: number) => {
    setSelectedStepIndex(index)
    setCurrentStep(data[index])
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStepIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card className="overflow-hidden border-2">
                <div className="aspect-video w-full">
                  <video
                    src={currentStep?.stepVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                    aria-label={`Video demonstrating ${currentStep?.stepTitle}`}
                  />
                </div>
                <CardHeader className="pt-6 pb-2">
                  <h3 className="text-2xl font-bold">{currentStep?.stepTitle}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{currentStep?.stepDescription}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="order-1 lg:order-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">{title}</h1>

          <div className="space-y-3">
            {data?.map((step, index) => (
              <Button
                key={index}
                variant={selectedStepIndex === index ? "default" : "outline"}
                className={cn(
                  "w-full justify-start text-left h-auto py-4 px-6 group transition-all",
                  selectedStepIndex === index ? "bg-primary text-primary-foreground" : "",
                )}
                onClick={() => handleStepChange(index)}
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center rounded-full bg-background/20 w-8 h-8 text-sm font-bold">
                    {String(step.stepIndex).padStart(2, "0")}
                  </span>
                  <span className="text-lg">{step.stepTitle}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

