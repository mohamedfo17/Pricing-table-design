'use client'
import React from 'react'
import { useState } from 'react'
interface CoreProps{
    yearly:boolean;
}
const core:React.FC<CoreProps> = ({yearly}) => {
  const [request,setRequest]=useState("2500");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRequest(e.target.value);
  };
  return (
    <div className='flex flex-col md:flex-row gap-20 '>
      <div className='bg-white rounded-xl h-100 sm:h-102 md:h-82 lg:h-122 md:w-80 sm:w-80 lg:w-100'>
        <h3 className='text-center my-4 text-3xl'>Free</h3>
        <p className='font-bold text-5xl text-center mb-8'>$0</p>
        <ul className='text-left ml-14 md:ml-15 sm:ml-5 list-disc mt-1'>
            <li className='my-2'>500 request</li>
            <li className='my-2'>Unlimited projects</li>
            <li className='my-2'>extended free trial <span className='bg-white text-gray-500 border-1 rounded-xl ml-2 text-0.5xl p-1 cursor-pointer hover:bg-blue-600 hover:text-white'>for early users</span></li>

        </ul>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-blue-600 hover:text-white mt-30 sm:mt-20 md:mt-35 bg-[#f8f9fd] text-gray-500">Create account</button>
      </div>
      <div className='bg-white rounded-xl h-100 sm:h-102 md:h-82 lg:h-122 md:w-80 sm:w-80 lg:w-100'>
      <h3 className='text-center my-4 text-3xl'>Standard</h3>
        <p className='font-bold text-5xl text-center mb-8'>{yearly?'$800':'$99'}<span className='text-xl font-normal'>{yearly?'/year':'/month'}</span></p>
        <select
        value={request}
        onChange={handleChange} 
        className="select select-md bg-white border-gray-400"
      >
        <option disabled>Number of requests</option>
        <option value="2500">2500 requests</option>
        <option value="3500">3500 requests</option>
        <option value="4500">4500 requests</option>
      </select>
<br /><a href="" className='item-left mb-8 text-blue-500 ml-0 mt-1'>Monthly active users</a>
        <ul className='text-left ml-14 md:ml-15 sm:ml-5 list-disc md:mt-10'>
            <li className='my-2'>{request} request</li>
            <li className='my-2'>Unlimited projects</li>
            <li className='my-2'>extended free trial<span className='bg-white text-gray-500 border-1 rounded-xl ml-2 text-0.5xl p-1 cursor-pointer hover:bg-blue-600 hover:text-white'>for early users</span></li>

        </ul>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-blue-600 hover:text-white mt-1 sm:mt-5 md:mt-7 bg-[#f8f9fd] text-gray-500">Create account</button>

      </div>
      <div className='bg-white rounded-xl h-100 sm:h-102 md:h-82 lg:h-122 md:w-80 sm:w-80 lg:w-100'> <h3 className='text-center my-4 text-3xl'>Entreprise</h3>
        <p className='font-bold text-5xl text-center mb-8'>Let's Talk!</p>
        <ul className='text-left ml-14 md:ml-15 sm:ml-5 list-disc mt-1'>
            <li className='my-2'>500 request</li>
            <li className='my-2'>Unlimited projects</li>
            <li className='my-2'>extended free trial<span className='bg-white text-gray-500 border-1 rounded-xl ml-2 text-0.5xl p-1 cursor-pointer hover:bg-blue-600 hover:text-white'>for early users</span></li>

        </ul>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-blue-600 hover:text-white mt-30 sm:mt-20 md:mt-35 bg-[#f8f9fd] text-gray-500">Create account</button></div> 
    </div>
  )
}

export default core
