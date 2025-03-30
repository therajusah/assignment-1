
import React, { useState } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`w-full py-3 rounded-sm text-center transition-colors mt-1 text-base font-extralight ${
        isHovered 
          ? "bg-[#FFD84D]" 
          : "bg-[#FFCE22]"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
