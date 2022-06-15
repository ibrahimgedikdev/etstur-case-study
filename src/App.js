import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import List from "./pages/List";
import Data from "./data/data.json";

function App() {
  const localData = JSON.parse(localStorage.getItem("hotels"));
  const [hotels, setHotels] = useState(localData || Data);

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<List hotels={hotels} setHotels={setHotels} />} />
          <Route path="/add-hotel" element={<AddHotel hotels={hotels}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
