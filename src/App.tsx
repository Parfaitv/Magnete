import { Route, Routes } from "react-router"
import { MainPage } from "./components"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<div>This page for about</div>} />
      <Route path="/delivery" element={<div>This page for delivery</div>} />
      <Route path="/services" element={<div>This page for services</div>} />
      <Route path="/contacts" element={<div>This page for contacts</div>} />
      <Route path="/catalog" element={<div>This page for "/catalog"</div>} />
      <Route path="/catalog/:variant" element={<div>This page for "/catalog/:variant"</div>} />
      <Route path="/catalog/:variant/:view" element={<div>This page for "/catalog/:variant/:view"</div>} />
      <Route path="/catalog/:variant/:view/:id" element={<div>This page for "/catalog/:variant/:view/:id"</div>} />
      <Route path="*" element={<div>This page for ERROR</div>} />
    </Routes>
  )
}
