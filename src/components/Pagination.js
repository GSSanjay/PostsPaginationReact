import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="section3">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => {
              return (
                <li key={number} classNam="page-item">
                  <button
                    onClick={() => paginate(number)}
                    href="!#"
                    className="page-link"
                  >
                    {number}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Pagination;
