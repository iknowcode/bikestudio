import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/bikestudio.png'

export const Navbar = () => {
    return (
        <div className="z-50 bg-gray-500 flex items-center justify-between sticky top-0">
            
            <div>
            <img src={Logo} alt="LOGO" className="rounded h-30 w-40 ml-3 " />
            </div>

            <div className = "justify-between mr-8 md:block hidden" >

                <Link className="font-bold text-gray-800 text-2xl font-mono mr-4"> Home </Link>
                <Link className="font-bold text-gray-800 text-2xl font-mono mr-4"> Tour </Link>
                <Link className="font-bold text-gray-800 text-2xl font-mono mr-4"> About </Link>
            
            </div>


            {/* Hamburger */}
            <Link to='/' className="mr-6 text-yellow-600 font-mono font-bold md:hidden"> 
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </Link>



        </div>
    )
}

export default Navbar;