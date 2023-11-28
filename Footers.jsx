import React from "react";


function Footers () {
    return (
     
      <>
            <div className="footer">
    <div className="logo">
    <img src={require("../images/planet.png")} width="40px" alt='skjdj'/>
    </div>
    <div className="topics">
        <div className="head1">
            <h2>STAY IN TOUCH</h2>
            <p>Make sure to stay in touch </p>
            <p>For future collaboration</p>
            <p>Visit Github to access all codes</p>
            <p> Follow for more </p>
    
        </div>
        <div className="head2">
            <h2>CONNECT</h2>
           <a href="https://www.facebook.com/profile.php?id=100070380847183">  <img src={require("../images/facebook (1).png")} width="25px" alt='ahh'/></a>
            <a href="https://www.instagram.com/tanushreegharami/?hl=en">  <img src={require("../images/instagram (1).png")} width="25px" alt='sjhjh'/></a>
            <a href="https://github.com/tanushreegharamii"> <img src={require("../images/github (1).png")} width="25px" alt='shjsh'/></a>
            <img src={require("../images/email (1).png")} width="25px" alt='jjf'/>
            <img src={require("../images/twitter.png")} width="25px" alt='jhsh'/>
            <a href="https://www.linkedin.com/in/tanushree-gharami-3b5a04280/">  <img src={require("../images/linkedin (1).png")} width="25px" alt='jhsh'/></a>
           

           
        </div>
        <div className="head3">
            <h2>MORE TOPICS</h2>
            <p>Andromeda Galaxy</p>
            <p>On ISS working</p>
            <p>Deep exoplanets</p>
            <p>Astronomy</p>
        </div>
    </div>
    <div className="line">

    </div>
    <div className="last_text">
       <div className="mail">
        <p> <img src={require("../images/link.png")} width="15px" alt='hsh'/></p>
        <p>tanushreegharami77@gmail.com</p>
       </div>
        <div className="address">
        <img src={require("../images/location (1).png")} width="20px" alt='hjsh'/>
            <p> 
                Maheshtala, Kolkata - 70040</p>
        </div>
    </div>
    </div>
             
        </>
    );
  }
  
  export default Footers;