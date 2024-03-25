
import AddShop from './components/shops/AddShop';
import AllShops from './components/shops/AllShops';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';


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
