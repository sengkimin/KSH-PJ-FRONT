import React from "react";

function DeleteBtn({ onClick }){
    return(
       
        <div >
            <button className=" px-8 py-2 text-white bg-red-600 my-3 rounded" onClick={onClick}>Delete</button>
        </div>
    
    )
}
export default DeleteBtn;