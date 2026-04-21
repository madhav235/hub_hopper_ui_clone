import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-20 bg-[#111827] flex text-white justify-between px-35 items-center gap-20 text-sm'>
        <div className='font-family'>hubhopper</div>
        <div className='flex gap-10 hover:cursor-pointer'>
            <p>Features</p>
            <p>Enterprise</p>
            <p>Services</p>
            <p>Api</p>
            <p>Resources</p>
            <p>Pricing</p>
            <p>Listen</p>
        </div>
        <div className='flex items-center gap-5'>
            <div className='hover:cursor-pointer'>Log in</div>
            <button className='px-8 py-2 rounded-md bg-[#4f47e5] hover:cursor-pointer'>Start my podcast</button>
        </div>
    </div>
  )
}

export default Navbar