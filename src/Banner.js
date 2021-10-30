import { React, useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Search from "./Search.js";

const Banner = () => {
  const [buttonText, setButtonText] = useState(true);

  const toggleButtonText = () => {
    setButtonText(!buttonText);
  };

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
            Search Dates
          </Button>
        ) : (
          <Button
            onClick={toggleButtonText}
            className="banner_searchbutton"
            variant="outlined"
          >
            Hide
          </Button>
        )}
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
        {/* look up material ui core button types in docs */}
      </div>
    </div>
  );
};

export default Banner;
