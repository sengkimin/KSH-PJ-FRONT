import React, { useState } from 'react'; 
const DropdownResident = () => {
  const [type, setType] = useState(""); 

  return (
    <div className="mb-4 flex">
      <label className="block text-xl  mt-3" htmlFor="type">
      Level :
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className=" p-2 border border-stone-600 rounded-md outline-none mt-1 h-11"
      >
        <option value="">Year 1</option>
        <option value="admin">Year 2</option>
        <option value="group">Year 3</option>
        <option value="partner">Year 4</option>
        <option value="partner">Year 5</option>

      </select>
    </div>
  );
};

export default DropdownResident;