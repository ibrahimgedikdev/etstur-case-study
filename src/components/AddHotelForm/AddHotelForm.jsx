import React, { useContext, useState } from "react";
import HotelContext from "../../context/HotelContext";
import moment from "moment";
import { HiCheck } from "react-icons/hi";

function AddHotelForm() {
  console.log("Add Hotel Form : Render");
  const { hotels, setHotels } = useContext(HotelContext);
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState({ error: false, message: "" });

  const formattedDate = moment().format("D/MM/Y h:mm");
  console.log(formError);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setFormError((prevState) => ({
        ...prevState,
        error: true,
        message: "Otel adı zorunludur !",
      }));
    } else if (name.length < 4) {
      setFormError((prevState) => ({
        ...prevState,
        error: true,
        message: "Lütfen en az 4 karakter giriniz !",
      }));
    } else {
      setHotels((oldData) => [
        ...oldData,
        {
          id: hotels.length + 1,
          name: name,
          image: "hotel-image.png",
          point: 0,
          isVoted: false,
          createdAt: formattedDate,
          updatedDate: formattedDate,
        },
      ]);
      setFormError((prevState) => ({
        ...prevState,
        error: false,
      }));
      setIsSubmitted(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="hotel-form">
      <label htmlFor="addHotel" className="hotel-form-label">
        Otel Adı
      </label>
      <input
        type="text"
        value={name}
        id="addHotel"
        onChange={(e) => setName(e.target.value)}
        className="hotel-form-input"
      />
      {formError.error && (
        <label className="hotel-form-error">{formError.message}</label>
      )}
      <button
        type="submit"
        className={`hotel-form-button ${isSubmitted ? "disabled" : ""}`}
      >
        {isSubmitted ? (
          <>
            <HiCheck size={22.5} />
            <span>Eklendi</span>
          </>
        ) : (
          <span>Ekle</span>
        )}
      </button>
    </form>
  );
}

export default AddHotelForm;
