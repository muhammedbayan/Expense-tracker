import React from 'react'
import iconImg from "../assets/expenso.jpg"

export const Navbar = () => {
  return (
    <div className='flex items-center cursor-pointer gap-2'>
        <h1 className='mt-10 text-3xl font-bold mb-10'>Expenso</h1>
        <img className='w-12 rounded-xl' src={iconImg} alt="" />
    </div>
  )
}

