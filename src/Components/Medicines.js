import React, { useState, useEffect } from 'react';
import medicinesData from '../MedicineInformation.json'; // Adjust the path as necessary
import './Medicine.css'; // Import the CSS file

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setMedicines(medicinesData);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const addToCart = (medicine) => {
        setCart([...cart, medicine]);
        alert(`${medicine.medicine_name} added to cart!`);
    };

    const handleCheckout = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setCart([]); // Optionally clear the cart after checkout
    };

    const filteredMedicines = medicines.filter(medicine =>
        medicine.medicine_name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Medicines Section */}
            <div className="flex-1 p-4 lg:p-8">
                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="Search by medicine name..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Medicine Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredMedicines.map((medicine) => (
                        <div key={medicine.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative w-full h-80">
                                <div className="absolute inset-0 flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front bg-white rounded-lg p-4 flex flex-col h-full">
                                            <img
                                                src={medicine.image_url}
                                                alt={medicine.medicine_name}
                                                className="w-full h-32 object-cover rounded-md mb-4"
                                            />
                                            <h3 className="text-lg font-semibold text-gray-800">{medicine.medicine_name}</h3>
                                            <p className="text-gray-600">Price: ₹{medicine.price}</p>
                                            <p className="text-gray-600">Usage: {medicine.usage}</p>
                                        </div>
                                        <div className="flip-card-back bg-white rounded-lg p-4 flex flex-col h-full">
                                            <p className="text-gray-800 mb-2"><strong>Organ Use For:</strong> {medicine.organ_use_for}</p>
                                            <p className="text-gray-800 mb-2"><strong>Dosage:</strong> {medicine.dosage}</p>
                                            <p className="text-gray-800 mb-4"><strong>Description:</strong> {medicine.description}</p>
                                            <button
                                                onClick={() => addToCart(medicine)}
                                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-auto"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div className="w-full lg:w-80 p-4 lg:p-8 bg-white shadow-lg">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                <ul className="space-y-4">
                    {cart.length === 0 ? (
                        <li className="text-gray-600">Your cart is empty</li>
                    ) : (
                        cart.map((item, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span className="text-gray-800">{item.medicine_name}</span>
                                <span className="text-gray-600">₹{item.price}</span>
                            </li>
                        ))
                    )}
                </ul>
                {cart.length > 0 && (
                    <button
                        onClick={handleCheckout}
                        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Checkout
                    </button>
                )}
            </div>

            {/* Checkout Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                        <h3 className="text-lg font-semibold mb-4">Order Confirmed!</h3>
                        <p>Your order for the selected medicines has been placed successfully.</p>
                        <button
                            onClick={handleClosePopup}
                            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Medicines;
