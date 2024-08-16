import Hero from '@/components/hero';
import DotPattern from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import React from 'react';

function StudyAbroad() {
  return (
    <div className=" mx-auto px-3 pt-36 mb-28 max-w-screen-lg">
      <div className="relative flex min-h-screen flex-col py-20 lg:py-0 md:py-0 sm:py-20">
        <div className="flex-1">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default StudyAbroad;
