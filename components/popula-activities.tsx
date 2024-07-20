import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const PopulaActivities = () => {
    return (
        <section>
            <div className="my-16 px-3 lg:px-16 mx-auto">
                <h2 className=" text-black dark:text-white font-bold text-2xl text-center">Popular Activities</h2>

                <div className="flex lg:grid lg:grid-cols-3 gap-5 mt-10 scrollMobile">
                    <div className=" rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative pb-8">
                        <Link href="/classess/functional training" className="block h-full p-4 pt-16 md:p-10">
                            <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 font-semibold">STRENGTHENING</h3>

                            <h4 className=" uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Functional Training</h4>

                            <p className=" text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">This is a series of intensive exercises that strengthen muscles but do not cause them to grow too much. What is functional training? During classes, exercises are performed that imitate everyday activities (such as reaching for something, getting out of bed, climbing stairs, walking, etc.), but at a faster pace and often with additional weight in the form of dumbbells or kettlebells. The effects of functional training are primarily a general improvement in efficiency, a slimmer figure (training is great for burning fat tissue), improved circulation, and greater endurance. It also strengthens joints and tendons. Recommended for people who have sedentary jobs.</p>

                            <div className="flex justify-end">
                                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>

                            <div className=" absolute top-4 left-4 md:top-6 md:left-auto md:right-6 flex gap-1">
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon1.svg" width={16} className="" alt="" />
                                </div>
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon2.svg" width={16} className="" alt="" />
                                </div>
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon3.svg" width={16} className="" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className=" rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517]  group/item min-w-[300px] lg:min-w-fit relative">
                        <Link href="/classess/flat belly" className="block h-full p-4 pt-16 md:p-10">
                            <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 font-semibold">STRENGTHENING</h3>

                            <h4 className=" uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Flat Belly </h4>

                            <p className=" text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">to strengthen and shape your abdominal muscles. If you want a flat stomach and a beautifully defined six pack - these classes are for you! You will burn fat tissue, lose your belly, sides and unnecessary kilograms and naturally improve your fitness. A shaped figure and better well-being guaranteed!</p>

                            <div className="flex justify-end">
                                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>

                            <div className=" absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon1.svg" width={16} className="" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className=" rounded-2xl bg-[#b8df4b1a] dark:bg-[#86868517] group/item min-w-[300px] lg:min-w-fit relative">
                        <Link href="/classess/yoga" className="block h-full p-4 pt-16 md:p-10">
                            <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 dark:text-gray-400 uppercase font-semibold">body & mind</h3>

                            <h4 className=" uppercase text-black dark:text-white font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Yoga</h4>

                            <p className=" text-gray-600 dark:text-gray-400 text-[12px] 2xl:text-[13px] leading-6">Yoga classes are mainly aimed at people who want to take care of their body and mind in a calmer way. Exercises aimed at strengthening muscles are performed at a slow pace, on a mat, using special blocks and straps. Conscious breathing, in turn, will allow you to de-stress and reduce tension. What does practicing yoga give you? It strengthens and tones the muscles, helps to sculpt the figure, and relaxes. Therefore, yoga can be practiced by both beginners and people who already exercise regularly.</p>

                            <div className="flex justify-end">
                                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>

                            <div className=" absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon4.svg" width={16} className="" alt="" />
                                </div>
                                <div className=" bg-white dark:bg-[#020817] rounded-xl p-2">
                                    <img src="/popularicon5.svg" width={16} className="" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopulaActivities