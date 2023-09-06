import Dropdown from "./Dropdown"

function HousingDetailsDropdown({ dropdownData }) {
  return (
    <div className="dropdown-section">
      {dropdownData.map((data, index) => (
        <Dropdown key={index} title={data.title} content={data.content} />
      ))}
    </div>
  )
}

export default HousingDetailsDropdown
