import React, { useState } from 'react';
import ReportTable from '../../components/ReportTable';
import "react-datepicker/dist/react-datepicker.css";

const Reporting = () => {
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [resident, setResident] = useState('');



  return (
    <div className="w-[92%] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="font-bold text-3xl md:text-4xl">Reporting</div>
     
      
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
          <div className='text-green-700 text-center text-xl md:text-3xl font-bold mt-10'>
          Daily Schedule Follow-Up
          </div>
     
  

      <div className="mt-10">
        <ReportTable level='Level 1' type='General Hyien' resident='alya' image='/resident.jpg' actname='Clean the Leaf' actdate='18/09/2024' score='100/100' com='Very good' slead='User A' scom='Normal' pwdby='Yes' pwdcom='Nice' />
     


      </div>
    </div>
  );
};


export default Reporting;


