import React, { useState } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, removeFromCartMedicine, removeFromCartLabtest } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const labTests = cart.filter(item => item.test_type); // Assuming test_type indicates lab tests
    const medicines = cart.filter(item => item.id); // Assuming items without test_type are medicines

    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        setShowConfirmation(true);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold">Lab Tests</h3>
                {labTests.length === 0 ? (
                    <p className="text-gray-600">No lab tests in your cart.</p>
                ) : (
                    <ul>
                        {labTests.map(item => (
                            <li key={item.test_id} className="flex justify-between items-center mb-2 border-b pb-2">
                                <span className="text-gray-800">{item.test_type} - ₹{item.price}</span>
                                <button
                                    onClick={() => removeFromCartLabtest(item.test_id)} // Use test_id to remove the specific test
                                    className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h3 className="text-xl font-semibold">Medicines</h3>
                {medicines.length === 0 ? (
                    <p className="text-gray-600">No medicines in your cart.</p>
                ) : (
                    <ul>
                        {medicines.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
                                <span className="text-gray-800">{item.medicine_name} - ₹{item.price}</span>
                                <button
                                    onClick={() => removeFromCartMedicine(item.id)}
                                    className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex justify-between items-center my-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg">₹{totalAmount}</span>
            </div>

            <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Proceed to Checkout
            </button>

            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
                        <h3 className="text-xl font-bold mb-2">Order Confirmed!</h3>
                        <p>Your order has been successfully placed.</p>
                        <button
                            onClick={closeConfirmation}
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
