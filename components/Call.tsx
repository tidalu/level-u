import React from 'react';
//phone icon
import { Phone } from 'lucide-react';

function Call() {
  return (
    <div
      className="transition-all delay-75 z-20 bounce rounded-full w-14 h-14 right-5 bottom-5 filter hover:invert fixed
        bg-[#6cce40] dark:bg-[#223563] flex justify-center items-center shadow-2xl cursor-pointer
        "
      onClick={() => {
        window.open('tel:+48789725742');
      }}
    >
      <Phone size={24} />
    </div>
  );
}

export default Call;
