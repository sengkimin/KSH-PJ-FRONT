import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const BookIssuePage = () => {
  const [user,setUser] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(()=>{
    const fetchFarmers=async()=>{
      try{
        const response = await fetch('http://localhost:3000/api/book_issues',{
          headers: {
            'Content-Type':'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
        return response.data
      }catch(error){
        console.log(error);
      }
    }
    fetchFarmers();
  },[])
  return (
    <>
      <h1 className="text-3xl font-bold ">Book Issue</h1>
      <div className="px-2 py-4">
           <button class="px-8 py-2 ring-2 bg-sky-400 rounded-md text-black">
              Create 
           </button>
      </div>

      <table>
        <div className="border rounded-lg overflow-hidden">
        <thead>
          <tr className="border ">
            <th className="">Action</th>
            <th className="px-4 py-4 border-r">Title</th>
            <th className="px-4 py-4 border-r">Member</th>
            <th className="px-4 py-4 border-r">Librarian</th>
            <th className="px-4 py-4 border-r">Issue Date</th>
            <th className="px-4 py-4 border-r">Due Date</th>
            <th className="px-4 py-4 border-r">Return Date</th>
            <th className="px-4 py-4 border-r">Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) =>(
            <tr className="border" key={user.id}>
              <td className="px-4 py-4 border-r"><button className=" px-4 py-2 bg-sky-500 rounded-lg">view </button></td>
              <td className="px-4 py-4 border ">{user.book.title}</td>
              <td className="px-4 py-4 border-r">{user.member.fullname}</td>
              <td className="px-4 py-4 border-r">{user.processed_by.username}</td>
              <td className="px-4 py-4 border-r">{user.issue_date}</td>
              <td className="px-4 py-4 border-r">{user.due_date}</td>
              <td className="px-4 py-4 border-r">{user.return_date}</td>
              <td className="px-4 py-4 border-r">{user.status.status}</td>
              
            </tr>
          ))}

        </tbody>
        </div>       
      </table>
     </>
  );
};


export default BookIssuePage;
