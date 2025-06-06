import React from 'react';
import Logo from '../../assets/images/logo1.png';
import { MdMenu, MdShoppingCart } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from 'react-router-dom'; 

const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },  
    { id: 3, title: "About", link: "/about" },              
    { id: 4, title: "Contacts", link: "/contact" }
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <nav>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='container flex justify-between items-center py-4 md:pt-4'
                >
                    {/* Logo section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="w-32 h-32" />
                        </Link>
                    </div>

                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className='text-ul'>
                                    {/* If menu has a submenu, render a dropdown */}
                                    {menu.submenu ? (
                                        <Menu>
                                            <MenuButton className="inline-flex items-center gap-2 py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">
                                                {menu.title} 
                                            </MenuButton>
                                            <MenuList className="bg-white shadow-md rounded-md">
                                                {menu.submenu.map((sub) => (
                                                    <MenuItem 
                                                        key={sub.id} 
                                                        as={Link}  
                                                        to={sub.link} 
                                                        className="hover:text-[#5EC49D] transition-all duration-150 ease"
                                                    >
                                                        {sub.title}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    ) : (
                                        <Link 
                                            to={menu.link} 
                                            className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                                        >
                                            {menu.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            {/* Cart Button */}
                            <Link 
                                to="/cart" 
                                className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'
                            >
                                <MdShoppingCart />
                            </Link>
                        </ul>
                    </div>

                    {/* Mobile Toggle Menu */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </motion.div>
            </nav>

            {/* Mobile Menu Section */}
            <ResponsiveMenu open={open} setOpen={setOpen} />

        </>
    );
};

export default Navbar;
