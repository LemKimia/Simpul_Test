import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages/homepage";
import Cover from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
    loader: () => {
      return "Simple Quicks";
    },
  },
  {
    path: "/home",
    element: <Homepage />,
    loader: () => {
      return "Simple Quicks - Home";
    },
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
