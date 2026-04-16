import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "cart", Component: Cart },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "checkout", Component: Checkout },
    ],
  },
]);
