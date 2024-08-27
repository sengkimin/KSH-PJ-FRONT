import React from 'react';
import { Link } from 'react-router-dom';

const Residents = () => {
  return (
    <>
      <div>Hello from Resident Page</div>
      <Link to="/residents/1" className='text-blue-400'>Resident Detail</Link> {/* Example link with id */}
    </>
  );
};

export default Residents;
