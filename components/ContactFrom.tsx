// ContactForm.jsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast, ToastPosition, Bounce } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
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
            body: JSON.stringify(formData),
          }
        ),
        {
          pending: 'Submitting form...',
          success: 'Form submitted successfully',
          error: 'Error submitting form',
        }
      );
      setFormData({
        email: '',
        name: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast.error(
        'Error submitting form better to send an email',
        toastSettings
      );
    }
  }

  return (
    <form onSubmit={formHandler}>
      <div className=" relative mt-5">
        <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
          <span className=" text-red-400">*</span>E-mail
        </label>
        <input
          type="email"
          className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
          placeholder="eg.fitfabric@info.com"
          required
          value={formData.email}
          name="email"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primaryGreen"
        className="dark:text-black shadow-2xl text-sm rounded-full px-6 mt-5"
        type="submit"
      >
        Send a message
      </Button>

      <div className=" mt-3 text-[13px] text-gray-500 dark:text-gray-400">
        ( <span className=" text-red-400">*</span> ) required fields
      </div>
    </form>
  );
}
