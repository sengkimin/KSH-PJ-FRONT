import React from "react";
function MyBtn({ text, type, onClick }){
    return(
        <div>
            <button className={`px-8 py-2 text-white bg-slate-400 ${type}`} onClick={onClick}>{text}</button>
        </div>
    )
}
export default MyBtn;