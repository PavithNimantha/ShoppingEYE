import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <Header />
      <Toaster/>
      <Outlet />
    </>
  );
};

export default Layout;
