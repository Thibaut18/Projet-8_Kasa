import leftArrow from "../assets/leftArrow.svg"
import rightArrow from "../assets/rightArrow.svg"

function HousingDetailsCover({
  housing,
  currentImageIndex,
  nextImage,
  previousImage,
}) {
  return (
    <div className="housing-details-cover">
      <img
        className="housing-details-cover-img"
        src={housing.pictures[currentImageIndex]}
        alt={`Photo ${currentImageIndex + 1} de ${housing.title}`}
      />
      {housing.pictures.length > 1 && (
        <>
          <div className="image-counter">
            {currentImageIndex + 1}/{housing.pictures.length}
          </div>
          <img
            className="housing-details-cover-arrow left"
            src={leftArrow}
            alt="Précédent"
            onClick={previousImage}
          />
          <img
            className="housing-details-cover-arrow right"
            src={rightArrow}
            alt="Suivant"
            onClick={nextImage}
          />
        </>
      )}
    </div>
  )
}

export default HousingDetailsCover
