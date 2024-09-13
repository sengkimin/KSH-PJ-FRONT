import React, { useState } from 'react';
import ScrollTable from '../../components/ScrollTable';

const Reporting = () => {
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [resident, setResident] = useState('');

  const data = [
    { day: 'Monday', image: 'https://via.placeholder.com/150', activity: 'Morning Yoga' },
    { day: 'Tuesday', image: 'https://via.placeholder.com/150', activity: 'Breakfast' },
    { day: 'Wednesday', image: 'https://via.placeholder.com/150', activity: 'Meditation' },
    { day: 'Thursday', image: 'https://via.placeholder.com/150', activity: 'Lunch' },
    // Add more data as needed
  ];

  return (
    <div className="w-[92%] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="font-bold text-3xl md:text-4xl">Report</div>
     
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label className="block text-[16px] md:text-xl mt-5 md:mt-4 mr-6 font-bold" htmlFor="level">
            Level:
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
          >
            <option value="">Year 1</option>
            <option value="year2">Year 2</option>
            <option value="year3">Year 3</option>
            <option value="year4">Year 4</option>
            <option value="year5">Year 5</option>
          </select>
        </div>
        </div>

    
      </div>
      <div className="flex space-x-4 justify-between">
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
          >
            <option value="">Type</option>
            <option value="general">General Hygiene</option>
            <option value="personal">Personal Hygiene</option>
            <option value="factory">Factory</option>
            <option value="kitchen">Kitchen</option>
          </select>
          <select
            id="resident"
            value={resident}
            onChange={(e) => setResident(e.target.value)}
            className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
          >
            <option value="">Resident</option>
            <option value="oldStudent">Old Student</option>
            <option value="newStudent">New Student</option>
          </select>
        </div>

      <div className="mt-20">
        <ScrollTable date="7:00 AM" day="Monday" activity="Clean the leaf" />
     


      </div>
    </div>
  );
};

export default Reporting;
