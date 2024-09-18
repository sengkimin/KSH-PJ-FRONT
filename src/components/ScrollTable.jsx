import React from 'react';

const ScrollTable = ({ level, type, resident, image, actname, actdate, score, com, slead, scom, pwdby, pwdcom }) => {
  return (
    <div className="w-full max-w-full border border-gray-300 overflow-x-auto"> 
      <div className="scale-125 origin-top-left">
        <table className="min-w-[800px] border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Program Level</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Program Type</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Resident</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Image</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Name</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Date</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Score Point</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Comment</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">Staff or Leader PWDs By</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">Staff or Leader PWDs Comment</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">PWDs Respond By</th>
              <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">PWDs Comment</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
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
            <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
              </td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
            </tr>   <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
              </td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
            </tr>   <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
              </td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
            </tr>   <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
              </td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
            </tr>   <tr className="border-t border-gray-300">
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
              <td className="py-2 px-4 md:py-4 md:px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">
                <img src={'/resident.png'} alt="Activity Image" />
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollTable;





{/* <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr>         <tr className="border-t border-gray-300">
  <td className="py-4 px-6 text-center font-bold text-lg border-r border-gray-300 whitespace-nowrap">{level}</td>
  <td className="py-4 px-6 text-center border-r border-gray-300 whitespace-nowrap">{type}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{resident}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap"><img src="/resident.png" alt="Activity Image" /></td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actname}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{actdate}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{score}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{com}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{slead}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{scom}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdby}</td>
  <td className="py-4 px-6 text-center font-medium text-lg border-r border-gray-300 whitespace-nowrap">{pwdcom}</td>
</tr> */}