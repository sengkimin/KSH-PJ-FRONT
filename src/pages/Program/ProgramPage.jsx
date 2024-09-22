import React, { useState, useEffect } from 'react';
import ProgramBox from '../../components/ProgramBox';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DropdownYearResident from '../../components/DropdownYearResident';

const ProgramPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState(""); 
  const { type: initialType } = location.state || { type: '1' };
  const [type, setType] = useState(initialType); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5; 
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      if (!type) return;

      const url = `http://localhost:1337/api/curriculum-program-levels?populate[residents]=*&populate[activity][populate]=program_activity.img_url&populate[program_level]=*&populate[curriculum]=*&filters[program_level][program_level_name][$eq]=Level%20${type}&filters[curriculum][curriculum_name][$eq]=${selectedYear}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const programs = response.data?.data || [];
        setData(programs);

        const totalActivities = programs.reduce((acc, program) => acc + program.attributes.activity.length, 0);
        const totalPageCount = Math.ceil(totalActivities / itemsPerPage);
        setTotalPages(totalPageCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [type, selectedYear, token]);

  const extractImageUrl = (programActivity) => {
    const imgData = programActivity?.img_url?.data;
    return imgData ? imgData[0]?.attributes?.url : null;
  };

  const extractLevel = (program) => {
    return program.attributes.curriculum.data.id;
  };

  const getPaginatedActivities = () => {
    const allActivities = data.flatMap(program => program.attributes.activity);
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allActivities.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedActivities = getPaginatedActivities();

  return (
    <div className="max-w-full mx-auto my-8 p-4">
      <div className="flex items-center justify-between mb-10">
        <DropdownYearResident setSelectedYear={setSelectedYear} />
        <div className="flex items-center space-x-6">
          <label className="block text-[16px] md:text-xl font-bold" htmlFor="type">
            Level :
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
        Activity Count: {data.reduce((acc, program) => acc + program.attributes.activity.length, 0)}
      </div>

      <div className="overflow-x-auto flex item-center">
        <table className="w-[90%] ml-4 md:ml-20 bg-white border border-gray-300">
          <tbody>
            {paginatedActivities.map((activity) => {
              const imageUrl = extractImageUrl(activity.program_activity?.data?.attributes);
              const level = extractLevel(data.find(program => program.attributes.activity.includes(activity))); // Extracting level

              return (
                <ProgramBox
                  key={activity.id}
                  level={level} // Using the extracted level here
                  time={activity.activity_time.substring(0, 5)}
                  image={imageUrl}
                  title={activity.program_activity?.data?.attributes?.program_activity_name}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-3">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgramPage;
