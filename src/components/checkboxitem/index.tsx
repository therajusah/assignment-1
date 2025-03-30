
import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface CheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  isFirst?: boolean;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ 
  label, 
  checked, 
  onChange,
  isFirst = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  const getCheckboxClassName = () => {
    if (!checked && !isHovered && !isPressed) {
      return "bg-white border-gray-300";
    }
    if (!checked && isPressed) {
      return "bg-gray-100 border-gray-400";
    }
  
    if (!checked && isHovered && !isPressed) {
      return "bg-white border-gray-300";
    }

    if (checked && !isHovered && !isPressed) {
      return "bg-blue-500 border-blue-500";
    }

    if (checked && isPressed) {
      return "bg-blue-600 border-blue-600";
    }
    
    if (checked && isHovered && !isPressed) {
      return "bg-blue-400 border-blue-400";
    }
    
    return "bg-white border-gray-300";
  };


  const getTickColor = () => {
    if (checked) {
      if (isPressed) {
        return "text-white"; 
      }
      if (isHovered) {
        return "text-white"; 
      }
      return "text-white"; 
    }
    
    if (isPressed) {
      return "text-gray-500"; 
    }
    
    if (isHovered) {
      return "text-gray-300"; 
    }
    
    return "text-gray-500"; 
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-between py-3 cursor-pointer",
        isFirst ? "" : "border-t border-gray-200"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={() => onChange(!checked)}
    >
      <span className="text-lg font-normal text-gray-800">{label}</span>
      <div
        className={cn(
          "w-6 h-6 rounded border flex items-center justify-center transition-colors",
          getCheckboxClassName()
        )}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={getTickColor()}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
        {!checked && (isHovered || isPressed) && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={getTickColor()}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
    </div>
  );
};

export default CheckboxItem;
