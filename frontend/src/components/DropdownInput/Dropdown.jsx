import React, { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ data, defaultLabel = "Set Placeholder..." }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdown relative">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : defaultLabel}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}>
          <img
            src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
            alt="expand-arrow--v1"
            className="h-6"
          />
        </i>
      </div>
      <div
        className={`dropdown-body ${
          isOpen && "open"
        } absolute bg-white z-10 w-full`}
      >
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            >
              •{" "}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );

  Dropdown.defaultProps = {
    data: [],
  };
};

export default Dropdown;
