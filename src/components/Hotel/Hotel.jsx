import React, { useContext } from "react";
import moment from "moment";
import { HiCheck } from "react-icons/hi";
import HotelContext from "../../context/HotelContext";

function Hotel({hotel}) {
  console.log("Hotel : Render");
  const {hotels, setHotels} = useContext(HotelContext);
  const formattedDate = moment().format("D/MM/Y h:mm");

  const updatePoint = (point, type) => {
    let result;
    if (type === "increase") {
      if (point >= 0 && point <= 9) {
        result = point + 1;
      }
      if (point > 9) {
        result = 10;
      }
    }
    if (type === "decrease") {
      if (point <= 1) {
        result = 0;
      }
      if (point > 1) {
        result = point - 1;
      }
    }
    return parseFloat(result).toFixed(1);
  };


  const increasePoint = (id) => {
    const newState = hotels.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          isVoted: true,
          point: parseFloat(updatePoint(obj.point, "increase")),
          updatedAt: formattedDate,
        };
      }
      return obj;
    });
    setHotels(newState);
  };

  const decreasePoint = (id) => {
    const newState = hotels.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          isVoted: true,
          point: updatePoint(obj.point, "decrease"),
          updatedDate: formattedDate,
        };
      }
      return obj;
    });
    setHotels(newState);
  };

  return (
    <li className="hotel">
      <div className="left">
        <img src={hotel.image} alt="" className="hotel-image" />
      </div>
      <div className="right">
        <h3 className="hotel-name">{hotel.name}</h3>
        <div className="hotel-point">{hotel.point} Puan</div>
        {hotel.isVoted ? (
          <button disabled className="hotel-point-button active">
            <HiCheck size={22.5} className="icon" />
            <span>Puanladınız</span>
          </button>
        ) : (
          <>
            <button
              className="hotel-point-button"
              onClick={() => increasePoint(hotel.id)}
            >
              Puan Arttır
            </button>
            <button
              className="hotel-point-button"
              onClick={() => decreasePoint(hotel.id)}
            >
              Puan Azalt
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Hotel;
