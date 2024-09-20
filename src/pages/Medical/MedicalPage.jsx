// import React, { useEffect, useState } from 'react';
// import BoxResident from '../../components/BoxResident';
// import axios from 'axios';
// const token = localStorage.getItem('jwtToken'); 
// const MedicalPage = () => {
//   const [medical, setMedicals] = useState([]);
//   useEffect(() => {
//     const fetchMedicals = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&populate[resident][populate]=profile_img_url', {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//             },
//           }
//         );
//         const data = response.data?.data || [];
//         setMedicals(data);
//       } catch (error) {
//         console.error('Error fetching the residents data:', error);
//       }
//     };
//     fetchMedicals();
//   }, []);

//   return (
//     <div className='flex justify-center items-center w-full'>
//       <div className='w-[94%]'>
//         <div className='flex justify-between items-center mb-10'>
//           <div className='font-bold text-4xl'>Medical List</div>
//         </div>
//         <div>
//           {medical.map((medicalItem) => {
//             console.log(medicalItem);
//             const imgUrl = medicalItem.attributes?.resident?.data?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
//             const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default.jpg';
//             return (
//               <BoxResident
//                 key={medicalItem.id}
//                 image={fullImgUrl}
//                 name={medicalItem.attributes?.resident?.data?.attributes?.fullname_english || 'Unknown Name'}
//                 medical_use={medicalItem.attributes?.require_to_use ? "True" : ""}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalPage;





// import React, { useEffect, useState } from 'react';
// import BoxResident from '../../components/BoxResident';
// import axios from 'axios';
// const MedicalPage = () => {
//   const [medical, setMedicals] = useState([]);
//   useEffect(() => {
//     const fetchMedicals = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&populate[resident][populate]=profile_img_url'
//         );
//         const data = response.data?.data || [];
//         setMedicals(data);
//       } catch (error) {
//         // console.error('Error fetching the residents data:', error);
//       }
//     };

//     fetchMedicals();
//   }, []);

//   return (
//     <div className='flex justify-center items-center w-full'>
//       <div className='w-[94%]'>
//         <div className='flex justify-between items-center mb-10'>
//           <div className='font-bold text-4xl'>Medical List</div>
//         </div>
//         <div>
//           {medical.map((medicalItem) => {
//             console.log(medicalItem);
//             const imgUrl = medicalItem.attributes?.resident?.data?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
//             const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : '/path/to/default.jpg'; // Ensure this path is correct

//             return (
//               <BoxResident
//                 key={medicalItem.id}
//                 image={fullImgUrl}
//                 name={medicalItem.attributes?.resident?.data?.attributes?.fullname_english || 'Unknown Name'}
//                 medical_use={medicalItem.attributes?.require_to_use ? "True" : ""}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalPage;




import React, { useEffect, useState } from 'react';
import MedicalBox from '../../components/MedicalBox';
import axios from 'axios';

const token = localStorage.getItem('jwtToken');

const MedicalPage = () => {
  const [medical, setMedicals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5; // Display 2 items per page

  useEffect(() => {
    const fetchMedicals = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&populate[resident][populate]=profile_img_url&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Added token for authentication
            },
          }
        );
        const data = response.data?.data || [];
        setMedicals(data);

        // Get total pages from the response
        const totalEntries = response.data?.meta?.pagination?.total || 0;
        const totalPageCount = Math.ceil(totalEntries / itemsPerPage);
        setTotalPages(totalPageCount);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchMedicals();
  }, [currentPage]); // Re-fetch when currentPage changes

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-[94%]'>
        <div className='flex justify-between items-center mb-10'>
          <div className='font-bold text-4xl'>Medical List</div>
        </div>
        <div>
          {medical.map((medicalItem) => {
            const imgUrl = medicalItem.attributes?.resident?.data?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
            const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default.jpg';

            return (
              <MedicalBox
                key={medicalItem.id}
                id={medicalItem.attributes?.resident?.data?.id}
                image={fullImgUrl}
                name={medicalItem.attributes?.resident?.data?.attributes?.fullname_english || 'Unknown Name'}
                medical_use={medicalItem.attributes?.require_to_use ? "True" : "False"}
              />
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 space-x-3">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            >
              Previous
            </button>

            <span className="text-lg font-medium">
              {currentPage} of {totalPages} pages
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalPage;
