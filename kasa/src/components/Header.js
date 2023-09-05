import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/Sass/header.scss"

function Header() {
  const location = useLocation()
  return (
    <div className="header">
      <NavLink to="/homepage">
        <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      </NavLink>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink
              to="/homepage"
              className={
                location.pathname === "/homepage" ? "header-nav-active" : ""
              }
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                location.pathname === "/about" ? "header-nav-active" : ""
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
