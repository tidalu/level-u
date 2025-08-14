import { useRef, useState, useEffect } from "react"
import { Play, Pause, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true) // autoplay means we start playing
  const [isHovered, setIsHovered] = useState(false) // for showing/hiding controls

  // Autoplay & loop setup
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => setIsPlaying(false)) // handle autoplay restrictions
      video.loop = true
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        video.requestFullscreen()
      }
    }
  }

  return (
    <div
      className="relative bg-black rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full"
        playsInline
        muted
        autoPlay
        loop
        onClick={togglePlay} // single click = play/pause
        onDoubleClick={(e) => {
          e.preventDefault()
          toggleFullscreen()
        }} // double click = fullscreen
      />

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 w-full px-4 bg-black/50 flex flex-col gap-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Play/Pause */}
          <Button size="icon" variant="ghost" onClick={togglePlay}>
            {isPlaying ? <Pause /> : <Play />}
          </Button>

          {/* Fullscreen */}
          <Button size="icon" variant="ghost" onClick={toggleFullscreen}>
            <Maximize />
          </Button>
        </div>
      </div>
    </div>
  )
}
