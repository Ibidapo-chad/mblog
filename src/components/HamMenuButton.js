import React from 'react';

function HamMenuButton() {
    let handleClick= () => {
        let btn= document.getElementById('menu-btn');
        let nav= document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden')
    }

    return (
        <>
            {/* Hamburger Icon */}
            <button id="menu-btn" className="block hamburger md:hidden focus:outline-none" onClick={handleClick}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button> 

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

        </>       
    )
};

export default HamMenuButton