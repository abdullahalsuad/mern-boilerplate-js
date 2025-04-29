import { createBrowserRouter } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [],
  },
]);

export default router;
