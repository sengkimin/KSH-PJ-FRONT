import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResidentBoxInfo from '../../components/ResidentBoxInfo';
import axios from 'axios';

const ResidentInfo = () => {
  const [residentData, setResidentData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/beneficiaries/3')
      .then(response => {
        setResidentData(response.data.data.attributes);
      })
      .catch(error => {
        console.error("There was an error fetching the resident data!", error);
      });
  }, []);

  if (!residentData) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className="flex space-x-4 mb-8 mt-6 ml-6">
        <Link to='/'>
          <button className="bg-gray-300 px-6 py-1.5 md:px-16 md:py-2 rounded">
            Back
          </button>
        </Link>
        
  
      </div>
      
      <div className="flex justify-center mb-6">
        <img
          src="/student.jpg"
          alt="Student"
          className="h-24 w-24 md:h-36 md:w-36 rounded-full"
        />
      </div>
      
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
        Detail Information of Student
      </h1>
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-lg p-4 md:p-6 ">
          <ResidentBoxInfo name="Full Name" value={residentData.fullname_english} showButton={false}/>
          <ResidentBoxInfo name="Gender" value={residentData.gender}  showButton={false}/>
          <ResidentBoxInfo name="Type Of Disability" value={residentData.type_of_disability} />
          <ResidentBoxInfo name="Date Of Birth" value={residentData.date_of_birth} />
          <ResidentBoxInfo name="Required Medical Use" value={residentData.is_required_medical_use ? "Yes" : "No"} />
          <ResidentBoxInfo name="Medical Use" value={residentData.medical_use} />
          <ResidentBoxInfo name="Is Active" value={residentData.is_active ? "Yes" : "No"} />
          <ResidentBoxInfo name="Start Date" value={residentData.start_date}showButton={false} />
          <ResidentBoxInfo name="End Date" value={residentData.end_date}showButton={false} />
        </div>
      </div>
    </>
  );
};

export default ResidentInfo;
