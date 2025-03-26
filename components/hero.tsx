"use client"

import React, { useEffect, useState } from "react"
import DockLive from "./magicui/dock-live"
import { Button } from "./ui/button"
import { grid } from "ldrs"
import { useLocalizedData } from "@/lib/useLocalizedData"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const data = useLocalizedData()

  useEffect(() => {
    if (typeof window !== "undefined") {
      grid.register()
    }
  }, [])

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsLoading(true)

    const dataToSend = {
      name: userData.name,
      phone: userData.phone
        .split("")
        .filter((char) => char !== " ")
        .join(""),
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyr78DM3r0Cq_Vx2kPeB2y1ScZFSUDTxWRl7CYM-pYc29tUfRXDQGdJa51Au0GWc4oc/exec",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
        },
      )
      setIsSubmitted(true)
      setUserData({
        name: "",
        phone: "",
      })
    } catch (error) {
      toast.error(data.toastMessages.error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setUserData({
      ...userData,
      phone: userData.phone.replace(/[^0-9]/g, ""),
    })
  }, [userData.phone])

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-green-900 dark:text-neutral-100"
          >
            {data?.hero?.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300"
          >
            {data?.hero?.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              <span>{data?.hero?.checks?.expert || "Expert Guidance"}</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              <span>{data?.hero?.checks?.support || "Visa Support"}</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              <span>{data?.hero?.checks?.university || "University Placement"}</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              <span>{data?.hero?.checks?.scholarship || "University Placement"}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white formAb  dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
        >
          {!isSubmitted && !isLoading ? (
            <div className="">
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-6">
                {data?.contactForm?.title || "Get Started Today"}
              </h2>

              <form className="space-y-6 " action="#" method="post" onSubmit={submitForm}>
                <div className="relative">
                  <label
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-1"
                    htmlFor="name"
                  >
                    <span className="text-red-400 mr-1">*</span>
                    {data?.contactForm?.name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-gray-700 border-2 border-green-500 dark:border-green-600 rounded-xl py-3 px-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                    placeholder={data?.contactForm?.namePlaceholder}
                    required
                    name="name"
                    onChange={(e) => setUserData({ ...userData, name: e.target.value.trim() })}
                  />
                </div>

                <div className="relative">
                  <label
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-1"
                    htmlFor="phone"
                  >
                    <span className="text-red-400 mr-1">*</span>
                    {data?.contactForm?.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white dark:bg-gray-700 border-2 border-green-500 dark:border-green-600 rounded-xl py-3 px-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                    placeholder={data?.contactForm?.phonePlaceholder}
                    required
                    name="phone"
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value.trim() })}
                  />
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
                  size="lg"
                >
                  {data?.hero?.button}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data?.hero?.securedData || "Your information is secure and will not be shared"}
                </p>
              </div>
            </div>
          ) : isLoading && !isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center">
              <l-grid size={60} speed={1.5} color="rgba(23, 232, 124)"></l-grid>
              <p className="mt-4 text-green-700 dark:text-green-300">
                {data?.hero?.submitting || "Submitting your information..."}
              </p>
            </div>
          ) : isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-8 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
                {data?.hero?.thankYou?.title}
              </h2>
              <p className="text-center text-green-700 dark:text-green-300 mb-4">{data?.hero?.thankYou?.description}</p>
              <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                {data?.hero?.thankYou?.stayTuned}
              </p>
            </motion.div>
          ) : null}
        </motion.div>
      </div>

      {/* Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center flex flex-col items-center gap-4"
      >
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-4">{data?.hero?.checkUs} ⚡️</p>
        <DockLive />
      </motion.div>
    </div>
  )
}

export default React.memo(Hero)

