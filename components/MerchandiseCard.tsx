"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface MerchandiseItem {
  name: string
  points: number
  images: string[]
}

interface MerchandiseCardProps {
  item: MerchandiseItem
  onRedeem: (itemName: string) => void
}

export default function MerchandiseCard({ item, onRedeem }: MerchandiseCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryImageIndex, setGalleryImageIndex] = useState(0)

  // Function to go to the next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length)
  }, [item.images.length])

  // Function to go to the previous image
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length)
  }, [item.images.length])

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextImage()
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isPaused, nextImage])

  // Open gallery with the current image
  const openGallery = (index: number) => {
    setGalleryImageIndex(index)
    setIsGalleryOpen(true)
    setIsPaused(true) // Pause the auto-rotation when gallery is open
  }

  // Navigate to next image in gallery
  const nextGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryImageIndex((prevIndex) => (prevIndex + 1) % item.images.length)
  }

  // Navigate to previous image in gallery
  const prevGalleryImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryImageIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length)
  }

  // Resume auto-rotation when gallery is closed
  const handleGalleryClose = () => {
    setIsGalleryOpen(false)
    setIsPaused(false)
  }

  return (
    <>
      <Card className="overflow-hidden group">
        <CardHeader className="pb-0">
          <div
            className="aspect-square relative overflow-hidden rounded-t-lg cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image carousel */}
            <div className="relative w-full h-full">
              {item.images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  onClick={() => openGallery(index)}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${item.name} - Image ${index + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </div>
              ))}

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6">
          <CardTitle className="text-lg sm:text-xl">{item.name}</CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
            {item.points} points
          </CardDescription>
          <div className="mt-3 sm:mt-4">
            <Button className="w-full text-sm sm:text-base" onClick={() => onRedeem(item.name)}>
              Redeem
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Image Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={handleGalleryClose}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-gray-800">
          <DialogHeader className="p-4 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white">
                {item.name} - Image {galleryImageIndex + 1} of {item.images.length}
              </DialogTitle>
              <DialogClose className="rounded-full p-1.5 bg-black/50 hover:bg-black/80 text-white">
                <X className="h-5 w-5" />
              </DialogClose>
            </div>
          </DialogHeader>

          <div className="relative h-[80vh] w-full flex items-center justify-center">
            {/* Main gallery image */}
            <div className="relative w-full h-full">
              <Image
                src={item.images[galleryImageIndex] || "/placeholder.svg"}
                alt={`${item.name} - Gallery Image ${galleryImageIndex + 1}`}
                fill
                className="object-contain "
                priority
              />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail navigation */}
          <div className="p-4 bg-black flex items-center justify-center gap-2 overflow-x-auto">
            {item.images.map((src, index) => (
              <button
                key={index}
                onClick={() => setGalleryImageIndex(index)}
                className={`relative w-16 h-16 rounded overflow-hidden transition-all ${
                  index === galleryImageIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-black"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`${item.name} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

