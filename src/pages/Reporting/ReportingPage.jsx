import React, { useState, useEffect } from 'react';
import ScrollTable from '../../components/ScrollTable';
import "react-datepicker/dist/react-datepicker.css";
import DropdownYearResident from '../../components/DropdownYearResident';
import axios from 'axios';

const Reporting = () => {
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [selectedYear, setSelectedYear] = useState(""); 
  const [selectedOption, setSelectedOption] = useState("today");
  const [customDate, setCustomDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const selectedDate = selectedOption === "today" ? today : customDate;
  
  const [checklistData, setChecklistData] = useState(null); // State to hold API data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle any error
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    // Function to fetch the data
    const fetchData = async () => {
      try {
        // API request using axios
        const response = await axios.get(
          `http://localhost:1337/api/resident-checklists?populate[resident]=*&populate[program_activity][populate]=program_type&populate[curriculum_schedule][populate][curriculum_program_level][populate]=program_level,curriculum&filters[checklist_date][$eq]=${selectedDate}&filters[program_activity][program_type][program_type_name][$eq]=Living%20Routine&filters[curriculum_schedule][curriculum_program_level][curriculum][curriculum_name][$eq]=KSH_Curriculum_2024&filters[curriculum_schedule][curriculum_program_level][program_level][program_level_name][$eq]=Level%201`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Store the data in state
        setChecklistData(response.data.data);
      } catch (err) {
        // Handle any error
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        // End loading state
        setLoading(false);
      }
    };

    // Call the function
    fetchData();
  }, [token, selectedDate]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (e) => {
    setCustomDate(e.target.value);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {checklistData && checklistData.length > 0 && (
        <div className="w-[92%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            {/* button date type today */}
            <div>
              <select
                className="bg-white border border-gray-300 py-2 px-4 rounded"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="today">Today</option>
                <option value="custom">Custom</option>
              </select>

              {selectedOption === "custom" && (
                <input
                  type="date"
                  className="bg-white border border-gray-300 py-2 px-4 rounded mt-2"
                  value={customDate}
                  onChange={handleDateChange}
                />
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <label className="block text-[16px] md:text-xl mt-5 md:mt-4 mr-6 font-bold" htmlFor="level">
                  Level :
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
                >
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  <option value="5">Year 5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 justify-between">
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 border border-stone-600 rounded-md outline-none mt-2 h-10 w-20 md:w-36"
            >
              <option value="">All</option>
              <option value="General%20Hygein">General Hygein</option>
              <option value="Personal%20Hygein">Personal Hygein</option>
              <option value="Living%20Routine">Living Routine</option>
              <option value="Woking%20Routine">Working Routine</option>
            </select>

            <div className="space-x-4">
              <DropdownYearResident setSelectedYear={setSelectedYear} />
            </div>
          </div>

          <div className="text-green-700 text-center text-xl md:text-3xl font-bold mt-10">
            Daily Schedule Follow-Up
          </div>

          <div className="mt-10">
         
      <div className="w-full max-w-full border border-gray-300 overflow-x-auto">
        <div className="scale-125 origin-top-left">
          <table className="min-w-[800px] border-collapse table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Program Level</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Program Type</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Resident</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Image</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Name</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Activity Date</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Score Point</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Comment</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">Staff or Leader PWDs By</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">Staff or Leader PWDs Comment</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">PWDs Respond By</th>
                <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300 text-green-700">PWDs Comment</th>
              </tr>
            </thead>
            <tbody>
            {checklistData.map((item, index) => {
              const { attributes } = item;
              const resident = attributes.resident.data.attributes;
              const programActivity = attributes.program_activity.data.attributes;
              const curriculumSchedule = attributes.curriculum_schedule.data.attributes;
              const programLevel = curriculumSchedule.curriculum_program_level.data.attributes.program_level.data.attributes;
              
              return (
                <ScrollTable
                  key={index} // Always use a unique key when mapping
                  level={programLevel.program_level_name}
                  resident={resident.fullname_english} 
                  image="/resident.jpg" // Adjust if there's an actual resident image URL
                  actname={programActivity.program_activity_name}
                  actdate={attributes.checklist_date}
                  score="100/100" // Replace this with actual score if available
                  com={attributes.description || "No comments"} 
                  slead="User A" // Replace with supervisor lead data if available
                  scom="Normal" // Replace with supervisor comment data if available
                  pwdby="Yes" // Replace with data if available
                  pwdcom="Nice" // Replace with pwd comment data if available
                />
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reporting;
