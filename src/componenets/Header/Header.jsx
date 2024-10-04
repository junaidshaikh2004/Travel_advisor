import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    
  return (
    <div className='bg-blue-500 p-4'>
        <div className='flex justify-between items-center' >
            <h1 className='text-white text-4xl font-bold'>Travel Advisor</h1>
            <div className='flex gap-4 justify-between items-center'>
                <h1 className='text-white text-xl '>Explore new places</h1>
                <div className='flex gap-3 items-center p-2 bg-white bg-opacity-75 rounded-lg'>
                <FaSearch className="text-gray-600" />
                <input
                type="text"
                placeholder='search'
                className='bg-transparent focus:outline-none flex-1 text-black'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header