import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = (item) => {
        switch (item) {
            case 'Appointment Booking':
                navigate('/appointment');
                break;
            case 'Medicine Booking':
                navigate('/medicines');
                break;
            case 'Lab Test Booking':
                navigate('/labtest');
                break;
            default:
                console.warn('Unknown item:', item);
        }
    };
    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center "
                 style={{ backgroundImage: 'url(https://wallpapers.com/images/hd/physician-and-a-patient-n3qyd7cdb7rltjqe.jpg)' }}>
                <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 p-10">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold mb-5">No Compromise<br /> When It Comes to <br /> Your Well-Being</h1>
                        <p className="text-xl mb-2">Connecting You to Trusted Doctors</p>
                        <p className="text-xl">Empowering Your Well-Being</p>
                    </div>
                </div>

                <div className="absolute bottom-10 left-10 flex space-x-4">
                    {['Appointment Booking', 'Medicine Booking', 'Lab Test Booking'].map((item, index) => (
                        <button
                            key={index}
                            className="relative w-48 h-32 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 focus:outline-none"
                            onClick={() => handleButtonClick(item)}
                        >
                            <div className="flex items-center justify-center h-full">
                                <h2 className="text-lg font-semibold">{item}</h2>
                            </div>
                        </button>
                    ))}
                </div>

            </div>


            <div className="mt-24">
                <div
                    className="thought-container p-10 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-20 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="thought-content mb-8 text-2xl font-bold text-gray-700">
                            <span className="block">"Good health is not just about treating illness,</span>
                            <span className="block">but about fostering a lifestyle of balance, prevention, and proactive care."</span>
                        </div>
                        <div className="about-thought mt-4">
                            Good health extends beyond merely treating illness; it involves cultivating a balanced lifestyle
                            that includes preventive measures and proactive care...
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex-shrink-0 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <img className="w-3/4 h-auto rounded-lg shadow-lg"
                             src="https://www.priviahealth.com/wp-content/uploads/2019/09/03_20_17_Why-the-Doctor-Patient-Relationship-is-Important-e1530037975292-1200x800.jpg"
                             alt="thought-image" />
                    </div>
                </div>

                <div className="Home-page-section-3-container p-10 bg-white">
                    <div className="section3-heading mt-10 font-bold text-5xl text-gray-600 text-center">Our Offering.......</div>
                    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xl">
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
                    <div className="container mx-auto p-20 mt-10">
                        <ul className="flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-20">
                            {[
                                { icon: "fa-globe", label: "20+", description: "Countries" },
                                { icon: "fa-user-doctor", label: "30 Cr+", description: "Patients per year" },
                                { icon: "fa-briefcase-medical", label: "1 L+", description: "Doctor partners" },
                            ].map((item, index) => (
                                <li key={index} className="text-center text-gray-500">
                                    <i className={`fa-solid ${item.icon}`} style={{ fontSize: '10rem' }}></i>
                                    <div className="mt-6 text-lg">
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
