import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../routes/main-page/main.page'
import { AppRoute } from '../shared/consts/app-routes';
import { Layout } from './layout/layout';
import { AboutPage } from '../routes/about/about.page';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.index} element={<Layout />}>
          <Route 
            index 
            element={<MainPage />} 
          />
          <Route 
            path={AppRoute.about} 
            element={<AboutPage />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}