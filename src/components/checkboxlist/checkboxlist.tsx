import React, { useState } from "react";
import CheckboxItem from "../checkboxitem"; 

interface Page {
  id: string;
  name: string;
  checked: boolean;
}

const CheckboxList: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([
    { id: "page1", name: "Page 1", checked: false },
    { id: "page2", name: "Page 2", checked: false },
    { id: "page3", name: "Page 3", checked: false },
    { id: "page4", name: "Page 4", checked: false },
  ]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-6">
        {pages.map((page) => (
          <CheckboxItem
            key={page.id}
            label={page.name}
            checked={page.checked}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
