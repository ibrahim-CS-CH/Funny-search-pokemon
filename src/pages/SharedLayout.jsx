import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
const SharedLayout = () => {
  return (
    <div className='text-2xl'>
        <div className='h-12 bg-blue-200 text-center'>
            <Nav />
        </div>
        <div className='flex'>
            <div className='bg-blue-200 w-64'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default SharedLayout