import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { FlexBox, Footer, Header, MessageBox } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <FlexBox flexDirection='column' gap='1em'>
        <Header />
        <App />
        <FlexBox flexDirection='column'>
          <FlexBox flexDirection='column' gap='8px'>
            <MessageBox title="Нужна консультация? Напишите стилисту бренда ВИКТОРИИ СИТНИК" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
            <MessageBox title="Чтобы сделать заказ, напишите нам в социальных сетях!" telegramUrl="https://web.telegram.org/k/" instagramUrl="https://instagram.com" />
          </FlexBox>
          <Footer
            usefulLinks={[{ navPath: '/catalog', text: 'Каталог' }, { navPath: '/about', text: 'О бренде' }, { navPath: '/delivery', text: 'Доставка' }, { navPath: '/services', text: 'Услуги стилиста' }, { navPath: '/contacts', text: 'Контакты' }]}
            categories={{
              manCatalog: [{ navPath: '/catalog/man/base', text: 'База' }, { navPath: '/catalog/man/clasic', text: 'Классика' }, { navPath: '/catalog/man/sport', text: 'Спорт' }],
              womanCatalog: [{ navPath: '/catalog/woman/base', text: 'База' }, { navPath: '/catalog/woman/clasic', text: 'Классика' }, { navPath: '/catalog/woman/sport', text: 'Спорт' }, { navPath: '/catalog/woman/knitted', text: 'Трикотаж' }, { navPath: '/catalog/woman/black-magnete', text: 'Black Magnete' }]
            }}
          />
        </FlexBox>
      </FlexBox>
    </ThemeProvider>
  </BrowserRouter>,
)
