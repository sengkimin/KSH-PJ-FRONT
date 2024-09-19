import React, { useState } from 'react';
const DropReportResident = () => {
    const [type, setType] = useState("");

    return (
        <div className="mb-4">
            <label className="block text-xl " htmlFor="type">
                Residents
            </label>
            <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className=" p-2 border border-stone-600 rounded-md outline-none mt-1 h-11"
            >
                <option value="">sreyphea</option>
                <option value="admin">Mararika</option>
                <option value="group">KimIn</option>
                <option value="partner">Lin</option>
            </select>
        </div>
    );
};
export default DropReportResident;