import RatingStars from "./RatingStars"

function HousingDetailsMainContent({ housing }) {
  const nameParts = housing.host.name.split(" ")
  const namePart1 = nameParts[0]
  const namePart2 = nameParts.slice(1).join(" ")
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
        <span className="housing-details-host-title-and-picture">
          <h2 className="housing-details-host-title">
            {namePart1}
            {namePart2 && (
              <>
                <br />
                {namePart2}
              </>
            )}
          </h2>
          <img
            className="housing-details-host-picture"
            src={housing.host.picture}
            alt={`Profile of ${housing.host.name}`}
          />
        </span>
        <RatingStars rating={housing.rating} />
      </div>
    </div>
  )
}

export default HousingDetailsMainContent
