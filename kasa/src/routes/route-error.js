import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import "../styles/Sass/errorpage.scss"

export default function ErrorPage() {
  const error = useRouteError()
  if (error) {
    console.error(error)
  }

  return (
    <div id="error-page">
      <Header />

      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/homepage" className="error-back-to-homepage-link">
          Retourner sur la page d'accueil
        </Link>
      </div>

      <Footer />
    </div>
  )
}
