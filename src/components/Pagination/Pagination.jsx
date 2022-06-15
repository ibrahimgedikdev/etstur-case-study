import React from "react";

function Pagination({pageCount, paginate, currentPage}) {
  console.log('Pagination : Render');
  
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
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




  