import { Outlet } from "react-router-dom";
import SideBar from "../components/navigator/sideBar.component";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
