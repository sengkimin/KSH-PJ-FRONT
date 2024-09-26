import React, { useEffect, useState } from 'react';
import MedicalBox from '../../components/MedicalBox';
import axios from 'axios';

const token = localStorage.getItem('jwtToken');

const MedicalPage = () => {
  const [medical, setMedicals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    const fetchMedicals = async () => {
      try {
        const response = await axios.get(
          `https://strapi.ksh.thewmad.info/api/resident-medicals?filters[require_to_use][$eq]=true&populate[resident][populate]=profile_img_url&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        const data = response.data?.data || [];
        setMedicals(data);

        const totalEntries = response.data?.meta?.pagination?.total || 0;
        const totalPageCount = Math.ceil(totalEntries / itemsPerPage);
        setTotalPages(totalPageCount);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchMedicals();
  }, [currentPage]);

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
            const imgUrl = medicalItem.attributes?.resident?.data?.attributes?.profile_img_url?.data?.attributes?.url;
            const fullImgUrl = imgUrl ? `${imgUrl}` : 'default.jpg';

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

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 space-x-3">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-[#207137] text-white'}`}
            >
              Previous
            </button>

            <span className="text-lg font-medium">
              {currentPage} of {totalPages} pages
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-[#207137] text-white'}`}
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
