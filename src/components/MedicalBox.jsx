

// import React from 'react';
// import { FaEye } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function MedicalBox({ image, name, medical_use, id }) {
//   return (
//     <div className="flex  items-center justify-between p-3 border-b border-black bg-gray-100">
//       <div className="flex items-center">
//         <img
//           src={image || 'path/to/default-image.jpg'} 
//           alt={`${name}'s profile`}
//           className="h-24 w-24 rounded-full"
//         />
//         <div className="text-left ml-6">
//           <p className="text-green-700 font-bold text-xl">Name: {name}</p>
//           <p className='text-lg'>Medical Use: {medical_use}</p>
//         </div>
//       </div>
//       <div className="flex space-x-4 mt-4 sm:mt-0">
//         <Link to={`/medical/${id}`}>
//           <button className="text-base bg-gray-300 text-black px-6 py-1 rounded hover:bg-gray-400 flex items-center space-x-2">
//             <FaEye className="h-5 w-5 text-black" />
//             <span>View</span>
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default MedicalBox;



import React from 'react';
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function MedicalBox({ image, name, medical_use, id }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-black bg-white">
      <div className="flex items-center">
        <img
          src={image }
          alt=' profile'
          className=" h-20 w-20 md:h-24 md:w-24 rounded-full bg-black-500 object-cover" // Adjusted size and rounded for profile image
        />
        <div className="text-left ml-10">
          <p className="text-[#207137] font-bold sm:text-[18px]  md:text-[22px]">Name : {name}</p>
          <p className="text-[16px] md:text-[20px]">Medical Use: {medical_use}</p>
        </div>
      </div>
      <div>
        <Link to={`/medical/${id}`}>
        <button className="text-[16px] bg-gray-300 rounded text-black px-2 md:px-8 py-1 hover:bg-gray-400 flex items-center space-x-2">
    <FaEye className="h-5 w-5 text-black" />
    <p className="hidden sm:block">View</p>
  </button>
        </Link>
      </div>
    </div>
  );
}

export default MedicalBox;
