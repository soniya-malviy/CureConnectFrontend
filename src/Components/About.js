import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGetStart = () => {
        navigate('/appointment'); // Correct syntax for navigation
    };


    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center"
                 style={{backgroundImage: 'url(https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg)'}}>
                <div
                    className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 p-4 sm:p-10">
                    <div className="text-white text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-4">No Compromise<br/> When It Comes<br/> Your
                            Well-Being</h1>
                        <p className="text-base sm:text-lg mb-2">Connecting You to Trusted Doctors</p>
                        <p className="text-base sm:text-lg mb-4">Empowering Your Well-Being</p>

                        <p className="text-sm sm:text-md mb-4">
                            Book your appointments easily and efficiently. Our platform offers a seamless experience to
                            find the right doctor for your needs.
                        </p>
                        <p className="text-sm sm:text-md mb-4">
                            Whether you need a consultation, follow-up, or a specific treatment, we're here to assist
                            you every step of the way.
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-theme-dark-blue text-white rounded-lg shadow-lg hover:bg-theme-dark-blue-dark transition"
                            onClick={handleGetStart}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


            <div className="p-6 sm:p-10">
                <div
                    className="thought-container p-6 sm:p-10 max-w-7xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="thought-content mb-8 text-lg sm:text-2xl font-bold text-gray-700">
                            <span className="block">"Good health is not just about treating illness,</span>
                            <span className="block">but about fostering a lifestyle of balance, prevention, and proactive care."</span>
                        </div>
                        <div className="about-thought mt-4 text-sm sm:text-base">
                            Good health extends beyond merely treating illness; it involves cultivating a balanced
                            lifestyle
                            that includes preventive measures and proactive care...
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex-shrink-0 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <img className="w-full h-auto rounded-lg shadow-lg"
                             src="https://www.priviahealth.com/wp-content/uploads/2019/09/03_20_17_Why-the-Doctor-Patient-Relationship-is-Important-e1530037975292-1200x800.jpg"
                             alt="thought-image"/>
                    </div>
                </div>

                <div className="Home-page-section-3-container p-6 sm:p-10 bg-white">
                    <div className="section3-heading mt-10 font-bold text-3xl sm:text-5xl text-gray-600 text-center">Our
                        Offering.......
                    </div>
                    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-lg sm:text-xl">
                        {[
                            "Comprehensive medical directory...",
                            "Online appointment booking...",
                            "Online consultation with trusted doctors...",
                            "Diagnostic Tests through CureConnect...",
                            "Medicine delivery by a network..."
                        ].map((item, index) => (
                            <li key={index} className="relative pl-8 py-2">
                                <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                                <span className="font-bold">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="container mx-auto p-6 sm:p-20 mt-10">
                        <ul className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
                            {[
                                {icon: "fa-globe", label: "20+", description: "Countries"},
                                {icon: "fa-user-doctor", label: "30 Cr+", description: "Patients per year"},
                                {icon: "fa-briefcase-medical", label: "1 L+", description: "Doctor partners"},
                            ].map((item, index) => (
                                <li key={index} className="text-center text-gray-500">
                                    <i className={`fa-solid ${item.icon}`} style={{fontSize: '4rem'}}></i>
                                    <div className="mt-4 text-lg">
                                        <span className="block text-2xl font-bold">{item.label}</span>
                                        {item.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
