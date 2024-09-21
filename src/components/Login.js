import React, { useRef, useState } from 'react'
import Header from './Header.js'
import { checkValidData } from '../utils/validate.js';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
    };
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-20 mx-auto py-5 left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-2 cursor-pointer' onClick={handleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already  registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login