import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoute;
