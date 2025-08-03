import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useContext(ThemeContext)
  const [showData, setShowData] = useState(false)
  const [inputVal, setInputVal] = useState({
    username: '',
    email: ''
  })

  useEffect(()=>{
    const contactData = localStorage.getItem("contactForm")
    if(contactData){
      setInputVal(JSON.parse(contactData))
      setShowData(true)
    }
  },[])

  const handleChange = (e)=>{
    const newData = { ...inputVal, [e.target.name]: e.target.value }
    setInputVal(newData)
    localStorage.setItem('contactForm',JSON.stringify(newData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowData(true)
  }

  const handleReset =()=>{
    setInputVal({username:'',email:''})
    setShowData(false)
    localStorage.removeItem('contactForm')
  }

  return (
    <>
      <div className={`${theme === "theme2" ? "left-1/5 w-4/5 " : " "} relative  p-6 min-h-screen place-content-center`}>
        <div className='flex flex-col items-center justify-items-center'>
          <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Contact Us</h1>
          {showData ? (
            <div className='w-auto border rounded-sm px-5 py-5 md:px-10 lg:px-20 md:py-10 mt-6'>
              <h6 className='text-sm sm:text-lg'>Name : {inputVal.username}</h6>
              <h6 className='text-sm sm:text-lg'>Email : {inputVal.email}</h6>
              <button type="button" onClick={handleReset} className='mx-auto flex border rounded-sm py-1 px-3 text-sm sm:text-lg hover:bg-[#2c3e50] hover:text-[#f8f9fa] cursor-pointer mt-3'>Clear Info</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off" className='w-auto border rounded-sm px-5 py-5 md:px-10 lg:px-20 md:py-10 mt-6'>
              <label htmlFor="username" className='text-sm lg:text-lg'>Name : </label>
              <input type="text" name="username" value={inputVal.username} onChange={handleChange} className='border rounded-sm indent-2' required/>
              <br /><br />
              <label htmlFor="email" className='text-sm lg:text-lg'>Email : </label>
              <input type="email" name="email" value={inputVal.email} onChange={handleChange} className='border rounded-sm indent-2' required/>
              <br /><br />
              <button type='submit' className='mx-auto flex border rounded-sm py-1 px-3 hover:bg-[#2c3e50] hover:text-[#f8f9fa] cursor-pointer'>Submit</button>
            </form>
          )}

        </div>
      </div>
    </>
  )
}

export default Contact
