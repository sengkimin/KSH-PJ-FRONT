import React from "react";
import { useState, useEffect } from "react";

import MyBtn from "../../components/CreateButton";
import { Link } from "react-router-dom";


const BookIssuePage = () => {
  const [bookIssue, setbookIssue] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/book_issues", {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setbookIssue(data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchFarmers();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold ">Book Issue</h1>
      <div className="px-2 py-4">
        <Link to={"/NewBookIssue"}>
          <MyBtn text="Create" type="MyBtn-blue"></MyBtn>
        </Link>
      </div>

      <table>
        <div className="border rounded-lg overflow-hidden">
          <thead>
            <tr class="divide-x divide-gray-200 dark:divide-neutral-700 bg-neutral-200">
              <th
                scope="col"
                className="px-6 py-4 text-start text-xs font-medium text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Action
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-start text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-start text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Member
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-start text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Librarian
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-end text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Issue Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-end text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Due Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-end text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Return Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-end text-xs text-stone-950 uppercase dark:text-neutral-500 text-base"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {bookIssue.map((Issue) => (
              <tr className="border" key={Issue.id}>
                <Link to={`/ViewBookIssue/${Issue.id}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className=" px-2 py-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-800 hover:text-sky-50 focus:outline-none focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 text-base bg-sky-400"
                    >
                      Views
                    </button>
                  </td>
                </Link>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.book.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.member.fullname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.processed_by.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.issue_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.due_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.return_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-base">
                  {Issue.status.name}
                </td>
              </tr>

              
            ))}
          </tbody>
        </div>
      </table>
    </>
  );
};

export default BookIssuePage;
