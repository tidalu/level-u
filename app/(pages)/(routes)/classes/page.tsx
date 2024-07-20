"use client"

import { data } from '@/data'
import Categories from '@/components/categories'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const ClassesPage = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    };

    return (
        <div className='h-full max-w-[1900px] mx-auto'>

            <div className="homeBanner pt-32 pb-12 rounded-b-3xl px-3 lg:px-16">
                <div className=" relative rounded-2xl overflow-hidden lg:h-[450px] grid grid-cols-12 bg-white mx-auto dark:bg-[#020817]">
                    <div className=" relative col-span-12 lg:col-span-7 xl:col-span-8 rounded-2xl overflow-hidden">
                        <video ref={videoRef} width="1120" height="632" className='h-full w-full object-cover' autoPlay muted={isMuted} loop >
                            <source src="https://fitfabric.pl/media/5580/download/zajecia.mp4?v=1&inline=1" type="video/mp4" />
                        </video>
                        <Button onClick={toggleMute} className='border-2 border-[#6cce40] bg-white hover:bg-white rounded-full absolute bottom-5 p-0 w-10 right-5 shadow-xl'>
                            <img src={isMuted ? "/sound-on.svg" : "/sound-mute.svg"} width={20} height={10} alt="" />
                        </Button>
                    </div>

                    <div className=" text-gray-600 dark:text-gray-400 py-4 px-10 col-span-12 lg:col-span-5 xl:col-span-4">

                        <h1 className=" text-xl sm:text-2xl mt-1 mb-4 text-[#6cce40] font-extrabold">
                            Find out how to exercise <br /> well in a group!</h1>
                        <p className=" text-[13px] xl:text-[14px] 2xl:text-[15px] ">In our clubs you benefit from the richest offer of group fitness classes in Poland.</p>
                        <ul className="text-[13px] xl:text-[14px] 2xl:text-[15px]  my-3">
                            <li className="mb-1.5">Choose from workouts: </li>
                            <li className="mb-1.5"> - strengthening the body and fitness,</li>
                            <li className="mb-1.5"> -  health-promoting exercises,</li>
                            <li className="mb-1.5"> - accelerating fat burning, </li>
                            <li className="mb-1.5"> - dancing, relaxation.</li>
                        </ul>

                        <p className=" text-[13px] xl:text-[14px] 2xl:text-[15px] ">The offer also includes world-famous Les Mills training and our own fitness classes, such as Anti-Stress or the extremely popular stationary bike training.</p>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-4  mb-5 lg:mb-0'>
                            <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-10 font-semibold  rounded-full text-[11px] sm:text-sm'>
                                Buy a pass
                            </Button>
                            <Link href="#category" className='border-2 border-[#6cce40] cursor-pointer text-[11px] sm:text-sm rounded-full py-2 justify-center px-10 font-semibold flex gap-1 items-center hover:underline whitespace-nowrap'>
                                All classes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-16 px-3 lg:px-16 mx-auto" id='category'>
                <Categories />
            </div>
        </div>
    )
}

export default ClassesPage