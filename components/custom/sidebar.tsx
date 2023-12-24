"use client";

import { PanelLeft } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ children, ...props }, ref) => (
  <SheetPrimitive.Close ref={ref} {...props}>
    {children}
    <span className="sr-only">Close</span>
  </SheetPrimitive.Close>
))
SheetClose.displayName = SheetPrimitive.Close.displayName;

const Sidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <PanelLeft className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[20rem]">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose>
            Today
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sidebar

