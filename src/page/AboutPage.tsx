import { AdvertisingBlock, FlexBox, GridBox, TextManrope } from "@/components";
import { useAppSelector } from "@/store";
import { useCSSMedia } from "@/utils";

export const AboutPage = () => {
  const isMobile = useCSSMedia();
  const { advertisingBlock, description, title } = useAppSelector(
    (state) => state.reducer.aboutPage
  );
  return (
    <GridBox
      paddingTop="4rem"
      gridTemplateRows={isMobile ? "100% 1fr" : "0.3fr 1fr"}
      gap="1rem"
    >
      <FlexBox
        justifyContent="start"
        width="100%"
        flexDirection="column"
        gap="1em"
      >
        <TextManrope fontSize={34} fontWeight="600">
          {title}
        </TextManrope>
        <TextManrope fontSize={24}>{description}</TextManrope>
      </FlexBox>
      {!isMobile && <AdvertisingBlock items={advertisingBlock} />}
    </GridBox>
  );
};
