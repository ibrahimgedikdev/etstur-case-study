import React, { useEffect, useState } from "react";
import AddHotelLink from "../../components/AddHotelLink/AddHotelLink";
import Dropdown from "../../components/Dropdown/Dropdown";
import HotelList from "../../components/HotelList/HotelList";
import Pagination from "../../components/Pagination/Pagination";

function List({ hotels, setHotels }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortedHotels, setSortedHotels] = useState([]);

  let indexOfLastHotel = currentPage * 3;
  let indexOfFirstHotel = indexOfLastHotel - 3;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(hotels?.length / 3);

  useEffect(() => {
    const hotelList = [...hotels];
    if (sortBy === "azalan") {
      const sortedList = hotelList.sort(
        (a, b) =>
          a.point - b.point || new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setSortedHotels(sortedList);
    }
    if (sortBy === "artan") {
      const sortedList = hotelList.sort(
        (a, b) =>
          b.point - a.point || new Date(a.updatedAt) - new Date(b.updatedAt)
      );
      setSortedHotels(sortedList);
    }
    setSortedHotels(hotelList);
  }, [hotels, sortBy]);


  const listedHotels = sortedHotels.slice(indexOfFirstHotel, indexOfLastHotel)

  return (
    <div className="list-wrapper">
      <AddHotelLink />
      <Dropdown hotels={hotels} setSortBy={setSortBy} sortBy={sortBy} />
      <HotelList
        sortedHotels={listedHotels}
        setHotels={setHotels}
        hotels={hotels}
      />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        pageCount={pageCount}
      />
    </div>
  );
}

export default List;
