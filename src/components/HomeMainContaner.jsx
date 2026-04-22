import React from 'react'
import { MoveRight } from 'lucide-react'
import HomeCardContaner from './HomeCardContaner'

const HomeMainContaner = () => {
  return (
    <>
      <div className=' flex flex-col  justify-center items-center m-8 '>
        <h2 className=' uppercase bg-gray-200 rounded-full py-2 px-6 w-fit '>Member success stories</h2>

        <p className='text-3xl font-extrabold mt-5'> What EFFN Members Say</p>
        <p className='text-lg text-gray-600 mt-4 leading-loose text-center'>Discover how logistics professionals are growing through trusted partnerships and worldwide <br /> network connections.</p>

      </div>
      {/* Part-2 cardcontaner */}
      <div>
        <HomeCardContaner />
      </div>

      {/* part3 last */}
      <div className='bg-yellow-400 p-10 rounded-lg flex  justify-between '>
        <div>
          <h3 className='  border-2 border-gray-500 font-serif  rounded-full py-2 px-4 text-center w-fit bg-transparent '>Upcoming Event</h3>
          <h1 className='font-bold text-3xl py-4'>Annual Global Freight Forwarders Conference</h1>
          <p className='text-gray-600'>Connect with senior logistics professionals worldwide for strategic networking, collaboration, and business growth opportunities.

          </p>
        </div>
        <div className='flex items-center gap-4 '>
          <button className='bg-white rounded-2xl px-5 py-3 font-bold transition-transform duration-300 hover:-translate-y-1'>Join Now

          </button>
          {/* <MoveRight className='size-5 w-5 h-5 ml-0 bg-white text-black rounded-lg  mr-5' /> */}

          <button className='bg-transparent border border-gray-300 text-white rounded-2xl px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:border-white '>
            Read Details</button>
        </div>
      </div >
    </>
  )
}

export default HomeMainContaner