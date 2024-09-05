import React from 'react';
import { FaEye } from "react-icons/fa";


function BoxResident({ image, name, age }) {
  return (
    <div className="flex items-center justify-between p-3 border-b-[1px] border-black" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="flex items-center">
        <img
          src={image}
          alt="Profile"
          className=" h-20 w-20 md:h-24 md:w-24 rounded-full bg-black-500"
        />
        <div className="text-left ml-6">
          <p className="text-[#207137] font-bold sm:text-[18px]  md:text-[22px]">Name : {name}</p>
          <p className=' text-[14px] md:text-[18px]'>Disability : {age} </p>
        </div>
      </div>
      <div className="flex space-x-4">
  <button className="text-[16px] bg-gray-300 text-black px-2 md:px-8 py-1 rounded hover:bg-gray-400 flex items-center space-x-2">
 
    <FaEye className="h-5 w-5 text-black" />
    <p className="hidden sm:block">View</p>

 
  </button>
</div>

    </div>
  );
}

export default BoxResident;
