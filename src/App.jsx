import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "./layout/LayoutPublic";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <LayoutPublic />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about-me",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
