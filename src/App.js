import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import List from "./pages/List";
import Data from "./data/data.json";

(() => {
  if (!localStorage.getItem("hotels")) {
    window.localStorage.setItem("hotels", JSON.stringify(Data));
  }
})();

function App() {
  const [hotels, setHotels] = useState(
    JSON.parse(localStorage.getItem("hotels"))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelPerPage] = useState(3);
  const [totalHotels] = useState(hotels.length);
  const [sortBy, setSortBy] = useState("");

  let indexOfLastHotel = currentPage * hotelPerPage;
  let indexOfFirstHotel = indexOfLastHotel - hotelPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const hotelsData = useMemo(() => {
    let computedHotels = hotels;
    if(sortBy === ""){
      computedHotels = hotels;
    }
    if(sortBy === "azalan"){
      computedHotels = hotels.sort((a,b) => {
        return a.point - b.point
      })
    }
    if(sortBy === "artan"){
      computedHotels = hotels.sort((a,b) => {
        return b.point - a.point
      })
    }
    return computedHotels.slice(indexOfFirstHotel, indexOfLastHotel);
  }, [hotels, sortBy, indexOfFirstHotel, indexOfLastHotel])


  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <List
                hotelsData={hotelsData}
                hotels={hotels}
                setHotels={setHotels}
                paginate={paginate}
                totalHotels={totalHotels}
                hotelPerPage={hotelPerPage}
                currentPage={currentPage}
                setSortBy={setSortBy}
              />
            }
          />
          <Route
            path="/add-hotel"
            element={<AddHotel hotels={hotels} setHotels={setHotels} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
