import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InfoBookIssue from "./InformationBookIssue";
import MyBtn from "../../components/CreateButton";
import { Link } from "react-router-dom";

const ViewBookIssue = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/book_issues/${id}`,
          {
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id, token]);

  const deleteBtn = async () => {
    const userConfirmed = window.confirm("Would you like to delete?");
    if (userConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/book_issues/${id}`, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/book-issue");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const renderContent = () => {
    console.log(data);
    return (<>
         <h1 className="text-bold font-semibold text-2xl">Book Issue Information</h1>
         <div className="flex gap-5 p-10">
            <Link to={"/book-issue"}><MyBtn text ="Back"></MyBtn></Link>
            <Link to ={"/NewBookIssue"}> <MyBtn text = "Create" type="MyBtn-blue"></MyBtn></Link>
            <MyBtn text = "Delete" type="MyBtn-red" onClick={deleteBtn}></MyBtn>

         </div>
         
        <div className="mb-8">
          <h2 className="text-xl mb-4 font-bold">Book Issue Information</h2>
  
          <table className="w-full text-left">
            <tbody className="divide-y divide-slate-200 ">
              <InfoBookIssue Label="ISBN" Value={data.book.isbn} />
              <InfoBookIssue Label="Title" Value={data.book.title} />
              <InfoBookIssue Label="Issue Date" Value={data.issue_date} />
              <InfoBookIssue Label="Due Date" Value={data.due_date || "N/A"} />
              <InfoBookIssue
                Label="Return Date"
                Value={data.return_date ? "" : "no"}
              />
              <InfoBookIssue Label="Librarian" Value={data.member.fullname} />
              <InfoBookIssue Label="Status" Value={data.status.name} />
            </tbody>
          </table>
        </div>
  
        <div>
          <h2 className="text-xl font-semibold mb-4">Member - Borrower</h2>
          <table className="w-full text-left">
            <tbody className="divide-y divide-slate-200 ">
              <InfoBookIssue
                Label="Member Code"
                Value={data.member.member_code}
              />
              <InfoBookIssue Label="Full Name" Value={data.member.fullname} />
              <InfoBookIssue Label="Email" Value={data.processed_by.email} />
              <InfoBookIssue Label="Phone" Value={data.due_date ? "N/A": "No"} />
              <InfoBookIssue Label="Status"Value={data.return_date ? "N/A" : "no"}/>
            </tbody>
          </table>
        </div>
      </>);
  };

  return (
    <div className="max-w-xl p-6 bg-gray-50 rounded-lg shadow-md">
      {error && <p className="text-red-600">{error}</p>}
      {data && renderContent()}
    </div>
  );
};

export default ViewBookIssue;
