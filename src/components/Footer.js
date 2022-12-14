import React from 'react';
import Lwhite from '../img/logo-white.svg';
import Facebook from '../img/icon-facebook.svg';
import Youtube from '../img/icon-youtube.svg';
import Twitter from '../img/icon-twitter.svg';
import Pinterest from '../img/icon-pinterest.svg';
import Instagram from '../img/icon-instagram.svg';

function Footer() {
    return (
        <>
        {/* Footer */}
        <footer className="bg-veryDarkBlue">
            <div className="container flex flex-col-reverse justify-between px-6 
                py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* Logo & Social links Container */}
                <div className="flex flex-col-reverse items-center justify-between 
                        space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; All Rights Reserved
                        </div>
                        {/* Logo */}
                        <div>
                            <img src={Lwhite} alt="" className="h-8" />
                        </div>
                        {/* Social Links */}
                        <div className="flex justify-center space-x-4">
                            {/* Link 1 */}
                            <a href="#">
                                <img src={Facebook} alt="" className="h-8" />
                            </a>
                            {/* Link 2 */}
                            <a href="#">
                                <img src={Youtube} alt="" className="h-8" />
                            </a>
                            {/* Link 3 */}
                            <a href="#">
                                <img src={Twitter} alt="" className="h-8" />
                            </a>
                            {/* Link 4 */}
                            <a href="#">
                                <img src={Pinterest} alt="" className="h-8" />
                            </a>
                            {/* Link 5 */}
                            <a href="#">
                                <img src={Instagram} alt="" className="h-8" />
                            </a>
                        </div>
                </div>
                {/* List container */}
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">Home</a>
                        <a href="#" className="hover:text-brightRed">About Us</a>
                        <a href="#" className="hover:text-brightRed">Pricing</a>
                        <a href="#" className="hover:text-brightRed">Contact Us</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">Careers</a>
                        <a href="#" className="hover:text-brightRed">Community</a>
                        <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                    </div>
                </div>

                {/* Input Container */}
                <div className="flex flex-col justify-between">
                    <form action="">
                        <div className="flex space-x-3">
                            <input 
                                type="text" 
                                placeholder="Updates in your inbox"
                                className="flex-1 px-4 rounded-full focus:outline-none"
                            />
                            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer