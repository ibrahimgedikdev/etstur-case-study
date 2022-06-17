import AddHotelForm from "../../components/AddHotelForm/AddHotelForm";
import {IoMdArrowRoundBack} from 'react-icons/io';
import { useNavigate } from "react-router-dom";

function AddHotel({hotels, setHotels}) {
  const navigate = useNavigate();
  return (
    <div className="add-hotel-wrapper">
      <button className="back-button" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack size={30} color="#3498db" />
      </button>
      <AddHotelForm hotels={hotels} setHotels={setHotels} />
    </div>
  );
}

export default AddHotel;
