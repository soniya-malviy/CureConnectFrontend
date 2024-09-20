import React, { useState, useEffect } from 'react';
import { useUser } from './user'; // Import your user context

const UserProfile = () => {
    const { user, logout } = useUser(); // Get user context data
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        city: '',
        state: '',
        gender: '',
    });

    const [isProfileCreated, setIsProfileCreated] = useState(false);

    useEffect(() => {
        if (user) {
            // Populate form data with user info if available
            setFormData(user);
            setIsProfileCreated(true);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you could save form data to your user context or API
        // For this example, we simply set the profile created state to true
        setIsProfileCreated(true);
    };

    const handleDeleteProfile = () => {
        // Clear user data and reset form
        logout(); // Call logout to clear user data
        setFormData({
            name: '',
            age: '',
            address: '',
            city: '',
            state: '',
            gender: '',
        });
        setIsProfileCreated(false); // Reset profile state
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            {isProfileCreated ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Profile!</h2>
                    <div className="text-left space-y-2">
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Age:</strong> {formData.age}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
                        <p><strong>City:</strong> {formData.city}</p>
                        <p><strong>State:</strong> {formData.state}</p>
                        <p><strong>Gender:</strong> {formData.gender}</p>
                    </div>
                    <button
                        onClick={handleDeleteProfile} // Call delete profile function when clicked
                        className="mt-4 bg-red-600 text-white font-semibold py-2 rounded-md shadow hover:bg-red-700 transition duration-200"
                    >
                        Delete Profile
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">User Registration</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State:</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender:</label>
                            <div className="flex items-center space-x-4 mt-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleChange}
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleChange}
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        checked={formData.gender === 'other'}
                                        onChange={handleChange}
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
                        >
                            Register
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
