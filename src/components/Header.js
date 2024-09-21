import React from 'react'
import Logo from "../assests/netflixLogo.png"

const Header = () => {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-44' src={Logo} alt="Logo" />
        </div>
    )
}

export default Header