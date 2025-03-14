import { SyntheticEvent, useEffect, useState } from "react";
import { copyTextToClipboard, useCSSMedia } from "@/utils";
import { FlexBox, TextManrope, Icon, MenuList } from "@/components";
import { Drawer, Snackbar } from "@mui/material";
import { useNavigate } from "react-router";
import { MenuItem } from "@/types";

type HeaderProps = {
  menuItems: MenuItem[];
};

export const Header = ({ menuItems }: HeaderProps) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useCSSMedia(525);
  const navigate = useNavigate();

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  const handleClick = () => {
    copyTextToClipboard("+7 921 555 15 51");
    setOpenSnackBar(true);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    console.log(event);

    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const scroll = scrollY > 24;

  return (
    <FlexBox
      sx={{
        background: scroll ? "rgb(245 245 245 / 30%)" : "transparent",
        backdropFilter: scroll ? "blur(6px)" : undefined,
        transition: "1s ease-in-out",
      }}
      position="fixed"
      top={0}
      height="4rem"
      width="100%"
    >
      <FlexBox
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        padding="0 10px"
      >
        <FlexBox
          justifyContent="center"
          alignItems="center"
          padding="10px 0"
          gap="8px"
        >
          <Icon icon="storeLogo" onClick={() => setOpenMenu(true)} />
          <Icon icon="storeName" onClick={() => navigate("/")} />
        </FlexBox>
        {!isMobile && (
          <FlexBox flexDirection="column" justifyContent="end" alignItems="end">
            <TextManrope
              fontWeight="600"
              onClick={handleClick}
              sx={{ cursor: "pointer" }}
            >
              +7 921 555 15 51
            </TextManrope>
            <Snackbar
              open={openSnackBar}
              autoHideDuration={2000}
              onClose={handleClose}
              message="Номер телефона успешно скопирован!"
            />
            <TextManrope>Бесплатная доставка по всей России</TextManrope>
          </FlexBox>
        )}
      </FlexBox>
      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
        <FlexBox
          padding="10px"
          minWidth="365px"
          flexDirection="column"
          gap="16px"
        >
          <FlexBox width="100%" justifyContent="end">
            <Icon
              icon="close"
              width={24}
              height={24}
              onClick={() => setOpenMenu(false)}
            />
          </FlexBox>
          <MenuList closeMenu={() => setOpenMenu(false)} items={menuItems} />
        </FlexBox>
      </Drawer>
    </FlexBox>
  );
};
