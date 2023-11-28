import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import App from './App';

function Login ()
{

    const { loginWithRedirect } = useAuth0();
    return(
        <>
        <div className='log'>
        <button onClick={() => loginWithRedirect()}>Log In</button>;
        </div>
        </>
    );
}
export default Login ;