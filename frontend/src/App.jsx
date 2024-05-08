import React from 'react';

import AddShop from './components/shops/add-shop.component';
import AllShops from './components/shops/all-shops.component';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Navigator from './layout/Navigator';
import GroundFloor from './components/navigator/ground-floor.component';
import FirstFloor from './components/navigator/first-floor.component';
import SecondFloor from './components/navigator/second-floor.component';
import ThirdFloor from './components/navigator/third-floor.component';
import AddBudget from './components/budget/add-budget.component';
import BudgetList from './components/budget/budget-list.component';
import EditBudget from './components/budget/budget-edit.component';
import EditShop from './components/shops/shop-edit.component';
import ExpensesList from './components/Expenses/expenses-list.component';
import AddExpense from './components/Expenses/add-expenses.component';
import EditExpenses from './components/Expenses/expenses-edit.component';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      },

      {
        path: "addBudget",
        element: <AddBudget />,
      },
      {
        path: "addExpenses",
        element: <AddExpense />,
      },
      {
        path: "budget",
        element: <BudgetList />,
      },
      {
        path: "expenses",
        element: <ExpensesList />,
      },
      {
        path: "editExpenses",
        element: <EditExpenses />,
      },
      {
        path: "editBudget",
        element: <EditBudget />,
      },
      {
        path: "editShop",
        element: <EditShop />,
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
