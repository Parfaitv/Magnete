import { Footer, GridBox, Header, MessageBox } from '@/components'
import { Outlet } from "react-router"

export const Same = () => (
    <GridBox gridTemplateColumns='1fr'>
        <Header />
        <Outlet />
        <GridBox gridTemplateColumns='1fr'>
            <GridBox gridTemplateColumns='1fr' gap='8px'>
                <MessageBox title="Нужна консультация? Напишите стилисту бренда ВИКТОРИИ СИТНИК" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
                <MessageBox title="Чтобы сделать заказ, напишите нам в социальных сетях!" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
            </GridBox>
            <Footer
                usefulLinks={[{ navPath: '/catalog', text: 'Каталог' }, { navPath: '/about', text: 'О бренде' }, { navPath: '/delivery', text: 'Доставка' }, { navPath: '/services', text: 'Услуги стилиста' }, { navPath: '/contacts', text: 'Контакты' }]}
                categories={{
                    manCatalog: [{ navPath: '/catalog/man/base', text: 'База' }, { navPath: '/catalog/man/clasic', text: 'Классика' }, { navPath: '/catalog/man/sport', text: 'Спорт' }],
                    womanCatalog: [{ navPath: '/catalog/woman/base', text: 'База' }, { navPath: '/catalog/woman/clasic', text: 'Классика' }, { navPath: '/catalog/woman/sport', text: 'Спорт' }, { navPath: '/catalog/woman/knitted', text: 'Трикотаж' }, { navPath: '/catalog/woman/blackMagnete', text: 'Black Magnete' }]
                }}
            />
        </GridBox>
    </GridBox>
)

