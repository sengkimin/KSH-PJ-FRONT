import React, { useState, useEffect } from 'react';

const ProgramInfoBox = ({ profile, name, initialValue, initialComment, onValueChange, onCommentChange }) => {
  const getIconFromValue = (value) => {
    switch (value) {
      case '100%':
        return '✅';
      case '0%':
        return '❌';
      case '50%':
        return '🔄';
      default:
        return '❓';
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
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full bg-white border-none border-gray-300 text-green-600 rounded-lg appearance-none text-base sm:text-xl md:text-3xl lg:text-5xl py-2 px-1 text-center"
              style={{ backgroundImage: "none" }}
            >
              <option value="select" className="text-green-600">🔽</option>
              <option value="1">✅</option>
              <option value="2">❌</option>
              <option value="3">🔄</option>
            </select>
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
