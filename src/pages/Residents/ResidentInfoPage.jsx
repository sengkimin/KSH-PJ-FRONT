import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ResidentBoxInfo from '../../components/ResidentBoxInfo';
import axios from 'axios';

const ResidentInfo = () => {
  const { id } = useParams();  
  const [residentData, setResidentData] = useState(null);

  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/beneficiaries/${id}?populate[profile_img_url]=*&populate[document][populate]=file_media`);
        setResidentData(response.data.data.attributes);
      } catch (error) {
        console.error("There was an error fetching the resident data!", error);
      }
    };

    fetchResidentData();
  }, [id]);  

  if (!residentData) {
    return <p>Loading...</p>; 
  }

  const profileImageUrl = residentData.profile_img_url?.data?.attributes?.formats?.thumbnail?.url
    ? `http://localhost:1337${residentData.profile_img_url.data.attributes.formats.thumbnail.url}`
    : null;

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
        {profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt="Student"
            className="h-24 w-24 md:h-36 md:w-36 rounded-full"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
        Detail Information of Student
      </h1>

      {/* {profileImageUrl && (
        <div className="flex justify-center mb-6">
          <a
            href={profileImageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              View Full Image
            </button>
          </a>
        </div>
      )} */}
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-lg p-4 md:p-6">
          <ResidentBoxInfo name="Full Name" value={residentData.fullname_english} showButton={false}/>
          <ResidentBoxInfo name="Gender" value={residentData.gender}  showButton={false}/>
          <ResidentBoxInfo name="Type Of Disability" value={residentData.type_of_disability} showButton={true}
    linkUrl={profileImageUrl}/>
          <ResidentBoxInfo name="Date Of Birth" value={residentData.date_of_birth} />
          <ResidentBoxInfo name="Required Medical Use" value={residentData.is_required_medical_use ? "Yes" : "No"} />
          <ResidentBoxInfo name="Medical Use" value={residentData.medical_use} />
          <ResidentBoxInfo name="Is Active" value={residentData.is_active ? "Yes" : "No"} />
          <ResidentBoxInfo name="Start Date" value={residentData.start_date} showButton={false} />
          <ResidentBoxInfo name="End Date" value={residentData.end_date} showButton={false} />
        </div>
      </div>
    </>
  );
};

export default ResidentInfo;
