import { AboutPage, Catalog, CatalogType, StartPage, ProductCard, DeliveryPage, ErrorPage } from "@/page"
import { Same } from "@/components"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route element={<Same />} errorElement={<ErrorPage />}>
        <Route caseSensitive index path="/" element={<StartPage />} />
        <Route caseSensitive path="about" element={<AboutPage />} />
        <Route caseSensitive path="delivery" element={<DeliveryPage />} />
        <Route caseSensitive path="services" element={<div>This page for services</div>} />
        <Route caseSensitive path="contacts" element={<div>This page for contacts</div>} />
        <Route caseSensitive path="catalog" element={<Catalog />} />
        <Route caseSensitive path="catalog/new-collection" element={<div>This page for "/catalog/new-collection"</div>} />
        <Route caseSensitive path="catalog/new-collection/:id" element={<div>This page for "/catalog/new-collection/:id"</div>} />
        <Route caseSensitive path="catalog/:variant" element={<CatalogType />} />
        <Route caseSensitive path="catalog/:variant/:view" element={<CatalogType />} />
        <Route caseSensitive path="catalog/:variant/:view/:id" element={<ProductCard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes >
  )
}
