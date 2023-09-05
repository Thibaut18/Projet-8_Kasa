import locations from "../datas/data.json"
import "../styles/Sass/gallery.scss"
import { Link } from "react-router-dom"

function Gallery() {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <div className="gallery-title-and-img" key={location.id}>
          <h2 className="gallery-title">{location.title}</h2>
          <Link to={`/logement/${location.id}`}>
            <img
              className="gallery-img"
              src={location.cover}
              alt={`Cover of ${location.title}`}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery
