import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className={`${theme === "theme2" ? " left-1/5 w-4/5" : " "} relative min-h-screen p-6  place-content-center`}>
        <div className='flex flex-col items-center justify-items-center'>
          <h1 className='text-base sm:text-2xl md:text-3xl lg:text-5xl'>About Us</h1>
          <p className='py-2 text-xs sm:text-lg lg:text-xl w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique quas dolore voluptatum nesciunt animi iste ullam corporis. Odio perferendis voluptate nihil dolore est eaque eum voluptatem saepe obcaecati tempore?</p>
          <button type='button' className='border rounded-sm py-1 px-2 sm:px-3 text-xs sm:text-base cursor-pointer'>Explore Now</button>
        </div>
      </div>
    </>
  )
}

export default About
