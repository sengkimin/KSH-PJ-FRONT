import React, { useState } from 'react';
import ScrollTable from '../../components/ScrollTable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reporting = () => {
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [resident, setResident] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);}


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
            className="p-2 border border-stone-600 rounded-md outline-none mt-2 h-10 w-20 md:w-36"
          >
            <option value="">Program Type</option>
            <option value="general">General Hygiene</option>
            <option value="personal">Personal Hygiene</option>
            <option value="factory">Living Routine</option>
          </select>
  
    



          <div className="space-x-4 ">
        <DatePicker
   
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="p-2 border border-stone-600 rounded-md outline-none w-32 h-9 mt-2 "
        />




          <select
            id="resident"
            value={resident}
            onChange={(e) => setResident(e.target.value)}
            className="p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
          >
            <option value="">Year</option>
            <option value="oldStudent">2024</option>
            <option value="newStudent">2025</option>
          </select>
          </div>
          </div>
  

      <div className="mt-20">
        <ScrollTable date="7:00 AM" day="Monday" activity="Clean the leaf" />
     


      </div>
    </div>
  );
};


export default Reporting;
// 

