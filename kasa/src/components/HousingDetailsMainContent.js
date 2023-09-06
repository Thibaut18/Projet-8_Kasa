import RatingStars from "./RatingStars"

function HousingDetailsMainContent({ housing }) {
  return (
    <div className="housing-details-main-content">
      <div className="housing-details-info">
        <h1 className="housing-details-title">{housing.title}</h1>
        <p className="housing-details-location">
          Localisation : {housing.location}
        </p>
        <div className="housing-details-tags">
          {housing.tags.map((tag, index) => (
            <span className="housing-details-tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="housing-details-host">
        <h2 className="housing-details-host-title">{housing.host.name}</h2>
        <img
          className="housing-details-host-picture"
          src={housing.host.picture}
          alt={`Profile of ${housing.host.name}`}
        />
        <div className="housing-details-rating">
          <RatingStars rating={housing.rating} />
        </div>
      </div>
    </div>
  )
}

export default HousingDetailsMainContent
