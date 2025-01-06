import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "./components";
import { ComponentsPage, HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "components", element: <ComponentsPage /> },
    ],
  },
]);

export default router;
