import React from 'react';
import { FaEye } from "react-icons/fa";
function BoxResident({ image, name, medical_use }) {
  return (
    <div className="flex items-center justify-between p-3 border-b-[1px] border-black" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="flex items-center">
        <img
          src={image}
          alt="Profile"
          className="h-24 w-24 rounded-full bg-black-500"
        />
        <div className="text-left ml-6">
          <p className="text-[#207137] font-bold text-[23px]">Name : {name}</p>
          <p className='text-[18px]'>Medical-Use : {medical_use} </p>
        </div>
      </div>
      <div className="flex space-x-4">
  <button className="text-[16px] bg-gray-300 text-black px-6 py-1 rounded hover:bg-gray-400 flex items-center space-x-2">
 
    <FaEye className="h-5 w-5 text-black" />
    <span>View</span>
  </button>
</div>

    </div>
  );
}

export default BoxResident;
