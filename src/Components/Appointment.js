import React, { useState, useEffect } from 'react';
import doctors from '../DoctorsDetails.json';

const AppointmentPage = () => {
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState({});
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [specialization, setSpecialization] = useState('');

    useEffect(() => {
        const stateSet = new Set();
        const cityMap = {};

        doctors.forEach(doctor => {
            const city = doctor.city;
            const state = doctor.state;

            stateSet.add(state);
            if (!cityMap[state]) {
                cityMap[state] = [];
            }
            if (!cityMap[state].includes(city)) {
                cityMap[state].push(city);
            }
        });

        setStates([...stateSet]);
        setCities(cityMap);

        filterDoctors(selectedState, selectedCity, specialization);
    }, [selectedState, selectedCity, specialization]);

    const handleStateChange = (e) => {
        const newState = e.target.value;
        setSelectedState(newState);
        setSelectedCity(''); // Reset city when state changes
        filterDoctors(newState, '', specialization);
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        filterDoctors(selectedState, e.target.value, specialization);
    };

    const handleSpecializationChange = (e) => {
        setSpecialization(e.target.value);
        filterDoctors(selectedState, selectedCity, e.target.value);
    };

    const filterDoctors = (state, city, spec) => {
        const filtered = doctors.filter(doctor => {
            return (
                (state ? doctor.state === state : true) &&
                (city ? doctor.city === city : true) &&
                (spec ? doctor.specialization.toLowerCase().includes(spec.toLowerCase()) : true)
            );
        });
        setFilteredDoctors(filtered);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        filterDoctors(selectedState, selectedCity, specialization);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Search Bar */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-full mx-auto" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/89/60/96/360_F_289609649_SayyqhWUJoVj3roYfRty2sWYEipZ2n0L.jpg')`, backgroundSize: 'cover' }}>
                <h2 className="text-4xl font-bold text-theme-dark-blue mb-6 text-center">Find Your Doctor</h2>
                <form onSubmit={handleSearch} className="flex flex-col lg:flex-row lg:space-x-6">
                    {/* State Dropdown */}
                    <div className="mb-6 lg:mb-0 flex-1">
                        <label htmlFor="state" className="block text-lg font-medium text-gray-700 mb-2">State</label>
                        <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    {/* City Dropdown */}
                    <div className="mb-6 lg:mb-0 flex-1">
                        <label htmlFor="city" className="block text-lg font-medium text-gray-700 mb-2">City</label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                            disabled={!selectedState}
                        >
                            <option value="">Select City</option>
                            {(cities[selectedState] || []).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Specialization Input */}
                    <div className="mb-6 lg:mb-0 flex-1">
                        <label htmlFor="specialization" className="block text-lg font-medium text-gray-700 mb-2">Specialization</label>
                        <input
                            type="text"
                            id="specialization"
                            value={specialization}
                            onChange={handleSpecializationChange}
                            placeholder="e.g., Cardiologist"
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 text-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="flex items-center justify-center lg:justify-start">
                        <button
                            type="submit"
                            className="w-full lg:w-auto py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* Doctor Cards */}
            <div className="flex flex-wrap -mx-4">
                {filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="w-full sm:w-1/2 p-4">
                        <div className="flex items-start p-6 bg-white rounded-lg shadow-md h-full">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-40 h-40 object-cover border border-gray-300"
                            />
                            <div className="ml-6 flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                                <p className="text-gray-600 mb-2 text-lg">{doctor.specialization}</p>
                                <p className="text-gray-600 mb-2 text-lg">Consultation fees: ₹{doctor.consulting_fees}</p>
                                <p className="text-gray-600 mb-2 text-lg">{doctor.address}</p>
                                <p className="text-yellow-500 text-lg">Rating: {doctor.rating}%</p>
                                <a href={`/doctor/${doctor.id}`} className="text-blue-500 hover:underline mt-2 block text-lg">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppointmentPage;
