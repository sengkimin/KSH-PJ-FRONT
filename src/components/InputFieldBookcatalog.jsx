import React from 'react';

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2">{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="w-1/2 p-3 border rounded-lg border-gray-400" 
            />
        </div>
    );
};

export default InputField;
