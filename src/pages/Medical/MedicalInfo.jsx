// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const MedicalInfo = () => {
//   const [medicalInfo, setMedicalInfo] = useState(null);
//   const { id } = useParams();
//   const URL = `http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&filters[resident][id][$eq]=${id}&populate=resident.profile_img_url&populate=last_prescription_document&populate=medicine_document`;
//   const token = localStorage.getItem('jwtToken');

//   useEffect(() => {
//     const fetchMedicalInfo = async () => {
//       try {
//         const response = await fetch(URL, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         setMedicalInfo(data.data);
//       } catch (error) {
//         console.log("Error fetching medical info:", error);
//       }
//     };
//     fetchMedicalInfo();
//   }, [URL, token]);

//   if (!medicalInfo) return <div>Loading...</div>;

//   return (
//     <div className="relative min-h-screen bg-gray-50">
//       <Link to="/medical">
//         <button className="absolute top-4 left-4 bg-slate-400 px-6 py-2 border rounded-lg">Back</button>
//       </Link>

//       <div className="flex flex-col items-center justify-center min-h-screen ">
//         {medicalInfo.map((medicalInfoItem) => {
//           const resident = medicalInfoItem.attributes?.resident?.data;
//           const imgUrl = resident?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
//           const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default-image.jpg';
//           const prescriptionUrl = medicalInfoItem.attributes?.last_prescription_document?.data?.[0]?.attributes?.url;
//           const fullPrescriptionUrl = prescriptionUrl ? `http://localhost:1337${prescriptionUrl}` : 'default-prescription';

//           const medicineDocumentUrl = medicalInfoItem.attributes?.medicine_document?.data?.[0]?.attributes?.url;
//           const fullMedicineDocumentUrl = medicineDocumentUrl ? `http://localhost:1337${medicineDocumentUrl}` : null;


//           return (
//             <div key={medicalInfoItem.id} className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center w-full lg:w-[80%]">
//               <div className="rounded-lg shadow-md mb-6">
//                 <img
//                   src={fullImgUrl}
//                   alt="Profile"
//                   className="h-40 w-40 rounded-full bg-blue-200"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Medical Information</h3>

//               <div className="text-lg space-y- w-full flex max-sm:flex-col max-md:flex ">
//                 <div className="flex-1 flex justify-center items-center flex-col ">
//                   <div className='ml-[40%] text-xl max-sm:text-sm max-sm:mr-[20%] max-sm:w-full space-y-5 max-md:text-sm max-md:w-full  max-lg:text-sm max-lg:w-full'>
//                     <p className='max-sm:mr-[5%]'>Disability / Disorder:</p>
//                     <p>Medical Treatment:</p>
//                     <p>Doctor:</p>
//                     <p>Comments:</p>
//                     <p>Next appointment:</p>
//                   </div>
//                 </div>
//                 <div className="flex-1 justify-start">
//                   <div className='text-xl ml-[10%] max-sm:text-sm max-sm:w-full space-y-4 max-md:text-sm max-md:w-full  max-lg:text-sm max-lg:w-full'>
//                     <p>{resident?.attributes?.type_of_disability}</p>
//                     <p>{medicalInfoItem.attributes?.medical_treatment}</p>
//                     <p>{medicalInfoItem.attributes?.doctor}</p>
//                     <p>{medicalInfoItem.attributes?.specailist_doctor_comment}</p>
//                     <p>{medicalInfoItem.attributes?.next_appointment}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 ml-[25%] ">
//                 <h4 className="text-xl font-semibold mb-2  ">Last Prescription</h4>
//                 <div className="flex justify-center  ">
//                   <div className="flex justify-center">
//                     {fullPrescriptionUrl ? (
//                       <a
//                         href={fullPrescriptionUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 underline"
//                       >
//                         <img
//                         src="/donwlod.png"
//                         alt="Download"
//                         className="w-40 h-40 mr-2"
//                       />
//                       </a>
//                     ) : (
//                       <p>No prescription document available</p>
//                     )}
//                   </div>
//                 </div>
//                 {fullMedicineDocumentUrl && (
//                   <>
//                     <h4 className="text-xl font-semibold mb-2 mt-6">Medicine Document</h4>
//                     <div className="flex items-center space-x-2">
//                       <a
//                         href={fullMedicineDocumentUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-blue-500 underline"
//                       >
//                         <img
//                           src="/donwlod.png" // Replace with your actual download icon path
//                           alt="Download"
//                           className="w-40 h-40 mr-2"
//                         />
//                       </a>
//                     </div>
//                   </>
//                 )}

//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MedicalInfo;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MedicalBoxInfo from '../../components/MedicalBoxInfo';
import axios from 'axios';

const MedicalInfo = () => {
  const { id } = useParams();
  const [medicalData, setMedicalData] = useState(null);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchMedicalData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&filters[resident][id][$eq]=${id}&populate=resident.profile_img_url&populate=last_prescription_document&populate=medicine_document`,
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
    return <p>Loading...</p>;
  }
  console.log(medicalData)

  const resident = medicalData?.resident?.data;
  const imgUrl = resident?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
  const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default-image.jpg';

  const medicineDocUrl = medicalData?.medicine_document?.data?.[0]?.attributes?.url;
  const lastPrescriptionDocUrl = medicalData?.last_prescription_document?.data?.[0]?.attributes?.url;

  return (
    <>
      <div className="flex space-x-4 mb-8 mt-6 ml-6">
        <Link to='/'>
          <button className="bg-gray-300 px-6 py-1.5 md:px-16 md:py-2 rounded">Back</button>
        </Link>
      </div>
      <div className="flex justify-center mb-6">
        {fullImgUrl ? (
          <img
            src={fullImgUrl}
            alt="Resident"
            className="h-24 w-24 md:h-36 md:w-36 rounded-full"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center ">{resident?.attributes?.fullname_english}</h2>
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">Medical Information</h1>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="bg-white w-full max-w-7xl rounded-lg p-4 md:p-6">
          <MedicalBoxInfo name="Disability / Disorder:" value={resident.attributes.type_of_disability} />
          <MedicalBoxInfo name="Medical Treatment:" value={medicalData.medical_treatment} />
          <MedicalBoxInfo name="Doctor:" value={medicalData.doctor} />
          <MedicalBoxInfo name="Comments:" value={medicalData.specailist_doctor_comment} />
          <MedicalBoxInfo name="Next appointment:" value={medicalData.next_appointment} />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="flex flex-col items-center">
              <h1 className="mb-6 text-2xl font-bold">Medicine Document</h1>
              {medicineDocUrl ? (
                <a href={`http://localhost:1337${medicineDocUrl}`} target="_blank" rel="noopener noreferrer">
                  <img src="/donwlod.png" alt="Medicine Document" className="w-full" />
                </a>
              ) : (
                <p>No Medicine Document Available</p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-6 text-2xl font-bold">Last Prescription</h1>
              {lastPrescriptionDocUrl ? (
                <a href={`http://localhost:1337${lastPrescriptionDocUrl}`} target="_blank" rel="noopener noreferrer">
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




