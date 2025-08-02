import React, { useState } from 'react'

const Card = ({ title, image, price,loading }) => {
    return (
        <>
            <div className="p-4 bg-[rgba(255,255,255,0.2)] text-[#001858] rounded-xl shadow text-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
                <img src={image} alt={title} className={`w-full max-h-36 md:max-h-48 object-contain mx-auto mb-2`} />
                <h2 className="font-semibold text-sm sm:text-lg mb-1 text-wrap">
                    {title}
                </h2>
                <p className="text-sm">$ {price}</p>
            </div>
        </>
    )
}

export default Card
