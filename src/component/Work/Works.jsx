import React, { useState } from "react";
import "./Works.css";
import photo from "../../images/photo.webp";
import mealPlanner from "../../images/meal-planner.png";
import { BiLink } from "react-icons/bi";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = [
  {
    name: "bookMyShow clone",
    link: "https://curious-sunburst-403642.netlify.app/",
    image: photo,
    description:
      "This project is simple clone of BookMyShow, where user can check the movies. On clicking on genres, user will get the list of movies with selected genre.  User can select the seats and book the ticket for the movie selected.",
    techStack: "HTML, CSS, JAVASCRIPT, React JS",
  },
  {
    name: "Meal Planner",
    link: "https://resonant-lily-859d25.netlify.app/",
    image: mealPlanner,
    description : "This project is to show the meal planning for a person based on weight, height, age and activity. The meal planner contains three meals where the total calories is distributed between three meals, when clicked on get recipe user will be redirected to procedure of making corresponding food.",
    techStack : "HTML, CSS, JAVASCRIPT",
  },
];

export function Works() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const displayCard = (arr) => {
    return arr.map((item, index) => {
      return (
        <Carousel.Item key={"div" + index}>
        
          <div className="work-card" >
            <img src={item.image} alt={item.name} />
            <div className="details-section">
              <p><span className="span-details">Description</span>: {item.description}</p>
              <p><span className="span-details">Tech Stack used</span>: {item.techStack}</p>
              <a rel="noreferrer" href={item.link} target="_blank" className="redirect-link">Check out the page <BiLink/></a>
            </div>
          </div>
        </Carousel.Item>
      );
    });
  };
  return (
    <div id="myWorks">
      <h1 className="works-title">My Works</h1>
      <div className="work-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {displayCard(projectData)}
        </Carousel>
      </div>
    </div>
  );
}
