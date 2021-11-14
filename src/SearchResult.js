import React from "react";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
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
        <div className="infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_______</p>
          <p>{description}</p>
        </div>
        <div className="infoBottom">
          <div className="stars">
            <StarIcon className="star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="price">
            <h2>{price}</h2>
            <p>
              <strong>{total}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
