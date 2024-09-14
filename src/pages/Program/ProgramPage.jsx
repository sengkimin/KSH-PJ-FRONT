

import React, { useState, useEffect } from 'react';
import ProgramBox from '../../components/ProgramBox';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProgramPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { type: initialType } = location.state || { type: '1' };
  const [type, setType] = useState(initialType); 
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      if (!type) return;

      const currentYear = new Date().getFullYear();
      const lastDayOfYear = new Date(currentYear, 11, 31);
      const day = lastDayOfYear.getDate().toString().padStart(2, '0');
      const month = (lastDayOfYear.getMonth() + 1).toString().padStart(2, '0');
      const year = lastDayOfYear.getFullYear();

      const url = `http://localhost:1337/api/curriculum-program-levels?populate[residents]=*&populate[activity][populate]=program_activity.img_url&populate[program_level]=*&populate[curriculum]=*&filters[program_level][program_level_name][$eq]=Level%20${type}&filters[curriculum][end_date][$gte]=${year}-${month}-${day}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const programs = response.data?.data || [];
        setData(programs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [type, token]);

  const extractImageUrl = (programActivity) => {
    const imgData = programActivity?.img_url?.data;
    return imgData ? `http://localhost:1337${imgData[0]?.attributes?.url}` : null;
  };

  return (
    <div className="max-w-full mx-auto my-8 p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <button className="mb-4 md:mb-0 bg-gray-300 px-8 py-2 md:px-14 rounded">
          Back
        </button>
        <div className="flex items-center">
          <label className="block text-[16px] md:text-xl mr-6 font-bold" htmlFor="type">
            Level:
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border border-stone-600 rounded-md outline-none h-9 w-20 md:w-28"
          >
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center mb-14">
        <h1 className="font-bold text-3xl md:text-4xl">Our Programs</h1>
      </div>

      <div className="md:ml-20 text-2xl mb-8 font-semibold ml-4">
        Resident:
      </div>

      <div className="overflow-x-auto flex item-center">
        <table className="w-[90%] ml-4 md:ml-20 bg-white border border-gray-300">
          <tbody>
            {data.map((program) =>
              program.attributes.activity.map((activity) => {
                const imageUrl = extractImageUrl(activity.program_activity?.data?.attributes);

                return (
                  <ProgramBox
                    key={activity.id}
                    time={activity.activity_time.substring(0, 5)}
                    image={imageUrl}
                    title={activity.program_activity?.data?.attributes?.program_activity_name}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgramPage;

