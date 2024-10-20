
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/home',
                element:<Home/>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader:async({params})=>{
                const response= await fetch('/news.json')
                const news =await response.json()
                const perNews = news.find(oneNew=>oneNew._id === params.id)
                return perNews;
                }
            }
        ]
    }
])