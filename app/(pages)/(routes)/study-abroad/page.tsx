import { GlobeDemo } from '@/components/Globe';
import Hero from '@/components/hero';
import React from 'react';

function StudyAbroad() {
  return (
    <div className=" mx-auto px-3 pt-36 mb-16  max-w-screen-lg">
      <div className="relative flex  flex-col py-20 lg:py-0 md:py-0 sm:py-20">
        <div className="flex-1">
          <GlobeDemo>
            <Hero />
          </GlobeDemo>
        </div>
      </div>
    </div>
  );
}

export default StudyAbroad;
