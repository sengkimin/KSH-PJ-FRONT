import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShortUniqueId from 'short-unique-id';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChecklistGenerator = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('1');
  const [levels, setLevels] = useState([]);
  const [levelD, SetlevelD] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  const [selectedcurriculum, setSelectedcurriculum] = useState('1');
  const [loading, setLoading] = useState(false);
  
  console.log('Selected Level:', selectedLevel);  // Log selected level
  console.log('Levels:', levels);  // Log all available levels
  console.log('Selected Curriculum:', selectedcurriculum);  // Log selected curriculum
  console.log('Curriculum:', curriculum);  // Log all available curriculum

  const BASE_URL = "https://strapi.ksh.thewmad.info/api";

  // Function to retrieve curriculum program levels
  const getCurriculumProgramLevels = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/programs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Curriculum Program Levels:", response.data.data);  // Log fetched levels
      setLevels(response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving curriculum program levels:", error.response ? error.response.data : error.message);
      throw new Error("Failed to retrieve curriculum program levels.");
    }
  };

  const getCurriculum = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/curricula`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Curriculum:", response.data.data);  // Log fetched curriculum
      setCurriculum(response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving curriculum:", error.response ? error.response.data : error.message);
      throw new Error("Failed to retrieve curriculum.");
    }
  };

  useEffect(() => {
    const fetchCurriculumLevels = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          await getCurriculumProgramLevels(token);
        } catch (error) {
          console.error("Error fetching curriculum levels:", error.message);
        }
      }
    };

    fetchCurriculumLevels();

    const fetchCurriculumYears = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          await getCurriculum(token);
        } catch (error) {
          console.error("Error fetching curriculum years:", error.message);
        }
      }
    };

    fetchCurriculumYears();

    const fectlevelforDelete = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await axios.get(`${BASE_URL}/curriculum-program-levels?populate[residents]=*&populate[activity][populate]=program_activity.img_url&populate[program_level]=*&populate[curriculum]=*&filters[program_level][id][$eq]=${selectedLevel}&filters[curriculum][id][$eq]=${selectedcurriculum}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('fecthlevelforDelete Response:', response.data.data[0]);  // Log the response for level data
        SetlevelD(response.data.data[0]);
        return response.data;
      } catch (error) {
        console.error("Error retrieving curriculum program levels:", error.response ? error.response.data : error.message);
        throw new Error("Failed to retrieve curriculum program levels.");
      }
    };

    fectlevelforDelete();
  }, [selectedLevel, selectedcurriculum]);

  // Function to delete checklists within the selected date range
  const handleDelete = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('jwtToken');
      console.log("Deleting checklists from:", fromDate, "to:", toDate);  // Log date range for deletion
  
      const residents = levelD.attributes.residents.data;
      console.log("Residents to delete checklists for:", residents);  // Log residents involved
  
      for (const resident of residents) {
        const response = await axios.get(`${BASE_URL}/resident-checklists`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            filters: {
              resident: resident.id,
              checklist_date: { $gte: fromDate, $lte: toDate },
            },
          },
        });
  
        // Delete each checklist entry found in the date range
        const checklists = response.data.data;
        console.log("Found checklists for resident:", resident.id, checklists);  // Log checklists found
  
        for (const checklist of checklists) {
          await axios.delete(`${BASE_URL}/resident-checklists/${checklist.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(`Deleted checklist with ID: ${checklist.id}`);  // Log deletion of checklist
        }
      }
      // console.success('Checklists deleted successfully.');
      toast.success("All checklists deleted successfully!", {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      toast.error("Failed to generated the data. Make sure that you put the date.", {
        position: "top-center",
        autoClose: 5000,
      });
      console.error('Error during checklist deletion:', error.message);
    } finally {
      setLoading(false);  // Unlock the UI
    }
  };
  

  function getDaysBetweenDates(fromDate, toDate) {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const timeDifference = end - start;
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    return Math.floor(timeDifference / millisecondsInADay);
  }

  const createEntry = async (token, contentType, entryData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/${contentType}`,
        { data: entryData },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(`Entry created for ${contentType}:`, response.data);  // Log created entry
      return response.data;
    } catch (error) {
      console.error(`Error creating entry for ${contentType}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create entry for ${contentType}.`);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('Token not found.');
  
      const uid = new ShortUniqueId({ length: 10 });
      const nbDay = getDaysBetweenDates(fromDate, toDate);
  
      console.log('Creating checklist for curriculum:', selectedcurriculum, 'and level:', selectedLevel);  // Log creation request
      console.log('Curriculum Data:', JSON.stringify(levelD, null, 2));  // Log detailed level data
  
      // Check if levelD is available and has the required structure
      if (!levelD || !levelD.attributes) {
        throw new Error('Invalid level data (levelD is missing or malformed).');
      }
  
      const activities = levelD.attributes.activity || [];
      const residents = levelD.attributes.residents?.data || [];
  
      console.log('Activities:', activities);  // Log activities for the level
      console.log('Residents:', residents);  // Log residents for the level
  
      const contentType = "curriculum-schedules";
      const levelName = levelD.attributes.program_level.data?.attributes?.program_level_name || 'Unknown Level';
      const curriculumName = levelD.attributes.curriculum.data?.attributes?.curriculum_name || 'Unknown Curriculum';
  
      const entryData = {
        training_code: uid.toString(),
        from_date: fromDate,
        to_date: toDate,
        curriculum_program_level: levelD.id,
        description: `Auto generate schedule of ${curriculumName} - ${levelName} from ${fromDate} to ${toDate}; #day(s) ${nbDay}; #resident(s) ${residents.length}`,
      };
  
      const transaction = await createEntry(token, contentType, entryData);
      console.log('Transaction:', transaction);  // Log created transaction
  
      // Ensure residents is an array before looping
      for (const resident of residents) {
        let currentDate = new Date(fromDate);
        const endDate = new Date(toDate);
  
        // Loop through each day between fromDate and toDate for each resident
        while (currentDate <= endDate) {
          // Loop through each activity for the resident on the current date
          for (const activity of activities) {
            const checklistContentType = "resident-checklists";
            const checklistEntryData = {
              curriculum_schedule: transaction.data.id,
              checklist_date: currentDate.toISOString().split('T')[0],
              checklist_time: activity.activity_time,
              program_activity: activity.program_activity.data.id,
              resident: resident.id,
              description: `Generated checklist for ${curriculumName} - ${levelName} on ${currentDate.toISOString().split('T')[0]}`,
            };
  
            const checklist = await createEntry(token, checklistContentType, checklistEntryData);
            console.log('Generated checklist:', checklist);  // Log checklist creation
          }
  
          currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }
      }
  
      console.log('All checklists generated successfully.');
      toast.success("All checklists generated successfully!", {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      toast.error("Failed to generated the data. Make sure that you put the date.", {
        position: "top-center",
        autoClose: 5000,
      });
      console.error('Error during checklist generation:', error.message);
    } finally {
      setLoading(false); // Unlock the layout
    }
  };
  
  return (
    <div className="relative max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
    {/* Loading overlay */}
    {loading && (
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
        <div className="text-white text-lg font-semibold">Processing...</div>
      </div>
    )}

    <h1 className="text-2xl font-bold text-center mb-6">Delete and Generate Checklists</h1>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
      <input 
        type="date" 
        value={fromDate} 
        onChange={e => setFromDate(e.target.value)} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
      <input 
        type="date" 
        value={toDate} 
        onChange={e => setToDate(e.target.value)} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Curriculum</label>
      <select 
        value={selectedcurriculum} 
        onChange={e => setSelectedcurriculum(e.target.value)} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {curriculum.map(curriculums => (
          <option key={curriculums.id} value={curriculums.id}>
            {curriculums.attributes.curriculum_name}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
      <select 
        value={selectedLevel} 
        onChange={e => setSelectedLevel(e.target.value)} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {levels.map(level => (
          <option key={level.id} value={level.id}>
            {level.attributes.program_level_name}
          </option>
        ))}
      </select>
    </div>

    <div className="flex justify-between">
      <button 
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={handleDelete}
        disabled={loading} // Disable button while loading
      >
        Delete Checklist
      </button>
      <button 
        className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={handleSubmit}
        disabled={loading} // Disable button while loading
      >
        Generate Checklist
      </button>
      {/* <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        /> */}
    </div>
    <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        /> 
  </div>
  );
};

export default ChecklistGenerator;
