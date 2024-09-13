import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Mock storage
const mockStorage = {
    users: [],
};

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        // Mock login logic
        const mockLogin = (email, password) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const user = mockStorage.users.find(
                        (user) => user.email === email && user.password === password
                    );
                    if (user) {
                        resolve(true);
                    } else {
                        reject(new Error('Invalid email or password'));
                    }
                }, 1000);
            });
        };

        try {
            await mockLogin(email, password);
            navigate('/about');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        // Mock signup logic
        const mockSignup = (email, password) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const userExists = mockStorage.users.some(
                        (user) => user.email === email
                    );
                    if (userExists) {
                        reject(new Error('User already registered'));
                    } else {
                        mockStorage.users.push({ email, password });
                        resolve(true);
                    }
                }, 1000);
            });
        };

        try {
            await mockSignup(email, password);
            toast.success('Account created successfully! Please log in.');
            setIsSignup(false); // Switch to login mode
            setEmail(''); // Clear email field
            setPassword(''); // Clear password field
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex md:w-1/2 group">
                <img
                    src="https://img.freepik.com/premium-vector/online-doctor-concept-doctor-appointment-modern-healthcare-technologies-vector-illustration-flat_186332-1091.jpg"
                    alt="Login"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ transform: 'scale(0.8)' }} // Scale down the image initially
                />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-600 mb-6 text-center">
                        {isSignup ? 'Sign Up' : 'Login'}
                    </h2>
                    <form onSubmit={isSignup ? handleSignup : handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-theme-dark-blue text-white font-semibold rounded-md shadow-sm hover:bg-theme-light-colour focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {isSignup ? 'Sign Up' : 'Login'}
                        </button>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {isSignup ? (
                                <>
                                    Already have an account?{' '}
                                    <button
                                        onClick={() => setIsSignup(false)}
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        Login
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => setIsSignup(true)}
                                        className="font-medium text-theme-dark-blue hover:text-blue-500"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
