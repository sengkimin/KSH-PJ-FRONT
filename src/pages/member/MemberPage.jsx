import React, { useState, useEffect } from "react";
import { fetchMember } from "../../api/member";

const MemberPage = () => {
  const [members, setMember] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      const data = await fetchMember();
      console.log("Fetched API Member:", data);
      setMember(data);
    };
    getMember();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Member</h1>
      <button class="text-xl py-2 px-7 bg-sky-500/100 text-white rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mb-5">
        Create
      </button>

      <table className="table-auto w-full"> 
        <thead>
          <tr className="border-4 border-zinc-300  bg-gray-200 text-slate-600">
            <th className="px-4 py-4">Action</th>
            <th className="px-4 py-4">Member Code</th>
            <th className="px-4 py-4">Fullname</th>
            <th className="px-4 py-4">Phone</th>
            <th className="px-4 py-4">Address</th>
            <th className="px-4 py-4">Start Date</th>
            <th className="px-4 py-4">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr className="border-4 border-zinc-300 text-slate-500" key={index}>
              <td className="px-4 py-2">
                <button class="py-1 px-7 bg-sky-500/100 text-white rounded-lg shadow-md hover:bg-sky-600 focus:ring focus:ring-violet-400 focus:ring-opacity-75 mb-5">view</button>
              </td>
              <td className="px-4 py-2">{member.member_code}</td>
              <td className="px-4 py-2">{member.fullname}</td>
              <td className="px-4 py-2">{member.phone_number}</td>
              <td className="px-4 py-2">{member.address}</td>
              <td className="px-4 py-2">{member.start_date}</td>
              <td className="px-4 py-2">{member.expiry_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MemberPage;
