import React from "react";
import { useCheckboxStore } from "../../store/checkboxStore";
import CheckboxItem from "../checkboxitem";
import Button from "../ui/button";
import Separator from "../ui/separator";

const CheckboxList: React.FC = () => {
  const { pages, allChecked, setAllChecked, togglePage } = useCheckboxStore();

  const allCheckedChange = (checked: boolean) => {
    setAllChecked(checked);
  };

  const pageCheckedChange = (id: string, checked: boolean) => {
    togglePage(id, checked);
  };

  const buttonClick = () => {
    console.log("Done button clicked");
    console.log(
      "Selected pages:",
      pages.filter((page) => page.checked)
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-6">
        <CheckboxItem
          label="All pages"
          checked={allChecked}
          onChange={allCheckedChange}
          isFirst
        />

        <Separator className="my-[2px]" />

        <div>
          {pages.map((page) => (
            <CheckboxItem
              key={page.id}
              label={page.name}
              checked={page.checked}
              onChange={(checked) => pageCheckedChange(page.id, checked)}
              isFirst={true}
            />
          ))}
        </div>

        <Separator className="my-[2px]" />
      </div>

      <div className="px-6 pb-6 ">
        <Button onClick={buttonClick}>Done</Button>
      </div>
    </div>
  );
};

export default CheckboxList;
