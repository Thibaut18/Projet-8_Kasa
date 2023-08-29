import bannerpicture from "../assets/bannerpicture.svg"
import "../styles/Sass/banner.scss"

function Banner() {
  const title = "Chez vous, partout et ailleurs"
  return (
    <div className="banner">
      <img
        src={bannerpicture}
        alt="Falaises en bord de mer"
        className="banner-img"
      />
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default Banner
