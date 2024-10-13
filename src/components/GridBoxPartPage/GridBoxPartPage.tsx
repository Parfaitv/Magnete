import { Box } from "@mui/material";
import { GridBox } from "../GridBox";
import { Image } from "../Image";
import { Link } from "react-router-dom";
import { TextManrope } from "../TextManrope";
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

export const GridBoxPartPage = ({
  items,
  header: { title, navPath },
}: GridBoxPartPageProps) => {
  const navigate = useNavigate();

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
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: 32,
            fontWeight: "100",
            cursor: "pointer",
          }}
          onClick={() => navigate(navPath)}
        >
          {title}
        </TextManrope>
      </Box>
      <GridBox
        gridTemplateColumns="repeat(4, 1fr)"
        gridTemplateRows={`repeat(3, 1fr)`}
      >
        <Link
          to={item1.navPath}
          style={{
            gridColumn: "1/3",
            gridRow: "1/3",
          }}
        >
          <Image src={item1.img} alt={item1.img} style={{ height: "100%" }} />
        </Link>
        <GridBox gridTemplateColumns="1fr 1fr" gridColumn="3/5">
          <Link to={item2.navPath}>
            <Image src={item2.img} alt={item2.img} style={{ height: "100%" }} />
          </Link>
          <Link to={item3.navPath}>
            <Image src={item3.img} alt={item3.img} style={{ height: "100%" }} />
          </Link>
        </GridBox>
        <Link
          to={item4.navPath}
          style={{
            gridColumn: "3/5",
            gridRow: "2/4",
          }}
        >
          <Image src={item4.img} alt={item4.img} style={{ height: "100%" }} />
        </Link>
        <Link
          to={item5.navPath}
          style={{
            gridColumn: "1/3",
            gridRow: "3/5",
          }}
        >
          <Image src={item5.img} alt={item5.img} style={{ height: "100%" }} />
        </Link>
      </GridBox>
    </GridBox>
  );
};
