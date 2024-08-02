'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import Accessibility from '@/components/Accessibility';
import { Logs, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const routes = [
  {
    label: 'Courses',
    href: '/classes',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  //   {
  //     label: 'Schedule',
  //     href: '/schedule',
  //   },
  {
    label: 'About',
    href: '/about',
  },
];

type Langs = {
  [key: string]: {
    label: string;
    icon: string;
    circleIcon: string;
  };
};

const langs: Langs = {
  en: {
    label: 'English',
    icon: '/english-flag-icon-rect.svg',
    circleIcon: '/english-flag-icon.svg',
  },
  uz: {
    label: 'Uzbek',
    icon: '/uzbekistan-flag-rect-circle-icon.svg',
    circleIcon: '/uzbekistan-flag-round-circle-icon.svg',
  },
  ru: {
    label: 'Russian',
    icon: '/russia-flag-icon-rect.svg',
    circleIcon: '/russia-flag-round-circle-icon.svg',
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathName = usePathname();
  const [currentLang, setCurrentLang] = useState('uz');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check when component mounts
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const urls =
    pathName === '/cluby-fitness' ||
    pathName === '/contact' ||
    pathName === '/about' ||
    pathName.startsWith('/blogs') ||
    pathName.startsWith('/classess') ||
    pathName === '/files-to-download' ||
    pathName === '/careers';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-30 header-main',
        isVisible &&
          'bg-white dark:bg-[#020817] shadow-xl dark:shadow-slate-900  rounded-b-2xl'
      )}
    >
      <div
        className={cn(
          ' max-w-[1600px] mx-auto transition-all duration-500 pb-5 pt-16 md:pt-10 lg:py-10 px-3 lg:px-16 relative',
          isVisible && '!py-3'
        )}
      >
        <div
          className={cn(
            'flex justify-between items-center text-white font-semibold',
            urls && 'text-black dark:text-white ',
            isVisible && ' text-black dark:text-white '
          )}
        >
          <Link href="/" className=" flex-shrink-0">
            <img
              src={urls ? '/logo.svg' : isVisible ? '/logo.svg' : '/logo.svg'}
              className=" w-auto h-8 md:h-10 lg:h-14 2xl:h-16"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>

          {/* <Link
            href="/cluby-fitness"
            className={cn(
              ' absolute md:relative top-2 md:top-auto right-10 md:right-auto left-10 md:left-auto md:w-auto border-2 border-[#6cce4033] text-sm 2xl:text-lg rounded-full py-2 px-6 flex gap-1 justify-center items-center hover:underline',
              isVisible && ' hidden md:flex border-[#6cce40]',
              urls && 'border-[#6cce40]'
            )}
          >
            Choose a center
            <ChevronDown size={16} className="text-[#6cce40]" />
          </Link> */}

          <ul
            className={cn(
              'lg:text-sm hidden lg:flex gap-16 transition-all duration-500',
              open &&
                ' fixed top-0 bottom-0 left-0 right-0 bg-white dark:bg-[#020817] text-black dark:text-white flex justify-center z-40 items-center text-2xl flex-col gap-8 font-semibold tilt-in-fwd-tr'
            )}
          >
            <li className="lg:hidden ">
              <Button
                onClick={() => setOpen(!open)}
                className="radial-bg-green rounded-full p-0 w-10 fixed top-5 right-5 border-0 shadow-xl "
              >
                <X />
              </Button>
            </li>
            {routes.map((route) => (
              <li key={route.label}>
                <Link
                  className={cn(
                    ' hover:underline  2xl:text-lg',
                    pathName === route.href && ' text-[#6cce40] '
                  )}
                  onClick={() => setOpen(false)}
                  href={route.href}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-x-2 md:gap-x-4 ">
            <ThemeToggle />
            <Accessibility />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={langs[currentLang].circleIcon}
                  alt={langs[currentLang].label}
                  width={40}
                  height={40}
                  className="rounded-full 2xl:w-12 2xl:h-12"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="pointer bg-[#F8FFE5] dark:bg-gray-800"
                align="end"
              >
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => setCurrentLang('en')}
                >
                  <Image
                    src={langs['en'].icon}
                    alt="English"
                    width={30}
                    height={20}
                  />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => setCurrentLang('uz')}
                >
                  <Image
                    src={langs['uz'].icon}
                    alt="Uzbek"
                    width={30}
                    height={20}
                  />
                  Uzbek
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => setCurrentLang('ru')}
                >
                  <Image
                    src={langs['ru'].icon}
                    alt="Russian"
                    width={30}
                    height={20}
                  />
                  Russian
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => setOpen(!open)}
              className="bg-transparent hover:bg-transparent text-[#6cce40] rounded-full border-2 lg:hidden border-[#6cce40]  h-[40px] w-[40px] flex justify-center items-center "
            >
              <Logs className=" w-[30px] h-[30px]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
