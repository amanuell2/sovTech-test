import React from "react";

const Search = () => {
  return (
    //  white  search svg with transparent background
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export default React.memo(Search);
