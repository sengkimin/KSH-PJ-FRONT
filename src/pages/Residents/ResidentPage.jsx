import React, { useEffect, useState } from 'react';
import BoxResident from '../../components/BoxResident';
import DropdownResident from "../../components/ DropdownResident";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResidentList = () => {
  const [residents, setResidents] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const location = useLocation();
  const { type } = location.state || { type: "1" }; 

  useEffect(() => {
    const fetchResidents = async () => {
      if (!type) return;

      const currentYear = new Date().getFullYear();
      const lastDayOfYear = new Date(currentYear, 11, 31);
      const day = lastDayOfYear.getDate();
      const month = lastDayOfYear.getMonth() + 1;
      const year = lastDayOfYear.getFullYear();

      const url = `http://localhost:1337/api/curriculum-program-levels?filters[program_level][program_level_name][$eq]=Level%20${type}&filters[curriculum][end_date][$lte]=${year}-${month}-${day}&populate[residents][populate]=profile_img_url&populate=*`;

      try {
        const response = await axios.get(url,{
          headers: {
            'Authorization': `Bearer ${token}`,
            },
        });
        console.log('API Response:', response);
        const data = response.data?.data || [];
        console.log('Formatted Data:', data);
        setResidents(data);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchResidents();
  }, [type]);

  const calculateAge = (dob) => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(dob).getFullYear();
    return currentYear - birthYear;
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[94%]">
        <div className="flex justify-between items-center mb-10">
          <div className="font-bold text-3xl md:text-4xl">Residents</div>
          <DropdownResident />
        </div>
        <div>
          {residents.length > 0 ? (
            residents.map((resident) =>
              resident.attributes.residents.data.map((EachResident) => {
                const profileImgUrl = EachResident.attributes.profile_img_url?.data?.attributes?.url
                  ? `http://localhost:1337${EachResident.attributes.profile_img_url.data.attributes.url}`
                  : null;

               
                console.log('Profile Image URL:', profileImgUrl);

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
            <div>No residents found for this level.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentList;
