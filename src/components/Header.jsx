import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white font-medium flex items-center justify-between rounded-xl'>
      <h2 className='text-2xl hover:underline cursor-pointer'>Tanmeet</h2>
      <div className='flex gap-10'>
        <Link className='text-xl hover:underline' to="/">Home</Link>
        <Link className='text-xl hover:underline' to="/product">Product</Link>
        <Link className='text-xl hover:underline' to="/about">About</Link>
        <Link className='text-xl hover:underline' to="/contact">Contact</Link>
      </div>
    </div>
  )
}
export default Header
