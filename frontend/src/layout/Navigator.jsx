import { Outlet } from "react-router-dom";
import SideBar from "../components/navigator/SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
