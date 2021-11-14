import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage_info">
        <p>44 stays ∙ October 11 to October 17 ∙ 1 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined"> Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://skift.com/wp-content/uploads/2017/04/Miami-Airbnb-rental.jpg"
        location="Beautiful secluded home in Tulum"
        title="Stay at this idyllic retreat!"
        description="4 guests ∙ 2 bedrooms ∙ 4 beds ∙ 2 bathrooms ∙ WiFi ∙ Pool ∙ Kitchen ∙ Washing Machine ∙ Free Parking "
        star={4.8}
        price="$200 / night"
        total="$1500 total"
      />
    </div>
  );
};

export default SearchPage;
