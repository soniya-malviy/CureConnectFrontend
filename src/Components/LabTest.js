import React, { useState } from 'react';
import tests from '../LabTests.json';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useUser } from './user';
import { useCart } from './CartContext';

const LabTest = () => {
    const { isLoggedIn } = useUser();
    const { addToCart } = useCart();
    const [filter, setFilter] = useState('');
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleAddToCart = (test) => {
        if (!isLoggedIn) {
            alert('Please log in to add items to your cart.');
            return;
        }
        addToCart(test);
        alert(`${test.test_type} added to cart!`);
    };

    const handleCardFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    const filteredTests = tests.filter((test) =>
        test.test_type.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            <div className="flex-1 p-4 lg:p-8 bg-cover bg-center" style={{ backgroundImage: "url(https://image.pbs.org/video-assets/fLmQ0vT-asset-mezzanine-16x9-VEQDFyZ.jpeg)" }}>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-theme-dark-blue">Available Lab Tests</h2>
                <div className="mb-6 flex justify-center">
                    <div className="relative w-full max-w-md lg:max-w-lg">
                        <input
                            type="text"
                            placeholder="Filter by test type"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 pl-10 pr-14 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        <FaSearch className="absolute top-3 left-3 text-gray-500" />
                        {filter && (
                            <button
                                onClick={() => setFilter('')}
                                className="absolute top-3 right-3 text-gray-500"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTests.map((test, index) => (
                        <div key={test.test_id} className="relative w-full h-72" onClick={() => handleCardFlip(index)}>
                            <div className={`flip-card w-full h-full ${flippedIndex === index ? 'flip' : ''}`}>
                                <div className="flip-card-inner w-full h-full transition-transform duration-600">
                                    {/* Front Side */}
                                    <div className="flip-card-front bg-white shadow-lg rounded-lg p-4 border border-gray-300 flex flex-col items-center justify-between">
                                        <h3 className="text-xl lg:text-2xl font-semibold mb-2">{test.test_type}</h3>
                                        <p className="text-gray-600 mb-1"><strong>Location:</strong> {test.location}</p>
                                        <p className="text-gray-600 mb-1"><strong>Price:</strong> ₹{test.price}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(test);
                                            }}
                                            className="mt-2 w-full py-1 px-4 bg-theme-dark-blue text-white font-semibold rounded-md hover:bg-blue-700 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    {/* Back Side */}
                                    <div className="flip-card-back bg-white shadow-lg rounded-lg p-4 border border-gray-300 flex flex-col items-center ">
                                        <h3 className="text-xl lg:text-2xl font-semibold mb-2">{test.test_type}</h3>
                                        <p className="text-gray-800 mb-2">
                                            <strong>Description:</strong> {test.description}
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

export default LabTest;
