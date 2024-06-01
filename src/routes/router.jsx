import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Product from "../Pages/PorductPage/Product/Product";
import ErrorPage from "../components/ErrorPage";
import SingleProduct from "../Pages/PorductPage/SingleProduct/SingleProduct";
import WishlistsPage from "../Pages/WishlistsPage/WishlistsPage";
import AddToCart from "../Pages/AddToCart/AddToCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        loader: () => fetch("http://localhost:5000/products"),
        element: <Product></Product>,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <SingleProduct />,
      },
      {
        path: "/wishlist",
        element: <WishlistsPage />,
        loader: () => fetch("http://localhost:5000/wishlist"),
      },
      {
        path: "/add-to-cart",
        element: <AddToCart />,
        loader: () => fetch("http://localhost:5000/add-to-cart"),
      },
    ],
  },
]);
