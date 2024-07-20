import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Offer = () => {
    return (
        <section>
            <div className="my-16 px-3 lg:px-16 mx-auto">
                <h2 className=" text-black dark:text-white font-extrabold text-2xl text-center">Offer</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <div className="rounded-2xl  bg-[#f8ffe5] dark:bg-[#86868517]">
                        <div className="grid  grid-cols-1 sm:grid-cols-2">
                            <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                                <div className=" text-black dark:text-white font-bold mb-5">for you</div>
                                <p className=" text-[12px] 2xl:text-lg leading-7 text-gray-500 ">Choose a club, buy a pass and enjoy training!</p>

                                <Button variant="primaryGreen" className="mt-12 dark:text-black shadow-xl w-fit rounded-full text-sm 2xl:text-lg">Choose a club</Button>
                            </div>

                            <div>
                                <img src="/offer1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#e7e9e7]">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                                <div className=" text-black font-bold mb-5">for companies</div>
                                <p className=" text-[12px] 2xl:text-lg leading-7 text-gray-500 ">Check out our offer of <br />employee and business passes!</p>

                                <Button variant="primaryGreen" className="mt-6 dark:text-black shadow-xl w-fit rounded-full text-sm 2xl:text-lg">Find out more</Button>
                            </div>

                            <div>
                                <img src="/offer2.webp" className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 mt-5 scrollMobile">
                    <div className=" shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden dark:bg-[#0f1227]">
                        <Link href="/blogs/package-info">
                            <div className=" absolute skew  top-0 left-0 right-0 bottom-52 md:bottom-0 w-full h-full overflow-hidden">
                                <img src="/offer3.webp" className=" rounded-2xl" alt="" />
                            </div>
                            <div className=" text-black dark:text-white relative z-10 mt-12 text-sm  mb-2">YES2<span className=" font-bold">MOVE</span></div>
                            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
                                Online training
                                <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>
                            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-3.webp" alt="" />
                        </Link>
                    </div>

                    <div className="group/item shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden dark:bg-[#0f1227]">
                        <Link href="/blogs/package-info">
                            <div className=" absolute skew top-0 left-0 right-0 bottom-44 md:bottom-0 w-full h-full overflow-hidden">
                                <img src="/offer4.webp" alt="" />
                            </div>
                            <div className=" text-black dark:text-white relative z-10 mt-12 text-sm mb-2"><span className=" font-bold group-hover/item:underline">Zdropfit Academy</span></div>
                            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
                                training and workshops
                                <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>
                            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-1.webp" alt="" />
                        </Link>
                    </div>

                    <div className="group/item shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden dark:bg-[#0f1227]">
                        <Link href="/blogs/package-info">
                            <div className=" absolute skew top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
                                <img src="/offer5.webp" alt="" />
                            </div>
                            <div className=" text-black dark:text-white relative z-10 mt-12 text-sm mb-2"><span className=" font-bold group-hover/item:underline">Introductory Meeting</span></div>
                            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
                                get help from an expert
                                <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                                    <ChevronRight size={14} className="text-black" />
                                </Button>
                            </div>
                            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-2.webp" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer