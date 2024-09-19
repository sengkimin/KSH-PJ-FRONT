import React, { useState, useEffect } from "react";
import ProgramInfoBox from "../../components/ProgramInfoBox";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskPage = () => {
  const [programInfo, setProgramInfo] = useState([]);
  const token = localStorage.getItem("jwtToken");
  const location = useLocation();
  const { image } = location.state || {};
  const { level, title } = useParams();
  const [selectedOption, setSelectedOption] = useState("today");
  const [customDate, setCustomDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const selectedDate = selectedOption === "today" ? today : customDate;
  // const URL = `http://localhost:1337/api/resident-checklists?filters[checklist_date][$eq]=${selectedDate}&filters[program_activity][program_activity_name][$eq]=${title}&filters[curriculum_schedule][curriculum_program_level][id][$eq]=${level}&populate[program_activity]=true&populate[score_point]=true&populate[resident]=true&populate[curriculum_schedule][populate][curriculum_program_level]=true`;

  const URL=`http://localhost:1337/api/resident-checklists?filters[checklist_date][$eq]=${selectedDate}&filters[program_activity][program_activity_name][$eq]=${title}&filters[curriculum_schedule][curriculum_program_level][id][$eq]=${level}&populate[program_activity]=true&populate[score_point]=true&populate[resident][populate]=profile_img_url&populate[curriculum_schedule][populate][curriculum_program_level]=true`;
  useEffect(() => {
    const fetchProgramInfo = async () => {
      if (!token || !title || !level) {
        console.error("Missing required parameters");
        return;
      }

      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProgramInfo(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching the residents data:", error);
      }
    };

    fetchProgramInfo();
  }, [URL, token, title, level]);

  const handleSave = async () => {
    try {
      for (const program of programInfo) {
        const id = program.id;
        const value = program.value; // Use value instead of percentage
        const comment = program.comment;

        const response = await axios.put(
          `http://localhost:1337/api/resident-checklists/${id}`,
          {
            data: {
              score_point: value === "100%" ? 1 : value === "50%" ? 3 : 2,
              description: comment || "No comment",
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          toast.success("Data saved successfully!", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      }
    } catch (error) {
      toast.error("Failed to save the data. Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
      console.error("Error updating the checklist:", error);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "today") {
      console.log(`Today's date selected: ${today}`);
    }
  };

  const handleDateChange = (e) => {
    setCustomDate(e.target.value);
    console.log(`Custom date selected: ${e.target.value}`);
  };

  const handleValueChange = (programId, newValue) => {
    setProgramInfo((prevInfo) =>
      prevInfo.map((program) =>
        program.id === programId ? { ...program, value: newValue } : program
      )
    );
  };

  const handleCommentChange = (programId, newComment) => {
    setProgramInfo((prevInfo) =>
      prevInfo.map((program) =>
        program.id === programId ? { ...program, comment: newComment } : program
      )
    );
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
        <div className="w-[95%] flex flex-row justify-between items-center mb-6">
          <Link to="/program">
            <button className="bg-gray-300 text-black py-2 px-6 sm:px-8 rounded mb-4 mt-2 sm:mb-0">
              Back
            </button>
          </Link>

          <div>
            <select
              className="bg-white border border-gray-300 py-2 px-4 rounded"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="today">Today</option>
              <option value="custom">Custom</option>
            </select>

            {selectedOption === "custom" && (
              <input
                type="date"
                className="bg-white border border-gray-300 py-2 px-4 rounded mt-2"
                value={customDate}
                onChange={handleDateChange}
              />
            )}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 text-center">
          {title}
        </h1>

        <img
          src={image}
          alt="Clean the leaf"
          className="w-1/3 md:w-1/4 h-auto object-cover rounded-lg mb-2"
        />

        <div className="w-[95%] overflow-x-auto">
          <table className="w-full mt-10 bg-white rounded-lg">
            <tbody>
              {programInfo.map((program) => (
                <ProgramInfoBox
                  key={program.id}
                  name={
                    program.attributes.resident.data.attributes.fullname_english
                  }
                  initialValue={
                    program.attributes.score_point.data
                      ? program.attributes.score_point.data.attributes
                          .score_point + "%" || "0%"
                      : program.value || "0%"
                  }
                  initialComment={
                    program.attributes.score_point.data
                      ? program.attributes.description || "No comment"
                      : program.comment || ""
                  }
                  onValueChange={(newValue) =>
                    handleValueChange(program.id, newValue)
                  }
                  onCommentChange={(newComment) =>
                    handleCommentChange(program.id, newComment)
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-green-700 text-white md:text-xl md:mt-6 py-2 px-4 ml-8 md:px-14 md:ml-14 sm:px-10 rounded cursor-pointer"
      >
        Save
      </button>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default TaskPage;
