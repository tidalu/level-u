
"use client"

import { Button } from '@/components/ui/button'
import { data } from '@/data'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const ClassesDataPage = () => {
    const pathName = usePathname()
    const [showModal, setShowModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('');

    const handleModal = (url: string) => {
        setVideoUrl(url);
        setShowModal(true);
    }

    const str = pathName.split("/")[2].toLowerCase()
    let result = str.replace(/%20/g, ' ');

    const getClassByName = (className: string) => {
        for (const category of data.classPage.classList) {
            const match = category.list.find((item) => item.name === className);
            if (match) {
                return { match, title: category.title };
            }
        }
        return null;
    }

    const classInfo = getClassByName(result.toUpperCase());

    if (!getClassByName) {
        return <div>Class not found</div>;
    }

    const intensityValue = classInfo?.match.intensity || 0.25

    return (
        <div className=' h-full max-w-[1900px] mx-auto'>
            <div className='pt-32 pb-12 px-3 lg:px-16 mb-20'>
                <div className=' grid grid-cols-12 gap-5'>
                    <div className=' col-span-12 lg:col-span-5'>
                        <div className='bg-[#b8df4b1a] dark:bg-[#86868517] rounded-2xl relative p-4 md:p-10'>
                            <div className="mb-3 md:mb-0 md:absolute top-4 left-4 md:top-6 md:left-auto md:right-6 flex gap-1">
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon1.svg" width={16} className="" alt="" />
                                </div>
                            </div>
                            <h3 className=' text-sm text-gray-500 dark:text-gray-400 font-semibold'>{classInfo?.title}</h3>

                            <h2 className=' text-xl font-bold'>{classInfo?.match.name}</h2>

                            <p className=' text-gray-500 dark:text-gray-400 mt-5 leading-6 text-[12px]'>
                                {classInfo?.match.description}
                            </p>

                            <div className=' flex flex-col sm:flex-row gap-4 items-center mt-5'>
                                <Button onClick={() => handleModal(classInfo?.match.video || "")} variant="primaryGreen" className='dark:text-black w-full sm:w-auto rounded-full px-6 text-sm'>
                                    <img src="/play.svg" width={16} height={16} className=" rounded-xl mr-2" alt="" />
                                    See the video
                                </Button>
                                <Link href="/contact" className='w-full sm:w-auto'>
                                    <Button className='dark:text-white w-full sm:w-auto rounded-full px-6 bg-transparent hover:bg-transparent text-black border-2 border-[#6cce40] text-sm'>
                                        Buy a pass
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='  col-span-12 lg:col-span-7 shadow-2xl dark:shadow-slate-900 grid grid-cols-12 bg-[#a9aca41a] rounded-2xl overflow-hidden gap-0.5'>
                        <div className=' bg-white dark:bg-[#020817] col-span-7 sm:col-span-4 p-4 md:p-8'>
                            <div className=' text-gray-600 dark:text-gray-300 text-[12px] font-semibold'>For Whom</div>
                            <div className=' leading-6 text-gray-500 dark:text-gray-400 mt-1 text-[12px]'>
                                {classInfo?.match.forWhom.map((f, i) => (
                                    <div className='' key={i}>{f} /</div>
                                ))}
                            </div>
                        </div>
                        <div className=' bg-white dark:bg-[#020817] col-span-5 sm:col-span-4 p-4 md:p-8'>
                            <div className=' text-gray-600 dark:text-gray-300 text-[12px] font-semibold'>Duration</div>
                            <p className=' leading-6 text-gray-500 dark:text-gray-400 text-[13px]'>
                                {classInfo?.match.duration}
                            </p>
                        </div>
                        <div className=' bg-white dark:bg-[#020817] col-span-12 sm:col-span-4 p-4 md:p-8'>
                            <div className=' text-gray-600 dark:text-gray-300 text-[12px] font-semibold'>Intensity</div>
                            <div className='flex gap-1 mt-3'>
                                <div className={cn(' h-1 w-9 bg-[#9dff3b] rounded-sm')}></div>
                                <div className={cn(' h-1 w-9 bg-gray-200 rounded-sm', intensityValue >= 0.5 && " bg-[#ffdf39]")}></div>
                                <div className={cn(' h-1 w-9 bg-gray-200 rounded-sm', intensityValue >= 0.75 && " bg-orange-400")}></div>
                                <div className={cn(' h-1 w-9 bg-gray-200 rounded-sm', intensityValue >= 1 && " bg-red-500")}></div>
                            </div>
                        </div>
                        <div className=' bg-white dark:bg-[#020817] col-span-12 sm:col-span-6 p-4 md:p-8'>
                            <div className=' text-gray-600 dark:text-gray-300 text-[12px] font-semibold'>The purpose of the lesson
                            </div>
                            <p className=' leading-6 text-gray-500 dark:text-gray-400 text-[13px]'>
                                {classInfo?.match.purpose}
                            </p>
                        </div>
                        <div className=' bg-white dark:bg-[#020817] col-span-12 sm:col-span-6 p-4 md:p-8'>
                            <div className=' text-gray-600 dark:text-gray-300 text-[12px] font-semibold'>Effects
                            </div>
                            <p className=' leading-6 text-gray-500 dark:text-gray-400 text-[13px]'>
                                {classInfo?.match.effects.map((e, i) => (
                                    <span key={i}>{e}, </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {showModal &&
                <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center backdrop-blur-md z-50">
                    <div className=" relative max-w-3xl 2xl:max-w-5xl w-full bg-white dark:bg-[#020817] rounded-3xl shadow-2xl md:p-6 h-full md:h-auto flex items-center">
                        <iframe
                            width="100%"
                            src={videoUrl}
                            title="Video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='h-[315px] 2xl:h-[500px]'
                        ></iframe>
                        <Button onClick={() => setShowModal(!showModal)} className='radial-bg-green rounded-full   p-0 w-10 absolute top-5 right-5 border-0 shadow-xl'>
                            <X size={30} className=' text-gray-700' />
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ClassesDataPage