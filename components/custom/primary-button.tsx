import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  className,
  children,
  type = "button",
  ...props
}, ref) => {
  return (
    <Button 
      type={type}
      className={cn("bg-[#dc4d3f] hover:bg-[#b03d32]", className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
});

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;