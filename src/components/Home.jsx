import React from "react";
import image from "./assets/image.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Home() {
  return (
    <div className="home-container">
      <div className="home-child-1">
        <img className="home-image" src={image} alt="" />
        <p>Hi i'm Sujeet Kushwaha</p>
      </div>
      <div className="home-child-2">
        <h1 style={{fontSize:'50px'}}>
          Full Stack Web Developer <br /> Based in India
        </h1>
        <p>
          I'm a Full Stack Developer from satna mp. With 2 year of experience in
          multiple
          <br /> project like weather app chat application etc.
        </p>
      </div>
      <div className="home-child-3">
        <div
          className="btn"
          style={{
            background:
              "linear-gradient(to right, rgb(215, 8, 184), rgb(220, 146, 7))",
            color: "white",
          }}
        >
          <h3><button>Connect me</button></h3>
          <ArrowForwardIcon />
        </div>
        <div className="btn">
          <h3><button>My Resume</button></h3>
          <ArrowDownwardIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
