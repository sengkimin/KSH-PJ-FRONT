import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownYearResident = ({ selectedYear, setSelectedYear }) => {
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
    const selectedYearValue = e.target.value;
    setSelectedYear(selectedYearValue);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
  <label
    className="block text-[16px] md:text-xl font-bold"
    htmlFor="year"
  >
    Year
  </label>
  <select
    id="year"
    value={selectedYear} // Set the selected value
    onChange={handleYearChange}
    className="p-2 border border-stone-600 rounded-md outline-none mt-1 sm:mt-0 h-9 md:w-44 w-[90px]"
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
