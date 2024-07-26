import { useState } from 'react';
import { Button } from './ui/button';

export default function ExpandableText({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      
    >
      {isExpanded ? (
        <p className="text-[13px] xl:text-[14px]  2xl:text-[15px]">
          {children}
        </p>
      ) : (
        <p className="text-[13px] xl:text-[14px]  2xl:text-[15px]">
          {children.slice(0, 332)}...
        </p>
      )}
      <Button
        variant={'secondary'}
        onClick={handleToggle}
        className="my-8 radial_bg_red shadow-xl text-white px-10 font-semibold  rounded-2xl text-[11px] sm:text-sm"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  );
}
