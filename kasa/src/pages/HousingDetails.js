import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import locations from "../datas/data.json"
import "../styles/Sass/housingdetails.scss"
import HousingDetailsCover from "../components/HousingDetailsCover"
import HousingDetailsMainContent from "../components/HousingDetailsMainContent"
import HousingDetailsDropdown from "../components/HousingDetailsDropdown"

function HousingDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const housing = locations.find((location) => location.id === id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!housing) {
      navigate("/404")
    }
  }, [housing, navigate])

  if (!housing) {
    return null
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % housing.pictures.length,
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 < 0 ? housing.pictures.length - 1 : prevIndex - 1,
    )
  }

  const dropdownData = [
    {
      title: "Description",
      content: housing.description,
    },
    {
      title: "Equipements",
      content: (
        <ul className="housing-details-equipments-list">
          {housing.equipments.map((equipment, index) => (
            <li className="housing-details-equipment" key={index}>
              {equipment}
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div className="housing-details">
      <HousingDetailsCover
        housing={housing}
        currentImageIndex={currentImageIndex}
        nextImage={nextImage}
        previousImage={previousImage}
      />
      <HousingDetailsMainContent housing={housing} />
      <HousingDetailsDropdown dropdownData={dropdownData} />
    </div>
  )
}

export default HousingDetails
