import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HomeBlogList from './home-blogList'
import { Button } from './ui/button'
import { data } from '@/data'

const LandingBanner = () => {
    return (
        <section>
            <div className="homeBanner pt-32 pb-12 rounded-b-3xl px-3 lg:px-16 relative overflow-hidden">

                <div className=" relative rounded-2xl overflow-hidden  md:h-[450px] grid grid-cols-12 bg-[#6cce40] mx-auto">
                    <div className=" text-white p-6 lg:py-12 lg:pl-16 col-span-12 md:col-span-5">
                        <p className=" text-[12px] font-semibold">{data.landingAdd.topText}</p>
                        <h1 className=" text-2xl mt-1 mb-4 font-extrabold">{data.landingAdd.header}</h1>
                        <p className=" text-[12px] text-gray-200">{data.landingAdd.description}</p>
                        <ul className="text-[12px] text-gray-200 my-3">
                            {data.landingAdd.bulletPoints.map((b, i) => (
                                <li key={i} className="mb-1.5"> - {b}</li>
                            ))}
                        </ul>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-4'>
                            <Link href="/contact">
                                <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-10 font-semibold  rounded-full text-[11px] sm:text-sm'>
                                    I{`'`}am buying
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-[url('/desk_home-banner.webp')] h-[500px] bg-no-repeat bg-cover relative -top-[26px] -right-6 hidden md:block md:col-span-7"></div>

                    <div className=" col-span-12 md:hidden">
                        <img src="/mobile_home-banner.webp" />
                    </div>
                </div>

                <div className="mt-4 z-10 relative">
                    <h2 className=" text-white text-xl md:text-2xl font-extrabold">
                        <Link href="/" className="hover:underline">
                            You{`'`}re closer to fitness than you think!
                            <ChevronRight size={24} className=" inline-block ml-1 text-[#6cce40]" />
                        </Link>
                    </h2>

                    <HomeBlogList />
                </div>
            </div>

        </section>
    )
}

export default LandingBanner