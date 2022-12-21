import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' space-y-4 capitalize pb-4 h-screen'>
      <NavLink to={'/'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded' >dashboard</NavLink>
      <NavLink to={'categories'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded'>categories</NavLink>
      <NavLink to={'products'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded'>products</NavLink>
      <NavLink to={'users'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded' >orders</NavLink>
      <NavLink to={'admins'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded'>users</NavLink>
      <NavLink to={'orders'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2 [&.active]:bg-blue-500 [&.active]:text-white [&.active]:rounded'>admin</NavLink>
      <NavLink to={'login'} className='block hover:bg-blue-500 hover:text-white hover:rounded py-2 pl-2'>logout</NavLink>     
    </div>
  )
}

export default Sidebar