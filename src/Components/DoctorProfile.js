import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../DoctorsDetails.json';

const DoctorProfilePage = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [newReview, setNewReview] = useState('');
    const [reviewerName, setReviewerName] = useState('');

    useEffect(() => {
        const doctorData = doctors.find(doc => doc.id === parseInt(id));
        if (doctorData) {
            setDoctor({
                ...doctorData,
                reviews: doctorData.reviews.slice(0, 1) // Take only the first review
            });
        }
    }, [id]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleConfirmBooking = () => {
        if (!selectedDate || !selectedTime) {
            setErrorMessage('Both date and time fields are required.');
            return;
        }
        setErrorMessage('');
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        setSelectedDate('');
        setSelectedTime('');
    };

    const handleAddReview = () => {
        if (!newReview || !reviewerName) {
            setErrorMessage('Both review and reviewer name are required.');
            return;
        }
        setErrorMessage('');
        const updatedDoctor = {
            ...doctor,
            reviews: [...doctor.reviews, { review: newReview, reviewer: reviewerName, date: new Date().toLocaleDateString() }]
        };
        setDoctor(updatedDoctor);
        setNewReview('');
        setReviewerName('');
    };

    const handleDeleteReview = (index) => {
        const updatedDoctor = {
            ...doctor,
            reviews: doctor.reviews.filter((_, i) => i !== index)
        };
        setDoctor(updatedDoctor);
    };

    if (!doctor) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Doctor Profile Section */}
            <div className="w-full lg:w-2/3 p-4 lg:p-8 bg-gray-100">
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl lg:text-3xl font-bold text-theme-dark-blue mb-4 text-center">Doctor Profile</h2>
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        {/* Doctor Image and Basic Info */}
                        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                            <p className="text-gray-600 mb-1"><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p className="text-gray-600 mb-1"><strong>Consultation Fees:</strong> ₹{doctor.consulting_fees}</p>
                            <p className="text-gray-600 mb-1"><strong>Address:</strong> {doctor.address}</p>
                            <p className="text-yellow-500 mb-4"><strong>Rating:</strong> {doctor.rating}%</p>
                            <p className="text-gray-800 mb-2"><strong>Description:</strong> {doctor.description}</p>
                            <p className="text-gray-800 mb-2"><strong>Education:</strong> {doctor.education}</p>
                            <p className="text-gray-800 mb-2"><strong>Work Experience:</strong> {doctor.work_experience}</p>
                            <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">Reviews</h4>
                            <div className="space-y-4">
                                {doctor.reviews.length > 0 ? (
                                    doctor.reviews.map((review, index) => (
                                        <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                            <p className="text-gray-800 mb-2"><strong>{review.reviewer}</strong> - <span className="text-gray-500">{review.date}</span></p>
                                            <p className="text-gray-700 mb-2">"{review.review}"</p>
                                            <button
                                                onClick={() => handleDeleteReview(index)}
                                                className="text-red-500 mt-2 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add Review Form */}
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md mt-6">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Add a Review</h4>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your Name</label>
                        <input
                            type="text"
                            value={reviewerName}
                            onChange={(e) => setReviewerName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your Review</label>
                        <textarea
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        onClick={handleAddReview}
                        className="w-full bg-theme-dark-blue text-white p-2 rounded"
                    >
                        Add Review
                    </button>
                </div>
            </div>

            {/* Slot Booking Section */}
            <div className="w-full lg:w-1/3 p-4 lg:p-8 bg-gray-50">
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Book a Slot</h3>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Select Date</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Select Time</label>
                        <input
                            type="time"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        onClick={handleConfirmBooking}
                        className="w-full bg-theme-dark-blue text-white p-2 rounded"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>

            {/* Confirmation Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Booking Confirmed</h3>
                        <p className="text-gray-700 mb-4">Your booking for {doctor.name} on {selectedDate} at {selectedTime} has been confirmed.</p>
                        <button
                            onClick={handleClosePopup}
                            className="bg-theme-dark-blue text-white p-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorProfilePage;

