import React, { useState } from 'react';

const ProgramInfoBox = ({ name, initialValue, initialComment, onValueChange, onCommentChange }) => {
  // Function to get the icon based on value
  const getIconFromValue = (value) => {
    switch (value) {
      case '100%':
        return '✅';
      case '0%':
        return '❌';
      case '50%':
        return '🔄';
      default:
        return '❓'; // Default icon
    }
  };

  const [selectedOption, setSelectedOption] = useState('select');
  const [value, setValue] = useState(initialValue || '0%');
  const [comment, setComment] = useState(initialComment || ''); // Initialize with initial comment
  const [displayedIcon, setDisplayedIcon] = useState(getIconFromValue(initialValue || '0%'));

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    let newValue = '0%';
    let newIcon = getIconFromValue(newValue);

    switch (selectedValue) {
      case '1':
        newValue = '100%';
        newIcon = '✅';
        break;
      case '2':
        newValue = '0%';
        newIcon = '❌';
        break;
      case '3':
        newValue = '50%';
        newIcon = '🔄';
        break;
      default:
        newValue = '0%';
        newIcon = getIconFromValue(newValue);
    }

    setValue(newValue);
    setDisplayedIcon(newIcon);
    setSelectedOption('select');
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setComment(newComment); // Update local state
    if (onCommentChange) {
      onCommentChange(newComment);
    }
  };

  return (
    <tr>
      <td className="py-4 md:py-8 px-4 md:px-16 text-sm md:text-xl font-bold border">{name}</td>
      <td className="py-4 md:py-8 px-2 md:px-6 border">
        <div className="flex items-center">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-full bg-white border-none border-gray-300 md:ml-16 text-green-600 rounded-lg appearance-none text-base sm:text-xl md:text-3xl lg:text-5xl py-2 sm:py-2 md:py-3 px-2"
            style={{ backgroundImage: "none" }}
          >
            <option value="select" className="text-green-600">🔽</option>
            <option value="1">✅</option>
            <option value="2">❌</option>
            <option value="3">🔄</option>
          </select>
          <div className="flex flex-col items-center">
            <span className="text-base sm:text-lg md:text-3xl md:mr-10">{displayedIcon}</span>
            <div className="text-gray-600 text-xs sm:text-sm md:mr-10 md:text-xl">{value}</div>
          </div>
        </div>
      </td>
      <td className="py-4 md:py-6 px-2 md:px-6 border">
        <input
          type="text"
          placeholder="Comment :"
          className="w-full py-2 md:py-3 lg:py-4 px-2 text-sm sm:text-base md:text-lg lg:text-xl"
          value={comment} // Display the initial comment
          onChange={handleCommentChange} // Update on change
        />
      </td>
    </tr>
  );
};

export default ProgramInfoBox;
