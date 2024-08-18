import { Route, Routes } from "react-router"
import { AboutPage, MainPage, StartPage } from "@/page"

export const App = () => {
  return (
    <Routes>
      <Route caseSensitive path="/" element={<MainPage />} >
        <Route caseSensitive path="/main" element={<StartPage />} />
        <Route caseSensitive path="/about" element={<AboutPage />} />
        <Route caseSensitive path="/delivery" element={<div>This page for delivery</div>} />
        <Route caseSensitive path="/services" element={<div>This page for services</div>} />
        <Route caseSensitive path="/contacts" element={<div>This page for contacts</div>} />
        <Route caseSensitive path="/catalog" element={<div>This page for "/catalog"</div>} />
        <Route caseSensitive path="/catalog/new-collection" element={<div>This page for "/catalog/new-collection"</div>} />
        <Route caseSensitive path="/catalog/new-collection/:id" element={<div>This page for "/catalog/new-collection/:id"</div>} />
        <Route caseSensitive path="/catalog/:variant" element={<div>This page for "/catalog/:variant"</div>} />
        <Route caseSensitive path="/catalog/:variant/:view" element={<div>This page for "/catalog/:variant/:view"</div>} />
        <Route caseSensitive path="/catalog/:variant/:view/:id" element={<div>This page for "/catalog/:variant/:view/:id"</div>} />
      </Route>
      <Route path="*" element={<div>This page for ERROR</div>} />
    </Routes>
  )
}
