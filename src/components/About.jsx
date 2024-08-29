import React from "react";
import { useEffect } from "react";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import { rotateText, toolsDiv } from "./Gsapanimation"
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
const vscode = require("./assets/visual-studio-code-48.png");
const git = require("./assets/icons8-git-48.png");
const figma = require("./assets/icons8-figma-48.png");
const mongoDb = require("./assets/icons8-mongodb-48.png");
const menwithlaptop = require("./assets/menwithlaptop.png");
const image2 = require("./assets/image2.jpg");
function About() {
  useEffect(() => {
    rotateText();
  }, []);
  useEffect(() => {
    toolsDiv();
  }, []);

  return (
    <div className="about-container">
      <div className="left-child">
        <div className="about-image">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="right-child">
        <p>Introduction</p>
        <h1>About me</h1>
        <p>
          Passionate Full Stack Developer with hands-on experience in building
          dynamic and responsive web applications. Currently enhancing my skills
          with a focus on the MERN stack (MongoDB, Express.js, React.js,
          Node.js). Proficient in HTML5, CSS3, JavaScript, and back-end
          technologies. Seeking opportunities to contribute to impactful
          projects and advance my development career.
        </p>
        <div className="right-child-child">
          <div className="right-child-div">
            <h1>
              <CodeIcon />
            </h1>
            <h3>Languages</h3>
            <h6>Html Css javascript nodejs express mongodb react c</h6>
          </div>
          <div className="right-child-div">
            <h1>
              <SchoolIcon />
            </h1>
            <h3>Education</h3>
            <h6>Btech in Computer Science</h6>
          </div>
          <div className="right-child-div">
            <h1>
              <WorkOutlineRoundedIcon />
            </h1>
            <h3>Projects</h3>
            <h6>Build more than 20 Projects</h6>
          </div>
        </div>
        <p>Tools i use</p>
        <div className="right-tools">
          <button className="tools-btn">
            <img src={vscode} alt="" />
          </button>
          <button className="tools-btn">
            <img src={git} alt="" />
          </button>
          <button className="tools-btn">
            <img src={mongoDb} alt="" />
          </button>
          <button className="tools-btn">
            <img src={figma} alt="" />
          </button>
          <button className="tools-btn">
            <img src={vscode} alt="" />
          </button>
        </div>
      </div>
      <div className="circle-container">
      <img src={menwithlaptop} alt="" />
      <svg width="150" height="150" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fontSize="18">
          <textPath
           className="rotating-text"
            xlinkHref="#circlePath"
            startOffset="0%"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            FULL STACK WEB DEVELOPER
          </textPath>
        </text>
      </svg>
    </div>
    </div>
  );
}

export default About;
