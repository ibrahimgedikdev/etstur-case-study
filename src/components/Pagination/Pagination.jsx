import React from "react";

function Pagination({ paginate, totalHotels, hotelPerPage, currentPage }) {
  console.log('Pagination : Render');

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHotels / hotelPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers?.map((number, index) => (
        <li
          key={index}
          onClick={() => paginate(number)}
          className={`pagination-item ${
            currentPage === number ? "active" : ""
          }`}
        >
          {number}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;




  