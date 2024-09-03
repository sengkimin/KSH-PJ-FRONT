import React from 'react';
import Image from '../../components/Image';
import DropdownResident from '../../components/ DropdownResident';

const ResidentList = () => {
  return (
    <>
    <div>
      <div className='flex justify-between'>
      {/* <div className='ml-96'>
    <DropdownResident/>
    </div> */}
    <div className='font-bold text-2xl	mb-10 '>Resident</div>
    <DropdownResident/></div>
      <div className='md:90  text-xl'> 
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
      </div>

    </>

  );
};
export default ResidentList;