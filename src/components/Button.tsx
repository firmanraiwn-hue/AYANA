import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";
import { motion } from "motion/react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-dark text-white hover:bg-dark/90",
      secondary: "bg-secondary text-dark hover:bg-secondary/80",
      outline: "border border-dark text-dark hover:bg-dark hover:text-white",
      ghost: "text-dark hover:bg-secondary/30",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
