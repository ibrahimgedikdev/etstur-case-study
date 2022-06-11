import moment from "moment";
import React, { useEffect, useState } from "react";

function AddHotel({ hotels, setHotels }) {
  const [name, setName] = useState("");

  const formattedDate = moment().format("D/MM/Y h:mm");


  const handleSubmit = (e) => {
    e.preventDefault();
    setHotels((oldData) => [
      ...oldData,
      { 
        id: hotels.length + 1, 
        name: name, 
        image: "hotel-image.png", 
        point: 0,
        isVoted:false,
        createdAt: formattedDate,
        updatedDate : formattedDate,
      },
    ]);
  };

  return (
    <div className="add-hotel-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addHotel">Otel Adı</label>
        <input
          type="text"
          value={name}
          id="addHotel"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default AddHotel;
