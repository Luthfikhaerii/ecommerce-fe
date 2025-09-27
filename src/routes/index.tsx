import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {  
                index: true,
                element: <Home />
            },
            {
                path: "category",
                element: <Category/>
            },
            {
                path: "product",
                children:[
                    {
                        index: true,
                        element: <Product/>
                    },
                    {
                        path: ":id",
                        element: <ProductDetail/>
                    }
                ]
            },
            {
                path: "about",

            }
        ]
    }
])

export default router;