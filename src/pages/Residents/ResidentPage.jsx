import React, { useEffect, useState } from 'react';
import BoxResident from '../../components/BoxResident';
import DropdownResident from '../../components/ DropdownResident';
import axios from 'axios';

const ResidentList = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/beneficiaries');
        const data = response.data?.data || [];  
        setResidents(data);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchResidents();
  }, []);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-[94%]'>
        <div className='flex justify-between items-center mb-10'>
          <div className='font-bold text-4xl'>Residents</div>
          <DropdownResident />
        </div>
        <div>
          {residents.map(resident => (
            <BoxResident
              key={resident.id}
              image="student.jpg"  
              name={resident.attributes.fullname_english}
              age={resident.attributes.type_of_disability}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentList;
