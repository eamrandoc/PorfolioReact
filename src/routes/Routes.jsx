import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>Error Page</p>
    },
  ]);
  export default routes;