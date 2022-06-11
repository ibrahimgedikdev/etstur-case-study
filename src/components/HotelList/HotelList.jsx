import React, { useContext } from 'react'
import HotelContext from '../../context/HotelContext';
import Hotel from '../Hotel/Hotel';

function HotelList() {
  console.log('HotelList : Render');
  const {hotelsData} = useContext(HotelContext);
  return (
    <ul className='hotel-list'>
        {hotelsData.map((hotel) => (
            <Hotel 
              key={hotel.id} 
              hotel={hotel} 
              // hotels={hotels} 
              // setHotels={setHotels}
              />
        ))}
    </ul>
  )
}

export default HotelList