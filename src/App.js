import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import User from './Components/user';
import AppointmentPage from './Components/Appointment';
import LoginPage from './Components/Login';
import AboutPage from './Components/About';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer';
import LabTest from "./Components/LabTest";
import Medicines from "./Components/Medicines";
import DoctorProfilePage from "./Components/DoctorProfile";
import { ToastContainer } from 'react-toastify';
import './index.css';
import './App.css';

// Layout component that includes Header and Footer
const Layout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <AboutPage /> },
                { path: 'appointment', element: <AppointmentPage /> },
                { path: 'login', element: <LoginPage /> },
                { path: 'about', element: <AboutPage /> },
                { path: 'contact', element: <ContactPage /> },
                { path: 'labTest', element: <LabTest /> },
                { path: 'medicines', element: <Medicines /> },
                { path: 'doctor/:id', element: <DoctorProfilePage /> },
                {path:'profile', element:<User/>}
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
            <ToastContainer />
        </>
    );
}

export default App;
