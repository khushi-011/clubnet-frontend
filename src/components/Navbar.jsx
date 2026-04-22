import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MoveRight, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300'>

      {/* Container */}
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8'>

        {/* Logo */}
        <img
          className='w-32 sm:w-40 md:w-52 lg:w-64 h-auto object-cover'
          src="https://clubnet.app/EFFN_Test/static/media/elite.f99f6e24da1ae98786a1.jpeg"
          alt=""
        />

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10 border-1 border-gray-100 rounded-lg px-4 py-2'>

          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/">Home</Link>
          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/About">About</Link>
          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/Benefits">Benefits</Link>
          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/MemberDirectory">Member Directory</Link>
          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/Events">Events</Link>
          <Link className='hover:bg-amber-50 px-2 py-1 rounded-lg hover:text-yellow-400 text-sm lg:text-base' to="/Contact">Contact</Link>

          <Link
            to="/MemberShipApplication"
            className="group flex items-center bg-amber-400 font-semibold px-3 py-2 rounded-lg hover:bg-amber-400 transition-all duration-300 "
          >
            <MoveRight
              className="w-4 h-4 mr-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
            <span className='text-sm lg:text-base -translate-x-2 transition-all duration-300  group-hover:opacity-100 group-hover:translate-x-1 '>Become a Member</span>
          </Link>

        </div>

        {/* Mobile Icon */}
        <div className='md:hidden'>
          {open ? (
            <X className='text-yellow-600' size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu className='text-yellow-600' size={26} onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden px-4 pb-4'>
          <div className='bg-white border border-gray-100 p-4 rounded-2xl flex flex-col gap-4'>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/">Home</Link>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/About">About</Link>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/Benefits">Benefits</Link>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/MemberDirectory">Member Directory</Link>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/Events">Events</Link>
            <Link className='border border-gray-100 p-2 rounded-2xl' onClick={() => setOpen(false)} to="/Contact">Contact</Link>

            <Link
              onClick={() => setOpen(false)}
              to="/MemberShipApplication"
              className="bg-amber-300 px-3 py-2 rounded-lg text-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar