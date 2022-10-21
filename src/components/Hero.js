import React from 'react';

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
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero