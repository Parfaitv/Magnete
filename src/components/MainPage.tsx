import { Box } from "@mui/material"
import { Header } from "./Header";
import mainPage from '@/picture/mainPage.png'
import { FlexBox } from "./FlexBox";
import { useState } from "react";
import { FlexBoxParts } from "./FlexBoxPartPage";
import { mockFLexBoxPartItems } from "./constants";


export const MainPage = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<Box>
			<Header isMobile={isMobile} setIsMobile={() => setIsMobile((prev) => !prev)} />
			<FlexBox height='100vh'>
				<img width='100%' src={mainPage} />
			</FlexBox>
			<FlexBox padding='56px 10px 0 10px' height='90vh'>
				<FlexBoxParts isMobile={isMobile} title="Новая коллекция" items={mockFLexBoxPartItems} />
			</FlexBox>
		</Box>
	)
}
