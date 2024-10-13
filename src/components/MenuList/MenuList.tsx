import { MenuItem } from "@/types";
import { MenuListItem } from "./MenuListItem";
import { useState } from "react";
import { FlexBox } from "@/components";

type MenuListProps = {
  items: MenuItem[];
  level?: number;
  closeMenu: () => void;
};

export const MenuList = ({ items, level = 0, closeMenu }: MenuListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleChildren = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FlexBox flexDirection="column" paddingLeft={`${level * 5}px`}>
      {items.map((item, index) => (
        <MenuListItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          level={level + 1}
          onToggle={() => toggleChildren(index)}
          closeMenu={closeMenu}
        />
      ))}
    </FlexBox>
  );
};
