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
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useLocalizedData } from '@/lib/useLocalizedData';

function Accessibility() {
  const { setTheme } = useTheme();
  const [state, setState] = useState({
    zoom: 100, // default zoom level
    grayscale: false,
    contrast: false,
    negativeContrast: false,
  });
  const [limit, setLimit] = useState(0);

  const [clicks, setClicks] = useState({
    zoomIn: 0,
    zoomOut: 0,
    grayscale: 0,
    contrast: 0,
    negativeContrast: 0,
    reset: 0,
  });
  const data = useLocalizedData();

  // text zoom in
  function textZoomIn() {
    if (limit >= 5) return;
    setState((prevState) => ({
      ...prevState,
      zoom: prevState.zoom + 2,
    }));
    setClicks((prevState) => ({
      ...prevState,
      zoomIn: Math.min(prevState.zoomIn + 1, 10),
    }));
    setLimit((limit) => limit + 1);
  }

  // text zoom out
  function textZoomOut() {
    if (limit <= -3) return;
    setState((prevState) => ({
      ...prevState,
      zoom: prevState.zoom - 2,
    }));
    setClicks((prevState) => ({
      ...prevState,
      zoomIn: Math.max(prevState.zoomIn - 1, -3),
    }));
    setLimit((limit) => limit - 1);
  }

  // grayscale
  function grayscale() {
    setState((prevState) => ({
      ...prevState,
      grayscale: !prevState.grayscale,
      contrast: false,
      negativeContrast: false,
    }));
    setClicks((prevState) => ({
      ...prevState,
      grayscale: prevState.grayscale === 1 ? 0 : 1,
      contrast: 0,
      negativeContrast: 0,
    }));
  }

  // contrast
  function contrast() {
    setState((prevState) => ({
      ...prevState,
      contrast: !prevState.contrast,
      grayscale: false,
      negativeContrast: false,
    }));
    setClicks((prevState) => ({
      ...prevState,
      grayscale: 0,
      contrast: prevState.contrast === 1 ? 0 : 1,
      negativeContrast: 0,
    }));
  }

  // negative contrast
  function negativeContrast() {
    setState((prevState) => ({
      ...prevState,
      negativeContrast: !prevState.negativeContrast,
      grayscale: false,
      contrast: false,
    }));
    setClicks((prevState) => ({
      ...prevState,
      grayscale: 0,
      contrast: 0,
      negativeContrast: prevState.negativeContrast === 1 ? 0 : 1,
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
    setClicks({
      grayscale: 0,
      contrast: 0,
      negativeContrast: 0,
      zoomIn: 0,
      zoomOut: 0,
      reset: 0,
    });
  }

  useEffect(() => {
    document.documentElement!.style.fontSize = `${state.zoom}%`;
    console.log(clicks, 'out');

    let filters = [];
    if (state.grayscale) filters.push('grayscale(100%)');
    if (state.contrast) filters.push('contrast(1.75)');
    if (state.negativeContrast) filters.push('invert(100%)');

    document.documentElement!.style.filter = filters.join(' ');
  }, [state.zoom, state.grayscale, state.contrast, state.negativeContrast]);

  const buttonStyle =
    'w-full flex px-2 py-1 text-left hover:bg-[#e7e9e7] dark:hover:bg-gray-700 rounded-lg text-sm dark:text-white dark:bg-gray-800 text-gray-900';

  return (
    <div
      className="
        bg-[#F8FFE5]
        hover:bg-[#e7e9e7]
        dark:bg-gray-800
        dark:text-white
        text-black
        h-[40px]
        2xl:h-[48px]
        w-[40px]
        2xl:w-[48px]
        rounded-full
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
        <PopoverContent className="mt-1 mr-1 w-[150px] lg:w-[200px] bg-[#F8FFE5] dark:bg-gray-800 dark:text-white text-gray-900 rounded-lg shadow-md py-2 pr-1 px-2">
          <div className="border-red-400 w-full h-full">
            <h2 className="font-medium text-base w-full border-b border-b-gray-500 dark:border-b-slate-200 my-[2px]">
              {data.header.accessibility.title}
            </h2>
            <ul className="w-full flex flex-col gap-1 p-1">
              {/* text zoom in */}
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.zoomIn > 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800',
                    limit >= 5 && 'opacity-50 cursor-not-allowed'
                  )}
                  onClick={textZoomIn}
                >
                  <ZoomIn className="w-5 h-5 mr-2" />
                  {data.header.accessibility.enlargeText}
                </button>
              </li>

              {/* text zoom out */}
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.zoomIn < 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800',
                    limit <= -3 && 'opacity-50 cursor-not-allowed'
                  )}
                  onClick={textZoomOut}
                >
                  <ZoomOut className="w-5 h-5 mr-2" />
                  {data.header.accessibility.reduceText}
                </button>
              </li>

              {/* Grayscale */}
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.grayscale !== 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800'
                  )}
                  onClick={grayscale}
                >
                  <Pipette className="w-5 h-5 mr-2" />
                  {data.header.accessibility.grayscale}
                </button>
              </li>

              {/* Contrast */}
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.contrast !== 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800'
                  )}
                  onClick={contrast}
                >
                  <Contrast className="w-5 h-5 mr-2" />
                  {data.header.accessibility.highContrast}
                </button>
              </li>

              {/* Negative contrast */}
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.negativeContrast !== 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800'
                  )}
                  onClick={negativeContrast}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  {data.header.accessibility.negativeContrast}
                </button>
              </li>

              {/* reset */}
              <hr className="h-[1px] w-full border-gray-500 dark:bg-slate-100 my-1" />
              <li>
                <button
                  className={cn(
                    buttonStyle,
                    clicks.reset !== 0
                      ? 'bg-[#00ff006a] dark:bg-[#00ff006a]'
                      : 'bg-[#F8FFE5] dark:bg-gray-800'
                  )}
                  onClick={reset}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  {data.header.accessibility.reset}
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
