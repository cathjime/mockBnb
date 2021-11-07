import { React, useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

//date picker
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of Guests</h2>
      <PeopleIcon />
      <input min={0} defaultValue={2} type="number" />
      <Button className="button">Search AirBnB</Button>
    </div>
  );
};

export default Search;
