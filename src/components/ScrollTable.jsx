



import React from 'react';

const ScrollTable = ({ date,day,activity }) => {
  return (
    <div className="w-full max-w-full overflow-x-scroll border border-gray-300">
      <table className="min-w-[300px] border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 border border-gray-300">Date</th>
            <th className="p-2 border border-gray-300">Day</th>
            <th className="p-2 border border-gray-300">Activity</th>
            <th className="p-2 border border-gray-300">Activity</th>
            <th className="p-2 border border-gray-300">Activity</th>






           


          </tr>
        </thead>
        <tbody>
     
            <tr  className="border-t border-gray-300">
              <td className="py-2 px-24 md:py-4 text-center font-bold text-lg md:text-2xl border-r border-gray-300">
                {date}
              </td>
              <td className="py-2 px-24 md:py-4 text-center border-r border-gray-300">
               {day}
              </td>
              <td className="py-2 px-32 md:py-4 text-center font-medium text-lg md:text-2xl border-r border-gray-300">
                {activity}
              </td>
              <td className="py-2 px-32 md:py-4 text-center font-medium text-lg md:text-2xl border-r border-gray-300">
                {activity}
              </td>
              <td className="py-2 px-32 md:py-4 text-center font-medium text-lg md:text-2xl border-r border-gray-300">
                {activity}
              </td>
            </tr>
   
        </tbody>
      </table>
    </div>
  );
};

export default ScrollTable;



