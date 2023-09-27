import { createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home"
import Products from "../Products/Products";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import MainLayout from "../MainLayout";
import Product from "../Product/Product";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
      
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/products",
              element: <Products></Products>,
              loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: "/products/:id",
                element: <Product></Product>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/dashboard",
              element: <Dashboard></Dashboard>,
            }
          ],
        },
      ]);
    



export default router;