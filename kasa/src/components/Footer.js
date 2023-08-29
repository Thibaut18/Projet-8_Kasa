import whitelogo from "../assets/whitelogo.svg"
import "../styles/Sass/footer.scss"

function Footer() {
  return (
    <div className="footer">
      <img src={whitelogo} alt="Logo Kasa" className="footer-img" />
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
