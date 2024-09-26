import React, { useState, useEffect, useRef } from 'react';
import ScrollTable from '../../components/ReportTable';
import "react-datepicker/dist/react-datepicker.css";
import DropdownYearResident from '../../components/DropdownYearResident';
import axios from 'axios';
import DropdownActivity from '../../components/DropDownactivity';
import { downloadExcel } from "react-export-table-to-excel";
import { Audio } from 'react-loader-spinner'


const Reporting = () => {
  const [level, setLevel] = useState('1');
  const [type, setType] = useState('all');
  const Year = localStorage.getItem('reportyear');
  const [selectedYear, setSelectedYear] = useState(Year || "");
  const [selectedOption, setSelectedOption] = useState("today");
  const [customDate, setCustomDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const selectedDate = selectedOption === "today" ? today : customDate;
  
  const [checklistData, setChecklistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError(new Error('Authentication token is missing.'));
        setLoading(false);
        return;
      }

      try {
        let url = `https://strapi.ksh.thewmad.info/api/resident-checklists?populate[resident]=*&populate[score_point]=*&populate[program_activity][populate]=program_type&populate[curriculum_schedule][populate][curriculum_program_level][populate]=program_level,curriculum&filters[checklist_date][$eq]=${selectedDate}&filters[curriculum_schedule][curriculum_program_level][curriculum][curriculum_name][$eq]=${selectedYear}&filters[curriculum_schedule][curriculum_program_level][program_level][program_level_name][$eq]=Level%20${level}&populate[program_activity][populate]=program_type,img_url`;

        if (type !== 'all') {
          url += `&filters[program_activity][program_type][program_type_name][$eq]=${type}`;
        }
    
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChecklistData(response.data.data);

      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response ? err.response.data : new Error('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, selectedDate, selectedYear, level, type]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (e) => {
    setCustomDate(e.target.value);
  };
   // Store the selected year in localStorage when it changes
   useEffect(() => {
    if (selectedYear) {
      localStorage.setItem('reportyear', selectedYear);
    }
  }, [selectedYear]);


  const totalPages = checklistData.length ? Math.ceil(checklistData.length / itemsPerPage) : 1;
  const currentItems = checklistData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  console.log(currentItems)

  const handleDownloadExcel = () => {
    const header = [
      "Program Level",
      "Program Type",
      "Resident",
      "Activity Name",
      "Activity Date",
      "Score Point",
      "Comment",
      "Staff or Leader PWDs By",
      "Staff or Leader PWDs Comment",
      "PWDs Respond By",
      "PWDs Comment"
    ];
  
    const body = checklistData.map(item => {
      const { attributes } = item;
  
      // Use optional chaining to safely access nested properties
      const resident = attributes.resident?.data?.attributes || {};
      const programActivity = attributes.program_activity?.data?.attributes || {};
      const curriculumSchedule = attributes.curriculum_schedule?.data?.attributes || {};
      const programLevel = curriculumSchedule.curriculum_program_level?.data?.attributes?.program_level?.data?.attributes || {};
  
      return [
        programLevel.program_level_name || "N/A",
        programActivity.program_type?.data?.attributes?.program_type_name || "N/A",
        resident.fullname_english || "N/A",
        programActivity.program_activity_name || "N/A",
        attributes.checklist_date || "N/A",
        attributes.score_point?.data?.attributes?.score_point != null 
          ? `${attributes.score_point.data.attributes.score_point}/100` 
          : "0/100",
        attributes.description || "No comments",
        "User A",
        "Normal",
        "Yes",
        "Nice"
      ];
    });
  
    // Check if body is empty before downloading
    if (body.length === 0) {
      alert("No data available for download.");
      return;
    }
  
    downloadExcel({
      fileName: "Checklist Data",
      sheet: "Data",
      tablePayload: {
        header,
        body
      }
    });
  };  

  console.log(checklistData)
  return (
    <div>
      {loading && <div className="flex justify-center items-center h-screen">
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperClass="flex justify-center items-center"
    />
  </div>}
      {error && <p>{error.message}</p>}
     
      <div className="w-[92%] mx-auto">
        <div className="flex justify-between items-center mb-8">
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
                Level
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
                <option value="5-6">Year 5</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 justify-between">
        <DropdownYearResident selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        {/* <div className="space-x-4"> */}
          <DropdownActivity setSelectedactivity={setType} />
          {/* </div> */}
        </div>

        <div className="text-green-700 text-center text-xl md:text-3xl font-bold mt-10">
          Daily Schedule Follow-Up
        </div>

        {/* Export to Excel button */}
        <div className="flex justify-end pt-4">
          <button onClick={handleDownloadExcel} className="bg-[#207137] text-white px-2 py-2 rounded">
            Export to Excel
          </button>
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
                    <th className="p-3 px-4 md:p-5 md:px-6 whitespace-nowrap border border-gray-300">Image Activity</th>
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
                {currentItems.length > 0 ? (
  currentItems.map((item, index) => {
    const { attributes } = item;

    const resident = attributes.resident?.data?.attributes || {};
    const programActivity = attributes.program_activity?.data?.attributes || {};
    const curriculumSchedule = attributes.curriculum_schedule?.data?.attributes || {};
    const programLevel = curriculumSchedule.curriculum_program_level?.data?.attributes?.program_level?.data?.attributes || {};

    // Safely access the image URL
    const image = programActivity.img_url?.data?.[0]?.attributes?.url || ""; // Fallback to empty string if image is not available

    console.log(image)

    return (
      <ScrollTable
        key={index}
        level={programLevel.program_level_name || "N/A"}
        resident={resident.fullname_english || "N/A"} 
        type={programActivity.program_type?.data?.attributes?.program_type_name || "N/A"}
        image={image} // Keep image for rendering
        actname={programActivity.program_activity_name || "N/A"}
        actdate={attributes.checklist_date || "N/A"}
        score={attributes.score_point?.data?.attributes?.score_point != null ? `${attributes.score_point.data.attributes.score_point}/100` : "0/100"}
        com={attributes.description || "No comments"} 
        slead="User A" 
        scom="Normal" 
        pwdby="Yes" 
        pwdcom="Nice" 
      />
    );
  })
) : (
  <tr>
    <td colSpan="12" className="text-center">No data available</td>
  </tr>
)}

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {checklistData.length > 0 && (
          <div className="flex justify-center items-center mt-4 space-x-3">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-[#207137] text-white rounded'}`}
            >
              Previous
            </button>
            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-[#207137] text-white rounded'}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reporting;
