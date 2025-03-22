'use client'
import React, { useState,useEffect } from 'react'
import Core from "../component/core"
const Header = () => {
    const[yearly,setYearly]=useState(true);
    function year(){
      setYearly(!yearly);
    }
    useEffect(() => {
      console.log("Updated yearly:", yearly);
    }, [yearly]);
  return (
    <div className='flex flex-col text-center items-center '>
      <h1 className='font-semibold my-6 text-4xl text-gray-700'>choose your plan</h1>
      <p className='sm:w-[%90] md:w-130 mb-6 text-gray-600 '>Be the first to know when boardme launches. Early access users will receive an extended free trial and early bird pricing options</p>
      <div className='mb-9'><span className='text-gray-600 mr-2'>Billed monthly</span>
     <input type="checkbox" defaultChecked className="toggle enabled:bg-blue-500 not-enabled:bg-blue-600" onClick={year}/>
     <span className='text-gray-600 ml-2'>Billed annually</span></div>
     <Core yearly={yearly}/>

    </div>
  )
}

export default Header
