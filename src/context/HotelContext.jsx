import { createContext } from "react";
import Data from "./data/data.json";

const HotelContext = createContext();

const HotelProviver = () => {
  const localData = JSON.parse(localStorage.getItem("hotels"));
  const [hotels, setHotels] = useState(localData || Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelPerPage] = useState(3);
  const [totalHotels] = useState(hotels.length);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

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
    paginate
  };

  return (
    <HotelContext.Provider value={values}>{children}</HotelContext.Provider>
  );
};


export {HotelProviver, HotelContext};