import React, { useEffect, useState, useRef } from 'react';
import { Phone } from 'lucide-react';

function Call() {
  const [scrollActive, setScrollActive] = useState(true);
  const scrollTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setScrollActive(true);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`transition-all delay-150 ease-linear z-20 rounded-full fixed bottom-5 right-5 filter hover:invert bg-[#6cce40] dark:bg-[#223563] flex justify-center items-center shadow-2xl cursor-pointer ${
        scrollActive ? 'opacity-100' : 'opacity-0'
      } ${
        scrollActive ? 'translate-x-0' : 'translate-x-32'
      } w-[44px] h-[44px]  lg:w-12 lg:h-12 xl:w-14 xl:h-14`}
      onClick={() => window.open('tel:+998559033747')}
    >
      <Phone size={0} className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 " />
    </div>
  );
}

export default React.memo(Call);
