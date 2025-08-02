import React, { useContext, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => setIsVisible(false), 500);
        } else {
            setIsVisible(true);
            setTimeout(() => setIsOpen(true), 10);
        }
    };

    const links = [
        { to: "/", label: "Home" },
        { to: '/about', label: "About" },
        { to: '/contact', label: "Contact" }
    ]
    return (
        <>
            <header className='fixed z-10 top-0 left-0 py-3 sm:p-3 w-full h-[50px] sm:h-[60px] flex sm:flex-row justify-between items-center border-b border-b-[#e0e0e0]'>
                <div className='flex justify-between items-center p-3 sm:block w-full sm:w-auto'>
                    <div className='font-bold'>MultiThemeApp </div>
                    <button type="button" className={`sm:hidden text-lg md:text-2xl border rounded-sm p-1`} onClick={toggleMenu}>
                        {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
                {/* desktop menu */}
                <div className='hidden sm:flex items-center justify-between'>
                    <nav className={`${theme === "theme2" ? "hidden" : "block"}`}>
                        {links.map(((link) => (
                            <NavLink key={link.to} to={link.to}
                                className={({ isActive }) => `${isActive ? "nav-link-active" : ""} text-lg px-4 text-[#2c3e50]  hover:font-semibold transition duration-800`}
                            >{link.label}</NavLink>
                        )))}
                    </nav>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)} className='border rounded-sm p-1'>
                        <option value="theme1">Theme 1</option>
                        <option value="theme2">Theme 2</option>
                        <option value="theme3">Theme 3</option>
                    </select>
                </div>


                {/* mobile menu */}
                {isVisible && (
                    <div className={`${isOpen ? "py-7 max-h-96 opacity-100 " : " py-0 max-h-0 opacity-0 "} mobile-nav absolute top-full left-0 overflow-hidden  w-full text-center justify-between bg-[#c1bebe] transition-all duration-800 ease-in-out`}>
                        <nav className={`${theme === "theme2" ? "hidden" : "flex"} flex-col pb-2 sm:pb:0`}>
                            {links.map((link) => (
                                <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `${isActive ? "text-[#007bff] font-semibold" : ""} text-lg px-4 hover:text-[#007bff] `}>
                                    {link.label}</NavLink>
                            ))}
                        </nav>
                        <select value={theme} onChange={(e) => (setTheme(e.target.value), setIsOpen(false))} className='border rounded-sm p-1'>
                            <option value="theme1">Theme 1</option>
                            <option value="theme2">Theme 2</option>
                            <option value="theme3">Theme 3</option>
                        </select>
                    </div>
                )}

            </header>
        </>
    )
}

export default Header
