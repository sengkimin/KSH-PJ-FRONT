import React, { useEffect, useState } from 'react';
import BoxResident from '../../components/BoxResident';
import DropdownResident from '../../components/ DropdownResident';
import DropdownYearResident from '../../components/DropdownYearResident';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResidentList = () => {
  const [residents, setResidents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(""); // Local state to store the selected year
  const token = localStorage.getItem('jwtToken');
  const location = useLocation();
  const { type } = location.state || { type: "1" }; // Default type if not passed

  useEffect(() => {
    const fetchResidents = async () => {
      if (!type || !selectedYear) return; // Ensure both type and year are available before fetching

      const url = `http://localhost:1337/api/curriculum-program-levels?filters[program_level][program_level_name][$eq]=Level%20${type}&populate[residents][populate]=profile_img_url&filters[curriculum][curriculum_name][$eq]=${selectedYear}&populate=*`;

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

    fetchResidents(); // Fetch residents when the component mounts or when year/type changes
  }, [type, selectedYear, token]); // Add selectedYear to dependencies to trigger refetch when it changes

  const calculateAge = (dob) => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(dob).getFullYear();
    return currentYear - birthYear;
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[94%]">
        <div className="flex justify-between items-center mb-10  space-x-3">
          {/* <div className="font-bold text-3xl md:text-4xl ">Residents</div> */}
          <div className="font-bold text-2xl mr-[50px] mt-[10px] sm:text-3xl md:text-4xl mb-4 sm:mb-5">Residents</div>



          {/* Pass setSelectedYear to DropdownYearResident */}
          <DropdownYearResident setSelectedYear={setSelectedYear} />
          <DropdownResident />
        </div>
        <div>
          {residents.length > 0 ? (
            residents.map((resident) =>
              resident.attributes.residents.data.map((EachResident) => {
                const profileImgUrl = EachResident.attributes.profile_img_url?.data?.attributes?.url
                  ? `http://localhost:1337${EachResident.attributes.profile_img_url.data.attributes.url}`
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
            )
          ) : (
            <div>Loading.....</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentList;
