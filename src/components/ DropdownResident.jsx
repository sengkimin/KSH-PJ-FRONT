

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const DropdownResident = () => {
  const [type, setType] = useState("1"); 
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    navigate('/', { state: { type: selectedType } });
  };

  return (
    <div className="mb-4 flex  sm:items-center">
      <label
        className="block text-[16px] md:text-xl mt-4 sm:mt-4 mr-6 font-bold"
        htmlFor="type"
      >
        Level :
      </label>
      <select
        id="type"
        value={type}
        onChange={handleNavigate}
        className="p-2 border border-stone-600 rounded-md outline-none mt-2 sm:mt-3 h-9 w-30 sm:w-20 md:w-28"
      >
        <option value="1">Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
        <option value="4">Year 4</option>
        <option value="5">Year 5</option>
      </select>
    </div>
  );
};

export default DropdownResident;
