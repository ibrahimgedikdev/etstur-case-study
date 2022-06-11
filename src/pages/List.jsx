import React from "react";
import AddHotelLink from '../components/AddHotelLink/AddHotelLink';
import Dropdown from "../components/Dropdown/Dropdown";
import HotelList from "../components/HotelList/HotelList";
import Pagination from "../components/Pagination/Pagination";

function List({hotelsData, hotels, paginate, totalHotels, hotelPerPage, currentPage, setHotels, setSortBy}) {
  return (
    <div className="list-wrapper">
     <AddHotelLink />
     <Dropdown setSortBy={setSortBy} />
     <HotelList hotelsData={hotelsData} hotels={hotels} setHotels={setHotels} />
     <Pagination paginate={paginate} totalHotels={totalHotels} hotelPerPage={hotelPerPage} currentPage={currentPage} />
    </div>
  );
}

export default List;
