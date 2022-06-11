import React, { useContext } from 'react'
import HotelContext from '../../context/HotelContext';
import Hotel from '../Hotel/Hotel';

function HotelList() {
  console.log('HotelList : Render');
  const {listHotels} = useContext(HotelContext);
  return (
    <ul className='hotel-list'>
        {listHotels.map((hotel) => (
            <Hotel 
              key={hotel.id} 
              hotel={hotel} 
              />
        ))}
    </ul>
  )
}

export default HotelList