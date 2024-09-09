import React from 'react';
import ProgramBox from '../../components/Programbox';
import axios from 'axios';
import { useState,useEffect } from 'react';

const ProgramPage = () => {
  const [data, setData] = useState(null);
  const [type, setType] = useState('1'); // Default value for the select
  // Get the current year
const currentYear = new Date().getFullYear();

// Create a Date object for December 31st of the current year
const lastDayOfYear = new Date(currentYear, 11, 31); // Month is 0-indexed, so 11 is December

// Extract the day, month, and year
const day = lastDayOfYear.getDate();
const month = lastDayOfYear.getMonth() + 1; // Adding 1 because getMonth() returns 0-based month
const year = lastDayOfYear.getFullYear();

// Display the result
console.log(`Last day of the current year: ${year}/${month}/${day}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/curriculum-program-levels?populate[residents]=*&populate[activity][populate]=program_activity.img_url&populate[program_level]=*&populate[curriculum]=*&filters[program_level][program_level_name][$eq]=Level%20${type}&filters[curriculum][end_date][$gte]=${year}-${month}-${day}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [type]);

  console.log(data);
  return (
    <div className="max-w-full mx-auto my-8 p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="mb-4 bg-gray-300 px-8 py-2 md:px-14 rounded">Back</button>
        <div className="mb-4 flex">
      <label className="block text-[16px] md:text-xl  mt-5 md:mt-4 mr-6 font-bold" htmlFor="type">
      Level :
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
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
        <h1 className="font-bold text-2xl md:text-4xl">Our Programs</h1>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <tbody>
          <ProgramBox 
            time="7:00 AM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="8:00 AM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="9:00 AM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="10:00 AM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="11:00 AM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="1:00 PM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
                <ProgramBox 
            time="2:00 PM" 
            image="/resident.png" 
            title="Clean the leaf" 
            residents="12" 
            done="08"
          />
          


        </tbody>
      </table>
    </div>
  );
};

export default ProgramPage;






