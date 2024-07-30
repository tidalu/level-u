'use client';

import React, { useEffect, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  PersonStanding,
  ZoomIn,
  ZoomOut,
  Pipette,
  Contrast,
  Eye,
  RotateCcw,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// import { useColorMode } from "@/context/ColorModeProvider"
function Accessibility() {
  const [state, setState] = useState({
    zoom: 100, // default zoom level
    grayscale: false,
    contrast: false,
    negativeContrast: false,
  });

  // text zoom in
  function textZoomIn() {
    setState((prevState) => ({
      ...prevState,
      zoom: prevState.zoom + 10,
    }));
  }

  // text zoom out
  function textZoomOut() {
    setState((prevState) => ({
      ...prevState,
      zoom: prevState.zoom - 10,
    }));
  }
  // grayscale

  function grayscale() {
    setState((prevState) => ({
      ...prevState,
      grayscale: !prevState.grayscale,
    }));
  }
  // contrast

  function contrast() {
    setState((prevState) => ({
      ...prevState,
      contrast: !prevState.contrast,
    }));
  }

  // negative contrast

  function negativeContrast() {
    setState((prevState) => ({
      ...prevState,
      negativeContrast: !prevState.negativeContrast,
    }));
  }

  // reset

  function reset() {
    setState({
      zoom: 100,
      grayscale: false,
      contrast: false,
      negativeContrast: false,
    });

    useEffect(() => {
      document.querySelector('body')!.style.fontSize = `${state.zoom}%`;
      document.querySelector('body')!.style.filter = state.grayscale
        ? 'grayscale(100%)'
        : 'none';
      document.querySelector('body')!.style.filter = state.contrast
        ? 'contrast(200%)'
        : 'none';
      document.querySelector('body')!.style.filter = state.negativeContrast
        ? 'contrast(0%)'
        : 'none';
    }, [state.zoom, state.grayscale, state.contrast, state.negativeContrast]);
  }
  const buttonStyle =
    'w-full flex  px-2 py-1 text-left hover:bg-[#e7e9e7] dark:hover:bg-gray-700 rounded-lg text-sm dark:text-white dark:bg-gray-800 text-gray-900';
  return (
    <div
      className="
        bg-[#F8FFE5]
        hover:bg-[#e7e9e7]
        dark:bg-gray-800
        dark:text-white
        text-black
        h-[40px]
        lg:h-[50px]
        w-[40px]
        lg:w-[50px]
        rounded-xl
        z-50
        fixed
        right-1
        bottom-1/2
        flex 
        justify-center
        items-center
        shadow-md
        "
    >
      <Popover>
        <PopoverTrigger className="flex justify-center items-center w-full h-full">
          <PersonStanding className="w-[30px] h-[30px]" />
        </PopoverTrigger>
        <PopoverContent
          className="mt-1 mr-1  w-[150px] lg:w-[200px]  bg-[#F8FFE5] dark:bg-gray-800 dark:text-white text-gray-900 rounded-lg shadow-md py-2 pr-1 px-2
        "
        >
          <div className=" border-red-400 w-full h-full">
            <h2
              className=" font-medium text-base  w-full
              border-b
             border-b-gray-500 dark:border-b-slate-200 my-[2px]
            "
            >
              Accessibility
            </h2>
            <ul className="w-full flex flex-col">
              {/* text zoom in */}
              <li>
                <button
                  className={cn(buttonStyle)}
                  onClick={() => textZoomIn()}
                >
                  <ZoomIn className="w-5 h-5 mr-2" />
                  Enlarge text
                </button>
              </li>

              {/* text zoom out */}
              <li>
                <button className={cn(buttonStyle)} onClick={textZoomOut}>
                  <ZoomOut className="w-5 h-5 mr-2" />
                  Reduce text
                </button>
              </li>

              {/* Grayscale */}
              <li>
                <button className={cn(buttonStyle)} onClick={grayscale}>
                  <Pipette className="w-5 h-5 mr-2" />
                  Grayscale
                </button>
              </li>

              {/* Contrast */}
              <li>
                <button className={cn(buttonStyle)}>
                  <Contrast className="w-5 h-5 mr-2" />
                  High Contrast
                </button>
              </li>

              {/* High contrast */}
              <li>
                <button className={cn(buttonStyle)}>
                  <Eye className="w-5 h-5 mr-2" />
                  Negative contrast
                </button>
              </li>

              {/*  reset  */}
              <hr className="h-[1px] w-full border-gray-500 dark:bg-slate-100 my-1" />
              <li>
                <button className={cn(buttonStyle)}>
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </button>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Accessibility;
