import React from "react";
import { Link } from "react-router-dom";
import {BsPlusLg} from "react-icons/bs";

function AddHotelLink() {
  console.log('AddHotelLink: Render');

  return (
    <Link to="/add-hotel" className="add-hotel-link">
      <div className="icon-wrapper">
      <BsPlusLg size={30} />
      </div>
      <span>OTEL EKLE</span>
    </Link>
  );
}

export default AddHotelLink;
