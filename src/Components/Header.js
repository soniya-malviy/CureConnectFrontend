import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LOGO from '../assets/LOGO.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-[rgba(255,255,255,0.3)] text-black py-4 shadow-lg">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <NavLink to="/about" className="flex items-center">
                        <img
                            src={LOGO}
                            alt="website-logo"
                            className="h-10 w-[250px] lg:w-[150px] object-cover"
                        />
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex items-center text-black focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <nav className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
                        <NavLink to="/about" className="block py-2 px-4 text-black hover:text-theme-dark-blue">
                            About Us
                        </NavLink>
                        <NavLink to="/appointment" className="block py-2 px-4 text-black hover:text-theme-dark-blue">
                            Appointment Booking
                        </NavLink>
                        <NavLink to="/labtest" className="block py-2 px-4 text-black hover:text-theme-dark-blue">
                            Lab Test
                        </NavLink>
                        <NavLink to="/medicines" className="block py-2 px-4 text-black hover:text-theme-dark-blue">
                            Medicines
                        </NavLink>
                        <NavLink to="/login" className="block py-2 px-4 text-black hover:text-theme-dark-blue">
                            Login
                        </NavLink>
                        <NavLink to="/cart"
                                 className="flex items-center py-2 px-4 text-black hover:text-theme-dark-blue">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 mr-2"/>
                            Cart
                        </NavLink>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default Header;
