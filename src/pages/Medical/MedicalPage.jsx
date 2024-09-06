import React, { useEffect, useState } from 'react';
import BoxResident from '../../components/BoxResident';
import axios from 'axios';

const MedicalPage = () => {
  const [medical, setMedicals] = useState([]);

  useEffect(() => {
    const fetchMedicals = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1337/api/resident-medicals?filters[require_to_use][$eq]=true&populate[resident][populate]=profile_img_url'
        );
        const data = response.data?.data || [];
        setMedicals(data);
      } catch (error) {
        console.error('Error fetching the residents data:', error);
      }
    };

    fetchMedicals();
  }, []);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-[94%]'>
        <div className='flex justify-between items-center mb-10'>
          <div className='font-bold text-4xl'>Medical List</div>
        </div>
        <div>
          {medical.map((medicalItem) => {
            // Debugging: Log the medicalItem to verify the structure
            console.log(medicalItem);

            // Access image URL
            const imgUrl = medicalItem.attributes?.resident?.data?.attributes?.profile_img_url?.data?.[0]?.attributes?.formats?.thumbnail?.url;
            const fullImgUrl = imgUrl ? `http://localhost:1337${imgUrl}` : 'default.jpg';

            return (
              <BoxResident
                key={medicalItem.id}
                image={fullImgUrl}
                name={medicalItem.attributes?.resident?.data?.attributes?.fullname_english || 'Unknown Name'}
                medical_use={medicalItem.attributes?.require_to_use ? "True" : ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MedicalPage;
