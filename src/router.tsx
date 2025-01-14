import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@GlobalComponents";
import {
  CheckoutPage,
  ComponentsPage,
  ErrorPage,
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
      { path: "checkout", element: <CheckoutPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
