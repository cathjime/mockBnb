import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="Home">
      <Banner />
      <div className="home_section">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="home_section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
