import React from 'react';

function Image({Img}) {
  return (
    <div className=" display:flex;">
      <contain
        className="flex items-center  p-2 shadow-md border-b-[2px] "
        style={{ backgroundColor: '#F6F6F6' }}
      >
        <div className="display-flex">
          <img
            src="cat.jpg"
            alt="Logo"
            className="h-20 w-20 rounded-full bg-slate-500"
          />
        </div>
        <div className="text-center text-1xl text-right ml-10">
          <p className=' text-[#207137] '>Name:</p>
          <p>Age:</p>
        </div>
      </contain>
    </div>
  );
};

export default Image;