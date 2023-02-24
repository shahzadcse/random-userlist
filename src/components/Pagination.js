import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

import "./Pagination.css";

const Pagination = () => {
  const { page, totalPages, setPage, setUrl } = useContext(UserContext);

  const pageHandler = (selectedPage) => {
    if (
      selectedPage > 0 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
      setUrl(
        `https://randomuser.me/api/?page=${selectedPage}&results=10&seed=abc${selectedPage}`
      );
    }
  };

  return (
    <div className="pagination">
      {page > 1 ? <span onClick={() => pageHandler(page - 1)}> ◀️ </span> : ""}
      {[...Array(totalPages)].map((_, i) => {
        return (
          <span
            className={page === i + 1 ? "pagination__selected" : ""}
            onClick={() => pageHandler(i + 1)}
          >
            {" "}
            {i + 1}{" "}
          </span>
        );
      })}
      {page < totalPages ? (
        <span onClick={() => pageHandler(page + 1)}> ▶️</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
