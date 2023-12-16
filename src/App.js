import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
