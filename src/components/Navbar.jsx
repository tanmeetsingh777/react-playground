import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='bg-emerald-950 rounded-2xl flex py-5 px-10 items-center justify-between'>
          <h2 className='text-2xl'>Tanmeet's</h2>
        <div className='flex gap-8 items-center'>
          <h4 className='text-xl'>our services</h4>
          <h4 className='text-xl'>about</h4>
          <h4 className='text-xl'>contact</h4>
          <h4 className='text-xl'>your account</h4>
        </div>
      </nav>
      </>
  )
}

export default Header
