import React, { useState } from "react";


function NoteInput(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
      
    });
    
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      description: "",
    })
    e.preventDefault()
    
  }

  return (
    <div className="bg-amber-500 sm:w-full md:max-w-96 p-3 pb-8 rounded-md  relative ">
      <form className="bg-amber-20 p-4 rounded-md flex flex-col ">
        <input
          className="text-slate-800 font-bold p-2 mb-2 uppercase shadow-sm  rounded-lg"
          name="title"
          placeholder="Title"
          type="text"
          value={note.title}
          onChange={handleChange}
        ></input>
        <textarea
          className="text-slate-600 p-2 shadow-sm rounded-lg"
          name="description"
          placeholder="Take a Note..."
          type="text"
          rows='3'
          value={note.description}
          onChange={handleChange}
        ></textarea>
        <button onClick={submitNote}  className='w-fit rounded-full p-3 -bottom-4 flex self-end text-amber-500 absolute bg-amber-50 shadow-lg border-x border-y border-amber-500'>Add</button>
        
      </form>
    </div>
  );
}

export default NoteInput;
