import React, { useState } from 'react';
import { useCart } from './CartContext';
import UserProfile from './userProfile';

const MainComponent = () => {
    const { cart, removeFromCartMedicine, removeFromCartLabtest } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [orders, setOrders] = useState([]);

    const labTests = cart.filter(item => item.test_type);
    const medicines = cart.filter(item => item.id);

    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        setOrders(cart);
        setShowConfirmation(true);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

            {/* Render Lab Tests and Medicines... */}

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

            {/* Render UserProfile only when the profile is created */}
            {orders.length > 0 && (
                <UserProfile orders={orders} />
            )}
        </div>
    );
};

export default MainComponent;
