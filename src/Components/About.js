import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutPage = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url('https://t3.ftcdn.net/jpg/04/37/72/70/360_F_437727015_ruTHqawcNUitzuC72BY2PVACH40V4kfm.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-20"
            >
                <div className="text-3xl flex justify-center items-center text-theme-light-blue font-bold">
                    "YOUR SIMPLE PARTNER IN HEALTHCARE JOURNEY"
                </div>

                <h2 className="text-3xl font-bold text-gray-700 mb-6 flex justify-center items-center mt-5">
                    Our Mission
                </h2>
                <p className="text-center text-gray-700 leading-relaxed font-bold">
                    At CureConnect, we’re committed to making healthcare accessible and efficient for everyone, with a
                    special focus on seniors. Our platform simplifies appointment scheduling, ensures fast access to
                    doctors, and supports urgent care needs.
                    <br/>
                    <br/>
                    We strive to bridge the gap between individuals and their healthcare providers, offering a seamless
                    booking experience and resources for transportation and assistance. By enhancing health outcomes and
                    improving quality of life, we’re not just scheduling appointments—we’re fostering a healthier, more
                    connected community for all.
                </p>
            </div>
            <div
                className="thought-container p-10 max-w-7.5xl mx-auto bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mt-20 flex flex-col lg:flex-row transform  ">

                <div className="lg:w-1/2 flex flex-col">
                    <div className="thought-content mb-8 text-2xl font-bold text-gray-700 mt-10">
                        <span className="block ">"Good health is not just about treating illness,</span>
                        <span className="block">but about fostering a lifestyle of balance, prevention, and proactive care."</span>
                    </div>
                    <div className="about-thought mt-20">
                        Good health extends beyond merely treating illness; it involves cultivating a balanced lifestyle
                        that includes preventive measures and proactive care. This approach emphasizes maintaining
                        overall well-being through regular check-ups, healthy habits, and a holistic focus on both
                        physical and mental health, rather than just addressing problems after they arise.
                    </div>
                </div>

                <div className="lg:w-1/2 flex-shrink-0 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    <img className="w-3/4 h-auto rounded-lg"
                         src="https://www.priviahealth.com/wp-content/uploads/2019/09/03_20_17_Why-the-Doctor-Patient-Relationship-is-Important-e1530037975292-1200x800.jpg"
                         alt="thought-image"/>
                </div>


            </div>
            <div className="Home-page-section-3-container p-10 bg-white">
                <div className="section3-heading mt-10 font-bold text-5xl text-gray-600">Our Offering.......</div>
                <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xl">
                    <li className="relative pl-8 py-2">
                        <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                        <span className="font-bold">Comprehensive medical directory with detailed,</span> verified
                        information about more than a lakh doctor partners across the country
                    </li>
                    <li className="relative pl-8 py-2">
                        <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                        <span className="font-bold">Online appointment booking</span> at over 9,000 leading hospitals
                        and clinics with doctors who use <span className="font-bold">CureConnect Prime</span>
                    </li>
                    <li className="relative pl-8 py-2">
                        <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                        <span className="font-bold">Online consultation</span> with trusted doctors across 20+
                        specialities
                    </li>
                    <li className="relative pl-8 py-2">
                        <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                        <span className="font-bold">Diagnostic Tests through CureConnect Associate Labs</span> to get
                        samples collected from the comfort and safety of one’s home
                    </li>
                    <li className="relative pl-8 py-2">
                        <span className="absolute left-0 top-0 mt-1.5 text-green-500">✓</span>
                        <span className="font-bold">Medicine delivery</span> by a network of verified pharmacies across
                        the country
                    </li>
                </ul>
                <div className="container mx-auto p-20 mt-10">
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-20">
                        <li className="text-center text-gray-500">
                            <i className="fa-solid fa-globe" style={{fontSize: '10rem'}}></i>
                            <div className="mt-6 text-lg">
                                <span className="block text-2xl font-bold">20+</span>Countries
                            </div>
                        </li>
                        <li className="text-center text-gray-500">
                            <i className="fa-solid fa-user-doctor" style={{fontSize: '10rem'}}></i>
                            <div className="mt-6 text-lg">
                                <span className="block text-2xl font-bold">30 Cr+ </span>Patients per year
                            </div>
                        </li>
                        <li className="text-center text-gray-500">
                            <i className="fa-solid fa-briefcase-medical" style={{fontSize: '10rem'}}></i>
                            <div className="mt-6 text-lg">
                                <span className="block text-2xl font-bold">1 L+</span>Doctor partners
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        </>


    );
}

export default AboutPage;


