import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation/Installation";
import DetailsApp from "../Pages/DetailsApp/DetailsApp";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {   
            index:true,
            path:"/",
            loader:()=>fetch('/dataone.json'),
            Component:Home
        },
        {
            path:"/apps",
            loader:()=> fetch('/datatwo.json'),
            Component:Apps
        },
        {
            path:"/detailsapp/:id",
            loader:()=> fetch('/datatwo.json'),
            Component:DetailsApp
        },

        {
            path:"/installation",
            loader:()=> fetch('/datatwo.json'),
            Component:Installation
        },
    ]
  },
]);