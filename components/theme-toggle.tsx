'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocalizedData } from '@/lib/useLocalizedData';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const pathName = usePathname();
  const data = useLocalizedData();

  const urls = pathName === '/' || pathName === '/classes';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            ' rounded-full 2xl:w-12 2xl:h-12 bg-[#F8FFE5] dark:bg-gray-800',
            urls && 'text-black dark:text-white '
          )}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[#F8FFE5] dark:bg-gray-800 "
      >
        <ScrollAnimateWrapper>
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className="rounded-xl  cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720]"
          >
            {data.header.theme.light}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className="rounded-xl  cursor-pointer hover:bg-[#e7e9e720] dark:hover:bg-[#e7e9e720]"
          >
            {data.header.theme.dark}
          </DropdownMenuItem>
        </ScrollAnimateWrapper>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
