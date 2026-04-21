import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-20 bg-[#111827] flex text-white justify-between px-35 items-center gap-20 text-sm'>
        <div className='font-family'>hubhopper</div>
        <div className='flex gap-10'>
            <p>Features</p>
            <p>Enterprise</p>
            <p>Services</p>
            <p>Api</p>
            <p>Resources</p>
            <p>Pricing</p>
            <p>Listen</p>
        </div>
        <div className='flex items-center gap-5'>
            <div>Log in</div>
            <button className='px-8 py-1.5 rounded-xl bg-[#4f47e5]'>Start my podcast</button>
        </div>
    </div>
  )
}

export default Navbar