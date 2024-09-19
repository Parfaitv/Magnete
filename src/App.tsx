import { Route, Routes } from "react-router"
import { AboutPage, Catalog, CatalogVariant, CatalogView, StartPage, ProductCard } from "@/page"

export const App = () => {
  return (
    <Routes>
      <Route caseSensitive path="/main" element={<StartPage />} />
      <Route caseSensitive path="/about" element={<AboutPage />} />
      <Route caseSensitive path="/delivery" element={<div>This page for delivery</div>} />
      <Route caseSensitive path="/services" element={<div>This page for services</div>} />
      <Route caseSensitive path="/contacts" element={<div>This page for contacts</div>} />
      <Route caseSensitive path="/catalog" element={<Catalog />} />
      <Route caseSensitive path="/catalog/new-collection" element={<div>This page for "/catalog/new-collection"</div>} />
      <Route caseSensitive path="/catalog/new-collection/:id" element={<div>This page for "/catalog/new-collection/:id"</div>} />
      <Route caseSensitive path="/catalog/:variant" element={<CatalogVariant />} />
      <Route caseSensitive path="/catalog/:variant/:view" element={<CatalogView />} />
      <Route caseSensitive path="/catalog/:variant/:view/:id" element={<ProductCard />} />
      <Route path="*" element={<div>This page for ERROR</div>} />
    </Routes>
  )
}
