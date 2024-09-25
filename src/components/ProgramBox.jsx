import React from 'react';
import { Link } from 'react-router-dom';

const ProgramBox = ({ time, image, title, level }) => {
  return (
    <tr className="border-t border-gray-300">
      <td className="hidden md:table-cell py-2 px-6 md:py- text-center font-bold text-lg md:text-l border-r border-gray-300">
        {time}
      </td>
      <td className="py-2 px-5 md:py-4 text-center border-r border-gray-300">
        <img src={image} alt={title} className="w-32 h-26 md:w-40 md:h-32 object-cover mx-auto" />
      </td>
      <td className="py-2 px-6 md:py-4 text-center text-green-700 underline font-medium text-lg md:text-2xl border-r border-gray-300 object-cover">
        <Link
          to={`/program/${level}/${title}`}
          state={{ image }}
        >
          {title}
        </Link>
      </td>
    </tr>
  );
};

export default ProgramBox;
