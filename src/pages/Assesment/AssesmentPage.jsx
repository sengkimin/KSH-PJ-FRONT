import React, { useState, useEffect } from "react";
import axios from "axios";

const Assesment = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of assessments per page
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://strapi.ksh.thewmad.info/api/assessments`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const programs = response.data?.data || [];
        setData(programs);
        console.log(programs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl mr-[50px] mt-[10px] sm:text-3xl md:text-4xl mb-4 sm:mb-5 ml-12">
        Assessment
      </div>
      {currentItems.map((assessment) => (
        <div key={assessment.id} className="border-b-2 border-gray-300 py-6 flex bg-white justify-between">
          <div className="w-1/2 text-left font-bold text-md md:text-lg lg:text-xl ml-10">
            Title: {assessment.attributes.title}
          </div>
          <div className="">
            <div className="text-[16px] md:text-lg lg:text-xl">
              <u>
                <a href={assessment.attributes.google_form_url} className="text-blue-500 text-md md:text-lg lg:text-xl mr-10">Link</a>
              </u>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>

        <span className="text-lg font-medium">
          {currentPage} of {totalPages} pages
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Assesment;
