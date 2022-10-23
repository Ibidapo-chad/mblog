import React from 'react';

function Features() {
    return (
        <>
        {/* Features Section */}
        <section className="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 
                space-y-12 md:space-y-0 md:flex-row">
                {/* What's different */}
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
                        Buddy provides all the functionality your team needs,
                        without the complexity.
                        Our software is tailor-made for modern digital
                        product.
                    </p>
                </div>

                {/* Numbered list */}
                <div className='flex flex-col space-y-8 md:w-1/2'>
                    {/* Lists Item 1*/}
                    <div className="flex flex-col space-y-3 md:space-y-0 
                    md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Track company wide progress
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Track company-wide progress
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Repellat quibusdam ipsa doloribus excepturi! 
                                In sequi cum dolorum. A magnam aut soluta nostrum? 
                                Velit, officia eaque? Ipsa culpa amet neque consequuntur?
                            </p>
                        </div>
                    </div>

                    {/* Lists Item 2*/}
                    <div className="flex flex-col space-y-3 md:space-y-0 
                        md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Advanced built-in reports
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Advanced built-in reports
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Vel illo nisi repellendus pariatur dignissimos excepturi 
                                rerum mollitia suscipit voluptatum? Ipsa laborum, aut modi natus autem. 
                                Nesciunt consectetur, voluptas facere maxime optio magnam est possimus!
                            </p>
                        </div>
                    </div>

                    {/* Lists Item 3*/}
                    <div className="flex flex-col space-y-3 md:space-y-0 
                        md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Everything you need is in one place
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Everything you need is in one place
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Minus nam quidem deserunt possimus ipsum deleniti beatae, 
                                ea reprehenderit? Explicabo rerum laudantium, quae 
                                expedita illo odit ullam, quaerat harum omnis voluptatum tempore 
                                facere facilis, suscipit dolore!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features