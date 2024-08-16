'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

const FooterLinks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState(null);

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
          INFORMATION
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'information' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          <li className="py-2">
            <Link href="/" className="hover:underline">
              Level education
            </Link>
          </li>
          <li className="py-2">
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
          </li>
          <li className="py-2">
            <Link href="/#news-section" className="hover:underline ">
              News
            </Link>
          </li>
          <li className="py-2">
            <Link href="/classes" className="hover:underline">
              Classes
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="col-span-12 md:col-span-3 lg:col-span-2 px-6 md:px-3 py-2"
        onClick={() => toggleSection('services')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          SERVICES
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'services' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          <li className="py-2">
            <Link href="/#offersComp" className="hover:underline">
              Offer for companies
            </Link>
          </li>
          <li className="py-2">
            <Link href="/#forYou" className="hover:underline">
              For you
            </Link>
          </li>
          <li className="py-2">
            <Link href="/study-abroad" className="hover:underline">
              Study Abroad
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact#map" className="hover:underline">
              Find your center
            </Link>
          </li>
        </ul>
      </div>
      {/* <div
        className="col-span-12 md:col-span-3 lg:col-span-2 px-6 md:px-3 py-2"
        onClick={() => toggleSection('documents')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          DOCUMENTS
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'documents' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          <li className="py-2">
            <Link href="/files-to-download" className="hover:underline">
              Files to download
            </Link>
          </li>
        </ul>
      </div> */}
      <div
        className="col-span-12 md:col-span-3 lg:col-span-2 px-6 md:px-3 py-2"
        onClick={() => toggleSection('help')}
      >
        <h3 className="cursor-pointer md:cursor-default flex justify-between items-center font-bold">
          Get in touch
          <ChevronDown className={cn('block md:hidden text-[#6cce40]')} />
        </h3>
        <ul
          className={`transition-all text-gray-300 text-sm duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            openSection === 'help' || !isMobile
              ? 'max-h-screen md:max-h-none'
              : 'max-h-0'
          }`}
        >
          <li className="py-2">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
