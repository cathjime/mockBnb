import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="Home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://www.littlestepsasia.com/wp-content/uploads/2020/08/AirBNB-Experiences-Virtual-Learning.jpg"
          title="Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://www.thecoolector.com/wp-content/uploads/2021/02/air1-1024x684.jpg"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://ytdqjdy.com/wp-content/uploads/sites/2/2017/04/12c89c66-e873-42dc-bb05-b9455dd8d68d.jpg?quality=80&w=1024&strip"
          title="Entire Homes"
          description="Comfortable private spaces, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://www.paristay.com/upload/1/photos-apartments/39/1920x1080/Fosses-St-Jacques-Penthouse-9920039025605.jpg"
          title="Penthouse in Paris"
          description="Enjoy romantic Paris from the comfort of this classic penthouse."
          price="$450/night"
        />
        <Card
          src="https://i.pinimg.com/originals/54/77/24/54772484715b55883fffe1f2dea88573.png"
          title="Private Garden Apartment"
          description="Superhost with great amenities in a charming country abode."
          price="$145/night"
        />
        <Card
          src="https://hg2.com/wp-content/uploads/2015/09/5035438.jpg"
          title="Modern Flat"
          description="State of the art renovated apartment in prime location."
          price="$204/night"
        />
      </div>
    </div>
  );
};

export default Home;
