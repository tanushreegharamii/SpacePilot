import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Buttonknow () {

    useEffect(()=>{
        Aos.init({
            
        })
    },[])
    return(
        <>
        <div className="know_more_button" data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
        <h4>Know more</h4>
        </div>
        </>
    );
}

export default Buttonknow;