import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'

const Categories = () => {


  // const [categories, setCategories] = useState(null);

  // useEffect(()=>{
  //   axios.get('https://dummyjson.com/products/categories').then((res)=>setCategories(res.data))
  // },[]);
  // if (!categories) return null;
  return (
    <div className=' mx-12 my-12 border border-red-50'>
      
      <NavLink className={"bg-blue-400 hover:bg-blue-600 rounded px-2 py-1 hover:text-white"}>
        Add New Category
      </NavLink>
      <table className='m-6'>
        <thead className='bg-blue-200'>
            <tr className=''>
              <th className='border border-blue-300 '>No</th>
              <th className='border border-blue-300'>Name</th>
              <th className='border border-blue-300 '>Action</th>
            </tr>
        </thead>
        <tbody >
          <tr className='border border-blue-300 text-start'>
            <td className='border border-blue-300 px-1'>1</td>
            <td className='border border-blue-300 px-1'>asdasd</td>
            <td className='border border-blue-300'><button className='hover:bg-blue-500 rounded px-1'>Show</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Categories