import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useNavigate } from "react-router";
const instagramLogo = require("./assets/instagram.png");
const whatsappLogo = require("./assets/whatsapp.png");
const linkdlinLogo = require("./assets/linkedin.png");
const githubLogo = require("./assets/github.png");
function Contactme() {
  const navigate = useNavigate();
  return (
    <div className="Contact-container">
      <p>Connect With me</p>
      <h1>Get in touch</h1>
      <p>
        i'd love to hear from you' if you have any questions or feedback please
        use the form
        <br />
        below
      </p>
      <div className="input-fields">
        <input placeholder="Enter your name" />
        <input placeholder="Enter your email" />
      </div>
      <textarea
      className="contact-textarea"
        placeholder="Enter your message"
        //  cols={55}
        rows={10}
        style={{
          padding: "10px",
          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "10px",
          border: "1px solid grey",
        }}
      />
      <div
        className="btn"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <button>Submit now</button>
        <ArrowForwardIcon />
      </div>
      <div className="contact-social-icon">
        <h2>
          <a
            href="https://www.instagram.com/sujeettx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="" />
          </a>
        </h2>
        <h2>
          <a href="https://wa.link/d6eocv" 
          target="_blank"
           rel="noopener noreferrer"
          >
            <img src={whatsappLogo} alt="" />
          </a>
        </h2>
        <h2>
          <a href="https://github.com/sujeettx"
           target="_blank"
           rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="" />
          </a>
        </h2>
        <h2>
          <a href="https://www.linkedin.com/in/sujeet-kumar-kushwaha-468304252"
           target="_blank"
           rel="noopener noreferrer"
          >
            <img src={linkdlinLogo} alt="" />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Contactme;
