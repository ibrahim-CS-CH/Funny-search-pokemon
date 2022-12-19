import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-around items-center text-xl uppercase py-3 border-b border-black'>
        <div className=' space-x-10 '>
            <a className='hover:bg-orange-200 hover:rounded px-1' href="">sale</a>
            <a className='hover:bg-orange-200 hover:rounded px-1' href="">shop</a>
            <a className='hover:bg-orange-200 hover:rounded px-1' href="">about</a>
        </div>
        <div className=' text-3xl font-semibold '>
            farida
        </div>
        <div className='space-x-10 '>
            <a className='hover:bg-orange-200 hover:rounded px-1' href="">eng</a>
            <a className='hover:bg-orange-200 hover:rounded px-1' href="">cart(1)</a>
        </div>


    </div>
  )
}

export default Nav