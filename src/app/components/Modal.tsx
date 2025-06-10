'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useRouter } from 'next/navigation';
import { Separator } from './ui/separator';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const Modal: React.FC<Props> = ({ children, title, description }) => {
  const [show, setShow] = React.useState<boolean>(true);
  const router = useRouter();
  const handleClose = () => {
    router.back();
    setShow(false);
  };
  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="text-black border max-w-[300px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Separator className="bg-theme-blue w-full" />
        {children}
      </DialogContent>
    </Dialog>
  );
};
