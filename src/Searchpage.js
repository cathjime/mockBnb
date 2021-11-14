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
      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8YQn-G6toIQZVYbDT4eKJwHaEb%26pid%3DApi&f=1"
        location="Sunny loft in Sacramento!"
        title="Loft with plenty of natural light!"
        description="2 guests ∙ 2 bedrooms ∙ 2 beds ∙ 2.5 bathrooms ∙ WiFi ∙ Kitchen ∙ Washing Machine ∙ close to supermarket"
        star={4.7}
        price="$164 / night"
        total="$984 total"
      />

      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2018%2F03%2F49-wisconsin-Top-Airbnb-Rentals-Under-100-via-airbnb.com_.jpg&f=1&nofb=1"
        location="University Heights"
        title="Cozy Cambridge Studio!"
        description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1 bathroom ∙ WiFi ∙ Kitchen ∙ Washing Machine ∙ blocks from Main Street"
        star={4.5}
        price="$87 / night"
        total="$555 total"
      />
    </div>
  );
};

export default SearchPage;
