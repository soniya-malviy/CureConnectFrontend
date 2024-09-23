import React, { useState, useEffect } from 'react';
import medicinesData from '../MedicineInformation.json';
import { useUser } from './user';
import { useCart } from './CartContext'; // Import the Cart context
import { FaSearch, FaTimes } from 'react-icons/fa';
import "./Medicine.css";

const Medicines = () => {
    const { isLoggedIn } = useUser();
    const { addToCart } = useCart();
    const [medicines, setMedicines] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [flippedIndex, setFlippedIndex] = useState(null);

    useEffect(() => {
        setMedicines(medicinesData);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleAddToCart = (medicine) => {
        if (!isLoggedIn) {
            alert('Please log in to add items to your cart.');
            return;
        }
        addToCart(medicine);
        alert(`${medicine.medicine_name} added to cart!`);
    };

    const handleCardFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    const filteredMedicines = medicines.filter(medicine =>
        medicine.medicine_name.toLowerCase().includes(searchQuery)
    );

    return (
        <div
            className="flex flex-col lg:flex-row min-h-screen bg-gray-100"
            style={{
                backgroundImage: "url('https://image.pbs.org/video-assets/fLmQ0vT-asset-mezzanine-16x9-VEQDFyZ.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex-1 p-4 lg:p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-theme-dark-blue">Available Medicines</h2>

                <div className="relative max-w-md mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="Search by medicine name..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-lg p-3 pl-10 pr-14 w-full focus:outline-none focus:ring-2 focus:ring-theme-dark-blue transition"
                    />
                    <FaSearch className="absolute top-3 left-3 text-gray-500" />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute top-3 right-3 text-gray-500"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMedicines.map((medicine, index) => (
                        <div key={medicine.id} className="relative w-full h-80 transition-transform duration-300 transform hover:scale-105" onClick={() => handleCardFlip(index)}>
                            <div className={`flip-card w-full h-full ${flippedIndex === index ? 'flip' : ''}`}>
                                <div className="flip-card-inner w-full h-full transition-transform duration-600">
                                    {/* Front Side */}
                                    <div className="flip-card-front bg-white shadow-lg rounded-lg flex flex-col justify-between p-4">
                                        <img
                                            src={medicine.image_url}
                                            alt={medicine.medicine_name}
                                            className="w-full h-40 object-cover rounded-t-lg"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800 mt-2">{medicine.medicine_name}</h3>
                                        <p className="text-gray-600">Organ: {medicine.organ_use_for}</p>
                                        <p className="text-gray-600">Price: ₹{medicine.price}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(medicine);
                                            }}
                                            className="w-full py-1 px-4 bg-theme-dark-blue text-white font-semibold rounded-md hover:bg-blue-700 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* Back Side */}
                                    <div className="flip-card-back bg-white shadow-lg rounded-lg p-4 flex flex-col">
                                        <p className="text-gray-800 mb-2"><strong>Dosage:</strong> {medicine.dosage}</p>
                                        <p className="text-gray-800 mb-2">
                                            <strong>Description:</strong> {medicine.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CSS for Card Flip */}
            <style jsx>{`
                .flip-card {
                    perspective: 1000px;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }

                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }

                .flip-card-front {
                    background-color: #ffffff;
                }

                .flip-card-back {
                    background-color: #f9f9f9;
                    transform: rotateY(180deg);
                }

                .flip-card.flip .flip-card-inner {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
};

export default Medicines;
