import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@GlobalComponents";
import {
  ComponentsPage,
  HomePage,
  ProductDetailsPage,
  ShoppingBagPage,
} from "@Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "components", element: <ComponentsPage /> },
      { path: "shopping-bag", element: <ShoppingBagPage /> },
      { path: "product/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

export default router;
