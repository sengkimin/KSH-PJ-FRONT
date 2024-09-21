import React from 'react';

const ScrollTable = ({ level, type, resident, image, actname, actdate, score, com, slead, scom, pwdby, pwdcom }) => {
  return (
    <tr className="border-t border-gray-300">
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
        <img src={image} alt="Activity" />
      </td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
      <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
    </tr>
  );
};

export default ScrollTable;
