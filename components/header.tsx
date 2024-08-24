'use client';

import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Accessibility from '@/components/Accessibility';
import { RxTextAlignCenter } from 'react-icons/rx';
import { X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FlipWords } from './ui/flip-words';
import { useLanguage } from './LanguageContext';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { useTheme } from 'next-themes';
import { PreferenceDialogContext } from './PreferenceDialog';

const Header = () => {
  const { themeMode, language } = useContext(PreferenceDialogContext);

  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathName = usePathname();
  let storedLanguage = '';
  if (typeof window !== 'undefined') {
    storedLanguage = localStorage.getItem('selectedLanguage') || 'uz';
  }
  const [currentLang, setCurrentLang] = useState(storedLanguage || 'uz');

  const { switchLanguage } = useLanguage();

  useEffect(() => {
    if (storedLanguage) {
      setCurrentLang(storedLanguage);
    }
  }, [storedLanguage]);

  useEffect(() => {
    if (themeMode && language) {
      localStorage.setItem('themeUsed', themeMode);
      localStorage.setItem('selectedLanguage', language);
    }
  }, [themeMode, language]);

  const data = useLocalizedData();
  const routes = [
    {
      label: data.header.tabs.studyAbroad,
      href: '/study-abroad',
    },
    {
      label: data.header.tabs.courses,
      href: '/classes',
    },
    {
      label: data.header.tabs.careers,
      href: '/careers',
    },
    {
      label: data.header.tabs.contact,
      href: '/contact',
    },
    {
      label: data.header.tabs.about,
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
  const theme = useTheme();

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

  useEffect(() => {
    switchLanguage(currentLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', currentLang);
    }
  }, [currentLang]);

  const urls =
    pathName === '/cluby-fitness' ||
    pathName === '/contact' ||
    pathName === '/about' ||
    pathName.startsWith('/blogs') ||
    pathName.startsWith('/classess') ||
    pathName === '/files-to-download' ||
    pathName === '/careers' ||
    pathName === '/study-abroad';

  const getFigurePath = () => {
    if (theme.theme === 'dark') {
      return '/figure-white.png';
    }

    if (theme.theme === 'light') {
      if (pathName === '/' && !isVisible) {
        return '/figure-white.png';
      }
      if (pathName === '/classes' && !isVisible) {
        return '/figure-white.png';
      }
      if (isVisible) {
        return '/figure-black.png';
      }
    }

    return '/figure-black.png';
  };
  const getCopyright = () => {
    if (theme.theme === 'dark') {
      return '/tm-dark.png';
    }

    if (theme.theme === 'light') {
      if (pathName === '/' && !isVisible) {
        return '/tm-dark.png';
      }
      if (pathName === '/classes' && !isVisible) {
        return '/tm-dark.png';
      }
      if (isVisible) {
        return '/tm-light.png';
      }
    }

    return '/tm-light.png';
  };

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
  };
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
            <div className="flex flex-row gap-[5px]   ">
              <div className="relative self-center shrink">
                <img
                  src={
                    urls ? '/logo.svg' : isVisible ? '/logo.svg' : '/logo.svg'
                  }
                  className=" w-auto h-8 md:h-10   lg:h-12 2xl:h-14 "
                  width={80}
                  height={40}
                  alt="logo"
                />
                <Image
                  src={getCopyright()}
                  alt="copywriting sign"
                  width={2}
                  height={2}
                  className="absolute top-[3px] -right-[9px] scale-200 object-contain w-2 h-auto"
                />
              </div>
              {/* <div className=" w-[3px] bg-black dark:bg-white rounded-lg "></div> */}
              <div className="  rounded-lg w-[5px] ml-[5px]  flex flex-col items-center  ">
                <Image
                  src={getFigurePath()}
                  alt="stick figure"
                  width={0}
                  height={0}
                  className="h-full w-full text-white bg-transparent"
                />
              </div>
              <span
                className=" flex flex-col  items-start justify-center text-center  2xl:w-24 w-20 text-sm text-wrap will-change-transform  
                align-middle 
                md:text-base
                lg:text-lg
                2xl:text-2xl
                3xl:text-3xl
                font-normal
                apply-font-o
              "
              >
                <FlipWords
                  words={['Учебный центр', 'Study center', 'O❛quv markazi']}
                  className="text-inherit"
                />
              </span>
            </div>
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
              'xl:text-sm hidden xl:flex jusitify-evenly gap-16 transition-all duration-500',
              open &&
                ' fixed top-0 bottom-0 left-0 right-0 bg-white dark:bg-[#020817] text-black dark:text-white flex justify-center z-40 items-center text-2xl flex-col gap-8 font-semibold tilt-in-fwd-tr'
            )}
          >
            <li className="xl:hidden ">
              <Button
                onClick={() => setOpen(!open)}
                className="radial-bg-green rounded-full p-0 w-10 fixed top-5 right-5 border-0 shadow-xl "
              >
                <X className="hover:-rotate-90 transition-all delay-75 ease-linear" />
              </Button>
            </li>
            {routes.map((route) => (
              <li key={route.label}>
                <Link
                  className={cn(
                    ' hover:underline  2xl:text-lg text-center',
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

          <div className="flex gap-x-2 items-center md:gap-x-4 ">
            <Accessibility />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={langs[currentLang].circleIcon}
                  alt={langs[currentLang].label}
                  width={40}
                  height={40}
                  className="rounded-full  2xl:w-12 2xl:h-12"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="pointer bg-[#F8FFE5] dark:bg-gray-800"
                align="end"
              >
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => handleLanguageChange('en')}
                >
                  <Image
                    src={langs['en'].icon}
                    alt="English"
                    width={30}
                    height={20}
                  />
                  {data.header.langs.eng}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => handleLanguageChange('uz')}
                >
                  <Image
                    src={langs['uz'].icon}
                    alt="Uzbek"
                    width={30}
                    height={20}
                  />
                  {data.header.langs.uzb}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex flex-row gap-[7px] cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720] rounded-xl"
                  onClick={() => handleLanguageChange('ru')}
                >
                  <Image
                    src={langs['ru'].icon}
                    alt="Russian"
                    width={30}
                    height={20}
                  />
                  {data.header.langs.rus}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => setOpen(!open)}
              className="bg-transparent p-0 m-0 text-[#6cce40] rounded-full w-[40px] [h-40px] border-2 xl:hidden border-[#6cce40] flex justify-center items-center hover-none"
            >
              <RxTextAlignCenter className="w-[25px] hover:-rotate-90 transition-all delay-75 ease-linear h-[25px]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
