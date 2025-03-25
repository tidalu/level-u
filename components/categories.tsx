"use client"

import { ChevronRight, Clock, Calendar, Target } from "lucide-react"
import React from "react"
import { Slide, toast } from "react-toastify"
import { Button } from "./ui/button"
import { useLocalizedData } from "@/lib/useLocalizedData"
import Image from "next/image"
import { Tooltip } from "@nextui-org/tooltip"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter } from "./ui/card"
import { IntensityIndicator } from "./intensity-indicator"

interface Class {
  href: string
  name: string
  img: string
  description: string
  video: string
  forWhom: string[]
  cost: string
  duration: string
  intensity: string
  purpose: string
  effects: string[]
  comingSoon?: boolean
}

interface ClassList {
  title: string
  list: {
    [x: string]: any
    name: Class[]
  }
}

const Categories = () => {
  const data = useLocalizedData()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-8">
        {data?.classPage?.classList &&
          Object.values(data?.classPage?.classList as ClassList[]).map((category: ClassList, categoryIndex: number) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h2>
                <div className="h-px flex-grow bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.list.map((item: Class, itemIndex: number) => (
                  <Card
                    key={`${categoryIndex}-${itemIndex}`}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg justify-between flex flex-col ${
                      item.comingSoon ? "opacity-90" : ""
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.img || "/offer4.webp"}
                        alt={item.name}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={categoryIndex === 0 && itemIndex === 0}
                      />

                      {item.comingSoon && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Badge variant="outline" className="bg-amber-500/90 text-white border-none px-3 py-1.5">
                            Coming Soon
                          </Badge>
                        </div>
                      )}

                      <div className="absolute top-3 right-3">
                        <Image width={40} height={40} src="/offericon-1.webp" alt="OFFER ICON" />
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.name}</h3>

                      <div className="space-y-3 mt-3">
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                          {item.duration && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-primary" />
                              <span>{item.duration}</span>
                            </div>
                          )}

                          {item.cost && (
                            <div className="flex items-center justify-end gap-1">
                              <Calendar className="h-3.5 w-3.5 text-primary" />
                              <span>{item.cost}</span>
                            </div>
                          )}
                        </div>

                        {item.intensity && (
                          <div className="flex flex-col gap-1 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Intensity</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{item.intensity}</span>
                            </div>
                            <IntensityIndicator intensity={item.intensity} />
                          </div>
                        )}

                        {item.purpose && (
                          <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300 pt-1">
                            <Target className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                            <span>{item.purpose}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-0 flex justify-end items-center">
                      {item.comingSoon ? (
                        <Tooltip content={"Coming soon"} color="warning" placement="left">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                            onClick={() => {
                              if (isMobile) {
                                toast("This course will be available soon", {
                                  transition: Slide,
                                  autoClose: 3000,
                                  position: "top-center",
                                  theme: "colored",
                                  type: "warning",
                                })
                              }
                            }}
                          >
                            <ChevronRight size={16} />
                          </Button>
                        </Tooltip>
                      ) : (
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-full"
                          onClick={() => (window.location.href = `/classess/${item.href.toLowerCase()}`)}
                        >
                          <span className="mr-1">View</span>
                          <ChevronRight size={16} />
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default React.memo(Categories)

