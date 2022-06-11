import React from 'react'
import Hotel from '../Hotel/Hotel';

function HotelList({hotelsData, hotels, setHotels}) {
  console.log('HotelList : Render');

  return (
    <ul className='hotel-list'>
        {hotelsData.map((hotel) => (
            <Hotel key={hotel.id} hotel={hotel} hotels={hotels} setHotels={setHotels}/>
        ))}
    </ul>
  )
}

export default HotelList