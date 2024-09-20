import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DropdownYearResident = ({ setSelectedYear }) => {
  const [years, setYears] = useState([]); 
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/curricula", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setYears(response.data.data); // Set fetched curricula data
        console.log(response.data.data); // Log the response data for debugging
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear); // Directly update the parent component's state
  };

  return (
    <div className="mb-4 flex">
      <label className="block text-[16px] md:text-xl mt-5 md:mt-4 mr-6 font-bold" htmlFor="year">
        Year :
      </label>
      <select
        id="year"
        onChange={handleYearChange} // Handle year change on selection
        className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
      >
        <option value="">Select Year</option> {/* Default option */}
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
