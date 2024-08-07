import React from "react";
const DataTable = ({ data }) => {
    const headers = Object.keys(data[0]);
    return (
        <table className='w-full bg-white   border-gray-500 border rounded-2xl overflow-hidden '>
            <thead>
                <tr className="w-full bg-gray-300 border-b ">
                    {headers.map((header) => (
                        <th key={header} className="py-4 px-4 border-r text-left">
                            {header.charAt(0).toUpperCase() + header.slice(1)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {headers.map((header) => (
                            <td key={header} className="py-4 px-4 border-b">{item[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default DataTable;