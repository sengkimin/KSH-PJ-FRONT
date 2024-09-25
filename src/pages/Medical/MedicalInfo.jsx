import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MedicalBoxInfo from '../../components/MedicalBoxInfo';
import axios from 'axios';
import { Audio } from 'react-loader-spinner'


const MedicalInfo = () => {
  const { id } = useParams();
  const [medicalData, setMedicalData] = useState(null);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchMedicalData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.ksh.thewmad.info/api/resident-medicals?filters[require_to_use][$eq]=true&filters[resident][id][$eq]=${id}&populate=resident.profile_img_url&populate=last_prescription_document&populate=medicine_document`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMedicalData(response.data.data[0].attributes);
      } catch (error) {
        console.error('There was an error fetching the resident data!', error);
      }
    };

    fetchMedicalData();
  }, [id]);

  if (!medicalData) {
    return <div className="flex justify-center items-center h-screen">
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperClass="flex justify-center items-center"
    />
  </div>;
  }

  const resident = medicalData?.resident?.data;
  const imgUrl = resident?.attributes?.profile_img_url?.data?.attributes?.url;
  const fullImgUrl = imgUrl || 'default-image.jpg'; 

  const medicineDocUrl = medicalData?.medicine_document?.data?.[0]?.attributes?.url;
  const lastPrescriptionDocUrl = medicalData?.last_prescription_document?.data?.[0]?.attributes?.url;

  return (
    <>
      <div className="flex space-x-4 mb-8 mt-6 ml-6">
        <Link to='/medical'>
          <button className="bg-gray-300 px-6 py-1.5 md:px-16 md:py-2 rounded">Back</button>
        </Link>
      </div>
      <div className="flex justify-center mb-6">
        {fullImgUrl ? (
          <img
            src={fullImgUrl}
            alt="Profile"
            className="h-32 w-32 md:h-56 md:w-56 rounded-full object-cover"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center ">{resident?.attributes?.fullname_english}</h2>
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">Medical Information</h1>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-lg p-4 md:p-6">
          <MedicalBoxInfo name="Disability / Disorder:" value={resident?.attributes?.type_of_disability} />
          <MedicalBoxInfo name="Medical Treatment:" value={medicalData.medical_treatment} />
          <MedicalBoxInfo name="Doctor:" value={medicalData.doctor} />
          <MedicalBoxInfo name="Comments:" value={medicalData.specailist_doctor_comment} />
          <MedicalBoxInfo name="Next appointment:" value={medicalData.next_appointment} />
          <h1 className='text-center mt-10 font-bold text-xl md:text-3xl'>Documents</h1>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="flex flex-col items-center">
              <h1 className="mb-6 text-2xl font-bold">Medicine Document</h1>
              {medicineDocUrl ? (
                <a href={`${medicineDocUrl}`} target="_blank" rel="noopener noreferrer">
                  <img src="/donwlod.png" alt="Medicine Document" className="w-full" />
                </a>
              ) : (
                <p>No Medicine Document Available</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-6 text-2xl font-bold">Last Prescription</h1>
              {lastPrescriptionDocUrl ? (
                <a href={`${lastPrescriptionDocUrl}`} target="_blank" rel="noopener noreferrer">
                  <img src="/donwlod.png" alt="Last Prescription" className="w-full" />
                </a>
              ) : (
                <p>No Prescription Document Available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalInfo;
