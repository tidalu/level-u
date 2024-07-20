"use client"

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogList = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3.1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 756,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const BlogList = [
        {
            id: 1,
            img: "/fit1.webp",
            title: "We will introduce you to the world of fitness and gym",
        },
        {
            id: 2,
            img: "/fit2.webp",
            title: "We will give you a choice of many types of classes",
        },
        {
            id: 3,
            img: "/fit3.webp",
            title: "We will create a professional exercise plan",
        },
        {
            id: 4,
            img: "/fit4.webp",
            title: "And we'll make sure you want to get up from couch ",
        },
    ]

    return (
        <div className=" mt-4 ">
            <Slider  {...settings} className=" ">
                {BlogList.map((item) => (
                    <div key={item.id} className=" h-full">
                        <div className=" bg-white dark:bg-[#020817] rounded-2xl p-4 group/item mr-5">
                            <Link href="/blogs/package-info">
                                <div className=" grid grid-cols-12 gap-4">
                                    <div className=" col-span-6">
                                        <img src={item.img} className=" rounded-2xl" alt="fit1" />
                                    </div>
                                    <div className=" col-span-6 flex flex-col justify-between">
                                        <div className=" text-[13px] 2xl:text-lg font-semibold leading-6 group-hover/item:underline">
                                            {item.title}
                                        </div>

                                        <div className=" text-right">
                                            <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                                                <ChevronRight size={14} className="text-black" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeBlogList