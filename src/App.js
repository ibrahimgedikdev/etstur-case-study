import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import List from "./pages/List";
import { HotelProviver } from "./context/HotelContext";

function App() {
  
  return (
    <HotelProviver>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<List />} />
            <Route path="/add-hotel" element={<AddHotel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HotelProviver>
  );
}

export default App;
