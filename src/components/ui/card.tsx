import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-[#FFFFFF] text-gray-900 border border-gray-200 rounded-2xl shadow-lg  ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};