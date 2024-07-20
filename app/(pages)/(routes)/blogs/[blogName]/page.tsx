import { Button } from '@/components/ui/button'
import { data } from '@/data'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const BlogPage = () => {
    return (
        <div className="h-full max-w-[1900px] max-w-sc mx-auto">
            <div className=" pt-32 pb-12 rounded-b-3xl px-3 lg:px-16">
                <div className=" relative rounded-2xl overflow-hidden  md:h-[450px] grid grid-cols-12 bg-[#f1fbec] mx-auto">
                    <div className=" text-black p-6 lg:py-12 max-w-md mx-auto col-span-12 md:col-span-6">
                        <h1 className=" text-2xl mt-1 mb-4 font-extrabold">{data.blogs[0].description}</h1>
                        <ul className="text-[12px] text-gray-600 my-3">
                            {data.blogs[0].bulletPoints.map((item, i) => (
                                <li key={i} className="mb-3"> - {item}</li>
                            ))}
                        </ul>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-8'>
                            <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-8 font-semibold  rounded-full text-[11px]'>
                                I buy a pass and recieve a package
                            </Button>
                        </div>
                    </div>

                    <div className=" col-span-12 md:col-span-6 rounded-2xl overflow-hidden">
                        <img src="/blog_header.webp" className=' object-cover 2xl:object-top  w-full h-full' alt="" />
                    </div>
                </div>
            </div>

            <div className='my-10 px-3 lg:px-16 mx-auto mb-20'>
                <h2 className=' text-center font-bold text-2xl'>As part of the package you will receive</h2>

                <Tabs defaultValue="meeting" className="">
                    <div className=' flex justify-center items-center flex-wrap gap-5 sm:gap-20 my-12 mb-16'>
                        <TabsList className=' flex-col md:flex-row h-auto rounded-2xl w-full md:h-20 p-3'>
                            <TabsTrigger className=' rounded-2xl w-full py-3 tab-shadow data-[state=active]:shadow-2xl' value="meeting">
                                <img src="/tabicon1.webp" className='mr-2 bitmap-icon' width={35} height={35} alt="" />
                                Introductory meeting
                            </TabsTrigger>
                            <TabsTrigger className=' rounded-2xl w-full py-3 tab-shadow data-[state=active]:shadow-2xl' value="plan">
                                <img src="/tabicon2.webp" className='mr-2 bitmap-icon' width={35} height={35} alt="" />
                                Training plan
                            </TabsTrigger>
                            <TabsTrigger className=' rounded-2xl w-full py-3 tab-shadow data-[state=active]:shadow-2xl' value="into">
                                <img src="/tabicon3.webp" className='mr-2 bitmap-icon' width={35} height={35} alt="" />
                                Training into
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="meeting">
                        <div className=' grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className=' max-w-md mx-auto flex items-start flex-col justify-center px-3 md:px-0'>
                                <h3 className=' text-black font-bold dark:text-white text-sm 2xl:text-xl'>{data.blogs[0].packs[0].title}</h3>
                                <p className=' text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-lg mt-5'>{data.blogs[0].packs[0].content.description}</p>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-8'>
                                    <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-8 font-semibold  rounded-full text-[11px] 2xl:text-lg'>
                                        I buy a pass and recieve a package
                                    </Button>
                                </div>
                            </div>

                            <div className=' rounded-2xl overflow-hidden dark:bg-[#020817]'>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0"
                                    title="Video player"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className=' object-cover'
                                ></iframe>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="plan">
                        <div className='flex flex-col-reverse md:grid gap-5 md:grid-cols-2'>

                            <div className=' rounded-2xl overflow-hidden'>
                                <img src="/blog-plan.png" className='w-full' alt="" />
                            </div>

                            <div className=' max-w-md mx-auto flex items-start flex-col justify-center px-3 md:px-0 mb-10 md:mb-0'>
                                <h3 className=' text-black font-bold dark:text-white text-sm 2xl:text-xl'>{data.blogs[1].packs[1].title}</h3>
                                <p className=' text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-lg mt-5'>{data.blogs[1].packs[1].content.videoDescription}</p>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-8'>
                                    <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-8 font-semibold  rounded-full text-[11px] 2xl:text-lg'>
                                        I buy a pass and recieve a package
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="into">
                        <div className=' grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className=' max-w-md mx-auto flex items-start flex-col justify-center px-3 md:px-0 mb-10 md:mb-0'>
                                <h3 className=' text-black font-bold dark:text-white text-sm 2xl:text-xl'>{data.blogs[2].packs[2].title}</h3>
                                <p className=' text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-lg mt-5'>{data.blogs[2].packs[2].content.videoDescription}</p>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-8'>
                                    <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-8 font-semibold  rounded-full text-[11px] 2xl:text-lg'>
                                        I buy a pass and recieve a package
                                    </Button>
                                </div>
                            </div>

                            <div className=' rounded-2xl'>
                                <img src="/blog-intro.png" className='w-full rounded-2xl' alt="" />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default BlogPage