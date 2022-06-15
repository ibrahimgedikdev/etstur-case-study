import React from 'react'
import Hotel from '../Hotel/Hotel';

function HotelList({sortedHotels, setHotels, hotels}) {
  console.log('HotelList : Render');
  
  return (
    <ul className='hotel-list'>
        {sortedHotels.map((hotel) => (
            <Hotel 
              key={hotel.id} 
              hotel={hotel} 
              hotels={hotels}
              setHotels={setHotels}
              />
        ))}
    </ul>
  )
}

export default React.memo(HotelList);