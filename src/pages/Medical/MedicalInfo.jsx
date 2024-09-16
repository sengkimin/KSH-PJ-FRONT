import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MedicalInfo = () => {
  const [medicalInfo, setMedicalInfo] = useState(null);
  const { id } = useParams();
  const URL = `http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&filters[resident][id][$eq]=${id}&populate=resident.profile_img_url&populate=last_prescription_document&populate=medicine_document`;
  const token = localStorage.getItem('jwtToken'); 

  useEffect(() => {
    const fetchMedicalInfo = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMedicalInfo(data.data);
      } catch (error) {
        console.log("Error fetching medical info:", error);
      }
    };
    fetchMedicalInfo();
  }, [URL, token]);

  if (!medicalInfo) return <div>Loading...</div>;

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Link to="/medical">
        <button className="absolute top-4 left-4 bg-slate-400 px-6 py-2 border rounded-lg">Back</button>
      </Link>

      <div className="flex flex-col items-center justify-center min-h-screen ">
        {medicalInfo.map((medicalInfoItem) => {
          const resident = medicalInfoItem.attributes?.resident?.data;
          const imgUrl = resident?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
          const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default-image.jpg'; 
          const prescriptionUrl = medicalInfoItem.attributes?.last_prescription_document?.data?.[0]?.attributes?.url;
          const fullPrescriptionUrl = prescriptionUrl ? `http://localhost:1337${prescriptionUrl}` : 'default-prescription.jpg';

          return (
            <div key={medicalInfoItem.id} className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center w-full lg:w-[80%]">
              <div className="rounded-lg shadow-md mb-6">
                <img
                  src={fullImgUrl} 
                  alt="Profile"
                  className="h-40 w-40 rounded-full bg-blue-200"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{resident?.attributes?.fullname_english}</h2>
              <h3 className="text-xl font-semibold mb-4">Medical Information</h3>

              <div className="text-lg space-y- w-full flex max-sm:flex-col max-md:flex ">
                <div className="flex-1 flex justify-center items-center flex-col ">
                  <div className='ml-[40%] text-xl max-sm:text-sm max-sm:mr-[20%] max-sm:w-full space-y-5 max-md:text-sm max-md:w-full  max-lg:text-sm max-lg:w-full'>
                  <p className='max-sm:mr-[5%]'>Disability / Disorder:</p>
                  <p>Medical Treatment:</p>
                  <p>Doctor:</p>
                  <p>Comments:</p>
                  <p>Next appointment:</p>
                  </div>             
                </div>
                <div className="flex-1 justify-start">
                  <div className='text-xl ml-[10%] max-sm:text-sm max-sm:w-full space-y-4 max-md:text-sm max-md:w-full  max-lg:text-sm max-lg:w-full'>
                  <p>{resident?.attributes?.type_of_disability}</p>
                  <p>{medicalInfoItem.attributes?.medical_treatment}</p>
                  <p>{medicalInfoItem.attributes?.doctor}</p>
                  <p>{medicalInfoItem.attributes?.specailist_doctor_comment}</p>
                  <p>{medicalInfoItem.attributes?.next_appointment}</p>
                </div>
                </div>
              </div>

              <div className="mt-10 ml-[25%]">
                <h4 className="text-xl font-semibold mb-2  ">Last Prescription</h4>
                <div className="flex justify-center  ">
                  <img 
                    src={fullPrescriptionUrl} 
                    alt="Prescription" 
                    className="w-40 h-auto border rounded-lg"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicalInfo;






