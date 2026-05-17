import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center gap-9 ${className}`}>
      <img 
        src="/logo.jpg" 
        alt="RU Konstruksi" 
        className="w-48 md:w-37 h-auto object-contain rounded-sm"
      />
    </div>
  );
}
