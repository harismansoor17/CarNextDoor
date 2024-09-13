import React, { useState } from "react";
import "./CustomDropDown.css";

const CustomDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Lahore", "Islamabad", "Karachi", "Murree"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleToggle}>
        {selectedOption || "Locations"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, i) => (
            <li key={i} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropDown;
