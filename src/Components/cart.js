import React, { useState } from 'react';
import { useCart } from './CartContext';

const MainComponent = () => {
    const { cart, removeFromCartMedicine, removeFromCartLabtest } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showEmptyCartPopup, setShowEmptyCartPopup] = useState(false);
    const [orders, setOrders] = useState([]);

    const labTests = cart.filter(item => item.test_type);
    const medicines = cart.filter(item => item.id);

    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            setShowEmptyCartPopup(true);
            return;
        }
        setOrders(cart);
        setShowConfirmation(true);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    const closeEmptyCartPopup = () => {
        setShowEmptyCartPopup(false);
    };

    return (
        <div className="flex justify-end p-10">
            <div className="hidden md:flex md:w-1/2">
                <img
                    src="https://st5.depositphotos.com/40988146/67494/v/450/depositphotos_674945454-stock-illustration-hand-drawn-male-female-doctors.jpg"
                    alt="Login"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                        transform: 'scale(0.9) translateX(-100px)', // Shift left and scale down
                        backgroundImage: 'cover'
                    }}
                />
            </div>

            <div className="bg-white shadow-lg rounded-lg max-w-md w-full mx-4 mt-10 mb-10 p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Lab Tests</h3>
                    {labTests.length === 0 ? (
                        <p>No lab tests in the cart.</p>
                    ) : (
                        labTests.map(test => (
                            <div key={test.test_id} className="flex justify-between items-center border-b py-2">
                                <span>{test.test_type} - ${test.price.toFixed(2)}</span>
                                <button
                                    onClick={() => removeFromCartLabtest(test.test_id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Medicines</h3>
                    {medicines.length === 0 ? (
                        <p>No medicines in the cart.</p>
                    ) : (
                        medicines.map(medicine => (
                            <div key={medicine.id} className="flex justify-between items-center border-b py-2">
                                <span>{medicine.medicine_name} - ${medicine.price.toFixed(2)}</span>
                                <button
                                    onClick={() => removeFromCartMedicine(medicine.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-lg font-bold mb-4">Total: ${totalAmount.toFixed(2)}</div>

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

                {showEmptyCartPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
                            <h3 className="text-xl font-bold mb-2">Your Cart is Empty</h3>
                            <p>Please add items to your cart before proceeding to checkout.</p>
                            <button
                                onClick={closeEmptyCartPopup}
                                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainComponent;
