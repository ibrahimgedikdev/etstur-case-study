import React, { useState, useRef, useContext } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import HotelContext from "../../context/HotelContext";
import { useOnClickOutside } from "../../hooks/useClickOutside";

function Dropdown() {
  console.log('Dropdown: Render');
  const {sortBy,setSortBy} = useContext(HotelContext);

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
        <span>{(sortBy === "artan" && 'Artan') || (sortBy === "azalan" && 'Azalan') || (sortBy === "" && 'Sıralama')}</span>
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
