import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Services from "../pages/services/Services";
import Works from "../pages/works/Works";
import Clients from "../pages/clients/Clients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
    ],
  },
]);

export default router;
