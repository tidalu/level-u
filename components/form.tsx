'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastPosition } from 'react-toastify';
import { useLocalizedData } from '@/lib/useLocalizedData';
import React, { useState, memo } from 'react';
function Form({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
 const data = useLocalizedData();

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
            body: JSON.stringify(formData),
          }
        ),
        {
          pending: data.toastMessages.pending,
          success: data.toastMessages.success,
          error: data.toastMessages.error,
        }
      );
      setFormData({
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{data?.contactForm?.title}</DialogTitle>
          <DialogDescription>{data?.contactForm?.description}</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={formHandler}>
          <div className=" relative mt-5">
            <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
              <span className=" text-red-400">*</span>
              {data?.contactForm?.email}
            </label>
            <input
              type="email"
              className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
              placeholder={data?.contactForm?.emailPlaceholder}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className=" relative mt-9">
            <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
              <span className=" text-red-400">*</span>
              {data?.contactForm?.name}
            </label>
            <input
              type="text"
              className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
              placeholder={data?.contactForm?.namePlaceholder}
              required
              value={formData.name}
              name="name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className=" relative mt-9">
            <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
              <span className=" text-red-400">*</span>
              {data?.contactForm?.phone}
            </label>
            <input
              type="tel"
              className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
              placeholder={data?.contactForm?.phonePlaceholder}
              required
              value={formData.phone}
              name="phone"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className=" relative mt-9">
            <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
              <span className=" text-red-400">*</span>
              {data?.contactForm?.message}
            </label>
            <textarea
              className=" w-full outline-none text-sm dark:bg-[#020817] border-2 border-[#6cce40] rounded-3xl py-5 px-5 resize-none h-28"
              placeholder={data?.contactForm?.messagePlaceholder}
              required
              value={formData.message}
              name="message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <Button
            variant="primaryGreen"
            type="submit"
            className="dark:text-black shadow-2xl text-sm rounded-full px-6 mt-5 "
          >
            {data?.contactForm?.button}
          </Button>

          <div className=" mt-3 text-[13px] text-gray-500 dark:text-gray-400">
            ( <span className=" text-red-400">*</span> ){' '}
            {data?.contactForm?.required}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default memo(Form);
