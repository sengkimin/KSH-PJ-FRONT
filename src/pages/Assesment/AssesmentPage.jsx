import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const Assesment = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:1337/api/assessments`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const programs = response.data?.data || [];
        setData(programs);
        console.log(programs)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <div className="font-bold text-2xl mr-[50px] mt-[10px] sm:text-3xl md:text-4xl mb-4 sm:mb-5 ml-12">
        Assessment
      </div>
      {data.map((assessment) => 
         <div key={assessment.id} className="border-b-2 border-gray-300 py-6 flex bg-white mt-10 justify-between">
         <div className="w-1/2 text-left font-bold text-md md:text-lg lg:text-xl ml-10">Title: {assessment.attributes.title}</div>
         <div className="">
           <div className="text-[16px] md:text-lg lg:text-xl">
             <u><a href={assessment.attributes.google_form_url} className="text-blue-500 text-md md:text-lg lg:text-xl mr-10">Link</a></u>
           </div>
         </div>
       </div>
      )}
    </div>
  );
};

export default Assesment;
