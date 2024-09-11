import React from 'react';

const ProgramBox = ({ time, image, title, residents, done }) => {
  return (
    <tr className="border-t border-gray-300">
      <td className="py-2 px-2 md:py-4 text-center font-bold text-lg md:text-2xl border-r border-gray-300">{time}</td>
      <td className="py-2 px-2 md:py-4 text-center border-r border-gray-300">
        <img src={image} alt={title} className="w-20 h-24 md:w-24 md:h-28 object-cover mx-auto" />
      </td>
      <td className="py-2 px-2 md:py-4 text-center font-medium text-lg md:text-2xl border-r border-gray-300">{title}</td>
      <td className="py-2 px-2 md:py-4 text-center font-bold text-green-600 text-lg md:text-2xl border-r border-gray-300">
        <div className="text-center">
          {residents}
          <div className="text-sm md:text-2xl font-normal text-gray-500">Residents</div>
        </div>
      </td>
      <td className="py-2 px-4 md:py-4 text-center font-bold text-green-600 text-lg md:text-2xl border-r border-gray-300">
        <div className="text-center">
          {done}
          <div className="text-sm md:text-2xl font-normal text-gray-500">Done</div>
        </div>
      </td>
    </tr>
  );
};

export default ProgramBox;
