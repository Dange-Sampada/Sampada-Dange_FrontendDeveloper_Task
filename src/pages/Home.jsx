import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import Card from '../components/Card'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState(false)

  const apiRes = async () => {
    setLoading(true)
    const result = await fetch('https://dummyjson.com/products?limit=20')
    const data = await result.json()
    setProducts(data.products)
    setLoading(false)
  }

  useEffect(() => {
    apiRes()
  }, []);

  return (
    <>
      {theme === "theme3" ? (
        <>
          <div className={`top-[60px] min-h-screen relative bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] p-6  place-content-center`}>
            <h1 className='text-center text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl pb-10'>Our Colorful Products</h1>
            {loading ? (
              <div className="flex justify-center items-center flex-1">
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-dashed rounded-full animate-spin border-white border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[rgba(255, 255, 255, 0.2)] rounded-2xl">
                {products.map((prod) => (
                  <Card key={prod.id} title={prod.title} image={prod.thumbnail} price={prod.price} loading={loading} />)
                )}
              </div>
            )}
          </div>


        </>
      ) : (
        <>
          <div className={`${theme === "theme2" ? " left-[20%] w-4/5" : " "} relative min-h-screen p-6  place-content-center`}>
            <div className='flex flex-col items-center text-center'>
              <h1 className='text-base sm:text-2xl md:text-3xl lg:text-5xl'>Welcome to Our Store</h1>
              <p className='py-2 text-xs sm:text-lg lg:text-xl'>Explore our wide range of products.</p>
              <button type='button' onClick={() => setList(!list)} className='border rounded-sm py-1 px-2 sm:px-3 text-xs sm:text-base cursor-pointer'>Explore Now</button>
            </div>
            
            <ul
              className={`w-fit mx-auto border rounded-sm px-5 py-3 md:px-10 md:py-10 mt-6 text-xs sm:text-lg origin-top transform transition-all duration-500 ease-in-out
              ${list ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0 overflow-hidden"}`}
            >
              <li>Quality Products</li>
              <li>Best Prices</li>
              <li>Fast Delivery</li>
            </ul>
          </div>

        </>
      )}


    </>
  )
}

export default Home
