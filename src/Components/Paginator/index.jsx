import React, { useState, useEffect } from "react";
import { chunk } from "lodash";
import './Paginator.scss';

const Paginator = ({ content, setPageData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageTitle, setPageTitle] = useState('');
  const contentChunks = chunk(content, 8);
 

  const handleForward = () => {
    if(((currentPage + 1) * 8) < content.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }

  const handleBackward = () => {
    if(currentPage > 0) setCurrentPage(prevPage => prevPage - 1);
  }

  const handlePagination = () => {
    const pageData = contentChunks[currentPage];
    setPageData(pageData);
    const dataNum = (currentPage * 8) + 1;
    setPageTitle(`${dataNum} - ${dataNum + 8 > content.length ? content.length : dataNum + 8} of ${content.length}`);
  }

  useEffect(() => {
      handlePagination()
  }, [currentPage]);
 
  return (
    <div className="paginator">
      <p className="pageTitle">
        {pageTitle}
      </p>
      <div onClick={handleBackward} className="left">
        <svg
          width="20"
          height="20"
          viewBox="0 0 41 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1132 23.51L32.1699 0.814749C32.8882 0.289412 33.847 0 34.8695 0C35.8919 0 36.8508 0.289412 37.5691 0.814749L39.8562 2.48571C41.3444 3.57453 41.3444 5.34418 39.8562 6.43134L13.7771 25.4894L39.8851 44.5687C40.6034 45.094 41 45.7943 41 46.5411C41 47.2886 40.6034 47.989 39.8851 48.5147L37.598 50.1853C36.8791 50.7106 35.9208 51 34.8984 51C33.876 51 32.9171 50.7106 32.1988 50.1853L1.1132 27.4693C0.3932 26.9423 -0.00226293 26.2387 6.58626e-06 25.4907C-0.00226293 24.7398 0.3932 24.0366 1.1132 23.51Z"
            fill="black"
          />
        </svg>
      </div>
      <div onClick={handleForward} className="right">
        <svg
          width="20"
          height="20"
          viewBox="0 0 42 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.0078 23.51L8.85692 0.814749C8.13644 0.289412 7.17466 0 6.14914 0C5.12362 0 4.16184 0.289412 3.44135 0.814749L1.14731 2.48571C-0.345444 3.57453 -0.345444 5.34418 1.14731 6.43134L27.3055 25.4894L1.11828 44.5687C0.397802 45.094 0 45.7943 0 46.5411C0 47.2886 0.397802 47.989 1.11828 48.5147L3.41233 50.1853C4.13338 50.7106 5.09459 51 6.12011 51C7.14563 51 8.10741 50.7106 8.8279 50.1853L40.0078 27.4693C40.73 26.9423 41.1267 26.2387 41.1244 25.4907C41.1267 24.7398 40.73 24.0366 40.0078 23.51Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Paginator;
