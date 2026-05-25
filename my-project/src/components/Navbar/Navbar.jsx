import React from 'react';
import Logo from '../../assets/images/logo1.png';
import ResponsiveMenu from './ResponsiveMenu';
import { useContext } from 'react';
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { StoreContext } from '../../context/storeContext';
import { motion } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import apiClient from '../../api';
import { useAuth } from '../../context/AuthContext';
import { showSuccess, showError } from '../../utility/alerts';

const MotionDiv = motion.create("div");


const NavbarMenu = [
     { id: 1, title: "Home", link: "/"},
    { id: 2, title: "Shop", link: "/shop" },
    { id: 3, title: "About", link: "/about" },
    { id: 4, title: "Contacts", link: "/contact" }
];


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const { getTotalCartCount } = useContext(StoreContext);
    const cartCount = getTotalCartCount();
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();


    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#fffaf6]/85 backdrop-blur-md border-b border-[#efd9cb]">
                < MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className='container flex justify-between items-center py-3 md:py-3'
                >
                    {/* Logo section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase shrink-0'>
                        <Link to="/" className="flex items-center gap-3">
                            <img src={Logo} alt="Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
                            <div className="hidden sm:block leading-tight">
                                <p className="font-playfair text-[#3B2A28] text-xl md:text-2xl normal-case">Sweets by B</p>
                                <p className="font-manrope text-[10px] md:text-xs tracking-[0.18em] uppercase text-[#8f6b60]">Dessert Boutique</p>
                            </div>
                        </Link>
                    </div>

                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-2 text-gray-600 bg-white/75 border border-[#ead4c8] rounded-full px-3 py-2 shadow-[0_14px_30px_-20px_rgba(59,42,40,0.55)]'>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className='text-ul'>
                                    <NavLink
                                        to={menu.link}
                                        className={({ isActive }) =>
                                            `inline-block py-2 px-4 rounded-full font-manrope font-semibold transition-all duration-200 ${
                                                isActive
                                                    ? "bg-[#D97757] text-white shadow-[0_10px_20px_-12px_rgba(217,119,87,0.9)]"
                                                    : "text-[#6a5550] hover:bg-[#fff1e8] hover:text-[#3B2A28]"
                                            }`
                                        }
                                    >
                                        {menu.title}
                                    </NavLink>
                                </li>
                            ))}
                            {/* Cart Button */}
                            <Link
                                to="/cart"
                                className='relative text-2xl text-[#5b4945] hover:bg-[#fff1e8] hover:text-[#D97757] rounded-full p-2.5 duration-200 border border-transparent hover:border-[#ecd6cb]'
                                aria-label="Open cart"
                            >
                                <MdShoppingCart />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#D97757] text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            {/* Sign Out Button (shows when authenticated) */}
                            {isAuthenticated && (
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="ml-2 inline-block py-2 px-4 bg-[#3B2A28] text-white rounded-full font-manrope font-semibold shadow-md hover:shadow-lg transition-transform duration-150"
                                    onClick={async () => {
                                        try {
                                            await apiClient.get("/api/user/logout");
                                            logout();
                                            showSuccess('Signed out');
                                            navigate('/');
                                        } catch (err) {
                                            showError(err.response?.data?.message || err.message);
                                        }
                                    }}
                                >
                                    Sign Out
                                </motion.button>
                            )}
                        </ul>
                    </div>

                    {/* Mobile Toggle Menu */}
                    <button
                        type="button"
                        className='md:hidden p-2.5 rounded-full bg-white text-[#5f4a45] border border-[#ead4c8] shadow-sm'
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        <MdMenu className='text-3xl' />
                    </button>
                </ MotionDiv>
            </nav>

            {/* Mobile Menu Section */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </>
    );
};

export default Navbar;
