import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import Home from "../pages/Home.jsx";
import Products from "../components/Product/Products.jsx";
import Categories from '../pages/Categories.jsx'
import Brands from '../pages/Brands.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
        {
            index:1,
            element:<Home/>
        },
        {
            path:'/products',
            element:<Products/>
        },
        {
            path:'/categories',
            element:<Categories/>
        },
        {
            path:'/brands',
            element:<Brands/>
        },
        {
            path:'/product-details/:id',
            element:<ProductDetails/>
        },
    ],
  },
]);

const Routes = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Routes