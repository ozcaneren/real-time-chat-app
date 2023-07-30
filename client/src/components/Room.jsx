import React from 'react'

const Room = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-1/3 h-[320px] bg-indigo-600 flex flex-col rounded-lg space-y-4 p-4'>
        <h1 className='text-center my-4 font-bold text-2xl'>Welcome to chat</h1>
        <input className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Username' />
        <input className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Room' />
        <div className='bg-indigo-800 text-white cursor-pointer tracking-wider h-12 pt-2 text-xl text-center rounded-xl hover:opacity-70'>
          <button className=''>Chat</button>
        </div>
      </div>
    </div>
  )
}

export default Room