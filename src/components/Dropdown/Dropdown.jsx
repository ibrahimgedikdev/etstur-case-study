import React, { useState, useRef } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { useOnClickOutside } from "../../hooks/useClickOutside";

function Dropdown({ setSortBy }) {
  console.log('Dropdown: Render');
  
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  const options = [
    {
      value: "artan",
      text: "Puan (Artan)",
      selected: false,
    },
    {
      value: "azalan",
      text: "Puan (Azalan)",
      selected: false,
    },
  ];

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <BiSortAlt2 size={26} color="#bdc3c7" />
        <span>Sıralama</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu" ref={ref}>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSortBy(option.value)
                setIsOpen(false);
              }}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
