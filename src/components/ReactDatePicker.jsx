import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="mb-4">
      <h1>Date</h1>
      <DatePicker className=" p-2 border border-stone-600 rounded-md outline-none w-36 h-11 mr-5 mt-1"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}

export default ReactDatePicker;