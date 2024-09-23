import React, { useEffect, useState } from 'react';
import BoxResident from '../../components/BoxResident';
import DropdownResident from '../../components/ DropdownResident';
import DropdownYearResident from '../../components/DropdownYearResident';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const ResidentList = () => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 2; 
  const [selectedYear, setSelectedYear] = useState(""); 
  const token = localStorage.getItem('jwtToken');
  const location = useLocation();
  const { type } = location.state || { type: "1" };
  useEffect(() => {
    const fetchResidents = async () => {
      if (!type || !selectedYear) return; 

      const url = `https://strapi.ksh.thewmad.info/api/curriculum-program-levels?filters[program_level][program_level_name][$eq]=Level%20${type}&populate[residents][populate]=profile_img_url&filters[curriculum][curriculum_name][$eq]=${selectedYear}&populate=*`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API Response:', response);
        const data = response.data?.data || [];
        setResidents(data);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchResidents();
  }, [type, selectedYear, token]); 
  const calculateAge = (dob) => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(dob).getFullYear();
    return currentYear - birthYear;
  };

  const totalResidents = residents.reduce(
    (acc, resident) => acc + resident.attributes.residents.data.length,
    0
  );
  const totalPages = Math.ceil(totalResidents / residentsPerPage);

  const currentResidents = residents
    .flatMap((resident) => resident.attributes.residents.data)
    .slice((currentPage - 1) * residentsPerPage, currentPage * residentsPerPage);

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
    <div className="flex justify-center items-center w-full">
      <div className="w-[94%]">
        <div className="flex justify-between items-center mb-10  space-x-3">
          <div><DropdownYearResident setSelectedYear={setSelectedYear} />
          </div>
          <div className='flex space-x-3'>
          <DropdownResident />
          </div>
        </div>
        <div>
          {currentResidents.length > 0 ? (
            currentResidents.map((EachResident) => {
              const profileImgUrl = EachResident.attributes.profile_img_url?.data?.attributes?.url
                ? `${EachResident.attributes.profile_img_url.data.attributes.url}`
                : null;

              return (
                <BoxResident
                  key={EachResident.id}
                  id={EachResident.id}
                  image={profileImgUrl}
                  name={EachResident.attributes.fullname_english}
                  age={calculateAge(EachResident.attributes.date_of_birth)}
                />
              );
            })
          ) : (
            <div>...Pls Select Each Year First...</div>
          )}
        </div>
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
      </div>
    </div>
  );
};

export default ResidentList;
