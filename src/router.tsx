import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "./components";
import { ComponentsPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutComponent />,
		children: [
			{ path: "", element: <p>Home</p> },
			{ path: "components", element: <ComponentsPage /> },
		],
	},
]);

export default router;
