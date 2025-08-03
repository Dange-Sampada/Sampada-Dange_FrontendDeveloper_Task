import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <>
      <div className='fixed top-10 md:top-[60px] w-1/5 h-full flex flex-col items-center bg-[#1e293b] text-[#ffffff] pt-14 transition-all duration-300 ease-in'>
        {links.map((link) => (
          <NavLink className={({ isActive }) => `${isActive ? "text-[#facc15] font-semibold" : "text-[#ffffff]"} text-xs sm:text-lg px-4 py-1 md:py-3  hover:text-[#facc15]`} key={link.to} to={link.to}>{link.label}</NavLink>
        ))}
      </div>
    </>
  )
}

export default Sidebar
