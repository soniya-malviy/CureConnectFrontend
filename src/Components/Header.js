import { NavLink, Outlet } from 'react-router-dom';
import LOGO from '../assets/LOGO.jpeg';

const Header = () => {
    return (
        <>
            <header
                className="bg-white text-black py-4 shadow-lg"
               
            >
                <div className="container mx-auto flex items-center justify-between px-4">
                    <NavLink to="/about" className="flex items-center">
                        <img
                            src={LOGO}
                            alt="website-logo"
                            className="h-15 w-[250px] mr-0"
                        />
                    </NavLink>
                    <nav className="space-x-4">
                        <NavLink to="/about" className="text-black hover:text-theme-color">
                            About Us
                        </NavLink>
                        <NavLink to="/appointment" className="text-black hover:text-theme-color">
                            Appointment Booking
                        </NavLink>
                        <NavLink to="/labtest" className="text-black hover:text-theme-color">
                            Lab Test
                        </NavLink>
                        <NavLink to="/medicines" className="text-black hover:text-theme-color">
                            Medicines
                        </NavLink>
                        <NavLink to="/login" className="text-black hover:text-theme-color">
                            Login
                        </NavLink>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
