import React from 'react';
import Footers from './Footers';
import Navbar from './Navbar';
import Buttonknow from './Buttonknow';
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


function Home ()
 {    
    useEffect(()=>{
        Aos.init({
            duration :3000
        })
    },[])
        return(
        
            <>
      
    <header>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <div className="firstsection" >
           
           <div className='backg'>
            <img src={require('../images/wp2293431.jpg')} height={"800px"} alt='fjh'/>
           </div>

         <Navbar/>
        
            <div className="navbar_elements" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
                <h1>WELCOME  TO</h1>
                <b><h2>SPACEPILOT</h2></b><br/><br/>
                <div className="space_info">
                    <p>For Space related information</p>
                    <p>Cosmology, Planetory Science and more</p>

                    <div className="firstbtn">
                        <p>Explore Now</p>
                    </div>
                </div>
                
            </div><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="socialmedia_icon">
              <br/>   <img src={require("../images/email.png")} width="25px" alt='hdjh'/><br/>
              <img src={require("../images/facebook.png")} width="25px" alt='jsjah'/><br/>
              <img src={require("../images/github.png")} width="25px" alt='hsh'/><br/>
              <img src={require("../images/instagram.png")} width="25px" alt='sjdjs'/><br/>
              <img src={require("../images/linkedin.png")} width="25px" alt='hsds'/><br/>
            </div>
            </div>
    </header>




{/* //card section  */}



<div className="secondsection">
    <h2>CATEGORIES</h2>
    <div className="card_items">
        <div className="first_card" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
        <img src={require("../images/galaxy1.webp")} width={"300px"} alt="cc"  />
            <h2><b>KNOW ABOUT</b></h2>
            <h1>GALAXIES +</h1>
        </div>

        <div className="second_card" data-aos="fade-up" data-aos-duration="2000" data-aos-once="false"  >
        <img src={require("../images/CarinaNebulaGerminiani.jpg")} width="300px" alt='gg'/>
            <h2><b>KNOW ABOUT</b></h2>
            <h1>NEBULAS +</h1>
        </div>
        <div className="third_card" data-aos="fade-left" data-aos-duration="2000" data-aos-once="false"  >
        <img src={require("../images/blackhole1.jpg")} width="300px" alt='hs'/>
            <h2><b>KNOW ABOUT</b></h2>
            <h1>BLACK-HOLES +</h1>
        </div>
    </div>
    <Buttonknow/>

    

    <div className="gradient">
        <div className="solar_system" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false">
        <img src={require("../images/solarsystem.jpg")}  alt='hhg'/><br/>
            <div className="stars" >
                    <p>PLANETS :</p>
                    <p>STAR :</p>
                    <p>ASTOROID :</p>
            </div>
        </div>
    </div>

    

    <div className="paragraphs_in_secondsec"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
    <img src={require("../images/the-milky-way-galaxy-630x630.jpg")} width="300px" alt='hsg'/>
        <p>GALAXY is just like a container (System of stars) in outer space that contains billions of Stars, Planets, Meteioriots, Gasess, Clouds, Dust etc. These all elements orbiting the center of the galaxy, one year of galaxy is called galactic year. Each galaxy contains a supermassive blackhole. Galaxies were created after Big-Bang event. <br/> Our sollar system also orbiting a galaxy called Milky-Way. The Milky-Way galaxy contains 100 to 400 billons stars. The size of our Milky-way Galaxy approax 100000 light years.</p>
               
    </div>
    <div className="example1">
        
    </div>





    <div className="paragraphs_in_secondsec2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
    <img src={require("../images/beautifulnebula.jpg")} width="300px" alt='js'/>
                <p>A nebula is a giant cloud of dust and gas in space. Some nebulae (more than one nebula) come from the gas and dust thrown out by the explosion of a dying star, such as a supernova. Other nebulae are regions where new stars are beginning to form. The big form of cloud, when nutron stars died. <br/>
                Nebulae are made of dust and gases—mostly hydrogen and helium. The dust and gases in a nebula are very spread out, but gravity can slowly begin to pull together clumps of dust and gas. As these clumps get bigger and bigger, their gravity gets stronger and stronger.</p>
                    </div>


    
    <div className="paragraphs_in_secondsec3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
    <img src={require("../images/real_black.jpg")} width="300px" alt='hhjg'/>
                 <p>A black hole is a region of spacetime where gravity is so strong that nothing, including light and other electromagnetic waves, has enough energy to escape it.[2] The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.[3][4] The boundary of no escape is called the event horizon. Although it has a great effect on the fate and circumstances of an object crossing it, it has no locally detectable features according to general relativity.[5] In many ways, a black hole acts like an ideal black body, as it reflects no light.[6][7] Moreover, quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation, with the same spectrum as a black body of a temperature inversely proportional to its mass. This temperature is of the order of billionths of a kelvin for stellar black holes, making it essentially impossible to observe directly. </p>
                    </div>




</div>




            <div className="thirdsection">
                <h2>POPULAR</h2>
                <div className="card_items2">
                    <div className="first_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false">
                    <img src={require("../images/the_moon.jpg")} width="200px" alt='dhhd' />
                    </div>
                    <div className="second_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false">
                    <img src={require("../images/af56e06948a5677055ea6c31fa0dac5b.jpg")} width="200px" alt='hshd'/>
                    </div>
                    <div className="third_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false">
                    <img src={require("../images/all_planets.jpg")} width="200px" alt='hshd'/>
                    </div>
                    <div className="fourth_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false">
                    <img src={require("../images/marsimg.jpg")} width="200px" alt='sjj'/>
                    </div>
                    <div className="fifth_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false" >
                    <img src={require("../images/1837501.jpg")} width="200px" alt='sdjh'/>
                    </div>
                    <div className="sixth_card2" data-aos="flip-left" data-aos-duration="2000" data-aos-once="false">
                    <img src={require("../images/jupitar.jpg")} width="200px" alt='jshdjh'/>
                    </div>
                    
                </div>
                <div className="know_more_button2" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
                    <h4>Know more</h4>
                </div><br/>
            </div>
           
            <script>
  AOS.init();
</script>

    <Footers/>
 
    </>
    
     );
    }
export default Home;