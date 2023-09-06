import filledstar from "../assets/filledstar.svg"
import emptystar from "../assets/emptystar.svg"

export default function RatingStars({ rating }) {
  const MAX_STARS = 5
  return (
    <div className="stars">
      {Array.from({ length: MAX_STARS }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? filledstar : emptystar}
          alt={index < rating ? "Filled Star" : "Empty Star"}
          className="star-icon"
        />
      ))}
    </div>
  )
}
