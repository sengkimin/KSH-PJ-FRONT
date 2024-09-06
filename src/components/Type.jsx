import React, { useState } from 'react'; 
const Type = () => {
  const [type, setType] = useState(""); 

  return (
    <div className="mb-4">
      <label className="block text-xs " htmlFor="type">
        Type
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className=" p-2 border border-stone-600 rounded-md outline-none mb-5 h-11 "
      >
        <option className='text-lg' value="">Personal Hygien</option>
        <option className='text-lg' value="admin">General Hygien </option>
        <option className='text-lg' value="education">Daily Follow up</option>
      </select>
    </div>
  );
};

export default Type;