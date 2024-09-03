import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./Component/Home.tsx";
import Login from "./Component/Login.tsx";
import Register from "./Component/Register.tsx";
import Operation from "./Operation/Operation.tsx";
import Profile from "./Component/Profile.tsx";
import Dasboard from "./Component/Dashboard.tsx";
import Task from "./Component/Task.tsx";
import DateTimeRangePicker from "./Component/Datatable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'',
        element:<Dasboard/>
      },
      {
        path:'dashboard',
        element:<Dasboard />
      },
      {
        path:'task',
        element:<Task />,
        
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },{
        path:'profile',
        element:<Profile/>
      },{
        path:'table_data',
        element:<DateTimeRangePicker/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Operation>
      <RouterProvider router={router} />
    </Operation>
  </StrictMode>
);
