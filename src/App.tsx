import {
  AboutPage,
  Catalog,
  CatalogType,
  StartPage,
  ProductCard,
  DeliveryPage,
  ErrorPage,
  NewCollectionPage,
  CollectionCard,
} from '@/page';
import { Same } from '@/components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Same />} errorElement={<ErrorPage />}>
        <Route caseSensitive index path='/' element={<StartPage />} />
        <Route caseSensitive path='about' element={<AboutPage />} />
        <Route caseSensitive path='delivery' element={<DeliveryPage />} />
        <Route
          caseSensitive
          path='services'
          element={<div>This page for services</div>}
        />
        <Route
          caseSensitive
          path='contacts'
          element={<div>This page for contacts</div>}
        />
        <Route caseSensitive path='catalog' element={<Catalog />} />
        <Route
          caseSensitive
          path='catalog/newCollection'
          element={<NewCollectionPage />}
        />
        <Route
          caseSensitive
          path='catalog/newCollection/:id'
          element={<CollectionCard />}
        />
        <Route
          caseSensitive
          path='catalog/:variant'
          element={<CatalogType />}
        />
        <Route
          caseSensitive
          path='catalog/:variant/:view'
          element={<CatalogType />}
        />
        <Route
          caseSensitive
          path='catalog/:variant/:view/:id'
          element={<ProductCard />}
        />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
