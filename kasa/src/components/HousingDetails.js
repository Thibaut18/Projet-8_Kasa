import { useParams, useNavigate } from "react-router-dom"
import locations from "../datas/data.json"
import { useState, useEffect } from "react"

function HousingDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const logement = locations.find((location) => location.id === id)

  const [showDescription, setShowDescription] = useState(false)
  const [showEquipments, setShowEquipments] = useState(false)

  useEffect(() => {
    if (!logement) {
      navigate("/404")
    }
  }, [logement, navigate])

  if (!logement) {
    return null
  }

  return (
    <div className="logement-details">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={`Cover of ${logement.title}`} />

      <h2>Hôte : {logement.host.name}</h2>
      <img
        src={logement.host.picture}
        alt={`Profile of ${logement.host.name}`}
      />

      <p>Rating: {logement.rating}</p>
      <p>Localisation : {logement.location}</p>

      {logement.tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}

      <button onClick={() => setShowDescription(!showDescription)}>
        Description
      </button>
      {showDescription && <p>{logement.description}</p>}

      <button onClick={() => setShowEquipments(!showEquipments)}>
        Equipements
      </button>
      {showEquipments && (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HousingDetails
