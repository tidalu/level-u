'use client';
import React, { useEffect, useState } from 'react';
import DockLive from './magicui/dock-live';
import { Button } from './ui/button';
import { grid } from 'ldrs';
import { useLocalizedData } from '@/lib/useLocalizedData';
import { toast } from 'react-toastify';


const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const data = useLocalizedData();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      grid.register();
    }
  }, []);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxoksVSHKG3rqk99o8gR6ISDneYkuPZ0KPPi3W4VR-mC9IFmMSn6qVHgEdvEft1CBjr/exec',
        {
          method: 'POST',
          body: JSON.stringify(userData),
        }
      );
      setIsSubmitted(true);
      setUserData({
        name: '',
        phone: '',
      });
    } catch (error) {
      toast.error(data.toastMessages.error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setUserData({
      ...userData,
      phone: userData.phone.replace(/[^0-9]/g, ''),
    });
  }, [userData.phone]);

  return (
    <div className="relative flex h-full max-w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-5 sm:p-10 mt-5 sm:mt-20 ">
      <section className="flex flex-col items-center  justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-center px-4 sm:px-0 ">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-green-900 dark:text-neutral-100">
            {data.hero.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-wrap text-neutral-600 dark:text-neutral-300">
            {data.hero.description}
          </p>
          {!isSubmitted && !isLoading ? (
            <form
              className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full "
              action="#"
              method="post"
              onSubmit={submitForm}
            >
              <div className=" relative mt-20  ">
                <label
                  className=" text-[10px] text-gray-800 p-1 absolute -top-3 left-6 rounded-xl bg-white dark:bg-background  dark:text-gray-400 "
                  htmlFor="name"
                >
                  <span className=" text-red-400">*</span>
                  {data?.contactForm?.name}
                </label>
                <input
                  type="text"
                  className=" w-full l lg:max-w-[400px] sm:w-[300px]  md:w-[350px] lg:w-[400px] bg-transparent   outline-none text-sm border-2 border-[#2bbb15] rounded-xl py-4 px-6 placeholder:text-green-900 dark:text-gray-700"
                  placeholder={data?.contactForm?.namePlaceholder}
                  required
                  name="name"
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value.trim() })
                  }
                />
              </div>
              <div className=" relative mt-2   ">
                <label
                  className=" text-[10px] text-gray-800 p-1  absolute -top-3 left-6 rounded-xl bg-white dark:bg-background  dark:text-gray-400 "
                  htmlFor="phone"
                >
                  <span className=" text-red-400">*</span>
                  {data?.contactForm?.phone}
                </label>
                <input
                  type="tel"
                  className=" w-full l lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] bg-transparent placeholder:text-green-900 outline-none text-sm border-2 border-[#2bbb15] rounded-xl py-4 px-6 dark:text-gray-700"
                  placeholder={data?.contactForm?.phonePlaceholder}
                  required
                  name="phone"
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value.trim() })
                  }
                />
              </div>

              <Button
                className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
                size="lg"
              >
                {data.hero.button}
              </Button>
            </form>
          ) : isLoading && !isSubmitted ? (
            <div className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full">
              <l-grid size={60} speed={1.5} color="rgba(23, 232, 124)"></l-grid>
            </div>
          ) : isSubmitted ? (
            <div className="w-full flex flex-col items-center justify-center p-5 rounded-lg bg-transparent mt-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 dark:text-green-200">
                {data.hero.thankYou.title}
              </h2>
              <p className="mt-2 text-lg text-green-700 dark:text-green-300">
                {data.hero.thankYou.description}
              </p>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                {data.hero.thankYou.stayTuned}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto py-2 max-w-full">
          <p className=" text-sm sm:text-lg text-neutral-600 dark:text-neutral-300">
            {data.hero.checkUs} ⚡️
          </p>
          <DockLive />
        </div>
      </section>
    </div>
  );
};

export default React.memo(Hero);
