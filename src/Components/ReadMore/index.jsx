import React from "react";
import "./ReadMore.scss";

const ReadMore = () => {
  return (
    <button className="btn-read-more">
      <span>Read More</span>
      <span className="icon">
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
      </span>
    </button>
  );
};

export default ReadMore;
