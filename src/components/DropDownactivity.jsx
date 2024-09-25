



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownActivity = ({ setSelectedactivity }) => {
  const [activity, setactivity] = useState([]);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://strapi.ksh.thewmad.info/api/program-types", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setactivity(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleaActivityChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedactivity(selectedYear);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <label
        className="block text-[16px] md:text-xl font-bold"
        htmlFor="activity"
      >
        Program
      </label>
      <select
        id="activity"
        onChange={handleaActivityChange}
        className="p-2 border border-stone-600 rounded-md outline-none mt-1 sm:mt-0 h-9 md:w-44 w-[90px]"
      >
        <option value="all">All</option>
        {activity?.map((eachactivity) => (
          <option key={eachactivity.id} value={eachactivity.attributes.program_type_name}>
            {eachactivity.attributes.program_type_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownActivity;












