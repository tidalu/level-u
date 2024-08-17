import { Dock, DockIcon } from '@/components/magicui/dock';
import React from 'react';
import { FaTelegram, FaInstagram, FaLink } from 'react-icons/fa';

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockLive() {
  return (
    <div className="  h-auto w-full max-w-[32rem] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Dock
      </span> */}
      <Dock>
        <DockIcon>
          <FaInstagram className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <FaTelegram className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <FaLink className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}
