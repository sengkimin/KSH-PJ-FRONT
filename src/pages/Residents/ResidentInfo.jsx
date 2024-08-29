import React from 'react';
import { Link } from 'react-router-dom';
import ResidentBoxInfo from '../../components/ResidentBoxInfo';

const ResidentInfo = () => {
  return (
    <>
      <div className="flex space-x-4 mb-6">
        <Link to='/residents'>
          <button className="bg-gray-300 px-6 py-1.5 md:px-12 md:py-2 rounded">
            Back
          </button>
        </Link>
        <Link to='/activities'>
        <button className="bg-green-700 text-white px-6 py-1.5 md:px-10 md:py-2 rounded">
          Activities
        </button>
        </Link>
      </div>
      
      <div className="flex justify-center mb-6">
        <img
          src="/student.jpg"
          alt="Student"
          className="h-24 w-24 md:h-36 md:w-36 rounded-full"
        />
      </div>
      
      <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
        Detail Information of Student
      </h1>
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <div className="bg-white w-full max-w-xl md:max-w-4xl lg:max-w-7xl rounded-lg shadow p-4 md:p-6 text-sm md:text-base">
          <ResidentBoxInfo name="Full Name"/>
          <ResidentBoxInfo name="Age"/>
          <ResidentBoxInfo name="Live in"/>
          <ResidentBoxInfo name="Family"/>
          <ResidentBoxInfo name="Birth certificate"/>
          <ResidentBoxInfo name="CV"/>
          <ResidentBoxInfo name="Health allow"/>
          <ResidentBoxInfo name="Permission"/>
          <ResidentBoxInfo name="Certificate of Disease"/>
          <ResidentBoxInfo name="ALD knowledge"/>
          <ResidentBoxInfo name="Contact"/>
          <ResidentBoxInfo name="Learn thing new to develop their self"/>
          <ResidentBoxInfo name="Mental retardation"/>
          <ResidentBoxInfo name="Down syndrome"/>
          <ResidentBoxInfo name="Mild autistic or Mild autism"/>
          <ResidentBoxInfo name="Cerebral palsy or Epilepsy"/>
        </div>
      </div>
    </>
  );
};

export default ResidentInfo;
