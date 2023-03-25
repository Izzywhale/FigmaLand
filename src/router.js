import React from "react";
import { useRoutes } from "react-router";
import AuthLayout from "./layout/authLayout/authLayout";
import MainLayout from "./layout/mainLayout/mainLayout";
import About from "./Pages/About/about";
import Landing from "./Pages/landing/landing";
import Login from "./Pages/login/login";
import SignUp from "./Pages/signUp/signUp";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);
};

export default Routes;
