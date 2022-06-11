import { createContext, useState, useEffect } from "react";
import Data from "../data/data.json";

const HotelContext = createContext();

export const HotelProviver = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("hotels"));
  const [hotels, setHotels] = useState(localData || Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelPerPage] = useState(3);
  const [totalHotels] = useState(hotels.length);
  const [sortBy, setSortBy] = useState("");
  const [listHotels, setListHotels] = useState([]);

  let indexOfLastHotel = currentPage * hotelPerPage;
  let indexOfFirstHotel = indexOfLastHotel - hotelPerPage;

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));

    let localHotels = JSON.parse(localStorage.getItem("hotels"));
    let computedHotels = localHotels;
    if (sortBy === "") {
      computedHotels = localHotels;
    }
    if (sortBy === "azalan") {
      computedHotels = localHotels.sort(
        (a, b) =>
          a.point - b.point || new Date(a.updatedAt) - new Date(b.updatedAt)
      );
    }
    if (sortBy === "artan") {
      computedHotels = localHotels.sort(
        (a, b) =>
          b.point - a.point || new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    }
    setListHotels(computedHotels.slice(indexOfFirstHotel, indexOfLastHotel));
  }, [hotels, sortBy, currentPage, indexOfFirstHotel, indexOfLastHotel]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const values = {
    hotels,
    setHotels,
    currentPage,
    setCurrentPage,
    hotelPerPage,
    totalHotels,
    sortBy,
    setSortBy,
    paginate,
    listHotels,
    setListHotels,
  };

  return (
    <HotelContext.Provider value={values}>{children}</HotelContext.Provider>
  );
};

export default HotelContext;
