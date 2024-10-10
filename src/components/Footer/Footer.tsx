import { SyntheticEvent, useState } from "react";
import { copyTextToClipboard, useCSSMedia } from "@/utils";
import { FlexBox } from "../FlexBox";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";
import { Snackbar } from "@mui/material";
import { TextManrope } from "../TextManrope";

type ItemFooter = {
  text: string;
  navPath: string;
};

type FooterProps = {
  usefulLinks: ItemFooter[];
  categories: {
    womanCatalog: ItemFooter[];
    manCatalog: ItemFooter[];
  };
};

export const Footer = ({
  usefulLinks,
  categories: { manCatalog, womanCatalog },
}: FooterProps) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const isMobile = useCSSMedia();
  const handleClick = () => {
    copyTextToClipboard("8-812-123-12-12");
    setOpenSnackBar(true);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    console.log(event);
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <FlexBox
      width="100%"
      boxSizing="border-box"
      padding="4rem 1rem 2rem 1rem"
      flexDirection={isMobile ? "column" : "row"}
      gap={isMobile ? "1rem" : undefined}
      justifyContent="space-between"
      alignItems="start"
    >
      <FlexBox gap={isMobile ? "1rem" : "5rem"}>
        <FlexBox
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <FlexBox flexDirection="column">
            <TextManrope marginBottom={"20px"} fontSize={24} fontWeight="400">
              Полезный ссылки
            </TextManrope>
            <FlexBox gap="8px" flexDirection="column">
              {usefulLinks.map((link) => (
                <TextManrope
                  key={`${link.navPath}_${link.text}`}
                  style={{
                    textDecoration: "none",
                    color: "#545454",
                    fontWeight: 100,
                  }}
                  as={Link}
                  to={link.navPath}
                >
                  {link.text}
                </TextManrope>
              ))}
            </FlexBox>
          </FlexBox>
          {!isMobile && (
            <FlexBox gap="1rem">
              <Icon icon="storeLogo" />
              <Icon icon="storeName" />
            </FlexBox>
          )}
        </FlexBox>
        <FlexBox flexDirection="column">
          <TextManrope marginBottom={"20px"} fontSize={24} fontWeight="400">
            Категории товаров
          </TextManrope>
          <TextManrope
            fontWeight={"100"}
            color={"#545454"}
            marginBottom={"10px"}
            fontSize={24}
          >
            Женский каталог
          </TextManrope>
          <FlexBox gap="8px" marginBottom={"20px"} flexDirection="column">
            {womanCatalog.map((link) => (
              <TextManrope
                key={`${link.navPath}_${link.text}`}
                style={{
                  textDecoration: "none",
                  color: "#545454",
                  fontWeight: 100,
                }}
                as={Link}
                to={link.navPath}
              >
                {link.text}
              </TextManrope>
            ))}
          </FlexBox>
          <TextManrope
            fontWeight={"100"}
            color={"#545454"}
            marginBottom={"10px"}
            fontSize={24}
          >
            Мужской каталог
          </TextManrope>
          <FlexBox gap="8px" flexDirection="column">
            {manCatalog.map((link) => (
              <TextManrope
                key={`${link.navPath}_${link.text}`}
                style={{
                  textDecoration: "none",
                  color: "#545454",
                  fontWeight: 100,
                }}
                as={Link}
                to={link.navPath}
              >
                {link.text}
              </TextManrope>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox
        flexDirection="column"
        justifyContent={isMobile ? "start" : "end"}
        alignItems={isMobile ? "start" : "center"}
        gap={isMobile ? "1rem" : undefined}
      >
        <FlexBox flexDirection="column" width="18rem" gap="1rem">
          <FlexBox flexDirection="column">
            <TextManrope marginBottom={"20px"} fontSize={24} fontWeight="400">
              Контактные данные
            </TextManrope>
            <TextManrope
              onClick={handleClick}
              sx={{ cursor: "pointer" }}
              fontSize={24}
              fontWeight="100"
              variant="body1"
              marginBottom={"10px"}
            >
              8 (812) xxx-xx-xx
            </TextManrope>
            <Snackbar
              open={openSnackBar}
              autoHideDuration={2000}
              onClose={handleClose}
              message="Номер телефона успешно скопирован!"
            />
            <TextManrope
              marginBottom={"10px"}
              fontWeight="100"
              fontSize={24}
              variant="body1"
            >
              magnete.spb@mail.ru
            </TextManrope>
            <TextManrope variant="body1" fontWeight={"100"} color="#545454">
              бесплатная доставка по России
            </TextManrope>
          </FlexBox>
          <FlexBox marginBottom={"20px"} marginTop={"20px"} gap={"20px"}>
            <Link
              style={{
                backgroundColor: "black",
                padding: "1rem",
                border: "0px solid black",
                borderRadius: "50%",
              }}
              target="_blank"
              to={"https://web.telegram.org/k/"}
            >
              <Icon icon="telegram" />
            </Link>
            <Link
              style={{
                backgroundColor: "black",
                padding: "1rem",
                border: "0px solid black",
                borderRadius: "50%",
              }}
              target="_blank"
              to={"https://instagram.com"}
            >
              <Icon icon="instagram" />
            </Link>
            <Link
              style={{
                backgroundColor: "black",
                padding: "1rem",
                border: "0px solid black",
                borderRadius: "50%",
              }}
              target="_blank"
              to={"https://instagram.com"}
            >
              <Icon icon="instagram" />
            </Link>
          </FlexBox>
          <FlexBox gap="1rem" flexDirection="column">
            <TextManrope fontWeight={"100"} color="#545454">
              Информация для покупателей. Торговая марка Magnete. Одежда
              собственного производства.
            </TextManrope>
            <TextManrope fontWeight={"100"} color="#545454">
              Все права защищены. © Magnete, 2022-2024
            </TextManrope>
          </FlexBox>
        </FlexBox>
        {isMobile && (
          <FlexBox gap="1rem">
            <Icon icon="storeLogo" />
            <Icon icon="storeName" />
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
};
