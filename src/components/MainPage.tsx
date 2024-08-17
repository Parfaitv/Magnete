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
import { Image } from "./Image";

export const MainPage = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<Box display='grid' gridTemplateRows='repeat(4, 1fr)' gap='3rem'>
			<Header isMobile={isMobile} setIsMobile={() => setIsMobile((prev) => !prev)} />
			<Image alt="Основная картинка" src={mainPage} />
			<FlexBoxParts
				isMobile={isMobile}
				header={{ title: 'Новая коллекция', navPath: '/catalog/new-collection' }}
				items={mockFLexBoxPartItems}
			/>
			<GridBoxPartPage items={mockGridBoxPartItems} header={{ title: "Каталог/Женская одежда", navPath: '/catalog/woman' }} />
			<FlexBoxParts isMobile={isMobile} header={{ title: 'Мужская коллекция', navPath: '/catalog/man' }} items={mockFLexBoxPartItems} />
			<FlexBox flexDirection='column'>
				<MessageBox title="Нужна консультация? Напишите стилисту бренда ВИКТОРИИ СИТНИК" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
				<MessageBox title="Чтобы сделать заказ, напишите нам в социальных сетях!" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
				<Footer
					usefulLinks={[{ navPath: '/catalog', text: 'Каталог' }, { navPath: '/about', text: 'О бренде' }, { navPath: '/delivery', text: 'Доставка' }, { navPath: '/services', text: 'Услуги стилиста' }, { navPath: '/contacts', text: 'Контакты' }]}
					categories={{
						manCatalog: [{ navPath: '/catalog/man/base', text: 'База' }, { navPath: '/catalog/man/clasic', text: 'Классика' }, { navPath: '/catalog/man/sport', text: 'Спорт' }],
						womanCatalog: [{ navPath: '/catalog/woman/base', text: 'База' }, { navPath: '/catalog/woman/clasic', text: 'Классика' }, { navPath: '/catalog/woman/sport', text: 'Спорт' }, { navPath: '/catalog/woman/knitted', text: 'Трикотаж' }, { navPath: '/catalog/woman/black-magnete', text: 'Black Magnete' }]
					}}
				/>
			</FlexBox>
		</Box>
	)
}
