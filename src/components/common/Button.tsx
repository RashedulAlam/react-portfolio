import React from "react";
import { tv } from "tailwind-variants";

export interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label?: string;
  onClick?: () => {};
  size?: "md" | "lg" | "sm";
  color?: "primary" | "secondary";
}

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

const Button = ({
  label = "Button",
  onClick,
  type = "button",
  size = "sm",
  color = "primary",
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={button({ size: size, color: color })}
    >
      {label}
    </button>
  );
};

export default Button;
