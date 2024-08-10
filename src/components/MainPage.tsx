import { Box } from "@mui/material"
import { Header } from "./Header";
import mainPage from '@/picture/mainPage.png'
import clasicPicture from '@/picture/Clasic.png'
import { FlexBox } from "./FlexBox";
import { useState } from "react";
import { FlexBoxParts } from "./FlexBoxPartPage";
import { mockFLexBoxPartItems } from "./constants";
import { TextManrope } from "./TextManrope";
import { Image } from "./Image";


export const MainPage = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<Box>
			<Header isMobile={isMobile} setIsMobile={() => setIsMobile((prev) => !prev)} />
			<FlexBox height='100vh'>
				<img width='100%' src={mainPage} />
			</FlexBox>
			<FlexBox padding='48px 10px 0 10px' height='90vh'>
				<FlexBoxParts isMobile={isMobile} title="Новая коллекция" items={mockFLexBoxPartItems} />
			</FlexBox>
			<div style={{ display: 'flex', width: '100vw', height: '50vh', flexDirection: 'column', padding: '48px 10px 0 10px' }}>
				<Box>
					<TextManrope fontSize={24} paddingLeft='10px'>Каталог/женский</TextManrope>
				</Box>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '8px' }}>
					<Image src={clasicPicture} alt="1" style={{ gridRow: '1/3', gridColumn: '1/3' }} />
					<div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '8px' }}>
						<Image src={mainPage} alt="2" />
						<Image src={mainPage} alt="3" />
					</div>
					<Image src={clasicPicture} alt="4" style={{ gridRow: '2/4' }} />
					<Image src={mainPage} alt="5" style={{ gridColumn: '1/3' }} />
				</div>
			</div>
		</Box>
	)
}
