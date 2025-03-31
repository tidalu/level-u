"use client"

import Link from "next/link"
import FooterLinks from "./footer-links"
import { FaTelegram, FaInstagram } from "react-icons/fa"
import { useLocalizedData } from "@/lib/useLocalizedData"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Heart, Mail, MapPin, Phone, Award, BookOpen, Users, Globe, ArrowRight } from "lucide-react"

const Footer = () => {
  const data = useLocalizedData()
  const date = new Date()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hoverIcon, setHoverIcon] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+998 99 123 45 67",
      href: "tel:+998991234567",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "info@level.edu.uz",
      href: "mailto:info@level.edu.uz",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Tashkent, Uzbekistan",
      href: "https://maps.google.com",
    },
  ]

  const socialMedia = [
    {
      id: "instagram",
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/level_edu_uz",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "telegram",
      icon: <FaTelegram size={20} />,
      href: "https://t.me/level_edu_uz",
      color: "from-blue-400 to-blue-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const wavePathVariants = {
    initial: { pathLength: 0, pathOffset: 0 },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1c07] to-[#0a1505] dark:from-[#0d2702] dark:to-[#071601] rounded-t-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-40 text-green-500 dark:text-green-400"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C150,90 350,0 500,100 C650,190 750,100 900,50 C1050,0 1150,50 1200,100 L1200,120 L0,120 Z"
            className="fill-none stroke-current stroke-2"
            initial="initial"
            animate="animate"
            variants={wavePathVariants}
          />
        </svg>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-[1900px] mx-auto px-3 lg:px-12 py-10 text-white relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="flex md:justify-end ml-5 -mt-16 md:mr-64"
        >
          <motion.div whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
            <Image
              src="/footericon.webp"
              width={80}
              height={80}
              alt="footer"
              loading="lazy"
              decoding="async"
              className="w-auto h-auto drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-green-400 mb-4">{data?.footer?.about?.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            {data?.footer?.about?.desc}
            </p>

            <div className="space-y-3 mt-6">
              <h4 className="text-green-400 font-medium">{data?.footer?.about?.contact}</h4>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-green-500">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-5">
            <FooterLinks />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-green-400 mb-4">{data?.footer?.about?.whyChooseLevel}</h3>

            <div className="space-y-3">
              {[
                { icon: <Award className="h-4 w-4" />, text: data?.footer?.about?.expertTeachers },
                { icon: <BookOpen className="h-4 w-4" />, text:data?.footer?.about?.modernCurriculum },
                { icon: <Users className="h-4 w-4" />, text: data?.footer?.about?.smallClassSizes},
                { icon: <Globe className="h-4 w-4" />, text: data?.footer?.about?.internationalStandards },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                  whileHover={{ x: 5, color: "#4ade80" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-green-500 mt-0.5">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-6 pt-3 border-t border-green-900/50" whileHover={{ scale: 1.02 }}>
              <Link href="/about" className="text-green-400 text-sm flex items-center gap-2 hover:underline">
              {data?.footer?.about?.learnAboutUs}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5 mt-12 md:flex-row justify-between items-center px-6 md:px-3 border-t border-green-900/50 pt-6"
        >
          <motion.div variants={itemVariants} className="text-sm text-gray-400 flex items-center">
            © Copyright {date.getFullYear()} {data?.footer?.copyright.name} 
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {socialMedia.map((item) => (
              <motion.div
                key={item.id}
                onHoverStart={() => setHoverIcon(item.id)}
                onHoverEnd={() => setHoverIcon(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={item.href} className="relative block">
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.color} opacity-0`}
                    animate={{
                      opacity: hoverIcon === item.id ? 0.9 : 0,
                      scale: hoverIcon === item.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="border border-gray-600 hover:border-gray-400 rounded-full p-2 relative z-10">
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)