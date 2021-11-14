import { React, useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import Search from "./Search.js";

const Banner = () => {
  const [buttonText, setButtonText] = useState(false);

  const toggleButtonText = () => {
    setButtonText(!buttonText);
  };

  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner_search">
        {buttonText && <Search />}
        {buttonText ? (
          <Button
            onClick={toggleButtonText}
            className="banner_searchbutton"
            variant="outlined"
          >
            Hide
          </Button>
        ) : (
          <Button
            onClick={toggleButtonText}
            className="banner_searchbutton"
            variant="outlined"
          >
            {buttonText ? "Hide" : "Search Dates"}
          </Button>
        )}
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Nearby
        </Button>
        {/* look up material ui core button types in docs */}
      </div>
    </div>
  );
};

export default Banner;
