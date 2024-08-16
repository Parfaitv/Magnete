import { Box } from "@mui/material"
import { Header } from "./Header";
import mainPage from '@/picture/mainPage.png'
import { FlexBox } from "./FlexBox";
import { useState } from "react";
import { FlexBoxParts } from "./FlexBoxPartPage";
import { mockGridBoxPartItems, mockFLexBoxPartItems } from "./constants";
import { GridBoxPartPage } from "./GridBoxPartPage";
import { MessageBox } from "./MessageBox";
import { Footer } from "./Footer";

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
			<GridBoxPartPage items={mockGridBoxPartItems} title="Каталог/Женская одежда" />
			<FlexBox padding='48px 10px 0 10px' height='90vh'>
				<FlexBoxParts isMobile={isMobile} items={mockFLexBoxPartItems} />
			</FlexBox>
			<FlexBox paddingTop='48px' width='100%'>
				<MessageBox title="Нужна консультация? Напишите стилисту бренда ВИКТОРИИ СИТНИК" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
			</FlexBox>
			<FlexBox width='100%'>
				<MessageBox title="Чтобы сделать заказ, напишите нам в социальных сетях!" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
			</FlexBox>
			<Footer
				usefulLinks={[{ navPath: '/catalog', text: 'Каталог' }, { navPath: '/brand', text: 'О бренде' }, { navPath: '/delivery', text: 'Доставка' }, { navPath: '/services', text: 'Услуги стилиста' }, { navPath: '/contacts', text: 'Контакты' }]}
				categories={{
					manCatalog: [{ navPath: '/catalog/man/base', text: 'База' }, { navPath: '/catalog/man/clasic', text: 'Классика' }, { navPath: '/catalog/man/sport', text: 'Спорт' }],
					womanCatalog: [{ navPath: '/catalog/woman/base', text: 'База' }, { navPath: '/catalog/woman/clasic', text: 'Классика' }, { navPath: '/catalog/woman/sport', text: 'Спорт' }, { navPath: '/catalog/woman/knitted', text: 'Трикотаж' }, { navPath: '/catalog/woman/black-magnete', text: 'Black Magnete' }]
				}}
			/>
		</Box>
	)
}
