import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";
const portifolio = require('./assets/portfolioimage.webp')
const chatApp =  require('./assets/chat-image.jpg');
const sportClub = require('./assets/sport-image.jpg');
const weatherApp = require('./assets/frontend-image.avif');

function Work() {
  const navigate = useNavigate()
  return (
    <div className="work-container Contact-container">
      <p>Workplace</p>
      <h1>My latest work</h1>
      <p>
        Welcome to my Full stack web development portifolio .. Explore a
        collection of projects showcasing my <br />
        experties in full stack development
      </p>
      <div className="work-boxes">
        <div className="work-boxes-child">
          <img src={portifolio} alt=""/>
        </div>
        <div className="work-boxes-child">
        <img src={chatApp} alt=""/>
        </div>
        <div className="work-boxes-child">
        <img src={sportClub} alt=""/>
        </div>
        <div className="work-boxes-child">
        <img src={weatherApp} alt=""/>
        </div>
      </div>
      <div className="btn work-btn" onClick={()=>navigate('/')} style={{backgroundColor:'black',color:"white"}}>
       <h3> <button>Show more </button></h3>
        <ArrowForwardIcon/>
      </div>
    </div>
  );
}

export default Work;
