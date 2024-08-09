import React from "react";
function Button({text,kind,onClick}){
      return (
        <button
          className={`px-8 py-3 text-white bg-slate-400 my-3 rounded-lg hover:bg-gray-600 ${kind}`}
          onClick={onClick}>
          {text}
        </button>
      );
    }
export default Button;