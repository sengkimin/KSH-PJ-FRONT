


import React from 'react';

const ScrollTable = ({ date, day, activity }) => {
  return (
    <div className="w-full max-w-full border border-gray-300 overflow-x-auto"> 
      <div className="scale-125 origin-top-left">
        <table className="min-w-[800px] border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 px-16 text-xl border border-gray-300">Date</th>
              <th className="p-4  text-xl border border-gray-300">Day</th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
              <th className="p-4 border border-gray-300"><img src="/resident.png" alt="activity" /></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="py-6 px-12 text-center font-bold text-lg border-r border-gray-300">{date}</td>
              <td className="py-2 px-12 text-center border-r border-gray-300">{day}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>

              

            </tr>
            <tr className='border-t border-gray-300'>
            <td className="py-6 px-12 text-center font-bold text-lg border-r border-gray-300">{date}</td>
              <td className="py-4 px-12 text-center border-r border-gray-300">{day}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>

            </tr>
            <tr className='border-t border-gray-300'>
            <td className="py-6 px-12 text-center font-bold text-lg border-r border-gray-300">{date}</td>
              <td className="py-4 px-12 text-center border-r border-gray-300">{day}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>

            </tr>
            <tr className='border-t border-gray-300'>
            <td className="py-2 px-12 text-center font-bold text-lg border-r border-gray-300">{date}</td>
              <td className="py-2 px-12 text-center border-r border-gray-300">{day}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>
              <td className="py-2 px-12 text-center font-medium text-lg border-r border-gray-300">{activity}</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollTable;





