import "../styles/Sass/banner.scss"

function Banner({ imageSrc, altText, title }) {
  return (
    <div className="banner-div">
      <div className="banner">
        <img src={imageSrc} alt={altText} className="banner-img" />
        {title && <h1 className="banner-title">{title}</h1>}
      </div>
    </div>
  )
}

export default Banner
