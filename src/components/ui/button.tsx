import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const Button = ({ children, className = "", onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#D4AF37] text-[#6B704F] px-4 py-2 rounded-2xl hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
