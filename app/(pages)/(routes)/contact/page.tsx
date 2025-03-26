"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Schedule from "@/components/schedule"
import { useLocalizedData } from "@/lib/useLocalizedData"
import ClientOnly from "@/components/ClientOnly"
import { type ToastPosition, Bounce, toast } from "react-toastify"
import DockLive from "@/components/magicui/dock-live"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Mail, Phone, Clock, Send, User, MessageSquare, AtSign, MapPin, ArrowRight, CheckCircle } from "lucide-react"

const ContactPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const data = useLocalizedData()

  const formRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)

  const isFormInView = useInView(formRef, { once: false, amount: 0.3 })
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.3 })
  const isMapInView = useInView(mapRef, { once: false, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  async function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const toastSettings = {
      position: "top-center" as ToastPosition,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    }

    const dataToSend = {
      email: userData.email,
      name: userData.name,
      phone: userData.phone
        .split("")
        .filter((char) => char !== " ")
        .join(""),
      message: userData.message,
    }

    try {
      await toast.promise(
        fetch(
          "https://script.google.com/macros/s/AKfycbya-ev9dnrx_HZCCa72plkn3IMU4hay5pIGjJ52LaBtievZd2LKSc2oFztK-16acm0/exec",
          {
            method: "POST",
            body: JSON.stringify(dataToSend),
          },
        ),
        {
          pending: data.toastMessages.pending,
          success: data.toastMessages.success,
          error: data.toastMessages.error,
        },
      )

      setIsSubmitted(true)
      setUserData({
        email: "",
        name: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      toast.error(data.toastMessages.error, toastSettings)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const formItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const floatingElements = [
    { size: 100, color: "bg-green-500/10", delay: 0, duration: 8, top: "5%", right: "10%" },
    { size: 150, color: "bg-green-400/5", delay: 1, duration: 10, bottom: "20%", left: "5%" },
    { size: 80, color: "bg-green-300/10", delay: 2, duration: 7, top: "30%", left: "15%" },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 ">
      {/* Background elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.color} rounded-full backdrop-blur-xl z-0`}
          style={{
            width: el.size,
            height: el.size,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: el.duration,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-[1900px] mt-10mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 mb-4">
            {data?.footer?.contact?.title || "Get in Touch"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {data?.contactPage?.workInfo?.getInTouchMessage ||
              "We'd love to hear from you. Fill out the form below or use our contact information."}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl opacity-70 dark:opacity-80 backdrop-blur-sm"></div>

            <div className="relative p-8 md:p-10">
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-green-600 dark:text-green-400 mb-8">
                {data?.contactPage?.workInfo?.contactInformation || "Contact Information"}
              </motion.h2>

              <motion.div variants={containerVariants} className="space-y-8">
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      {data?.contactPage?.workInfo?.customerServiceDepartment}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">+998 55 903 37 47</p>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3">
                      {data?.contactPage?.workInfo?.manager}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">+998 99 005 37 47</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                    <Link
                      href="mailto:level.edu.uz.@gmail.com"
                      className="text-green-600 dark:text-green-400 hover:underline mt-1 inline-block"
                    >
                      level.edu.uz.@gmail.com
                    </Link>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">{data?.contactPage?.workInfo?.workingHours}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {data?.contactPage?.workInfo?.workdays} <br />
                      {data?.contactPage?.workInfo?.start} - {data?.contactPage?.workInfo?.end}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400"  />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">{data?.contactPage?.workInfo?.location}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      { "Tashkent, Uzbekistan"}
                    </p>
                    <a
                      href="#map"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline mt-2"
                    >
                      {data?.contactPage?.workInfo?.viewOntheMap} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4 flex items-center justify-center">
                  {data?.contactPage?.workInfo?.followUs || "Follow Us"}
                </h3>
                <DockLive />
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-xl opacity-70 dark:opacity-80 backdrop-blur-sm"></div>

            <div className="relative p-8 md:p-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.h2
                      variants={formItemVariants}
                      className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6"
                    >
                      {data?.contactPage?.workInfo.sendAMessage || "Send a Message"}
                    </motion.h2>

                    <motion.p variants={formItemVariants} className="text-gray-600 dark:text-gray-300 text-sm mb-8">
                      {data?.contactForm?.description}
                    </motion.p>

                    <motion.form variants={containerVariants} onSubmit={formHandler} className="space-y-6">
                      <motion.div variants={formItemVariants} className="relative">
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-2 rounded-md">
                          <span className="text-red-400 mr-1">*</span>
                          {data?.contactForm?.name}
                        </label>
                        <div className="flex items-center border-2 border-green-500 dark:border-green-600 rounded-xl overflow-hidden">
                          <div className="pl-4">
                            <User className="h-5 w-5 text-green-500 dark:text-green-400" />
                          </div>
                          <input
                            type="text"
                            className="w-full py-3 px-3 bg-transparent outline-none text-gray-800 dark:text-white"
                            placeholder={data?.contactForm?.namePlaceholder}
                            required
                            value={userData.name}
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={formItemVariants} className="relative">
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-2 rounded-md">
                          <span className="text-red-400 mr-1">*</span>
                          {data?.contactForm?.email}
                        </label>
                        <div className="flex items-center border-2 border-green-500 dark:border-green-600 rounded-xl overflow-hidden">
                          <div className="pl-4">
                            <AtSign className="h-5 w-5 text-green-500 dark:text-green-400" />
                          </div>
                          <input
                            type="email"
                            className="w-full py-3 px-3 bg-transparent outline-none text-gray-800 dark:text-white"
                            placeholder={data?.contactForm?.emailPlaceholder}
                            required
                            value={userData.email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={formItemVariants} className="relative">
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-2 rounded-md">
                          <span className="text-red-400 mr-1">*</span>
                          {data?.contactForm?.phone}
                        </label>
                        <div className="flex items-center border-2 border-green-500 dark:border-green-600 rounded-xl overflow-hidden">
                          <div className="pl-4">
                            <Phone className="h-5 w-5 text-green-500 dark:text-green-400" />
                          </div>
                          <input
                            type="tel"
                            className="w-full py-3 px-3 bg-transparent outline-none text-gray-800 dark:text-white"
                            placeholder="+998 99 999 99 99"
                            required
                            value={userData.phone}
                            name="phone"
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={formItemVariants} className="relative">
                        <label className="text-xs font-medium text-gray-600 dark:text-gray-400 absolute -top-2.5 left-4 bg-white dark:bg-gray-800 px-2 rounded-md">
                          <span className="text-red-400 mr-1">*</span>
                          {data?.contactForm?.message}
                        </label>
                        <div className="flex border-2 border-green-500 dark:border-green-600 rounded-xl overflow-hidden">
                          <div className="pl-4 pt-3">
                            <MessageSquare className="h-5 w-5 text-green-500 dark:text-green-400" />
                          </div>
                          <textarea
                            className="w-full py-3 px-3 bg-transparent outline-none text-gray-800 dark:text-white resize-none h-32"
                            placeholder={data?.contactForm?.messagePlaceholder}
                            required
                            value={userData.message}
                            name="message"
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={formItemVariants}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              {data?.contactForm?.sending || "Sending..."}
                            </>
                          ) : (
                            <>
                              {data?.contactForm?.button}
                              <Send className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </Button>

                        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="text-red-400 mr-1">*</span>
                          {data?.contactForm?.required}
                        </div>
                      </motion.div>
                    </motion.form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col items-center justify-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                    </motion.div>

                    <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 text-center">
                      {data?.contactForm?.successTitle || "Message Sent!"}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                      {data?.contactForm?.successMessage ||
                        "Thank you for reaching out. We'll get back to you as soon as possible."}
                    </p>

                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-xl transition-all duration-300"
                    >
                      {data?.contactForm?.sendAnother || "Send Another Message"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-10 scroll-mt-20"
          id="map"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
              {data?.contactPage?.workInfo?.visitUs || "Visit Us"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {data?.contactPage?.workInfo?.visitInfo ||
                "Find us at our office location. We're always happy to meet in person."}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
            <ClientOnly>
              <Schedule />
            </ClientOnly>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage

