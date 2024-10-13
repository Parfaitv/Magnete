import { Footer, GridBox, Header } from "@/components";
import { useAppSelector } from "@/store";
import { Outlet } from "react-router";

export const Same = () => {
  const menuItems = useAppSelector(({ reducer }) => reducer.burgerMenu);

  return (
    <GridBox gridTemplateColumns="1fr">
      <Header menuItems={menuItems} />
      <Outlet />
      <Footer
        usefulLinks={[
          { navPath: "/catalog", text: "Каталог" },
          { navPath: "/about", text: "О бренде" },
          { navPath: "/delivery", text: "Доставка" },
          { navPath: "/services", text: "Услуги стилиста" },
          { navPath: "/contacts", text: "Контакты" },
        ]}
        categories={{
          manCatalog: [
            { navPath: "/catalog/man/base", text: "База" },
            { navPath: "/catalog/man/clasic", text: "Классика" },
            { navPath: "/catalog/man/sport", text: "Спорт" },
          ],
          womanCatalog: [
            { navPath: "/catalog/woman/base", text: "База" },
            { navPath: "/catalog/woman/clasic", text: "Классика" },
            { navPath: "/catalog/woman/sport", text: "Спорт" },
            { navPath: "/catalog/woman/knitted", text: "Трикотаж" },
            { navPath: "/catalog/woman/blackMagnete", text: "Black Magnete" },
          ],
        }}
      />
    </GridBox>
  );
};
