import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Products from "../components/Products";
import MuiSection from "../components/Products/MuiSection";
import MuiXSection from "../components/Products/MuiXSection";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        Component: Home,
        title: "Home",
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "/products/mui",
            Component: MuiSection,
          },
          {
            path: "/products/muix",
            Component: MuiXSection,
          },
          {
            path: "/products/toolpad",
            Component: MuiXSection,
          },
          {
            path: "/products/templates",
            Component: MuiXSection,
          },
          {
            path: "/products/kits",
            Component: MuiXSection,
          },
        ],
      },
    ],
  },
]);
