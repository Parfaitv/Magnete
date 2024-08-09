import { Route, Routes } from "react-router"
import { MainPage } from "./components"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/catalog/*" element={<div>This page for blouses</div>} />
        <Route path="/about/*" element={<div>This page for about</div>} />
      </Route>
    </Routes>
  )
}
