import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages/homepage";
import Cover from "@/pages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
]);

const app = () => {
  return (
   
      <RouterProvider router={router} />
  
  );
};

export default app;
