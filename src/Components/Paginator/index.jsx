import React, { useState, useEffect } from "react";
import "./Paginator.scss";

const Paginator = ({ count, setUrl, prev, next, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageTitle, setPageTitle] = useState("");

  const handleForwardPagination = e => {
    setCurrentPage(currentPage => currentPage + 1);
    next && setUrl(next);
  };

  const handleBackwardPagination = e => {
    setCurrentPage(currentPage => currentPage - 1);
    prev && setUrl(prev);
  };

  useEffect(() => {
    let isMounted = true;
    (() => {
      const first = currentPage * 10;
      const last = first + 10 > count ? count : first + 10;
      isMounted && setPageTitle(`${first} - ${last} of ${count}`);
    })();

    return () => (isMounted = false);
  }, [currentPage, count]);

  return (
    <div className="paginator">
      <button
        onClick={handleBackwardPagination}
        disabled={loading || !prev}
        className={`left ${!prev ? "lighten" : ""}`}
      >
        <svg
          width="7"
          height="7"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.111484 3.84314L7.59535 0.033521C7.67458 -0.00667044 7.77729 -0.010861 7.86194 0.0217112C7.94684 0.0546644 8 0.119428 8 0.190287V7.80952C8 7.88038 7.94684 7.94533 7.86194 7.97828C7.82426 7.99276 7.78297 8 7.74194 8C7.69058 8 7.63948 7.98857 7.59535 7.96628L0.111484 4.15667C0.0415484 4.12105 2.38419e-07 4.06257 2.38419e-07 3.9999C2.38419e-07 3.93723 0.0418065 3.87876 0.111484 3.84314Z"
            fill="black"
            fillOpacity="0.7"
          />
        </svg>
        <span>Prev</span>
      </button>
      <p className="pageTitle">{pageTitle}</p>
      <button
        onClick={handleForwardPagination}
        disabled={loading || !next}
        className={`right ${!next ? "lighten" : ""}`}
      >
        <span>Next</span>
        <svg
          width="7"
          height="8"
          viewBox="0 0 7 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.871 3.84314L0.64701 0.033521C0.581122 -0.00667044 0.495703 -0.010861 0.425308 0.0217112C0.354698 0.0546644 0.310486 0.119428 0.310486 0.190287V7.80952C0.310486 7.88038 0.354698 7.94533 0.425308 7.97828C0.456642 7.99276 0.490981 8 0.525106 8C0.567815 8 0.61031 7.98857 0.64701 7.96628L6.871 4.15667C6.92916 4.12105 6.96371 4.06257 6.96371 3.9999C6.96371 3.93723 6.92894 3.87876 6.871 3.84314Z"
            fill="black"
            fillOpacity="0.7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Paginator;
