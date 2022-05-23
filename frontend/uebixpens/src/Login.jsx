import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {

    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <div className='content_start'>
                <img src="img/logo.png" alt="uebixpens logo" />
                <button onClick={() => loginWithRedirect()} className='btn_start'>Login con google</button>
                <p className='copyrigt'>By Uebify</p>
            </div>
        </>
    )
}

export default Login