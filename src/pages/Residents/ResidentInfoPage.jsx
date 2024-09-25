
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ResidentBoxInfo from '../../components/ResidentBoxInfo';
import axios from 'axios';

const ResidentInfo = () => {
  const { id } = useParams();
  const [residentData, setResidentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApiImage, setShowApiImage] = useState(false);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.ksh.thewmad.info/api/beneficiaries/${id}?populate[profile_img_url]=*&populate[document][populate]=file_media`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        setResidentData(response.data.data.attributes);
      } catch (error) {
        console.error("There was an error fetching the resident data!", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResidentData();
  }, [id, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!residentData) {
    return <p>No data available</p>;
  }

  const profileImageUrl = residentData.profile_img_url?.data?.attributes?.formats?.thumbnail?.url || null;
  const documents = residentData.document || []; 

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
            alt="Profile"
            className="h-32 w-32 md:h-56 md:w-56 rounded-full object-cover"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>

      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
        Detail Information of Student
      </h1>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-lg p-4 md:p-6">
          <ResidentBoxInfo name="Full Name" value={residentData.fullname_english} />
          <ResidentBoxInfo name="Gender" value={residentData.gender} />
          <ResidentBoxInfo name="Type Of Disability" value={residentData.type_of_disability} />
          <ResidentBoxInfo name="Date Of Birth" value={residentData.date_of_birth} />
          <ResidentBoxInfo name="Required Medical Use" value={residentData.is_required_medical_use ? "Yes" : "No"} />
          <ResidentBoxInfo name="Medical Use" value={residentData.medical_use} />
          <ResidentBoxInfo name="Is Active" value={residentData.is_active ? "Yes" : "No"} />
          <ResidentBoxInfo name="Start Date" value={residentData.start_date} />
          <ResidentBoxInfo name="End Date" value={residentData.end_date} />

          <h1 className='text-center mt-10 font-bold text-xl md:text-3xl'>Documents</h1>

          {documents.length > 0 ? (
  <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
    {documents.map((doc) => (
      <div key={doc.id} className='flex flex-col items-center text-xl font-bold '>
        <h1 className='mt-8'>{doc.document_type}</h1>
        {doc.file_media?.data?.length > 0 && doc.file_media.data[0].attributes.formats?.thumbnail?.url ? (
          <a 
            href={`${doc.file_media.data[0].attributes.formats.thumbnail.url}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="/donwlod.png" 
              alt="Document Thumbnail"
              className="w-32 h-32 md:w-44 md:h-44 object-cover rounded mt-10"
            />
          </a>
        ) : (
          <p>No Document Available</p>
        )}
      </div>
    ))}
  </div>
) : (
  <p className="text-center mt-10 font-bold text-xl">No documents available</p>
)}

        </div>
      </div>
    </>
  );
};

export default ResidentInfo;
