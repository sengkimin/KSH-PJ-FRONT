
import React from 'react';
import {Link} from 'react-router-dom'

const Assesment = () => {
  return(
  <>
   <div>Hello from Program page</div>
  <Link to="/program/:id">
  <button className='text-blue-900'>Go to ProgramInfo</button>
  </Link>
  </>
  )

};
 
export default Assesment;
