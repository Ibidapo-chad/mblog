import React from 'react';
import logo from '../img/Logo.png';

function Nav () {
    let handleClick= () => {
        let btn= document.getElementById('menu-btn');
        let nav= document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden')
    }
    return (
        <nav className='relative container mx-auto p-4 font-medium'>
            <div className='flex items-center justify-between'>
                {/* Image container */}
                <div className='pt-2 w-1/5'>
                    <img src={logo} alt='bird'/>
                </div>
                {/* Nav Menu container*/}
                <div className='hidden md:flex space-x-6'>
                    <a href='#'className='hover:text-darkGrayishBlue'>Home</a>
                    <a href='#'className='hover:text-darkGrayishBlue'>About us</a>
                    <a href='#'className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href='#'className='hover:text-darkGrayishBlue'>Contact Us</a>
                </div>
                {/* Button */}
                <a href='#' className='hidden md:block p-3 px-6 text-white rounded-full align-baseline bg-brightRed hover:bg-brightRedLight'>
                    Get Started
                </a>
                {/* Hamburger Icon */}
                <button id="menu-btn" className="block hamburger md:hidden focus:outline-none" onClick={handleClick}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
                <div id="menu" className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold 
                    bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </nav>
    )
};

export default Nav