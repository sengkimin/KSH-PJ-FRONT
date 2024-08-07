import React from "react";
function Btn({ text, kind, onClick }) {
    let appliedClassName = "px-8 py-2 text-white bg-slate-400 my-3 rounded";
    if (kind === 'normal') {
        appliedClassName = "px-8 py-2 text-white bg-slate-400 my-3 rounded";
    } else if (kind === 'secondary') {
        appliedClassName = "px-8 py-2 text-white bg-sky-500 my-3 rounded";
    } else if (kind === 'delete') {
        appliedClassName = "px-8 py-2 text-white bg-red-600 my-3 rounded"
    }
    return (
        <div >
            <button className={appliedClassName} onClick={onClick}>{text}</button>
        </div>
    )
}
export default Btn;

