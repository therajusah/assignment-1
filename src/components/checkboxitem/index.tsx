import React from "react";

interface CheckboxItemProps {
  label: string;
  checked: boolean;
}

const index: React.FC<CheckboxItemProps> = ({ label, checked }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <span>{label}</span>
      <input type="checkbox" checked={checked} readOnly />
    </div>
  );
};

export default index;
