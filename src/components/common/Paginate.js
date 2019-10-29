import React from "react";
import _ from "lodash";

function Paginate({ item, pageSize, changePage, currentPage }) {
  const max = Math.ceil(item.length / pageSize);
  const pages = _.range(1, max + 1);
  return (
    <nav className="pagination">
      <ul>
        {pages.map(page => (
          <li
            key={page}
            onClick={() => changePage(page)}
            className={currentPage === page ? "active" : null}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Paginate;
