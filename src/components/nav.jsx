import React from 'react';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './Mystyle.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <h1>Sujeet.</h1>
        <ul className='nav-content'>
          <li onClick={()=>navigate("/")}>Home</li>
          <li onClick={()=>{navigate("about")}}>About Me</li>
          <li  onClick={()=>{navigate('service')}}>Services</li>
          <li  onClick={()=>{navigate('work')}}>My Work</li>
          <li  onClick={()=>{navigate('contact')}}>Contact me</li>
        </ul>
      <div className='nav-content1'>
      <Button>
            <BedtimeIcon/>
          </Button>
        <div className='btn' onClick={()=>navigate('/contact')}>
          <h3><button>Contact</button></h3>
          <ArrowOutwardIcon/>
        </div>
      </div>
    </div>
  )
}
export default Nav
