import React from 'react';
import Anisha from '../img/avatar-anisha.png';
import Ali from '../img/avatar-shanai.png';
import Richard from '../img/avatar-richard.png';

function Testimonial() {
    return (
        <>
        {/* Testimonials */}
        <section id="testimonials">
            {/*Container with  heading and testimonial blocks */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center text-royalBlue">
                    Buddy the new Manage
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg 
                    bg-veryLightGray md:w-1/3">
                        <img src={Anisha} className='w-16 -mt-14' alt="" />
                        <h5 className="text-lg font-bold">Anisha Li</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            Mayuri Manage excepturi soluta voluptatibus quasi labore repellendus 
                            dignissimos accusantium quaerat autem praesentium molestias 
                            magni quidem provident ratione consequuntur quam delectus 
                            nesciunt officia adipisci, recusandae illo totam! 
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg 
                    bg-veryLightGray md:flex md:w-1/3">
                        <img src={Ali} className='w-16 -mt-14' alt="" />
                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            Mayuri Manage excepturi soluta voluptatibus quasi labore repellendus 
                            dignissimos accusantium quaerat autem praesentium molestias 
                            magni quidem provident ratione consequuntur quam delectus 
                            nesciunt officia adipisci, recusandae illo totam! 
                            Obcaecati ea officiis repudiandae optio.
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg 
                    bg-veryLightGray md:flex md:w-1/3">
                        <img src={Richard} className='w-16 -mt-14' alt="" />
                        <h5 className="text-lg font-bold">Richard Baker</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            Mayuri Manage excepturi soluta voluptatibus quasi labore repellendus 
                            dignissimos accusantium quaerat autem praesentium molestias 
                            magni quidem provident ratione consequuntur quam delectus 
                            nesciunt officia adipisci, recusandae illo totam! 
                            Obcaecati ea officiis repudiandae optio.
                        </p>
                    </div>
                </div>
                {/* Button */}
                <div className="my-16">
                    <a href='#' className='p-3 px-6 text-white rounded-full 
                        align-baseline bg-brightRed hover:bg-brightRedLight'>
                        Get Started
                    </a>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className='bg-brightRed'>
            {/* Flex Container */}
            <div className="container flex flex-col items-center justify-between px-6 py-24 
                mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                {/* Heading */}
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl 
                    md:max-w-xl md:text-left">
                        Simplify how your team works today
                </h2>
                <div>
                    <a href='#' className='p-3 px-6 text-brightRed rounded-full shadow-2xl
                        align-baseline bg-white hover:bg-gray-700'>
                        Get Started
                    </a>                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial