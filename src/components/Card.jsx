import React, { useState } from 'react'

const Card = ({ title, image, price, loading }) => {
    const [imgLoading, setImgLoading] = useState(true)
    return (
        <>
            <div className="p-4 bg-[rgba(255,255,255,0.2)] text-[#001858] rounded-xl shadow text-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
                {/* <img src={image} alt={title} className={`w-full max-h-36 md:max-h-48 object-contain mx-auto mb-2`} /> */}
                <div className="relative w-full max-h-36 md:max-h-48 flex justify-center items-center mx-auto mb-2">
                    {imgLoading && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#001858] border-t-transparent"></div>
                        </div>
                    )}
                    <img
                        src={image}
                        alt={title}
                        className={`w-full max-h-36 md:max-h-48 object-contain mx-auto transition-opacity duration-500 ${imgLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                        onLoad={() => setImgLoading(false)}
                    />
                </div>

                <h2 className="font-semibold text-sm sm:text-lg my-1 text-wrap">
                    {title}
                </h2>
                <p className="text-sm">$ {price}</p>
            </div>
        </>
    )
}

export default Card
