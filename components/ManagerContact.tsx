import { Phone, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLocalizedData } from '@/lib/useLocalizedData';
import React from 'react';

function ManagerContact({ children }: { children: React.ReactNode }) {
  const data =  useLocalizedData()
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {data.offers.forCompanies.managerContact.title}
          </DialogTitle>
          <DialogDescription>
            {data.offers.forCompanies.managerContact.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              {data.offers.forCompanies.managerContact.link}
            </Label>
            <Input id="link" defaultValue="+998 99 005 37 47" readOnly />
          </div>
          <Button
            size="sm"
            className="px-3"
            onClick={() => window.location.assign('tel:+998990053747')}
          >
            <span className="sr-only">
              {data.offers.forCompanies.managerContact.phone}
            </span>
            <Phone className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              {data.offers.forCompanies.managerContact.mail}
            </Label>
            <Input id="link" defaultValue="level.edu.uz.@gmail.com" readOnly />
          </div>
          <Button
            size="sm"
            className="px-3"
            onClick={() =>
              (window.location.href = 'mailto:level.edu.uz.@gmail.com')
            }
          >
            <span className="sr-only">
              {data.offers.forCompanies.managerContact.mail}
            </span>
            <Mail className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {data.offers.forCompanies.managerContact.closeBtn}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default React.memo(ManagerContact);
