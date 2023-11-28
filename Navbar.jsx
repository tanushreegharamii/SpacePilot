import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

    const { loginWithRedirect } = useAuth0();
    return(
        <>
           <div className="navigation">
            <img src={require("../images/planet.png")} height={"50px"} alt="cc" />
                <b><h2>SPACEPILOT</h2></b>
               
                <div className="texts">
                    <p>NEWS + </p>
                    <p>ABOUT</p>
                    <p>CONTACT</p>
                    <p>LOG IN</p>
                    <button onClick={() => loginWithRedirect()}>Log In</button>;
                </div>
            </div>
        </>
    );
}
export default Navbar;