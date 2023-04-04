import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";

const Root = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
     <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  );
};

const appRouter=createBrowserRouter([
  {

    path:'/',
    element:<Root/>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Body/>,
       
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/menu/:resId',
        element:<RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
