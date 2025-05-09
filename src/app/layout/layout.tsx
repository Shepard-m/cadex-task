import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header/ui/header';
import { Footer } from '../../widgets/footer/ui/footer';
import { LayoutContainer } from './layout.styles';


export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      
      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </LayoutContainer>
  );
};