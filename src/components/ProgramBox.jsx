import React from 'react';

const ProgramBox = ({ time, image, title, residents, done }) => {
  return (
    <tr className="border-t border-gray-300">
      <td className="py-2 px-6 md:py-4 text-center font-bold text-lg md:text-2xl border-r border-gray-300">{time}</td>
      <td className="py-2 px-5 md:py-4 text-center border-r border-gray-300">
        <img src={image} alt={title} className="w-32 h-26 md:w-40 md:h-32 object-cover mx-auto" />
      </td>
      <td className="py-2 px-6 md:py-4 text-center font-medium text-lg md:text-2xl border-r border-gray-300">{title}</td>
        
    
    </tr>
  );
};

export default ProgramBox;
