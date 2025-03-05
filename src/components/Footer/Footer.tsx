import { SyntheticEvent, useState } from "react";
import { copyTextToClipboard, useCSSMedia } from "@/utils";
import { FlexBox } from "../FlexBox";
import { GridBox } from "../GridBox";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";
import { MessageBox } from "../MessageBox";
import { Snackbar } from "@mui/material";
import { TextManrope } from "../TextManrope";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleClick = (text: string) => {
    copyTextToClipboard(text);
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
    <GridBox gridTemplateColumns="1fr">
      <GridBox gridTemplateColumns="1fr">
        <MessageBox
          title={
            <>
              Нужна консультация?
              <br /> Напишите стилисту бренда ВИКТОРИИ СИТНИК
            </>
          }
          telegramUrl="https://t.me/Sitnivok"
          instagramUrl="https://www.instagram.com/sitnivok"
        />
        <MessageBox
          title="Чтобы сделать заказ, напишите нам в социальных сетях!"
          telegramUrl="https://t.me/showroommagnete"
          instagramUrl="https://www.instagram.com/magnete.spb?igsh=MWoyZ2x3ZG00dGFjeg=="
        />
      </GridBox>
      <FlexBox
        width="100%"
        boxSizing="border-box"
        padding="4rem 1rem 2rem 1rem"
        flexDirection={isMobile ? "column" : "row"}
        gap={isMobile ? "1rem" : undefined}
        justifyContent="space-between"
        alignItems="start"
      >
        <FlexBox
          gap={isMobile ? "1rem" : "5rem"}
          width={isMobile ? "100%" : "auto"}
          justifyContent={isMobile ? "space-between" : "center"}
        >
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
                    sx={{
                      textDecoration: "none",
                      color: "#545454",
                      fontWeight: 100,
                      ":hover": {
                        textDecoration: "underline;",
                        fontWeight: 600,
                      },
                    }}
                    onClick={() => navigate(link.navPath)}
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
                  sx={{
                    textDecoration: "none",
                    color: "#545454",
                    fontWeight: 100,
                    ":hover": {
                      textDecoration: "underline;",
                      fontWeight: 600,
                    },
                  }}
                  onClick={() => navigate(link.navPath)}
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
                  sx={{
                    textDecoration: "none",
                    color: "#545454",
                    fontWeight: 100,
                    ":hover": {
                      textDecoration: "underline;",
                      fontWeight: 600,
                    },
                  }}
                  onClick={() => navigate(link.navPath)}
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
                onClick={() => handleClick("+79215551551")}
                sx={{ cursor: "pointer" }}
                fontSize={24}
                fontWeight="100"
                variant="body1"
                marginBottom={"10px"}
              >
                +7 (921) xxx-xx-xx
              </TextManrope>
              <Snackbar
                open={openSnackBar}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Скопировано!"
              />
              <TextManrope
                onClick={() => handleClick("magnete.spb@mail.ru")}
                sx={{ cursor: "pointer" }}
                marginBottom={"10px"}
                fontWeight="100"
                fontSize={24}
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
                  width: "25px",
                  height: "25px",
                  backgroundColor: "black",
                  padding: "1rem",
                  border: "0px solid black",
                  borderRadius: "50%",
                }}
                target="_blank"
                to={"https://t.me/showroommagnete"}
              >
                <Icon icon="telegram" />
              </Link>
              <Link
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "black",
                  padding: "1rem",
                  border: "0px solid black",
                  borderRadius: "50%",
                }}
                target="_blank"
                to={
                  "https://www.instagram.com/magnete.spb?igsh=MWoyZ2x3ZG00dGFjeg=="
                }
              >
                <Icon icon="instagram" />
              </Link>
              <Link
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "black",
                  padding: "1rem",
                  border: "0px solid black",
                  borderRadius: "50%",
                }}
                target="_blank"
                to={"https://web.whatsapp.com/"}
              >
                <Icon icon="whatsUp" />
              </Link>
            </FlexBox>
            <FlexBox gap="1rem" flexDirection="column">
              <TextManrope fontWeight={"100"} color="#545454">
                Информация для покупателей. Торговая марка Magnete. Одежда
                собственного производства.
              </TextManrope>
              <TextManrope fontWeight={"100"} color="#545454">
                Все права защищены. © Magnete, 2022-{new Date().getFullYear()}
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
    </GridBox>
  );
};
