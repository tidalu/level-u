"use client"

import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { grid } from "ldrs"
import { useLocalizedData } from "@/lib/useLocalizedData"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const ModalForm = () => {
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
      toast.error(data.toastMessages?.error || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      phone: prevUserData.phone.replace(/[^0-9]/g, ""),
    }))
  }, [userData.phone])

  return (
    <>
      {!isSubmitted && !isLoading ? (
        <div>
          <form className="space-y-6" action="#" method="post" onSubmit={submitForm}>
            <div className="relative">
              <label
                className="text-xs font-medium text-gray-700 dark:text-gray-300 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-1"
                htmlFor="name"
              >
                <span className="text-red-400 mr-1">*</span>
                {data?.contactForm?.name || "Name"}
              </label>
              <input
                type="text"
                className="w-full bg-white dark:bg-gray-700 border-2 border-green-500 dark:border-green-600 rounded-xl py-3 px-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                placeholder={data?.contactForm?.namePlaceholder || "Enter your full name"}
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
                {data?.contactForm?.phone || "Phone"}
              </label>
              <input
                type="tel"
                className="w-full bg-white dark:bg-gray-700 border-2 border-green-500 dark:border-green-600 rounded-xl py-3 px-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                placeholder={data?.contactForm?.phonePlaceholder || "Enter your phone number"}
                required
                name="phone"
                onChange={(e) => setUserData({ ...userData, phone: e.target.value.trim() })}
              />
            </div>

            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
              size="lg"
            >
              {data?.hero?.button || "Get Free Consultation"}
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
            {data?.hero?.thankYou?.title || "Thank You!"}
          </h2>
          <p className="text-center text-green-700 dark:text-green-300 mb-4">
            {data?.hero?.thankYou?.description || "We've received your information."}
          </p>
          <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
            {data?.hero?.thankYou?.stayTuned || "Our team will contact you shortly."}
          </p>
        </motion.div>
      ) : null}
    </>
  )
}

export default ModalForm
