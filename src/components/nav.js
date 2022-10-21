import React from 'react';
import logo from '../img/Logo.png';

function Nav () {
    return (
        <div className='relative container mx-auto p-4 font-medium'>
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
            </div>
        </div>
    )
};

export default Nav