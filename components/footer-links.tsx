'use client';

import { useLocalizedData } from '@/lib/useLocalizedData';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from './LanguageContext';
const FooterLinks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const { language } = useLanguage();
 const data = useLocalizedData();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const toggleSection = (section: any) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-5 md:mt-0 reveal">
      <div
        className="col-span-12 md:col-span-3 lg:col-span-2  px-6 md:px-3 py-2"
        onClick={() => toggleSection('information')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          {data?.footer?.information.title}
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'information' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          {data?.footer?.information.links.map((link: any, index: number) => (
            <li key={index} className="py-2">
              <Link
                href={link.href ? link.href : '/'}
                className="hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="col-span-12 md:col-span-3 lg:col-span-2 px-6 md:px-3 py-2"
        onClick={() => toggleSection('services')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          {data?.footer?.services.title}
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'services' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          {data?.footer?.services.links.map((link: any, index: number) => (
            <li key={index} className="py-2">
              <Link
                href={link.href ? link.href : '/'}
                className="hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="col-span-12 md:col-span-3 lg:col-span-2 px-6 md:px-3 py-2"
        onClick={() => toggleSection('help')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          {data?.footer?.contact.title}
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'help' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          {data?.footer?.contact.links.map((link: any, index: number) => (
            <li key={index} className="py-2">
              <Link
                href={link.href ? link.href : '/'}
                className="hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(FooterLinks);
