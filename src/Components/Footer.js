import React from 'react';
import LOGO from '../assets/LOGO.jpeg';
import {NavLink} from "react-router-dom";

import FOOTER0LOGO from "../assets/FOOTER-LOGO.jpeg";
const Footer = () => {
    return (
        <footer className="bg-theme-dark-blue text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">CureConnect</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Guiding Principles</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">For Patients</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Ask Free Health Questions</a></li>
                            <li><a href="#" className="hover:underline">Search for Doctors</a></li>
                            <li><a href="#" className="hover:underline">Search for Clinics</a></li>
                            <li><a href="#" className="hover:underline">Read Health Articles</a></li>
                            <li><a href="#" className="hover:underline">Read about Medicines</a></li>
                            <li><a href="#" className="hover:underline">Consult a Doctor</a></li>
                            <li><a href="#" className="hover:underline">Order Medicines</a></li>
                            <li><a href="#" className="hover:underline">Health App</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">For Doctors</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">CureConnect Consult</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Health Feed</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Profile</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Pro App</a></li>
                        </ul>
                        <h3 className="text-lg font-bold mt-8 mb-4">For Clinics</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">CureConnect Prime</a></li>
                            <li><a href="#" className="hover:underline">Ray by CureConnect</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Reach</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">For Hospitals</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">CureConnect Prime</a></li>
                            <li><a href="#" className="hover:underline">Insta by CureConnect</a></li>
                            <li><a href="#" className="hover:underline">Qikwell by CureConnect</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Profile</a></li>
                            <li><a href="#" className="hover:underline">CureConnect Reach</a></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">More</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Help</a></li>
                            <li><a href="#" className="hover:underline">Developers</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Subscribers</a></li>
                            <li><a href="#" className="hover:underline">Sitemap</a></li>
                        </ul>
                    </div>

                    {/* Column 6 */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Social</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">YouTube</a></li>
                            <li><a href="#" className="hover:underline">GitHub</a></li>
                        </ul>
                    </div>


                </div>
                <NavLink to="/" className="flex justify-center items-center mt-5">
                    <img
                        src={FOOTER0LOGO}
                        alt="website-logo"
                        className="h-20 w-[300px] mr-0"
                    />
                </NavLink>
                <div className="flex justify-center items-center mt-10">
                    <p className="text-center text-white">Copyright © 2017, CureConnect. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
