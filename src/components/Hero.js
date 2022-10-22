import React from 'react';
import illustration from '../img/illustration-intro.svg';

function Hero() {
    return (
        <>
        <section id="hero">
            {/* Flex container */}
            <div className="container flex flex-col-reverse md:flex-row item-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                {/* Left Item */}
                <div className="flex flex-col mb-32 space-y-32 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage makes it simple for software teams 
                        to plan day-to-day tasks while keeping the 
                        larger team goals in view
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href='#' className='p-3 px-6 text-white rounded-full 
                            align-baseline bg-brightRed hover:bg-brightRedLight'>
                            Get Started
                        </a>
                    </div>
                </div>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src={illustration} alt="infograph" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero