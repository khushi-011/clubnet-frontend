import React from 'react'

const HomeCardContaner = () => {
  return (
    <div className='flex justify-center '>

      <div className=' bg-white  border-2 m-10 p-5 border-gray-100 rounded-lg w-[50%] h-[350px]'>
        <div className='flex items-center justify-center '>
          <img className='w-16 h-8' src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-five-star-rating-icon-png-image_4974126.png" alt="Five star rating"
          />
          <p>(5) Rating</p></div>
        <div className='flex flex-col items-center justify-center '>
          <h1>"EFFN opened doors we couldn’t have accessed alone"</h1>
          <p>Within six months of joining EFFN, we expanded into three new countries through trusted network partnerships. The support and connections enabled growth without the usual risks and heavy investment. As a result, our revenue has increased significantly.</p>

        </div>

        <hr className='text-gray-400 ' />

        <div className='flex gap-4 pt-10  items-center justify-center  '>
          <img className='rounded-full w-14' src="https://i.pravatar.cc/150?img=12" alt="" />
          <p className=' text-lg font-bold flex flex-col'>
            Regional Freight Forwarder
            <span className='text-xs text-gray-500 '>Southeast Asia</span>
          </p>

        </div>
      </div>
    </div >
  )
}

export default HomeCardContaner