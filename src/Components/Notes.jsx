import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


function Notes(props) {
  function handleClick(){
    props.onDelete(props.id);
  }
  
  return (

    
    
    
      <div key={props.key} className="bg-amber-500 w-fit p-2 rounded-md min-w-80 mt-8 ">
        <div className="bg-amber-50 p-4 rounded-md relative min-h-36">
          <h1 className='text-slate-800 font-bold mb-2 uppercase '>{props.title}</h1>
          <p className='text-slate-600 pb-2'>{props.description}</p>
          <button onClick={handleClick} className='w-fit mx-56  rounded-full p-3 -bottom-6  text-amber-500 absolute bg-amber-50 shadow-lg border-x border-y border-amber-500'>

      <FaTrashAlt />
          </button>
        </div>
      </div>
    
    
  
  )
}

export default Notes
