import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
// import { useNavigate } from "react-router";
import axios from "axios";

const instagramLogo = require("./assets/instagram.png");
const whatsappLogo = require("./assets/whatsapp.png");
const linkedinLogo = require("./assets/linkedin.png");
const githubLogo = require("./assets/github.png");

function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/message', formData);
      console.log('Message sent successfully:', response.data);
      // Handle success (e.g., show a success message, clear form, etc.)
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <div className="Contact-container">
      <p>Connect With me</p>
      <h1>Get in touch</h1>
      <p>
        I'd love to hear from you! If you have any questions or feedback, please
        use the form
        <br />
        below.
      </p>
      <div className="input-fields">
        <input
          placeholder="Enter your name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Enter your email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="contact-textarea"
        placeholder="Enter your message"
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
        onClick={handleSubmit}
        className="btn"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h3>Submit now</h3>
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
            <img src={linkedinLogo} alt="" />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Contactme;
