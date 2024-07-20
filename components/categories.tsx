"use client"

import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { data } from '@/data'
import Link from 'next/link'

const Categories = () => {

    return (
        <div>
            <div className="flex lg:grid lg:grid-cols-5 gap-9  mt-10 scrollMobile pt-10 lg:pt-0">
                <div className=''>
                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] dark:bg-[#020817]  w-[220px] lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg dark:shadow-slate-900">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[0].title}</li>
                        {data.classPage.classList[0].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline uppercase text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold ">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[1].title}</li>
                        {data.classPage.classList[1].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[2].title}</li>
                        {data.classPage.classList[2].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[3].title}</li>
                        {data.classPage.classList[3].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[4].title}</li>
                        {data.classPage.classList[4].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[5].title}</li>
                        {data.classPage.classList[5].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[6].title}</li>
                        {data.classPage.classList[6].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[7].title}</li>
                        {data.classPage.classList[7].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[8].title}</li>
                        {data.classPage.classList[8].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow dark:bg-[#86868517] w-[220px] dark:bg-[#020817]  lg:w-auto p-10 rounded-xl text-sm 2xl:text-lg mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">{data.classPage.classList[9].title}</li>
                        {data.classPage.classList[9].list.map((item) => (
                            <li className="mb-1" key={item.name}>
                                <Link href={`/classess/${item.name.toLowerCase()}`} className="hover:underline text-[#3d4939] dark:text-gray-300 text-[11px] 2xl:text-[14px] font-extrabold">
                                    {item.name}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:mt-10">
                <Button variant="primaryGreen" className="w-full dark:text-black sm:w-auto rounded-full text-sm 2xl:text-lg px-8">
                    <img src="/schedulicon.svg" className="w-5 grayscale mr-2" alt="" />
                    <Link href="/schedule">See the schedule</Link>
                </Button>
            </div>
        </div>
    )
}

export default Categories