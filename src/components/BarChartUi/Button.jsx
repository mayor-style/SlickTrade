import React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

const buttonVariants = {
  default: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-input hover:bg-gold hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-red-600 text-white hover:bg-red-600/90",
};

const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-2 py-1 text-sm",
  lg: "px-6 py-3 text-lg",
};
