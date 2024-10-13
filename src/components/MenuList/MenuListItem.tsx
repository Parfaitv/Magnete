import { MenuItem } from "@/types";
import { MenuList } from "./MenuList";
import { FlexBox, Icon, TextManrope } from "@/components";
import { useNavigate } from "react-router-dom";

type MenuListItemProps = {
  item: MenuItem;
  isOpen: boolean;
  level: number;
  onToggle: () => void;
  closeMenu: () => void;
};

export const MenuListItem = ({
  isOpen,
  item: { text, navPath, children },
  level,
  onToggle,
  closeMenu,
}: MenuListItemProps) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(navPath);
    closeMenu();
  };
  return (
    <FlexBox flexDirection="column">
      <FlexBox alignItems="center" gap="16px">
        <TextManrope
          fontSize={20}
          sx={{
            ":hover": {
              textDecoration: "underline;",
              fontWeight: 600,
            },
          }}
          onClick={onNavigate}
        >
          {text}
        </TextManrope>
        {children && children.length > 0 && (
          <Icon icon={isOpen ? "up" : "down"} onClick={onToggle} />
        )}
      </FlexBox>
      {isOpen && children && children.length > 0 && (
        <MenuList closeMenu={closeMenu} items={children} level={level + 1} />
      )}
    </FlexBox>
  );
};
