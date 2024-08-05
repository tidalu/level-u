import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function Forms({ dataController }: { dataController?: boolean }) {
  return (
    <div>
      <p className=" text-gray-500 text-[12px] font-semibold">
        Leave your details and we will contact you
      </p>
      <form action="">
        <div className=" relative mt-5">
          <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
            <span className=" text-red-400">*</span>E-mail
          </label>
          <input
            type="emial"
            className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
            placeholder="eg.fitfabric@info.com"
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
          />
        </div>
        <div className=" relative mt-9">
          <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
            <span className=" text-red-400">*</span>Telephone
          </label>
          <input
            type="tel"
            className=" w-full lg:w-80 dark:bg-[#020817] outline-none text-sm border-2 border-[#6cce40] rounded-full py-2 px-6"
            placeholder="fitfabric@info.com"
          />
        </div>

        <div className=" relative mt-9">
          <label className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]">
            <span className=" text-red-400">*</span>Telephone
          </label>
          <textarea
            className=" w-full outline-none text-sm dark:bg-[#020817] border-2 border-[#6cce40] rounded-3xl py-5 px-5 resize-none h-28"
            placeholder="Message Content"
          />
        </div>

        <Button
          variant="primaryGreen"
          className="dark:text-black shadow-2xl text-sm rounded-full px-6 mt-5"
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
            Benefit Systems SA with its registered office in Warsaw, ul. Plac
            Europejski 2, 00-844 Warsaw (hereinafter {`"`}{' '}
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
    </div>
  );
}

export default Forms;
