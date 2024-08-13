import React from "react";
function Btn({ text, type, onClick }) {
 
    return (
        <div >
            <button className={`px-8 py-2 text-white bg-slate-400 my-3 rounded ${type}`} onClick={onClick}>{text}</button>
        </div>
    )
}
export default Btn;

