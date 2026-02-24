import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CartItems from "./Components/CartItems.jsx";
import CartPages from "./Components/CartPages.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import RootLayout from "./Components/RootLayout.jsx";
import "./index.css";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import ShopNow from "./Pages/ShopNow.jsx";
import Store from "./Store.js";
import WishList from "./Components/WishList.jsx";
import { ToastContainer } from "react-toastify";

const ErrorElement = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "ShopNow", Component: ShopNow },
      { path: "About", Component: About },
      { path: "ProductDetails/:id", Component: ProductDetails },
      { path: "CartPages", Component: CartPages },
      { path: "CartItems", Component: CartItems },
      { path: "WishList", Component: WishList },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
          <ToastContainer />
      <RouterProvider router={Router} />,
    </Provider>
  </StrictMode>,
);
