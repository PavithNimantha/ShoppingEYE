import { Outlet } from "react-router-dom";
import Header from "../components/header.component";
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
