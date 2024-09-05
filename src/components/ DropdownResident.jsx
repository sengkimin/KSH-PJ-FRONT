import React, { useState } from 'react'; 
const DropdownResident = () => {
  const [type, setType] = useState(""); 

  return (
    <div className="mb-4 flex">
      <label className="block text-[16px] md:text-xl  mt-5 md:mt-4 mr-6 font-bold" htmlFor="type">
      Level :
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className=" p-2 border border-stone-600 rounded-md outline-none mt-3 h-9 w-20 md:w-28"
      >
        <option value="">Year 1 </option>
        <option value="admin">Year 2</option>
        <option value="group">Year 3</option>
        <option value="partner">Year 4</option>
        <option value="partner">Year 5</option>

      </select>
    </div>
  );
};

export default DropdownResident;