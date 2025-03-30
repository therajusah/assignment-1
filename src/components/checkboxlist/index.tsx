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
    <div className="w-[370px] h-[326px] mx-auto mt-[50px] bg-white rounded-[6px] shadow-xl overflow-hidden border border-[#EEEEEE]">
      <div className="px-6 pt-4">
        <CheckboxItem
          label="All pages"
          checked={allChecked}
          onChange={allCheckedChange}
          isFirst
        />

        <Separator className="my-2" />

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

      <div className="px-6 pb-4 pt-2">
        <Button onClick={buttonClick}>Done</Button>
      </div>
    </div>
  );
};

export default CheckboxList;
