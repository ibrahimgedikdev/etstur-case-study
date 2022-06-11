import React from "react";
import AddHotelLink from "../components/AddHotelLink/AddHotelLink";
import Dropdown from "../components/Dropdown/Dropdown";
import HotelList from "../components/HotelList/HotelList";
import Pagination from "../components/Pagination/Pagination";

function List() {
  return (
    <div className="list-wrapper">
      <AddHotelLink />
      <Dropdown />
      <HotelList />
      <Pagination />
    </div>
  );
}

export default List;
