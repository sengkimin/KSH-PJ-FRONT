import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShortUniqueId from 'short-unique-id';

const ChecklistGenerator = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('1');
  const [levels, setLevels] = useState([]);
  const [levelD,SetlevelD] = useState([])
  console.log("selected",selectedLevel);
  // console.log('level',levels)
  console.log(levelD)
  
  const BASE_URL = "https://strapi.ksh.thewmad.info/api";

  // Function to retrieve curriculum program levels
  const getCurriculumProgramLevels = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/curriculum-program-levels`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          populate: {
            residents: true,
            program_level: true,
            curriculum: true,
            activity: {
              populate: { program_activity: true },
            },
          },
        },
      });
      // console.log("Curriculum Program Levels:", response.data.data);
      setLevels(response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving curriculum program levels:", error.response ? error.response.data : error.message);
      throw new Error("Failed to retrieve curriculum program levels.");
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


    const fectlevelforDelete = async () => {
      const token = localStorage.getItem('jwtToken')
      try {
        const response = await axios.get(`${BASE_URL}/curriculum-program-levels/${selectedLevel}`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            populate: {
              residents: true,
              program_level: true,
              curriculum: true,
              activity: {
                populate: { program_activity: true },
              },
            },
          },
        });
        console.log('fecthlevelforDelete',response.data.data);
        SetlevelD(response.data.data)
        return response.data;
      } catch (error) {
        console.error("Error retrieving curriculum program levels:", error.response ? error.response.data : error.message);
        throw new Error("Failed to retrieve curriculum program levels.");
      }
    };
    fectlevelforDelete();
  }, [selectedLevel]);
  
  // Function to delete checklists within the selected date range
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('jwtToken');

      // for (const level of levels) {
        const residents = levelD.attributes.residents.data;
        console.log("residents",residents);
        
        
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
          for (const checklist of checklists) {
            await axios.delete(`${BASE_URL}/resident-checklists/${checklist.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            console.log(`Deleted checklist with ID: ${checklist.id}`);
          }
        // }
      }
      console.log('Checklists deleted successfully.');
    } catch (error) {
      console.error('Error during checklist deletion:', error.message);
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
      console.log(`Entry created for ${contentType}:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error creating entry for ${contentType}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create entry for ${contentType}.`);
    }
  };  

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('Token not found.');
  
      const uid = new ShortUniqueId({ length: 10 });
      const nbDay = getDaysBetweenDates(fromDate, toDate);
  
      // levels.forEach(async (level) => {
        console.log(JSON.stringify(levelD, null, 2));
        const activities = levelD.attributes.activity;
        const residents = levelD.attributes.residents.data;
  
        // Generate a new transaction
        const contentType = "curriculum-schedules";
        const levelName = levelD.attributes.program_level.data.attributes.program_level_name;
        const curriculumName = levelD.attributes.curriculum.data.attributes.curriculum_name;
  
        const entryData = {
          training_code: uid.toString(),
          from_date: fromDate,
          to_date: toDate,
          curriculum_program_level: levelD.id,
          description: `Auto generate schedule of ${curriculumName} - ${levelName} from ${fromDate} to ${toDate}; #day(s) ${nbDay}; #resident(s) ${residents.length}`,
        };
  
        const transaction = await createEntry(token, contentType, entryData);
        console.log(transaction);
  
        residents.forEach((resident) => {
          let currentDate = new Date(fromDate);
          const endDate = new Date(toDate);
  
          while (currentDate <= endDate) {
            activities.forEach(async (activity) => {
              const checklistContentType = "resident-checklists";
              const checklistEntryData = {
                curriculum_schedule: transaction.data.id,
                checklist_date: currentDate.toISOString().split('T')[0],
                checklist_time: activity.activity_time,
                program_activity: activity.program_activity.data.id,
                resident: resident.id,
                description: `${transaction.data.id}, ${transaction.data.attributes.training_code}, ${transaction.data.attributes.from_date}, ${transaction.data.attributes.to_date}`,
              };
              const checklist = await createEntry(token, checklistContentType, checklistEntryData);
              console.log(checklist);
            });
            currentDate.setDate(currentDate.getDate() + 1);
          }
        });
      // });
    } catch (error) {
      console.error('Error during checklist generation:', error.message);
    }
  };  

  return (
    <div>
      <h1>Delete Checklists</h1>
      <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} />
      <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} />
      <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
        {levels.map(level => (
          <option key={level.id} value={level.id}>{level.attributes.program_level.data.attributes.program_level_name}</option>
        ))}
      </select>
      <button className='ml-5' onClick={handleDelete}>Delete Checklist</button>
      <button className='ml-5' onClick={handleSubmit}>Generate Checklist</button>
    </div>
  );
};

export default ChecklistGenerator;