'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastPosition } from 'react-toastify';

import { useState } from 'react';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

export function Form({ children }: { children: React.ReactNode }) {
  const [dataController, setDataController] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

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
          pending: 'Submitting form...',
          success: 'Form submitted successfully',
          error: 'Error submitting form',
        }
      );
    } catch (error) {
      toast.error(
        'Error submitting form better to send an email',
        toastSettings
      );
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <ScrollAnimateWrapper>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogDescription>
              Leave your details and we will contact you
            </DialogDescription>
          </ScrollAnimateWrapper>
        </DialogHeader>
        <ScrollAnimateWrapper>
          <form action="" onSubmit={formHandler}>
            <div className=" relative mt-5">
              <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                <span className=" text-red-400">*</span>E-mail
              </label>
              <input
                type="email"
                className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                placeholder="eg.fitfabric@info.com"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className=" relative mt-9">
              <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                <span className=" text-red-400">*</span>First name and last name
              </label>
              <input
                type="text"
                className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                placeholder="eg.John doe"
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
                <span className=" text-red-400">*</span>Telephone
              </label>
              <input
                type="tel"
                className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                placeholder="+998 99 999 99 99"
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
                <span className=" text-red-400">*</span>Message
              </label>
              <textarea
                className=" w-full outline-none text-sm dark:bg-[#020817] border-2 border-[#6cce40] rounded-3xl py-5 px-5 resize-none h-28"
                placeholder="Message Content"
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
              Send a message
            </Button>

            <div className=" mt-3 text-[13px] text-gray-500 dark:text-gray-400">
              ( <span className=" text-red-400">*</span> ) required fields
            </div>
            {dataController && (
              <p className=" mt-4 text-[13px] text-gray-500 dark:text-gray-400 leading-6">
                <span className=" font-semibold text-[#0d1c07] dark:text-white">
                  Data controller:
                </span>{' '}
                Benefit Systems SA with its registered office in Warsaw, ul.
                Plac Europejski 2, 00-844 Warsaw (hereinafter {`"`}{' '}
                <span className=" font-semibold text-[#0d1c07] dark:text-white">
                  we
                </span>{' '}
                {`"`} or {`"`}{' '}
                <span className=" font-semibold text-[#0d1c07] dark:text-white">
                  Benefit Systems
                </span>{' '}
                {`"`}). You can contact the controller via e-mail:{' '}
                <Link
                  href=""
                  className=" underline font-semibold text-[#0d1c07] dark:text-white"
                >
                  daneosobowe@fitness.benefitsystems.pl{' '}
                </Link>{' '}
                or in writing to the following address: Pl. Europejski 2, 00-844
                Warsaw, with the note {`"`}Personal data{`"`}.
              </p>
            )}
          </form>
        </ScrollAnimateWrapper>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </DialogContent>
    </Dialog>
  );
}
