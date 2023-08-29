import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/Sass/header.scss"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/" className="header-nav-active" exact>
              Accueil
            </NavLink>
          </li>
          <li>A Propos</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
