import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Regester from "./components/Regester";
import AuthProviders from "./components/Provider/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
      path:'/regester',
      element: <Regester></Regester>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProviders>
 <RouterProvider router={router} />
 </AuthProviders>
  </React.StrictMode>
);