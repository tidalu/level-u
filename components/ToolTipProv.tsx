import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

function ToolTipProv({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    //   faster show tooltip
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ToolTipProv;
