import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PL--FIWXNB-lby-HrekJVgHaFj%26pid%3DApi&f=1"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
