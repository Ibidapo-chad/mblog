import React from 'react';
import logo from '../img/logo.jpg';

function Nav () {
    return (
        <div className='relative container mx-auto p-6 '>
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <img src={logo} alt='bird'/>
                </div>
                <div className='flex space-x-6'>
                    <ul>
                        <li> Home </li>
                        <li> About Us </li>
                        <li> Pricing </li>
                        <li> Contact </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Nav