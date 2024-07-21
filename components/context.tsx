import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';

function Context({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="px-4">
          <Label>Settings</Label>
          <ContextMenuItem>contrast +10%</ContextMenuItem>
          <ContextMenuItem>contrast -10%</ContextMenuItem>
          <Separator />
          <Label>Font size</Label>
          <ContextMenuItem>font +10%</ContextMenuItem>
          <ContextMenuItem>font -10%</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export default Context;
