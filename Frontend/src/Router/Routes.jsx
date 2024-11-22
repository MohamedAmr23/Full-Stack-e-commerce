import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart.jsx";
import Products from "../components/Product/Products.jsx";
import Categories from '../pages/Categories.jsx'
import Brands from '../pages/Brands.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from "../components/ProtectedRoutes.jsx";
import Checkout from "../components/Checkout.jsx";
import AllOrders from "../components/AllOrders.jsx";
import Error from "../pages/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement:<Error/>,
    children: [
        {
            index:1,
            element:<ProtectedRoutes><Home/></ProtectedRoutes> 
        },
        {
            path:'products',
            element:<ProtectedRoutes><Products/></ProtectedRoutes>
        },
        {
            path:'cart',
            element: <ProtectedRoutes><Cart/></ProtectedRoutes>
        },
        {
            path:'categories',
            element:<ProtectedRoutes><Categories/></ProtectedRoutes> 
        },
        {
            path:'brands',
            element:<ProtectedRoutes><Brands/></ProtectedRoutes>
        },
        {
            path:'product-details/:id',
            element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes> 
        },
        {
            path:'checkout',
            element:<ProtectedRoutes><Checkout/></ProtectedRoutes> 
        },
        {
            path:'product-details/:id',
            element:<ProtectedRoutes><AllOrders/></ProtectedRoutes> 
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
    ],
  },
]);

const Routes = () => {
  return (
    <div>
        <RouterProvider router={router}/>
        <ToastContainer theme="colored" />
    </div>
  )
}

export default Routes