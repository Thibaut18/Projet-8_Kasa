import React, { useState } from "react"
import arrowicon from "../assets/arrowicon.svg"
import "../styles/Sass/dropdown.scss"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-title">{title}</span>
        <img
          src={arrowicon}
          alt="Arrow Icon"
          className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
        />
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  )
}

export default Dropdown
