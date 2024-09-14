import React from 'react';
import PromgramInfoBox from '../../components/ProgramInfoBox';
import { Link } from 'react-router-dom';

const TaskPage = () => {
  const handleSave = () => {
    console.log('Save button clicked');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
        <div className="w-[95%] flex flex-row justify-between items-center mb-6">
          <Link to="/program">
            <button className="bg-gray-300 text-black py-2 px-6 sm:px-8 rounded mb-4 mt-2  sm:mb-0">
              Back
            </button>
          </Link>
          <select className="bg-white border border-gray-300 py-2 px-4  rounded">
            <option>Date picker</option>
          </select>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 text-center">
          Clean the leaf
        </h1>

        <img
          src="/ger.webp"
          alt="Clean the leaf"
          className="w-1/3 md:w-1/4 h-auto object-cover rounded-lg mb-2"
        />

        <div className="w-[95%] overflow-x-auto">
          <table className="w-full mt-10 bg-white rounded-lg">
            <tbody>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
              <PromgramInfoBox name="Kim In" score="100" icon="✅"/>
            </tbody>
          </table>
        </div>

     
      </div>
      <button
          onClick={handleSave}
          className=" bg-green-700 text-white md:text-xl md:mt-6 py-2 px-4 ml-8 md:px-14 md:ml-14 sm:px-10 rounded"
        >
          Save
        </button>
    </>
  );
};

export default TaskPage;
