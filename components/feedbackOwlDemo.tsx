"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { FeedbackOwl } from "./feedbackOwl"

export default function FeedbackOwlDemo() {
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Feedback Owl Demo</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md text-center">
        Click the button below to show the feedback owl immediately instead of waiting for 60 seconds.
      </p>

      <Button onClick={() => setShowFeedback(true)}>Show Feedback Owl</Button>

      {showFeedback && (
        <FeedbackOwl
          delayInSeconds={0}
          onFeedbackSubmit={(liked) => {
            console.log("User feedback:", liked ? "Liked" : "Disliked")
            setTimeout(() => setShowFeedback(false), 3000)
          }}
        />
      )}
    </div>
  )
}

