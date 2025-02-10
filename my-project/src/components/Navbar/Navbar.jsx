import React from 'react'
import Logo from '../../assets/images/mainlogo.png';
import { MdMenu, MdShoppingCart } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from 'framer-motion';





const NavbarMenu = [
    {
        id: 1,
    title: "Home",
    link: "#",
    },
    {
        id: 2,
    title: "Products",
    link: "#",
    },
    {
        id: 3,
    title: "About",
    link: "#",
    },
    {
        id: 4,
    title: "Shop",
    link: "#",
    },
    {
        id: 5,
    title: "Contacts",
    link: "#",
    },
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
    <nav>
  <motion.div 
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  transition={{duration: 0.5, delay:0.5}}
  className='container flex justify-between items-center py-4 md:pt-4'
  >
    {/* {Logo section} */}
    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
        <p className='text-primary'>Sweet</p>
         <p className='text-secondary'>ByB</p>
         <img
        src={Logo}  // path to your logo image
        alt="Logo"
        className="w-12 h-12"  // Adjust size here
/>
    </div>
    {/* {Menu section} */}
    <div className='hidden md:block'>
        <ul className='flex item-center gap-6 text-gray-600'>
            {NavbarMenu.map((menu) => (
                <li key={menu.id} className='text-ul'>
                    <a href={menu.link}
                    className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                    >
                    {menu.title}
                    </a>
                </li>
            ))}
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                < MdShoppingCart />
            </button>
        </ul>
    </div>

    {/* {Mobile Toggle Menu section} */}
    <div className='md:hidden' onClick={() => 
        setOpen(!open)}>
        <MdMenu className='text-4xl' />
    </div>
    </motion.div>
    </nav>

     {/* Mobile Menu Section */}
     <ResponsiveMenu open={open} />
     </>
  );
};

export default Navbar;