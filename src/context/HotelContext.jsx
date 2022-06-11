import { createContext, useState, useEffect, useMemo } from "react";
import Data from "../data/data.json";
const HotelContext = createContext();

// if(!window.localStorage.getItem('hotels')){
//   localStorage.setItem('hotels', JSON.stringify(Data));
// }

export const HotelProviver = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("hotels"));
  const [hotels, setHotels] = useState(localData || Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelPerPage] = useState(3);
  const [totalHotels] = useState(hotels.length);
  const [sortBy, setSortBy] = useState("");

  let indexOfLastHotel = currentPage * hotelPerPage;
  let indexOfFirstHotel = indexOfLastHotel - hotelPerPage;

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const hotelsData = useMemo(() => {
    let computedHotels = hotels;
    if (sortBy === "") {
      computedHotels = hotels;
    }
    if (sortBy === "azalan") {
      computedHotels = hotels.sort(
        (a, b) =>
          a.point - b.point || new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    }
    if (sortBy === "artan") {
      computedHotels = hotels.sort(
        (a, b) =>
          b.point - a.point || new Date(a.updatedAt) - new Date(b.updatedAt)
      );
    }
    return computedHotels.slice(indexOfFirstHotel, indexOfLastHotel);
  }, [hotels, sortBy, indexOfFirstHotel, indexOfLastHotel]);

  const values = {
    hotels,
    setHotels,
    currentPage,
    setCurrentPage,
    hotelPerPage,
    totalHotels,
    sortBy,
    setSortBy,
    hotelsData,
    paginate,
  };

  return (
    <HotelContext.Provider value={values}>{children}</HotelContext.Provider>
  );
};

export default HotelContext;
