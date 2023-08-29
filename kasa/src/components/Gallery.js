import locations from "../datas/data.json"
import "../styles/Sass/gallery.scss"

function Gallery() {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <div className="gallery-title-and-img" key={location.id}>
          <h2 className="gallery-title">{location.title}</h2>
          <img
            className="gallery-img"
            src={location.cover}
            alt={`Cover of ${location.title}`}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
