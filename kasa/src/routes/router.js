import { createBrowserRouter, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import bannerpicture from "../assets/bannerpicture.svg"
import ErrorPage from "./route-error"
import HousingDetails from "../components/HousingDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/homepage" replace />,
  },
  {
    path: "/homepage",
    element: (
      <div>
        <Header />
        <>
          <Banner
            imageSrc={bannerpicture}
            altText="Falaises en bord de mer"
            title="Chez vous, partout et ailleurs"
          />
          <Gallery />
        </>
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/logement/:id",
    element: <HousingDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

export default router
