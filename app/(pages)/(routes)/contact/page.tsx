'use client';

import useScrollReveal from '@/app/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  const [showReadmore, setShowReadmore] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, name, phone, message } = userData;
    const subject = 'I am connecting regarding the course';
    const body = `Assalomu alaykum \n My name is ${name}\n My message: ${message} \n\n\nEmail: ${email}\nPhone: ${phone}\nBest regards ) \n${name}`;
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      useScrollReveal();
    }
  }, []);

  return (
    <div className="h-full max-w-[1900px] mx-auto">
      <div className=" grid grid-cols-1 reveal lg:grid-cols-2 gap-3 pt-32 pb-12 px-3 lg:px-16 mb-16">
        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className=" bg-[#b8df4b1a] dark:bg-[#86868517] rounded-2xl py-10 px-6 text-center flex flex-col gap-3 text-sm justify-center">
              <p>Customer Service Department</p>
              <div className=" text-gray-500">22 487 81 33</div>
              <Link href="/" className="hover:underline break-words">
                dok@fitness.benefitsystems.pl
              </Link>
              <p className="  text-gray-500 leading-8">
                We work from Monday to Friday, <br />
                from 8:00 to 20:00.
              </p>
            </div>

            <div className=" bg-[#b8df4b1a] dark:bg-[#86868517] rounded-2xl py-10 px-6 text-center flex flex-col gap-3 text-sm justify-center">
              <p>Contact for Companies</p>
              <div className=" text-gray-500">Requests for quotes</div>
              <Link href="/" className="hover:underline break-words">
                opakowaniadlafirm@fitness.benefitsystems.pl
              </Link>
            </div>
          </div>
          <div className="text-gray-500 text-[12px] mt-5">
            If you want to settle your outstanding payments, please use the
            account: 59 1090 1056 0000 0001 4794 6002
          </div>
        </div>

        <div className=" mt-10 lg:mt-0">
          <div className=" max-w-md mx-auto marginInherit lg:ml-auto">
            <p className=" text-gray-500 text-[12px] font-semibold">
              Leave your details and we will contact you
            </p>

            <form onSubmit={handleSubmit}>
              <div className=" relative mt-5">
                <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                  <span className=" text-red-400">*</span>E-mail
                </label>
                <input
                  type="email"
                  className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                  placeholder="eg.fitfabric@info.com"
                  required
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className=" relative mt-9">
                <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
                  <span className=" text-red-400">*</span>First name and last
                  name
                </label>
                <input
                  type="text"
                  className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
                  placeholder="eg.John doe"
                  required
                  value={userData.name}
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
                  value={userData.phone}
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
                Send a message
              </Button>

              <div className=" mt-3 text-[13px] text-gray-500 dark:text-gray-400">
                ( <span className=" text-red-400">*</span> ) required fields
              </div>
            </form>

            <div>
              <Button
                onClick={() => setShowReadmore(!showReadmore)}
                className=" mt-5 bg-transparent hover:bg-transparent text-[#6cce40] font-semibold"
              >
                read more
                {showReadmore ? (
                  <ChevronUp className=" ml-1" size={18} />
                ) : (
                  <ChevronDown className=" ml-1" size={18} />
                )}
              </Button>

              {showReadmore && (
                <div>
                  <p className=" text-[13px] text-gray-500 dark:text-gray-400 leading-6">
                    <span className=" font-semibold text-[#0d1c07] dark:text-white">
                      Processing purposes:{' '}
                    </span>
                    We will process your personal data in order to provide you
                    with the service of maintaining an account on our website;
                    for tax and accounting purposes; to pursue, determine or
                    defend against claims; to facilitate the use of our website;
                    for direct marketing, including profiling, and to conduct
                    analyses and statistics for marketing purposes and to survey
                    satisfaction with the services offered.
                  </p>

                  <p className="mt-4 text-[13px] text-gray-500 dark:text-gray-400 leading-6">
                    <span className=" font-semibold text-[#0d1c07] dark:text-white">
                      Your rights in connection with the processing of personal
                      data:
                    </span>{' '}
                    The right to request access to personal data; the right to
                    request the rectification of personal data; the right to
                    request the deletion of personal data; the right to request
                    the restriction of the processing of personal data, the
                    right to object to the processing of personal data; the
                    right to transfer personal data; the right to withdraw
                    consent to the processing of personal data; and the right to
                    lodge a complaint with the President of the Personal Data
                    Protection Office.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
