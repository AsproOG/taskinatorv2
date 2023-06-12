import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import CompanyList from "./routes/CompanyList";
import Navbar from "./components/Navbar";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
const AppLayout = () => {
    return(
        <>
        <Navbar />
        <Outlet/>
        </>
    )
}



const router = createBrowserRouter([
{
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "CompanyList",
            element: <CompanyList />,
          },
          {
            path: "SignUp",
            element: <SignUp />,
          },
          {
            path: "Login",
            element: <Login />,
          }
    ]
}
   
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);