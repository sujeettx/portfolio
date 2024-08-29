import React from 'react'
const appLogo = require('./assets/mobile-development.png');
const webLogo = require('./assets/web.png');
const wordLogo = require('./assets/word.png');
const uiuxLogo = require('./assets/ui-ux.png');
// import{}
function Service() {
  return (
    <div className='Contact-container service-container'>
      <p>What i Offer</p>
      <h1>My Services</h1>
      <p>i'm a Full Stack Developer from satna, india With 2 year of experience of multiple project <br/> also im done my internship at Edureke</p>
      <div className='right-child-child service-child-div'>
        <div className='right-child-div service-div'>
            <h2><img src={webLogo} alt=''/></h2>
            <h2>Web Design</h2>
            <p> "Web design encompasses creating visually engaging, functional websites that provide a seamless and intuitive user experience."</p>
        </div>
        <div className='right-child-div service-div'>
        <h2><img src={uiuxLogo} alt='' /></h2>
            <h2>UI/UX design</h2>
            <p>"UI/UX design focuses on creating visually appealing, user-friendly interfaces that enhance overall user experience."</p>
     
        </div>
        <div className='right-child-div service-div'>
        <h2><img src={appLogo} alt='' /></h2>
            <h2>Mobile App</h2>
            <p>Mobile development involves creating software applications specifically for mobile devices, optimizing functionality and user experience."</p>
     
        </div>
        <div className='right-child-div service-div'>
        <h2 className='service-logo'><img src={wordLogo} alt='' /></h2>
            <h2>Ms-Office</h2>
            <p>"MW-Word simplifies document creation, offering powerful editing tools and intuitive features for efficient text management."</p>
     
        </div>
      </div>
    </div>
  )
}

export default Service
