import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://www.littlestepsasia.com/wp-content/uploads/2020/08/AirBNB-Experiences-Virtual-Learning.jpg"
          title="Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          onClick={() => console.log("clicked!")}
        />
        <Card
          src="https://www.thecoolector.com/wp-content/uploads/2021/02/air1-1024x684.jpg"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
          onClick={() => console.log("clicked!")}
        />
        <Card
          src="https://ytdqjdy.com/wp-content/uploads/sites/2/2017/04/12c89c66-e873-42dc-bb05-b9455dd8d68d.jpg?quality=80&w=1024&strip"
          title="Entire Homes"
          description="Comfortable private spaces, with room for friends or family."
          onClick={() => console.log("clicked!")}
        />
      </div>
      <div className="home_section">
        <Link to="/details">
          <Card
            src="https://i.pinimg.com/originals/19/ff/df/19ffdf6e143e6fffe8e3380a4dee43b2.jpg"
            title="Penthouse in Milan"
            description="Enjoy Milan from the comfort of this classic penthouse."
            price="$450/night"
          />
        </Link>
        <Link to="/details">
          <Card
            src="https://i.pinimg.com/originals/e1/94/a0/e194a0ba3b2ac6f65f520c10a14fca4a.jpg"
            title="Private Garden Apartment"
            description="Superhost with great amenities in a charming country abode."
            price="$145/night"
          />
        </Link>
        <Link to="/details">
          <Card
            src="https://i.pinimg.com/originals/5c/15/6b/5c156be3a367b90f9d3de246eb0d2fd6.jpg"
            title="Modern Flat"
            description="State of the art renovated apartment in prime location."
            price="$204/night"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
