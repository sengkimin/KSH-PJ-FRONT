



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownYearResident = ({ setSelectedYear }) => {
  const [years, setYears] = useState([]);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://strapi.ksh.thewmad.info/api/curricula", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setYears(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);
  };

  return (
    <div className="mb-4 flex  sm:items-center ">
      <label
        className="block text-[16px] md:text-xl mt-5 sm:mt-4 mr-4 font-bold  "
        htmlFor="year"
      >
        Year :
      </label>
      <select
        id="year"
        onChange={handleYearChange}
        className="p-2 border border-stone-600 rounded-md outline-none mt-3 sm:mt-3 h-9  md:w-44 w-[90px] "
      >
        <option value="">Select Year</option>
        {years?.map((eachYear) => (
          <option key={eachYear.id} value={eachYear.attributes.curriculum_name}>
            {eachYear.attributes.curriculum_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownYearResident;












