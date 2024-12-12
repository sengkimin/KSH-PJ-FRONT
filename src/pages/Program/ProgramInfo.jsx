import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const ProgramInfoBox = ({ profile, name, initialValue, initialComment, onValueChange, onCommentChange }) => {
  const getIconFromValue = (value) => {
    switch (value) {
      case '100%':
        return <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../correct-removebg-preview.png" alt="complete" />;
      case '0%':
        return <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../incorrect-removebg-preview.png" alt="incomplete" />;
      case '50%':
        return <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../medium-removebg-preview.png" alt="in progress" />;
      default:
        return <img src="./correct.jpg" alt="complete" />;
    }
  };

  const [selectedOption, setSelectedOption] = useState('select');
  const [value, setValue] = useState(initialValue ?? '0%');
  const [comment, setComment] = useState(initialComment || '');
  const [displayedIcon, setDisplayedIcon] = useState(getIconFromValue(initialValue ?? '0%'));

  useEffect(() => {
    if (initialValue === null || initialValue === undefined) {
      setSelectedOption('select');
    } else {
      setValue(initialValue);
      setDisplayedIcon(getIconFromValue(initialValue));

      if (initialValue === '100%') {
        setSelectedOption('1');
      } else if (initialValue === '0%') {
        setSelectedOption('2');
      } else if (initialValue === '50%') {
        setSelectedOption('3');
      }
    }

    setComment(initialComment || '');
  }, [initialValue, initialComment]);

  const handleChange = (selected) => {
    const selectedValue = selected.value;
    
    let newValue = '0%';
    let newIcon = getIconFromValue(newValue);

    switch (selectedValue) {
      case '1':
        newValue = '100%';
        newIcon = <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../correct-removebg-preview.png" alt="complete" />;
        break;
      case '2':
        newValue = '0%';
        newIcon = <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../incorrect-removebg-preview.png" alt="incomplete" />;
        break;
      case '3':
        newValue = '50%';
        newIcon = <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../medium-removebg-preview.png" alt="in progress" />;
        break;
      default:
        newValue = '0%';
        newIcon = getIconFromValue(newValue);
    }

    setValue(newValue);
    setDisplayedIcon(newIcon);
    setSelectedOption(selectedValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
    if (onCommentChange) {
      onCommentChange(newComment);
    }
  };

  const handleIconClick = () => {
    setSelectedOption('select');
  };

  const options = [
    { value: '1', label: <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../correct-removebg-preview.png" alt="complete" /> },
    { value: '2', label: <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../incorrect-removebg-preview.png" alt="incomplete" /> },
    { value: '3', label: <img className="w-6 h-6 sm:w-8 sm:h-6 md:w-8 md:h-8" src="../../medium-removebg-preview.png" alt="in progress" /> }
  ];

  return (
    <tr>
      <td className="py-4 md:py-8 px-4 md:px-16 text-sm md:text-xl font-bold border">
        <div className="flex flex-col md:flex-row items-center">
          {profile && (
            <img
              src={profile}
              alt="Profile"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full mr-4 object-cover"
            />
          )}
          <span>{name}</span>
        </div>
      </td>

      <td className="py-4 md:py-8 px-4 md:px-6 border">
        <div className="flex items-center">
        {selectedOption === 'select' ? (
  <Select
    value={options.find(option => option.value === selectedOption)}
    onChange={handleChange}
    options={options}
    className="w-full text-green-600 rounded-lg appearance-none"
    styles={{
      control: (provided) => ({
        ...provided,
        minHeight: '30px',                  // Compact height
        height: 'auto',                     // Automatically adjust height
        padding: '0.2rem 0.5rem',           // Compact padding
        fontSize: '0.875rem',               // Default font size
        borderColor: '#d1d5db',             // Light gray border
        cursor: 'pointer',                  // Pointer cursor
        '@media (max-width: 640px)': {      // Small screens (mobile)
          fontSize: '0.75rem',              // Smaller font size on mobile
          padding: '0.15rem 0.3rem',         // Less padding on small screens
        },
        '@media (min-width: 641px) and (max-width: 1024px)': {  // Medium screens (tablets)
          fontSize: '0.875rem',             // Default size for tablet screens
          padding: '0.2rem 0.5rem',         // Default padding for tablets
        },
      }),
      placeholder: (provided) => ({
        ...provided,
        fontSize: '0.875rem',               // Default font size for placeholder
        color: '#6b7280',                   // Slightly muted placeholder color
        '@media (max-width: 640px)': {      // Smaller font size for small screens
          fontSize: '0.75rem',              // Smaller placeholder text on mobile
        },
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: '0.2rem',                  // Compact dropdown indicator
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',                    // Hide the indicator separator
      }),
      singleValue: (provided) => ({
        ...provided,
        fontSize: '0.875rem',               // Default size for selected value
        '@media (max-width: 640px)': {      // Smaller selected value on mobile
          fontSize: '0.75rem',              // Smaller font size for mobile
        },
      }),
      option: (provided) => ({
        ...provided,
        fontSize: '0.875rem',               // Default font size for options
        padding: '0.5rem',                  // Default padding for options
        '@media (max-width: 640px)': {      // Smaller padding and font size on mobile
          fontSize: '0.75rem',              // Smaller font size for options on mobile
          padding: '0.4rem',                // Less padding for options on mobile
        },
      }),
    }}
  />
) : (
  <div className="flex items-center cursor-pointer" onClick={handleIconClick}>
    <span className="text-base sm:text-lg md:text-3xl text-center">{displayedIcon}</span>
    <div className="text-gray-600 text-xs sm:text-sm md:text-xl ml-2">{value}</div>
  </div>
)}

        </div>
      </td>

      <td className="py-4 md:py-8 px-2 md:px-6 border">
        <textarea
          placeholder="Comment :"
          className="w-full py-1 md:py-1 lg:py-0.5 px-2 text-sm sm:text-base md:text-lg lg:text-xl border-gray-300 rounded-lg resize-none"
          value={comment}
          onChange={handleCommentChange}
        />
      </td>
    </tr>
  );
};

export default ProgramInfoBox;
