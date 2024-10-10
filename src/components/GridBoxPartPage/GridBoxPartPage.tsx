import { Box } from "@mui/material";
import { GridBox } from "../GridBox";
import { Link } from "react-router-dom";
import { TextManrope } from "../TextManrope";
import { useCSSMedia } from "@/utils/useCSSMedia";
import { useNavigate } from "react-router";

type Item = {
  img: string;
  navPath: string;
};

type GridBoxPartPageProps = {
  items: Item[];
  header: {
    title: string;
    navPath: string;
  };
};

const maxIsMobile = "720px";
const minIsMobile = "360px";
const maxDesktop = "1440px";
const minDesktop = "720px";

export const GridBoxPartPage = ({
  items,
  header: { title, navPath },
}: GridBoxPartPageProps) => {
  const navigate = useNavigate();
  const isMobile = useCSSMedia();
  if (items.length < 5) navigate("/404");
  const {
    0: item1,
    1: item2,
    2: item3,
    3: item4,
    4: item5,
  } = Object.assign({}, items);

  return (
    <GridBox gridTemplateColumns="1fr">
      <Box>
        <TextManrope
          as={Link}
          to={navPath}
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: 32,
            fontWeight: "100",
          }}
        >
          {title}
        </TextManrope>
      </Box>
      <GridBox
        gridTemplateColumns="repeat(4, 1fr)"
        gridTemplateRows={`repeat(3, ${isMobile ? minIsMobile : maxIsMobile})`}
      >
        <Link
          to={item1.navPath}
          style={{
            backgroundImage: `url(${item1.img})`,
            backgroundSize: "100% 100%",
            maxHeight: isMobile ? maxIsMobile : maxDesktop,
            gridColumn: "1/3",
            gridRow: "1/3",
          }}
        />
        <GridBox
          gridTemplateColumns="1fr 1fr"
          gridColumn="3/5"
          maxHeight={isMobile ? minIsMobile : minDesktop}
        >
          <Link
            to={item2.navPath}
            style={{
              backgroundImage: `url(${item2.img})`,
              backgroundSize: "100% 100%",
            }}
          />
          <Link
            to={item3.navPath}
            style={{
              backgroundImage: `url(${item3.img})`,
              backgroundSize: "100% 100%",
            }}
          />
        </GridBox>
        <Link
          to={item4.navPath}
          style={{
            backgroundImage: `url(${item4.img})`,
            backgroundSize: "100% 100%",
            gridColumn: "3/5",
            gridRow: "2/4",
            maxHeight: isMobile ? maxIsMobile : maxDesktop,
          }}
        />
        <Link
          to={item5.navPath}
          style={{
            backgroundImage: `url(${item5.img})`,
            backgroundSize: "100% 100%",
            gridColumn: "1/3",
            gridRow: "3/5",
            maxHeight: isMobile ? minIsMobile : minDesktop,
          }}
        />
      </GridBox>
    </GridBox>
  );
};
