import { createBrowserRouter, Navigate } from "react-router-dom"
import Layout from "../components/Layout"
import About from "../pages/About"
import Homepage from "../pages/Homepage"
import ErrorPage from "../pages/RouteError"
import HousingDetails from "../pages/HousingDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/homepage" replace />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "homepage",
        element: (
          <>
            <Homepage />
          </>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "housing/:id",
        element: <HousingDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
