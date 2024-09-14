import React, { useState } from 'react';

const PromgramInfoBox = ({ name, score, icon }) => {
  const [selectedOption, setSelectedOption] = useState('select');
  const [percentage, setPercentage] = useState('0%');
  const [displayedIcon, setDisplayedIcon] = useState(icon);

  const handleChange = (event) => {
    const value = event.target.value;

    let newPercentage = '0%';
    let newIcon = icon;

    switch (value) {
      case 'correct':
        newPercentage = '100%';
        newIcon = '✅';
        break;
      case 'incorrect':
        newPercentage = '0%';
        newIcon = '❌';
        break;
      case 'equal':
        newPercentage = '50%';
        newIcon = '🔄';
        break;
      default:
        newPercentage = '0%';
        newIcon = icon;
    }

    setPercentage(newPercentage);
    setDisplayedIcon(newIcon);
    setSelectedOption('select');
  };

  return (
    <tr>
      <td className="py-4 md:py-8 px-4 md:px-16 text-sm md:text-xl font-bold border">{name}</td>
      <td className="py-4 md:py-8 px-2  md:px-6 border">
        <div className="flex items-center">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-full bg-white border-none border-gray-300 md:ml-16 text-green-600 rounded-lg appearance-none
                       text-base sm:text-xl md:text-3xl lg:text-5xl
                       py-2 sm:py-2 md:py-3
                       px-2"
            style={{
              backgroundImage: "none",
            }}
          >
            <option value="select" className="text-green-600">🔽</option>
            <option value="correct">✅</option>
            <option value="incorrect">❌</option>
            <option value="equal">🔄</option>
          </select>
          <div className="flex flex-col items-center ">
            <span className="text-base sm:text-lg md:text-3xl md:mr-10">{displayedIcon}</span>
            <div className="text-gray-600 text-xs sm:text-sm md:mr-10 md:text-xl">{percentage}</div>
          </div>
        </div>
      </td>
      <td className="py-4 md:py-6 px-2 md:px-6 border">
        <input
          type="text"
          placeholder="Comment :"
          className="w-full py-2 md:py-3 lg:py-4 px-2 text-sm sm:text-base md:text-lg lg:text-xl"
        />
      </td>
    </tr>
  );
};

export default PromgramInfoBox;





