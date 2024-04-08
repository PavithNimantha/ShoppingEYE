import AddShop from './components/shops/AddShop';
import AllShops from './components/shops/AllShops';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Navigator from './layout/Navigator';
import GroundFloor from './components/navigator/GroundFloor';
import FirstFloor from './components/navigator/FirstFloor';
import SecondFloor from './components/navigator/SecondFloor';
import ThirdFloor from './components/navigator/ThirdFloor';
import SideBar from './components/navigator/SideBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <AllShops />,
      },

      {
        path: "add",
        element: <AddShop />,
      },

      {  
        path: "navigator",
        element: <Navigator />,
          
        children: [

          {
            index: true,
            element: <GroundFloor />,
          },

          {
            path: "firstfloor",
            element: <FirstFloor />,
          },

          {
            path: "secondfloor",
            element: <SecondFloor />,
          },

          {
            path: "thirdfloor",
            element: <ThirdFloor />,
          },
          
      ]
    }



    ],
  },
]);

const App = () => {
  return (
    <main>   
      <RouterProvider router={router} />  
    </main>
  );
};

export default App;
