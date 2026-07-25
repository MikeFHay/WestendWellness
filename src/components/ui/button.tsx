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
      className={`bg-[#D4AF37] text-[#2E2A1F] font-semibold px-4 py-2 rounded-2xl transition-colors hover:bg-[#C29E2E] active:bg-[#B08E24] disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
