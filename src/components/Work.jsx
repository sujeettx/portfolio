import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const portifolio = require('./assets/portfolioimage.webp')
const chatApp =  require('./assets/chat-image.jpg');
const sportClub = require('./assets/sport-image.jpg');
const weatherApp = require('./assets/frontend-image.avif');
function Work() {
  return (
    <div className="work-container Contact-container">
      <p>Workplace</p>
      <h1>My latest work</h1>
      <p>
        Welcome to my Full stack web development portifolio .. Explore a
        collection of projects showcasing my <br />
        experties in full stack development
      </p>
      <div className="right-child-child">
        <div className="right-child-div service-div work-div">
          <img src={sportClub} alt=""/>
        </div>
        <div className="right-child-div service-div work-div">
        <img src={chatApp} alt=""/>
        </div>
        <div className="right-child-div service-div work-div">
        <img src={weatherApp} alt=""/>
        </div>
        <div className="right-child-div service-div work-div">
        <img src={portifolio} alt=""/>
        </div>
      </div>
      <div className="btn work-btn" style={{backgroundColor:'black',color:"white"}}>
       <h3> <button>Show more </button></h3>
        <ArrowForwardIcon/>
      </div>
    </div>
  );
}

export default Work;
