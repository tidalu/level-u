"use client"

import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper"
import { Button } from "@/components/ui/button"
import { useLocalizedData } from "@/lib/useLocalizedData"
import { cn } from "@/lib/utils"
import { X, Play, Users, Clock, Calendar, Target, Sparkles, Info } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/LanguageContext"
import { useEffect, useState } from "react"

const ClassesDataPage = () => {
  const pathName = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")
  const data = useLocalizedData()
  const { language, switchLanguage } = useLanguage()

  useEffect(() => {
    switchLanguage(language)
  }, [language])

  const handleModal = (url: string) => {
    setVideoUrl(url)
    setShowModal(true)
  }

  const str = decodeURIComponent(pathName.split("/")[2]).toLowerCase()
  const result = str.replace(/%20/g, " ")

  const getClassByName = (className: string) => {
    if (!data?.classPage?.classList) {
      return null
    }

    for (const category of data.classPage.classList) {
      const match = category.list.find(
        (item: {
          href: string
          name: string
          description: string
          intensity: number
          cost: string
          forWhom: string[]
          duration: string
          purpose: string
          effects: string[]
          video: string
          lengthOfClasses: string
          frequency: string
          materials: string
          group?: string
          ageLimit?: string
        }) => item.href.toLocaleLowerCase() === className.toLocaleLowerCase(),
      )
      if (match) {
        return { match, title: category.title }
      }
    }
    return null
  }

  const classInfo = getClassByName(result)

  if (!getClassByName) {
    return <div>Class not found</div>
  }

  const intensityValue = classInfo?.match.intensity || 0.25

  return (
    <div className="min-h-screen max-w-[1900px] mx-auto ">
        {/* Hero Section */}
        <div className="relative  pt-32 pb-16 px-4 lg:px-16 bg-gradient-to-b from-[#6cce4010] to-transparent dark:from-[#6cce4008] dark:to-transparent">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-[#6cce4020] text-[#6cce40] dark:bg-[#6cce4030] rounded-full mb-4">
              {classInfo?.title}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{classInfo?.match.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {classInfo?.match.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact">
                <Button className="rounded-full py-6 px-8 bg-transparent hover:bg-[#6cce4020] text-black dark:text-white border-2 border-[#6cce40] font-medium transition-all duration-200">
                  {data?.classPage?.classContainer?.enrollBtn}
                </Button>
              </Link>
            </div>

            {/* Price Tag */}
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-[#020817] rounded-full shadow-lg border border-[#6cce4040]">
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {data?.classPage?.classContainer?.cost}
              </span>
              <span className="text-[#6cce40] text-xl font-bold">{classInfo?.match.cost}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 lg:px-16 pb-20 ">
          <div className="max-w-6xl mx-auto">
            {/* Intensity Meter */}
            <div className="bg-white dark:bg-[#020817] rounded-2xl p-6 shadow-md mb-8 reveal">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-2">{data?.classPage?.classContainer?.intensity}</h3>
                  <div className="flex gap-2">
                    <div className={cn("h-3 w-16 bg-[#9dff3b] rounded-full")}></div>
                    <div
                      className={cn("h-3 w-16 bg-gray-200 rounded-full", intensityValue >= 0.5 && "bg-[#ffdf39]")}
                    ></div>
                    <div
                      className={cn("h-3 w-16 bg-gray-200 rounded-full", intensityValue >= 0.75 && "bg-orange-400")}
                    ></div>
                    <div className={cn("h-3 w-16 bg-gray-200 rounded-full", intensityValue >= 1 && "bg-red-500")}></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#6cce40]" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {data?.classPage?.classContainer?.duration}
                      </div>
                      <div className="font-medium">{classInfo?.match.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#6cce40]" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {data?.classPage?.classContainer?.frequencyTitle}
                      </div>
                      <div className="font-medium">{classInfo?.match.frequency}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* For Whom */}
              <div className="bg-white dark:bg-[#020817] rounded-2xl p-6 shadow-md h-full reveal hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#6cce40]" />
                  <h3 className="text-lg font-semibold">{data?.classPage?.classContainer?.forWhom}</h3>
                </div>
                <div className="space-y-2">
                  {classInfo?.match.forWhom.map((f: string, i: number) => (
                    <div className="flex items-start gap-2" key={i}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6cce40] mt-2"></div>
                      <p className="text-gray-600 dark:text-gray-300">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class Details */}
              <div className="bg-white dark:bg-[#020817] rounded-2xl p-6 shadow-md h-full reveal hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-[#6cce40]" />
                  <h3 className="text-lg font-semibold">{data?.classPage?.classDetails}</h3>
                </div>

                <div className="space-y-4">
                  {classInfo?.match.ageLimit && (
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        {data?.classPage?.classContainer?.ageLimit}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{classInfo?.match.ageLimit}</p>
                    </div>
                  )}

                  {classInfo?.match.group && (
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        {data?.classPage?.classContainer?.groupTitle}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{classInfo?.match.group}</p>
                    </div>
                  )}

                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      {data?.classPage?.classContainer?.materialsTitle}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{classInfo?.match.materials}</p>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      {data?.classPage?.classContainer?.lengthOfClassesTitle}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{classInfo?.match.lengthOfClasses}</p>
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div className="bg-white dark:bg-[#020817] rounded-2xl p-6 shadow-md h-full reveal hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#6cce40]" />
                  <h3 className="text-lg font-semibold">{data?.classPage?.classContainer?.purpose}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{classInfo?.match.purpose}</p>
              </div>
            </div>

            {/* Effects Section */}
            <div className="bg-white dark:bg-[#020817] rounded-2xl p-8 shadow-md reveal">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-[#6cce40]" />
                <h3 className="text-xl font-semibold">{data?.classPage?.classContainer?.effects}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classInfo?.match.effects.map((e: string, i: number) => (
                  <div className="flex items-start gap-3 bg-[#6cce4008] dark:bg-[#6cce4010] p-4 rounded-xl" key={i}>
                    <div className="w-2 h-2 rounded-full bg-[#6cce40] mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300">{e}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center reveal">
              <Link href="/contact">
                <Button className="bg-[#6cce40] hover:bg-[#5bb936] text-white rounded-full py-6 px-10 font-medium transition-all duration-200 text-lg">
                  {data?.classPage?.classContainer?.enrollBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/60 z-50 p-4">
            <div className="relative max-w-4xl w-full bg-white dark:bg-[#020817] rounded-3xl shadow-2xl p-2 md:p-1 h-auto flex items-center">
              <iframe
                width="100%"
                src={videoUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-[315px] md:h-[450px] 2xl:h-[600px] rounded-2xl"
              ></iframe>
              <Button
                onClick={() => setShowModal(false)}
                className="absolute -top-4 -right-4 bg-white dark:bg-[#020817] hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full p-0 w-12 h-12 shadow-xl flex items-center justify-center"
              >
                <X size={24} />
              </Button>
            </div>
          </div>
        )}
    </div>
  )
}

export default ClassesDataPage

