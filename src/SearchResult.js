import React from "react";
import HeartIcon from "@material-ui/icons/FavoriteBorder";

import "./SearchResult.css";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchresult">
      <img src={img} alt="" />
      <HeartIcon className="searchresult_heart" />
      <div className="searchresult_info">
        <div className="infoTop"></div>
        <div className="infoBottom"></div>
      </div>
    </div>
  );
};

export default SearchResult;
