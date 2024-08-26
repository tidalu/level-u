'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, {  useState } from 'react';
import Schedule from '@/components/schedule';
import { useLocalizedData } from '@/lib/useLocalizedData';
import ClientOnly from '@/components/ClientOnly';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import { ToastPosition, Bounce, toast} from 'react-toastify';
import DockLive from '@/components/magicui/dock-live';

const ContactPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
  const data = useLocalizedData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  async function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const toastSettings = {
      position: 'top-center' as ToastPosition,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    };

    try {
      await toast.promise(
        fetch(
          'https://script.google.com/macros/s/AKfycbyWJ0ek3NvwFxLpfqeh2b3nbu_ixMC47zR5MR5S6MgAk5UKfbcEXNdlNt0LRO7yyLM3/exec',
          {
            method: 'POST',
            body: JSON.stringify(userData),
          }
        ),
        {
          pending: data.toastMessages.pending,
          success: data.toastMessages.success,
          error: data.toastMessages.error,
        }
      );
      setUserData({
        email: '',
        name: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast.error(data.toastMessages.error, toastSettings);
    }
  }

  return (
    <div className="h-full max-w-[1900px] mx-auto">
      <ScrollAnimateWrapper>
        <div className=" grid grid-cols-1 reveal lg:grid-cols-2 gap-3 pt-[150px] pb-6 px-3 lg:px-16 mb-16">
          <div className=" flex  flex-col justify-center items-center h-auto w-full gap-4">
            <div className=" bg-[#b8df4b1a] dark:bg-[#86868517] rounded-2xl py-10 px-6 text-center w-full flex flex-col gap-3 text-sm justify-center">
              <p>{data.contactPage.workInfo.customerServiceDepartment}</p>
              <div className=" text-gray-500">+998 55 903 37 47</div>
              <p>{data.contactPage.workInfo.manager}</p>
              <div className=" text-gray-500">+998 99 005 37 47</div>
              <Link
                href="mailto:level.edu.uz.@gmail.com"
                className="hover:underline break-words"
              >
                level.edu.uz.@gmail.com
              </Link>
              <p className="  text-gray-500 leading-8">
                {data.contactPage.workInfo.workdays} <br />
                {data.contactPage.workInfo.start}{' '}
                {data.contactPage.workInfo.end}.
              </p>
            </div>

            <DockLive />
          </div>

          <div className=" mt-10 lg:mt-0">
            <div className=" max-w-md mx-auto marginInherit lg:ml-auto">
              <p className=" text-gray-500 text-[12px] font-semibold">
                {data.contactForm.description}
              </p>

              <form onSubmit={formHandler}>
                <div className=" relative mt-5">
                  <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                    <span className=" text-red-400">*</span>
                    {data.contactForm.email}
                  </label>
                  <input
                    type="email"
                    className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                    placeholder={data.contactForm.emailPlaceholder}
                    required
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className=" relative mt-9">
                  <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                    <span className=" text-red-400">*</span>
                    {data.contactForm.name}
                  </label>
                  <input
                    type="text"
                    className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                    placeholder={data.contactForm.namePlaceholder}
                    required
                    value={userData.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className=" relative mt-9">
                  <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                    <span className=" text-red-400">*</span>
                    {data.contactForm.phone}
                  </label>
                  <input
                    type="tel"
                    className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                    placeholder="+998 99 999 99 99"
                    required
                    value={userData.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>

                <div className=" relative mt-9">
                  <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                    <span className=" text-red-400">*</span>
                    {data.contactForm.message}
                  </label>
                  <textarea
                    className=" w-full outline-none text-sm dark:bg-[#020817] border-2 border-[#6cce40] rounded-3xl py-5 px-5 resize-none h-28"
                    placeholder={data.contactForm.messagePlaceholder}
                    required
                    value={userData.message}
                    name="message"
                    onChange={handleChange}
                  />
                </div>
                <Button
                  variant="primaryGreen"
                  className="dark:text-black shadow-2xl text-sm rounded-full px-6 mt-5"
                  type="submit"
                >
                  {data.contactForm.button}
                </Button>

                <div className=" mt-3 text-[13px] text-gray-500 dark:text-gray-400">
                  ( <span className=" text-red-400">*</span> ){' '}
                  {data.contactForm.required}
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        <div className="pt-16 pb-12 px-3 lg:px-16 mb-16 scroll-mt-20" id="map">
          <ClientOnly>
            <Schedule />
          </ClientOnly>
        </div>
      </ScrollAnimateWrapper>
    </div>
  );
};

export default ContactPage;
